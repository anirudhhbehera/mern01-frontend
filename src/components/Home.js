import React,{ useEffect,useState } from "react";
import { BACKEND_URL } from './apiConfig'// Import the backend URL




const Home = () => {
  const [userName,setUserName]=useState("");
  const [show,setShow]=useState(false);

 const userHomePage = async() =>{
      try {
        const res = await fetch(`${BACKEND_URL}/getdata`,{
          method:"GET",
          headers:{
            "Content-Type":"application.json",
            Authorization: `Bearer ${localStorage.getItem('jwtoken')}` // Include the token in the Authorization header
          },
        });  

        const data = await res.json();
        
        setUserName(data.name);
        setShow(true);
        console.log(data);

      } catch (err) {
        console.log(err);

      }
 }

  useEffect(()=>{
    userHomePage();
  }, []);

  

  


  return (
    <>
    
    <div className="home-container">
      <h1 className="home-heading">{show?'Happy to see you -':'Welocome to Home Page '}  {userName.toUpperCase()}</h1>
      
      

    </div>
    
      
    </>
  )
}

export default Home
