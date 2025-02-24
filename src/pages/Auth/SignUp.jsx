import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css'
import '../utils/ApiRequest.js'

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    console.log('Signing up with:', name, email, password);
    navigate('/login'); 
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 form-container">
          <h3>Sign Up</h3>
          <form onSubmit={handleSignup}>
          <div className="form-group pt-2">
              <label className='pb-1'>Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group pt-2">
              <label className='pb-1'>Email</label>
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
              <label className='pb-1'>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='btn-form'>
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            </div>
          </form>
          <p className="mt-2">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
