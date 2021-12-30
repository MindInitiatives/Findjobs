import React from 'react'
import { Link } from 'react-router-dom'

const PostDetails = () => {
    return (
        <React.Fragment>
        <div className="single-slidebar">
            <div className="active-relatedjob">
                <div className="single-rated">
                    <Link to="single.html"><h4>Front end developer</h4></Link>
                    <p className="address"><span className="lnr lnr-map-marker"></span> Ikeja, Lagos</p>
                
                    <Link to="/" className="btns btn-apply">Apply Via Find Job</Link>
                </div>																	
            </div>

        <div class="job-details">
            <p>
            In this role, you will be responsible for developing and
            implementing user interface components using React.js concepts 
            and workflow such as Redux, Flux, and Webpack. You will also be 
            responsible for profiling and improving front-end performance 
            and documenting our front-end codebase.
            </p>
            
            <ul>
                <li>
                Minimum Qualification: Degree
                </li>
                <li>
                Experience Level: Senior level
                </li>
                <li>
                Experience Length: 5 years
                </li>
            </ul>
        </div>

        <div class="job-experience">
            <h4 class="single-title">Job Description/Requirements</h4>
            <ul>
                <li>
                    <img src="img/pages/list.jpg" alt=""/>
                    <span>5+ years experience of front-end related (HTML5 + JS + CSS3) development work experience, familiar with mobile application development;</span>
                </li>
                <li>
                    <img src="img/pages/list.jpg" alt=""/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaut enim ad minim veniam.</span>
                </li>
                <li>
                    <img src="img/pages/list.jpg" alt=""/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaut enim ad minim veniam.</span>
                </li>	
                <li>
                    <img src="img/pages/list.jpg" alt=""/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaut enim ad minim veniam.</span>
                </li>
                <li>
                    <img src="img/pages/list.jpg" alt=""/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaut enim ad minim veniam.</span>
                </li>
                <li>
                    <img src="img/pages/list.jpg" alt=""/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaut enim ad minim veniam.</span>
                </li>																											
            </ul>
        </div>
        </div>	
            </React.Fragment>
    )
}

export default PostDetails
