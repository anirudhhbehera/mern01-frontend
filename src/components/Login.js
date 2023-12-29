import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";
import { BACKEND_URL } from './apiConfig'// Import the backend URL


const Login = () => {

  const {state,dispatch} = useContext(UserContext);

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser=async(e)=>{
    e.preventDefault();
    const res= await fetch(`${BACKEND_URL}/signin`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });
    const data =await res.json();

    if(res.status=== 400 || !data){
      window.alert("Invalid Login");
      console.log("Invalid Login");
    }else{
      localStorage.setItem('jwtoken', data.token);//Edit:stored locally
      dispatch({type:"USER",payload:true})
      window.alert("Login successful");
      console.log("Login successful");  
      navigate('/');
    }
  }




  return (
    <>
      <section className="signin">
        <div className="container mt-2 mb-3">
          <div className="card">
            <div className="form">
              <form method="post">
              <div className="title">Login</div>
              <div className="subtitle">Let's Start !!</div>
              {/* <div className="input-container ic1">
        <input id="name" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="name" className="placeholder">Full Name</label>
      </div> */}
              <div className="input-container ic2">
                <input
                  id="email"
                  className="input"
                  type="text"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder=" "
                />
                <div className="cut cut-short"></div>
                <label for="email" className="placeholder">
                  Email
                </label>
              </div>
              {/* <div className="input-container ic2">
        <input id="phone" className="input" type="number" placeholder=" " />
        <div className="cut"></div>
        <label for="phone" className="placeholder">Phone No.</label>
      </div> */}
              {/* <div className="input-container ic2">
        <input id="work" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="work" className="placeholder">Profession</label>
      </div> */}
              <div className="input-container ic2">
                <input
                  id="password"
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder=" "
                />
                <div className="cut"></div>
                <label for="password" className="placeholder">
                  Password
                </label>
              </div>
              {/* <div className="input-container ic2">
        <input id="cpassword" className="input" type="password" placeholder=" " />
        <div className="cut"></div>
        <label for="cpasseord" className="placeholder">Confirm Password</label>
      </div> */}
              {/* <button type="text" className="submit">submit</button> */}
              <input
                type="submit"
                name="signin"
                className="submit"
                value="Login"
                onClick={loginUser}
              ></input>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
