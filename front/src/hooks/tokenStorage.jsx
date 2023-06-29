import { useState } from 'react';

export default function tokenStorage(){

    const getToken = () => {
        const tokenString = localStorage.getItem('emmausToken');
        const userToken = JSON.parse(tokenString);
        return userToken
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('emmausToken', JSON.stringify(userToken));
        setToken(userToken);
    };

    const removeToken = () =>{
        localStorage.removeItem('emmausToken');
        setToken(getToken());
    }

    return {
        removeToken,
        setToken : saveToken,
        token,
    }
}