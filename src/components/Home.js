import React from "react";
import {useNavigate} from "react-router-dom";


const Home = () => {
  let navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Honey Tutoring</h1>
      <p>This is the home page.</p>
      <button onClick={() => navigate("/Login")}>Login</button>
      <button onClick={() => navigate("/Login")}>SignUp</button>


    </div>
  );
};

export default Home;
