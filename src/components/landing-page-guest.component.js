import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../shared/header.component'
import Searchbox from '../shared/searchbox.component'
import Post from './post.component'
import JobService from '../services/job.service'

const LandingPageGuest = () => {
	const [post, setPost] = useState(
        {
            posts: {},
            currentPost: null,
            currentIndex: -1
        }
    )

	const [keyword, setKeyword] = useState("")


	const fetchDataByKeyword = (keyword) => {
        JobService.findByKeyword(keyword)
          .then(response => {
            setPost({
              posts: response.data
            });
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
      }

	const fetchAllData = () => {
		JobService.getAll()
          .then(response => {
            setPost({
              posts: response.data
            });
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
	}

	  useEffect(() => {
		  if (keyword !== "") {
		fetchDataByKeyword(keyword)
		  }
		  fetchAllData()
	  }, [keyword])

    return (
    <React.Fragment>
        <Header/>
        
        <section className="banner-area relative" id="home">	
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row fullscreen d-flex align-items-center justify-content-center" style={{height: "343px"}}>
						<div className="banner-content col-lg-12">
							<h1 className="text-white text-left">
                            Find Your Dream Job				
							</h1>	
							<Searchbox handleInput={keyword => setKeyword(keyword)}/>
						</div>											
					</div>
				</div>
			</section>

            <section className="post-area section-gap">
				<div className="container">
					<div className="row justify-content-center d-flex">
						<div className="col-lg-6 post-list">
						{post.posts.map((item) => (
							<Post key={item.id} post={post}/>
						))}

							<Link className="text-uppercase loadmore-btn mx-auto d-block" to="category.html">Load More job Posts</Link>

						</div>
						<div className="col-lg-6 sidebar">

							<div className="single-slidebar">
								<div className="active-relatedjob">
									<div className="single-rated">
										<Link to="single.html"><h4>Front end developer</h4></Link>
										<p className="address"><span className="lnr lnr-map-marker"></span> Ikeja, Lagos</p>
									
									{/* <h5>Job Nature: Full time</h5> */}
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

						</div>
					</div>
				</div>	
			</section>
        </React.Fragment>
    )
}

export default LandingPageGuest;