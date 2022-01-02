import React from 'react'
import { Link } from 'react-router-dom'

const FooterBottom = () => {
    return (
        <React.Fragment>
            <footer id="footer">

<div className="container footer-bottom">
  <div className="copyright">
  <div id="logo">
				        <Link to="/"><img src="assets/img/logo.png" alt="" title="" /></Link>
				      </div>
  <p>
        &copy; 2021 <span className='sitename'>FindJobs</span>
        </p>
        <p>Terms and condition</p>
  </div>
  <div className="social-links">
          <Link to="#" className="instagram"><i className="fa fa-instagram"></i></Link>
          <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
          <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
        </div>
</div>
</footer>
        </React.Fragment>
    )
}

export default FooterBottom
