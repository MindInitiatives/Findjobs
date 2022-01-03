import React, { useState } from 'react';
import jobService from '../services/job.service';
import { setUserSession } from '../utils/common';

const Login = (props) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);


  const handleSubmit = e => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const credentials = {
      email : username,
      password :password
    };
    jobService.login(credentials)
  .then(response => {
    setLoading(false);
    console.log(response)
    setUserSession(response.data.token);
    props.history.push('/admin');
  })
  .catch(e => {
    setLoading(false);
    if (e.response.status === 401) setError(error.response.data.message);
    else setError("Something went wrong. Please try again later.")
    console.log(e);
  });
    // setToken(token);
  }
    return (
        <React.Fragment>
            <div className="d-lg-flex half">
    <div className="bg order-1 order-md-1">
        <div className="bg-content">
            <h1>Find the best <br/>
candidates for your <br/>
organisation.</h1>
            <img className='login_bg' src='assets/img/login-bg.png' alt='login-bg' />
        </div>
    </div>
      {/* <div className='login_blb'></div> */}
    <div className="contents order-2 order-md-2">
      <div className='blobs'>
        <div className='blob1 ellipse'></div>	
				<div className='blob2 ellipse'></div>	
				<div className='blob3 ellipse'></div>
        </div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <h2 className='mb-4'>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group first">
                <label htmlFor='username'>Email</label>
                <input type="text" className="form-control" id="username" onChange={e => setUserName(e.target.value)} required/>
              </div>
              <div className="form-group last mb-3">
                <label htmlFor='password'>Password</label>
                <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)} required/>
              </div>
              {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
              <input type="submit" value={loading ? 'Loading...' : 'Login'} disabled={loading} className="btn genric-btn primary mt-4"/>

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
        </React.Fragment>
    )
    
};


export default Login;