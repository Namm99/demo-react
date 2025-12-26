import { useState } from 'react';
import './Login.scss';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPasswork] = useState("");

    const handleLogin = () => {
        alert("Login")
    }

    return (
        <div className='login-container'>
            <div className='header'>
                Don't have an account yet?
            </div>
            <div className='title col-4 mx-auto'>
                Namm99
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Passwork</label>
                    <input
                        type={'password'}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPasswork(event.target.value)}

                    />
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div>
                    <button className='btn-submit' onClick={() => handleLogin()}>Login in to Namm99</button>
                </div>
            </div>
        </div>
    )
}

export default Login;