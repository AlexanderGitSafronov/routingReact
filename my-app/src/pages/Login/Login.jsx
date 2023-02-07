import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    

    return (
        <div className='container'>
            <div className='login'>
            Login
            </div>
            <button onClick={()=>navigate(-1)} type='button'>Вернуться назад</button>
        </div>
    );
}

export default Login;
