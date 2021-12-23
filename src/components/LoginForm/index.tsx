import { FC, useEffect } from 'react';
import { CustomInput, Btn } from '../ui-kit';
import { useStore } from '../../store';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

export interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = observer(props => {
    const { authStore } = useStore();
    const {
        email,
        updateEmail,
        password,
        updatePassword,
        login,
        error,
        clearError,
    } = authStore;
    const navigate = useNavigate();
    const onAuth = () => navigate('/pages');

    return (
        <div className="loginForm">
            <div className="loginForm__title">Авторизация</div>
            <div className="loginForm__textBefore">
                Введите логин и пароль для входа в систему
            </div>
            <form name="loginForm">
                <CustomInput
                    className="loginForm__input"
                    label="E-mail"
                    name="login"
                    type="email"
                    value={email}
                    onChange={updateEmail}
                    error={error}
                    onClearError={clearError}
                />
                <CustomInput
                    className="loginForm__input"
                    label="Пароль"
                    name="password"
                    type="password"
                    value={password}
                    onChange={updatePassword}
                />
                <Btn
                    className="loginForm__submit btn--green"
                    onClick={() => login(onAuth)}>
                    {'Войти'}
                </Btn>
            </form>
        </div>
    );
});

export default LoginForm;
