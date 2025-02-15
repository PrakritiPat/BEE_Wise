import logo from './logo.svg';
import Login from './login'; 
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}
export default App;
