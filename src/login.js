import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // // Basic validation
    // if (!email || !password) {
    //   setErrorMessage('Both email and password are required');
    //   return;
    // }

    // Perform login logic (e.g., make an API request)
    console.log('Logging in with', { email, password });
    // Reset fields and error message after submit
    setEmail('');
    setPassword('');
   // setErrorMessage('');

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {/* {errorMessage && <div className="error-message">{errorMessage}</div>} */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
