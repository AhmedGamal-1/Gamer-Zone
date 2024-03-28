import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
function Register() {
    //State Mangment
    const [isLoading, setLoading] = useState(false);
    const [errorList, setErrorList] = useState([]);
    const [RegisterForm, setRegisterForm] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
    });
    const [registerError, setRegisterError] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    //programmatic Routing
    const navigator = useNavigate();
    //Functions
    const GetUserRegisterForm = function (e) {
        const regData = { ...RegisterForm };
        regData[e.target.name] = e.target.value;
        setRegisterForm(regData);
    };

    const PostRegisterData = async function () {
        try {
            const response = await fetch(
                'https://ecommerce.routemisr.com/api/v1/auth/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(RegisterForm),
                }
            );

            const data = await response.json();
            if (data.message == 'success') {
                navigator('/login');
                setLoading(false);
            } else {
                data.message == 'fail'
                    ? setRegisterError(data.errors.msg)
                    : setRegisterError(data.message);
                setLoading(false);
            }
        } catch (error) {
            setRegisterError('Registration failed due to an error');
            setLoading(false);
        }
    };
    const validateRegisterForm = function () {
        const scheme = Joi.object({
            name: Joi.string().min(3).max(25).required(),
            email: Joi.string().email({
                tlds: { allow: ['com', 'net'] },
            }),
            password: Joi.string().pattern(/^\w{6,}$/),
            rePassword: Joi.string().pattern(/^\w{6,}$/),
            phone: Joi.string().pattern(/^01[0125][0-9]{8}$/),
        });
        return scheme.validate(RegisterForm, { abortEarly: false });
    };
    const handleSubmition = function (e) {
        e.preventDefault();
        setRegisterError('');
        setLoading(true);
        let validation = validateRegisterForm();
        if (validation.error) {
            setLoading(false);
            setErrorList(validation.error.details);
        } else {
            PostRegisterData();
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
                    <label htmlFor="name">User Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={GetUserRegisterForm}
                        ref={inputRef}
                    />
                </div>

                {errorList.length > 0 && IputValidator('name') ? (
                    <div>{errorList && IputValidator('name')}</div>
                ) : (
                    ''
                )}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={GetUserRegisterForm}
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
                        onChange={GetUserRegisterForm}
                    />
                </div>
                {errorList.length > 0 && IputValidator('password') ? (
                    <div>invalid Password</div>
                ) : (
                    ''
                )}
                <div>
                    <label htmlFor="rePassword">confirm Password</label>
                    <input
                        type="password"
                        id="rePassword"
                        name="rePassword"
                        onChange={GetUserRegisterForm}
                    />
                </div>
                {errorList.length > 0 && IputValidator('rePassword') ? (
                    <div>invalid Password</div>
                ) : (
                    ''
                )}
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={GetUserRegisterForm}
                    />
                </div>
                {errorList.length > 0 && IputValidator('phone') ? (
                    <div>{errorList && IputValidator('phone')}</div>
                ) : (
                    ''
                )}
                {registerError && <div>{registerError}</div>}
                <button>
                    {isLoading ? (
                        <i className="fa-solid fa-gamepad fa-beat"></i>
                    ) : (
                        'Register'
                    )}
                </button>
            </form>
        </>
    );
}

export default Register;
