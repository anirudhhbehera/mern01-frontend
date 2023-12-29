import React, { useState } from "react";
// import useHistory from "react-dom";
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from './apiConfig'// Import the backend URL


const Signup = () => {
  // const history=useHistory();    
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // conection between frontend and backend;  
  const PostData = async (e) =>{
    e.preventDefault();
    const {name,email,phone,work,password,cpassword}= user;
    const res = await fetch(`${BACKEND_URL}/register`,{ 
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });

    const data =await res.json();

    if(res.status=== 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration successful");
      console.log("Registration successful");

      // history.push("/login");
      navigate('/login');
    }

  }




  return (
    <>
      <section className="signup">
        <div className="container mt-2 mb-3">
          <div className="card">
            <form method="POST">
            <div className="form">
              <div className="title">Sign Up</div>
              <div className="subtitle">Let's create your account !</div>
              <div className="input-container ic1">
                <input
                  id="name"
                  className="input"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder=" "
                />
                <div className="cut"></div>
                <label for="name" className="placeholder">
                  Full Name
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  id="email"
                  className="input"
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder=" "
                />
                <div className="cut cut-short"></div>
                <label for="email" className="placeholder">
                  Email
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  id="phone"
                  className="input"
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder=" "
                />
                <div className="cut"></div>
                <label for="phone" className="placeholder">
                  Phone No.
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  id="work"
                  className="input"
                  type="text"
                  name="work"
                  value={user.work}
                  onChange={handleInputs}
                  placeholder=" "
                />
                <div className="cut"></div>
                <label for="work" className="placeholder">
                  Profession
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  id="password"
                  className="input"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder=" "
                />
                <div className="cut"></div>
                <label for="password" className="placeholder">
                  Password
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  id="cpassword"
                  className="input"
                  type="password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder=" "
                />
                <div className="cut"></div>
                <label for="cpasseord" className="placeholder">
                  Confirm Password
                </label>
              </div>
              {/* <button type="text" className="submit">submit</button> */}
              <input
                type="submit"
                name="signup"
                className="submit"
                value="Submit"
                onClick={PostData}
              ></input>
            </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
