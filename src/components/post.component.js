import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
    console.log(props)
    const [post, setPost] = useState(
        {
            posts: [],
            currentPost: null,
            currentIndex: 0
        }
    )

	const setActivePost = (post, index) => {
		setPost({
			currentPost: post,
		  	currentIndex: index
		});
	  }

    const { item, index, activePost } = props;
    const { posts, currentPost, currentIndex } = post;
    return (
        <React.Fragment>
            <div className={
                    "single-post " +
                    (index === activePost.index ? "active" : "")
                  }>
								<div className="details">
									<div className="title d-flex flex-row justify-content-between">
										<div className="titles">
											<Link to="/"><h4>{item.title}</h4></Link>
										</div>
                                        <p className="amount">{item.salary}</p>
									</div>
                                    <p className="address"><span className="lnr lnr-map-marker"></span> {item.location}</p>
									<p>
                                    {item.description}
									</p>
									{/* <h5>Job Nature: Full time</h5> */}
									<div className="btns">
									    <button type="button" className="btn post-btn" onClick={() => props.activePost(item,index)}>
									      Search
									    </button>
									</div>
								</div>
							</div>
            </React.Fragment>
    )
}

export default Post
