import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
      <Link to="index.html"><img src="assets/img/logo.png" alt="" title="" /></Link>
        <p>
        &copy; 2021 <span className='sitename'>FindJobs</span>
        </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Calendar</Link></li>
          <li><Link to="#">Terms and condition</Link></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Calendar</Link></li>
          <li><Link to="#">Terms and condition</Link></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links text-center">
        <h4>Social Media</h4>
        <div className="social-links mt-3">
          <Link to="#" className="instagram"><i className="fa fa-instagram"></i></Link>
          <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
          <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
        </div>
      </div>

    </div>
  </div>
</div>

</footer>
        </React.Fragment>
    )
};

export default Footer;
