import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import logoEmmaus from '../assets/logo_emmaus_connect_ver2.png'
import './login.css'


const Login = ({setToken}) => {

    const [form, setForm ] = useState({
        email : "",
        password : "",
    });

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
        .catch((error) => console.error(error));
    
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
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                required
                />
                <button type="submit">Connectez-vous</button>
            </form>
        </div>        
    </div>
  )
}

export default Login
{/* {formError ? (
<p className="login_error">Email ou mot de passe invalide</p>
) : null}
<Link to="#">
<p className="forgotten_password">Mot de passe oublié</p>
</Link> */}