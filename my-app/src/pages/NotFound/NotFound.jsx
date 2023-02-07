import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const [count,setCount] = useState(5)
    const navigate = useNavigate()

    setTimeout(() => {
        if(count !== 0){
            setCount(prev => prev - 1)
        } else {
            navigate('/')
        }
        
    }, 1000);


    return (
        <div>
            <h1>Вас перекинет на главную страницу через {count}</h1>
            NotFound
        </div>
    );
}

export default NotFound;
