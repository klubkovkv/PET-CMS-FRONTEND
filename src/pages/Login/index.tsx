import { ReactComponent as LogoInline } from '../../assets/svg/logoInline.svg';
import LoginForm from '../../components/LoginForm';

const Login = () => {
    return (
        <div className="loginPage">
            <div className="loginPage__petcms">
                <LogoInline />
            </div>
            <div className="loginPage__loginForm">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
