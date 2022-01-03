import React, { useState } from 'react';
import jobService from '../services/job.service';

const ApplicationForm = () => {
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
    // props.history.push('/admin');
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
            <form onSubmit={handleSubmit}>
              <div className="form-group first">
                <label htmlFor='firstname'>First Name</label>
                <input type="text" className="form-control" id="firstname" onChange={e => setUserName(e.target.value)} required/>
              </div>
              <div className="form-group first">
                <label htmlFor='lastname'>Last Name</label>
                <input type="text" className="form-control" id="lastname" onChange={e => setUserName(e.target.value)} required/>
              </div>
              <div className="form-group first">
                <label htmlFor='email'>Email Address</label>
                <input type="email" className="form-control" id="email" onChange={e => setUserName(e.target.value)} required/>
              </div>
              <div className="form-group last mb-3">
                <label htmlFor='location'>Location</label>
                <input type="text" className="form-control" id="location" onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="form-group first">
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" onChange={e => setUserName(e.target.value)}/>
              </div>
              {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
              <input type="submit" value={loading ? 'Loading...' : 'Submit Application'} disabled={loading} className="btn btn-block genric-btn primary mt-4"/>

            </form>
        </React.Fragment>
    )
}

export default ApplicationForm
