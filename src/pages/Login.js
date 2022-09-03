import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/Login.styles.css"
import bgImage from './styles/background-img.mp4'
import { Link } from 'react-router-dom';


const Login = () => {

  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post("https://ecommerce-exercise-backend.herokuapp.com/login/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.access);
                navigate("/shop");
      })
      .catch(() => setLoginError("Credenciales incorrectas"));
  };
 
  
  
  return (
   
    <div className="formulario">
    <video autoPlay loop muted> 
      <source src={bgImage} type="video/mp4"/>
    </video>
      
      <form className="form" action="" onSubmit={handleSubmit(submit)}>
                                                 
      <h1> Sign In </h1>
         <label> Usuario: admin@admin.com</label>
         <label> Password: root</label>                                                 
        <div className="input-container">
          <label className="label" htmlFor="email"><i className="fas fa-envelope"></i> </label>
          <input className="inputLogin" {...register("email")} type="email" required placeholder="admin@admin.com"/>
        </div>
        <div className="input-container">
          <label className="label" htmlFor="password"> <i className="fas fa-key"></i>   </label>
          <input className="inputLogin" type="password" {...register("password")} required placeholder="admin"/>
        </div>
        {loginError}
        <button className="buttonLogin">Login</button>
        //<button className='inputSignUp'><Link className='link' to="/RegisterUser">Sign up</Link></button>
      </form>

      
    </div>
  );
  
};

export default Login;
