import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPasswork] = useState("");
    const [username, setUsername] = useState("");

    const [isShowPassword, setIsShowPassword] = useState(false)

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = async () => {
        //validate
        const isValidateEmail = validateEmail(email)
        if (!isValidateEmail) {
            toast.error("Invalid email");
            return;
        }

        if (!password) {
            toast.error("Invalid password");
            return;
        }

        //submit apis
        let data = await postRegister(email, password, username)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            //go login
            navigate('/login')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM)
        }
    }


    return (
        <div className='register-container'>
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={() => navigate('/login')}>Log in</button>
            </div>
            <div className='title col-4 mx-auto'>
                Namm99
            </div>
            <div className='welcome col-4 mx-auto'>
                Start your journey?
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
                <div className='form-group pass-group'>
                    <label>Passwork</label>
                    <input
                        type={isShowPassword ? 'text' : 'password'}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPasswork(event.target.value)}
                    />
                    {isShowPassword ?
                        <span className='icons-eye' onClick={() => setIsShowPassword(false)}><VscEye /></span>
                        :
                        <span className='icons-eye' onClick={() => setIsShowPassword(true)}><VscEyeClosed /></span>
                    }
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div>
                    <button className='btn-submit' onClick={() => handleRegister()}>Create account</button>
                </div>
                <div className='back'>
                    <span onClick={() => { navigate('/') }}> &#60;&#60; Go to HomePage</span>
                </div>
            </div>
        </div>
    )
}

export default Register;