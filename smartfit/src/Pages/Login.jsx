import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=()=>{
    const data=JSON.parse(localStorage.getItem("user"));

    if(email===data.email && password===data.password){
      alert("Login Success");
    }else{
      alert("Invalid Credentials");
    }
  }

  return (
<div className="loginPage">

  <div className="circleWrapper">

    <div className="radialRing"></div>

    <div className="loginCircle">

      <h2 className="loginTitle">LOGIN</h2>

      <input className="loginInput" placeholder="Email"/>
      <input className="loginInput" placeholder="Password" type="password"/>

      <button className="loginBtn">Login</button>

      <p className="linkText" onClick={()=>navigate("/signup")}>
        Create New Account
      </p>

      <p className="linkText" onClick={()=>navigate("/forgot")}>
        Forgot Password?
      </p>

    </div>

  </div>

</div>
  );
}

export default Login;