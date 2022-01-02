import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <React.Fragment>
            
			<header id="header">
			    <div className="container">
			    	<div className="row align-items-center justify-content-between d-flex">
				      <div id="logo">
				        <Link to="index.html"><img src="assets/img/logo.png" alt="" title="" /></Link>
				      </div>
				      <nav id="nav-menu-container">
				        <ul className="nav-menu">
				          <li className="menu-active"><Link to="/admin">Jobs</Link></li>
				          <li><Link to="about-us.html">Company Review </Link></li>
				          <li><Link to="category.html">Find Salaries</Link></li>
				          <li><Link className="ticker-btn" to="/">Post Job</Link></li>				          				          
				        </ul>
				      </nav>	    		
			    	</div>
			    </div>
			  </header>
        </React.Fragment>
    )
    
};

export default Header;