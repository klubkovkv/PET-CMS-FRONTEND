import { ReactComponent as LogoInline } from '../../assets/svg/logoInline.svg';
import LoginForm from '../../components/LoginForm';

const Login = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__content">
                <div className="loginPage">
                    <div className="loginPage__petcms">
                        <LogoInline />
                    </div>
                    <div className="loginPage__loginForm">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
