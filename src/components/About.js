import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from './apiConfig'// Import the backend URL

const About = () => {
  let navigate = useNavigate();
  const [UserData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/about`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application.json",
          Authorization: `Bearer ${localStorage.getItem('jwtoken')}` // Include the token in the Authorization header
        },
        credentials: "include"
      });

      const data = await res.json();

      setUserData(data);
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  // Changes below: Added conditional checks and assigned uppercase values
  const uppercaseName = UserData && UserData.name ? UserData.name.toUpperCase() : ''; // Check if UserData.name exists
  const uppercaseWork = UserData && UserData.work ? UserData.work.toUpperCase() : ''; // Check if UserData.work exists

  return (
    <>
      <div className="home-container">
        <form method="GET">
          {/* Changes below: Render the uppercase values */}
          <h1 className="home-heading ">{uppercaseName} THE {uppercaseWork}</h1>
          {/* <p className="home-paragraph">
            We are the MERN Developer
          </p> */}
        </form>
      </div>
    </>
  );
};

export default About;
