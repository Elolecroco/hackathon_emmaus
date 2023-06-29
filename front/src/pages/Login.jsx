import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import logoEmmaus from '../assets/logo_emmaus_connect_ver2.png'
import './login.css'


const Login = ({setToken}) => {

    //form email/password
    const [form, setForm ] = useState({
        email : "",
        password : "",
    });

    //errors storage
    const [errors, setErrors] = useState()

    //on changing input values
    const formChanges = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };


    //on submiting the form
    const formSending = (e) => {
    e.preventDefault();

    axios
        .post("http://localhost:5080/api/users/login", form)
        .then((res) => setToken(res.data))
        .catch((error) => setErrors(error));
    
    document.getElementById("password").value = "";
    };



  return (
    <div className='login_page'>
        <div className="left_container">
            <img src={logoEmmaus} alt="" />
        </div>
        <div className="right_container">
            <h1>Accédez à votre espace</h1>
            <form
                className="login_form"
                action=""
                onSubmit={formSending}
                onChange={formChanges}
            >
                <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
                />
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                />
                <button type="submit">Connectez-vous</button>
            </form>
            {errors ? <p className='error_message'>email ou mot de passe invalide(s)</p> : null}
        </div>        
    </div>
  )
}

export default Login