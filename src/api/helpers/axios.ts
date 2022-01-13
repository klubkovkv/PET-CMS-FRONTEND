import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(config => {
    // @ts-ignore
    config.headers.authorization = `Bearer ${localStorage.getItem('auth')}`;
    return config;
});

axiosInstance.interceptors.response.use(
    config => {
        return config;
    },
    async error => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get(`/api/auth/refresh`, {
                    withCredentials: true,
                });
                localStorage.setItem('type', response.data.tokens.type);
                localStorage.setItem('auth', response.data.tokens.accessToken);
                console.log('originalRequest', originalRequest);
                return axiosInstance.request(originalRequest);
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН');
            }
        }
        throw error;
    }
);

export { axiosInstance };
