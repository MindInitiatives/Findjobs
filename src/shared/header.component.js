import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import jobService from '../services/job.service';
import { getToken, removeUserSession } from '../utils/common';
import { useHistory } from "react-router-dom";

const Header = () => {
	let history = useHistory();
	var isLoggedIn = false;

	if(getToken()) {
	isLoggedIn = true
	}

	// handle click event of logout button

	  const handleLogout = e => {
		e.preventDefault();
		jobService.logout()
	  .then(response => {
		console.log(response)
		removeUserSession();
		history.push('/login');
	  })
	  .catch(e => {
		console.log(e);
	  });
		// setToken(token);
	  }

    return (
        <React.Fragment>
            
			<header id="header">
			    <div className="container">
			    	<div className="row align-items-center justify-content-between d-flex">
				      <div id="logo">
				        <Link to="/"><img src="assets/img/logo.png" alt="" title="" /></Link>
				      </div>
				      <nav id="nav-menu-container">
				        <ul className="nav-menu">
						{!isLoggedIn && <li className="menu-active"><Link to="/admin">Jobs</Link></li>}
				          {!isLoggedIn && <li><Link to="/">Company Review </Link></li>}
				          {!isLoggedIn && <li><Link to="/">Find Salaries</Link></li>}
				          {!isLoggedIn && <li><Link className="ticker-btn" to="/login">Post Job</Link></li>}
				          {isLoggedIn && <li ><img src='assets/img/notification.svg' alt='notification_icon'/></li>}
				          {isLoggedIn && <li className="menu-has-children" ><img src='assets/img/Avatar.svg' alt='avatar_icon'/>
						  <ul>
						  <li><span onClick={handleLogout}>Logout</span></li>
						</ul>
						</li>
					  }		          				          
				        </ul>
				      </nav>	    		
			    	</div>
			    </div>
			  </header>
        </React.Fragment>
    )
    
};

export default Header;