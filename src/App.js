import React,{createContext, useReducer} from 'react'
import './App.css'; 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/logout';
import Error from './components/Error';
import { initialState,reducer } from './reducer/UseReducer';

 //1.context api
 export const UserContext = createContext();

const App = () => {
 
  const [state,dispatch]=useReducer(reducer,initialState);


  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>

      
      
      <Navbar></Navbar>
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<Error />} />

      
    </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App
