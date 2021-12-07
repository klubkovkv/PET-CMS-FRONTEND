import { FC } from 'react';
import { CustomInput, Btn } from '../ui-kit';

export interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = props => {
    return (
        <form className="loginForm" name="loginForm">
            <div className="loginForm__title">Авторизация</div>
            <div className="loginForm__textBefore">
                Введите логин и пароль для входа в систему
            </div>
            <CustomInput
                className="loginForm__input"
                label="E-mail"
                name="login"
                type="email"
                value={''}
                onChange={() => 'a'}
            />
            <CustomInput
                className="loginForm__input"
                label="Пароль"
                name="password"
                type="password"
                value={''}
                onChange={() => 'a'}
            />
            <Btn className="loginForm__submit btn--green">{'Войти'}</Btn>
        </form>
    );
};

export default LoginForm;
