import LoginComponent from '../../components/Login/LoginComponent';
import './Login.css';
function Login() {
    return (
        <div className="login-holder">
            <div className="login-image">
                <img src="/public/images/Rectangle 3.png" alt="game-image" />
                <img src="/public/images/Overlay.png" alt="overlay" />
            </div>
            <div className="login">
                <LoginComponent />
            </div>
        </div>
    );
}

export default Login;
