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
                    <label htmlFor="name">UserName</label>
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
                    <label htmlFor="email">User Email</label>
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
// import Joi from "joi";
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const [RegisterForm, setRegisterForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     rePassword: "",
//     phone: "",
//   });
//   const [isLoading, setisloding] = useState(false);
//   const navigator = useNavigate();
//   const [errorList, setErrorlist] = useState([]);
//   const [registerError, setRegisterError] = useState("");
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
//   function GetUserRegisterForm(e) {
//     const regData = { ...RegisterForm };
//     regData[e.target.name] = e.target.value;
//     setRegisterForm(regData);
//   }

//   async function PostRegisterData() {
//     setisloding(true);
//     const res = await fetch(
//       "https://ecommerce.routemisr.com/api/v1/auth/signup",
//       {
//         method: "POST",
//         body: JSON.stringify(RegisterForm),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await res.json();
//     console.log("api", data);
//     if (data.message == "success") {
//       navigator("/login");
//       setisloding(false);
//     } else {
//       data.message == "fail"
//         ? setRegisterError(data.errors.msg)
//         : setRegisterError(data.message);
//       setisloding(false);
//     }
//   }

//   function validateRegistertionData() {
//     const scheme = Joi.object({
//       name: Joi.string().min(3).max(25).required(),
//       email: Joi.string().email({
//         minDomainSegments: 2,
//         tlds: { allow: ["com", "net"] },
//       }),
//       password: Joi.string().pattern(/^\w{6,}$/),
//       rePassword: Joi.string().pattern(/^\w{6,}$/),
//       phone: Joi.string().pattern(/^01[0125][0-9]{8}$/),
//     });
//     return scheme.validate(RegisterForm, { abortEarly: false }).error?.details;
//   }

//   function handleSubmition(e) {
//     e.preventDefault();
//     setRegisterError("");
//     setErrorlist([]);
//     const validationResult = validateRegistertionData();
//     if (!validationResult) {
//       PostRegisterData();
//     } else {
//       setErrorlist(validationResult);
//     }
//   }

//   function IputValidator(inputName) {
//     return errorList.filter((error) => {
//       return error.context.label === inputName;
//     })[0]?.message;
//   }

//   return (
//     <div className="container bg-transparent pt-5 h-100 ">
//       <form
//         onSubmit={handleSubmition}
//         className="d-flex flex-column  gap-2 align-item-center justify-content-center w-50 mx-auto"
//       >
//         <div>
//           <label htmlFor="name">UserName</label>
//           <input
//             className="form-control"
//             type="text"
//             id="name"
//             name="name"
//             onChange={GetUserRegisterForm}
//             ref={inputRef}
//           />
//         </div>

//         {errorList.length > 0 && IputValidator("name") ? (
//           <div className="text-danger">
//             {errorList && IputValidator("name")}
//           </div>
//         ) : (
//           ""
//         )}
//         <div>
//           <label htmlFor="email">Useremail</label>
//           <input
//             className="form-control"
//             type="text"
//             id="email"
//             name="email"
//             onChange={GetUserRegisterForm}
//           />
//         </div>
//         {errorList.length > 0 && IputValidator("email") ? (
//           <div className="text-danger">
//             {errorList && IputValidator("email")}
//           </div>
//         ) : (
//           ""
//         )}
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             className="form-control"
//             type="password"
//             id="password"
//             name="password"
//             onChange={GetUserRegisterForm}
//           />
//         </div>
//         {errorList.length > 0 && IputValidator("password") ? (
//           <div className="text-danger">
//             {errorList && IputValidator("password")}
//           </div>
//         ) : (
//           ""
//         )}
//         <div>
//           <label htmlFor="rePassword">confirm Password</label>
//           <input
//             className="form-control"
//             type="password"
//             id="rePassword"
//             name="rePassword"
//             onChange={GetUserRegisterForm}
//           />
//         </div>
//         {errorList.length > 0 && IputValidator("rePassword") ? (
//           <div className="text-danger">
//             {errorList && IputValidator("rePassword")}
//           </div>
//         ) : (
//           ""
//         )}
//         <div>
//           <label htmlFor="phone">Phone</label>
//           <input
//             className="form-control"
//             type="tel"
//             id="phone"
//             name="phone"
//             onChange={GetUserRegisterForm}
//           />
//         </div>
//         {errorList.length > 0 && IputValidator("phone") ? (
//           <div className="text-danger">
//             {errorList && IputValidator("phone")}
//           </div>
//         ) : (
//           ""
//         )}
//         {registerError && <div className="bg-danger">{registerError}</div>}
//         <button className="btn btn-outline-info">
//           {isLoading ? (
//             <i className="fa-solid fa-video fa-beat"></i>
//           ) : (
//             "Register"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;
