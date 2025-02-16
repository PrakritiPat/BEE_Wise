import React, { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', { email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div className= "background-container">
       <div style={{ textAlign: "center"}}>
       <h3> BEE WISE Tutoring</h3>
      </div>  
      <div className="login-container">
        <div className="auth-left">
        <h5>Log In</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label>USERNAME</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your username"
            required
          />
          </div>
        <div className="form-group">
          <label>PASSWORD</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">Log in!</button>
      </form>
    </div>
    <div className="auth-right">
      <h2>Don't have an account? </h2>
      <h7> ‎ ‎  </h7>
      <button onClick={() => navigate("/Selection")} className="signup-btn">Sign Up</button>
    </div>
    </div>
    </div>
  );
}

export default Login;
