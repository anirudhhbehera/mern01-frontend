import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { BACKEND_URL } from './apiConfig'// Import the backend URL



function Logout() {
  const {state,dispatch} = useContext(UserContext);
  let navigate = useNavigate();

    useEffect(()=>{
        fetch(`${BACKEND_URL}/logout`,{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
       dispatch({type:"USER",payload:false})
          localStorage.removeItem('jwtoken');
            navigate('/login');
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
              }
        }).catch((err)=>{
            console.log(err);
        })
    });
  return (
    <>
      <h1>logout ka page</h1>
    </>
  )
}

export default Logout
