import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
function Login() {
    //State Mangment
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [errorList, setErrorList] = useState([]);
    const [LoginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const [LoginError, setLoginError] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    //programmatic Routing
    const navigator = useNavigate();
    //Functions
    const GetUserLoginForm = function (e) {
        const regData = { ...LoginForm };
        regData[e.target.name] = e.target.value;
        setLoginForm(regData);
    };

    const PostLoginData = async function () {
        try {
            const response = await fetch(
                'https://ecommerce.routemisr.com/api/v1/auth/signin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(LoginForm),
                }
            );

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('userToken', data.token);
                navigator('/');
            } else {
                setError(data.message || 'Registration failed');
                setLoading(false);
            }
        } catch (error) {
            setError('Registration failed due to an error');
            setLoading(false);
        }
    };
    const validateLoginForm = function () {
        const scheme = Joi.object({
            email: Joi.string().email({
                tlds: { allow: ['com', 'net'] },
            }),
            password: Joi.string().pattern(/^\w{6,}$/),
        });
        return scheme.validate(LoginForm, { abortEarly: false });
    };
    const handleSubmition = function (e) {
        e.preventDefault();
        setLoginError('');
        setLoading(true);
        let validation = validateLoginForm();
        if (validation.error) {
            setLoading(false);
            setErrorList(validation.error.details);
        } else {
            PostLoginData();
        }
    };
    const IputValidator = function (inputName) {
        return errorList.filter((error) => {
            return error.context.label === inputName;
        })[0]?.message;
    };
    return (
        <>
            <form onSubmit={handleSubmition}>
                <div>
                    <label htmlFor="email">User Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={GetUserLoginForm}
                        ref={inputRef}
                    />
                </div>
                {errorList.length > 0 && IputValidator('email') ? (
                    <div>{errorList && IputValidator('email')}</div>
                ) : (
                    ''
                )}
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={GetUserLoginForm}
                        ref={inputRef}
                    />
                </div>
                {errorList.length > 0 && IputValidator('password') ? (
                    <div>invalid Password</div>
                ) : (
                    ''
                )}
                <button>
                    {isLoading ? (
                        <i className="fa-solid fa-gamepad fa-beat"></i>
                    ) : (
                        'Login'
                    )}
                </button>
            </form>
            <div>{error}</div>
        </>
    );
}

export default Login;
