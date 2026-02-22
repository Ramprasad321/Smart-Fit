import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate=useNavigate();

  const [form,setForm]=useState({
    name:"",
    email:"",
    password:"",
    confirm:""
  });

  const handleSubmit=()=>{
    localStorage.setItem("user",JSON.stringify(form));
    navigate("/login");
  }

  return (
    <div>
      <h2>Signup</h2>

      <input placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}/>

      <input placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>

      <input placeholder="New Password"
        type="password"
        onChange={(e)=>setForm({...form,password:e.target.value})}/>

      <input placeholder="Confirm Password"
        type="password"
        onChange={(e)=>setForm({...form,confirm:e.target.value})}/>

      <br/>
      <input type="checkbox"/> Accept Terms & Conditions

      <br/><br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Signup;