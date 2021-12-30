import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <React.Fragment>
            
			<header id="header">
			    <div class="container">
			    	<div class="row align-items-center justify-content-between d-flex">
				      <div id="logo">
				        <Link to="index.html"><img src="img/logo.png" alt="" title="" /></Link>
				      </div>
				      <nav id="nav-menu-container">
				        <ul class="nav-menu">
				          <li class="menu-active"><Link to="index.html">Jobs</Link></li>
				          <li><Link to="about-us.html">Company Review </Link></li>
				          <li><Link to="category.html">Find Salaries</Link></li>
				          <li><Link class="ticker-btn" href="#">Post Job</Link></li>				          				          
				        </ul>
				      </nav>	    		
			    	</div>
			    </div>
			  </header>
        </React.Fragment>
    )
    
};

export default Header;