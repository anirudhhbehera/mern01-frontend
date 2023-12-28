import React,{ useEffect,useState } from "react";



const Home = () => {
  const [userName,setUserName]=useState("");
  const [show,setShow]=useState(false);

 const userHomePage = async() =>{
      try {
        const res = await fetch('/getdata',{
          method:"GET",
          headers:{
            "Content-Type":"application.json"
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
