import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../shared/header.component'
import Searchbox from '../shared/searchbox.component'
import Post from './post.component'
import JobService from '../services/job.service'
import PostDetails from './post-details.component'

const LandingPageGuest = () => {
	const [post, setPost] = useState(
        {
            posts: [],
            currentPost: null,
            currentIndex: -1
        }
    )

	const [details, setDetails] = useState({})

	const [keyword, setKeyword] = useState("")
	const [itemId, setItemId] = useState(0)

	const setActivePost = (post, index) => {
		setPost({
			currentPost: post,
		  	currentIndex: index
		});
	  }

	const refreshList = () => {
		fetchAllData();
		setPost({
			currentPost: null,
		  	currentIndex: -1
		});
	  }

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

	const fetchDataById = (itemId) => {
        JobService.get(itemId)
          .then(response => {
            setDetails({
              details: response.data
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
						{post.posts.map((item, index) => (
							<Post viewDetails={itemId => setItemId(itemId)} key={item.id} post={item,index}/>
						))}

							<Link className="text-uppercase loadmore-btn mx-auto d-block" to="category.html">Load More job Posts</Link>

						</div>
						<div className="col-lg-6 sidebar">
							<PostDetails />

						</div>
					</div>
				</div>	
			</section>
        </React.Fragment>
    )
}

export default LandingPageGuest;