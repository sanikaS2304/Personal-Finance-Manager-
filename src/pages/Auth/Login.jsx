import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css'
import '../utils/ApiRequest.js'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Logging in with:', email, password);
    navigate('/home'); 
  };


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 form-container">
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group pt-2">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group pt-2">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='btn-form pt-2 mx-2'>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
            </div>
          </form>
          <p className="mt-2">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
