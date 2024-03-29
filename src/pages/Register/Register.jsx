import GoogleLoginBtn from '../../components/GoogleLoginBtn/GoogleLoginBtn';
import RegisterComponent from '../../components/Register/RegisterConponent';
import './Register.css';
export default function Register() {
    return (
        <div className="register-holder">
            <div className="register-image">
                <img src="/public/images/Rectangle 3.png" alt="game-image" />
                <img src="/public/images/Overlay.png" alt="overlay" />
            </div>
            <div className="register">
                <h2>Welcome</h2>
                <RegisterComponent />
                <GoogleLoginBtn />
            </div>
        </div>
    );
}
