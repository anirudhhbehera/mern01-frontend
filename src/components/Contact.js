import React,{ useEffect,useState } from "react";
import { BACKEND_URL } from './apiConfig'// Import the backend URL


const Contact = () => {

  
  const [userData,setUserData]=useState({name:"",email:"",message:""});


 const callContactPage = async() =>{
      try {
        const res = await fetch(`${BACKEND_URL}/getdata`,{
          method:"GET",
          headers:{
            "Content-Type":"application.json"
          },
        });  

        const data = await res.json();
        
        setUserData({...userData,name:data.name,email:data.email,message:data.message});
        console.log(data);

        if(!res.status===200){
          const error =new Error(res.error);
          throw error; 
        }

      } catch (err) {
        console.log(err);

      }
 }

  useEffect(()=>{
    callContactPage();
  }, []);

  //storing data in state
  const handleInputs=async(e)=>{
    const name =  e.target.name;
    const value = e.target.value;

    setUserData({...userData,[name]:value});
  }
  //send data to backend
  const ContactForm=async(e)=>{
    e.preventDefault();

    const {name,email,message}=userData;

    const res= await fetch(`${BACKEND_URL}/contact`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,message
      })
    });

    const data =await res.json();
    if (!data) {
      console.log("message not send");
    }else{
      alert("message sent");
      setUserData({...userData,message:""});
    }

  }


  return (
    <>
      <div className="contact-us-container">
      <h1 className="contact-us-heading">Contact Us</h1>
      <form className="contact-us-form" method="POST">
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
          name="name"
          value={userData.name}
          onChange={handleInputs}
          // onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email-input">Email:</label>
        <input
          type="email"
          id="email-input"
          name="email"
          value={userData.email}
          onChange={handleInputs}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message-textarea">Message:</label>
        <textarea
          id="message-textarea"
          name="message"
          placeholder="write your message..."
          value={userData.message}
          onChange={handleInputs}
          // onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <input type="submit" value="Submit" className="submit-button" onClick={ContactForm}/>
      </form>
    </div>
    </>
  );
};

export default Contact;
