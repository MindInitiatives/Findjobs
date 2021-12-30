import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
    console.log(props)
    const { items } = props.posts;
    return (
        <React.Fragment>
            <div className="single-post">
								<div className="details">
									<div className="title d-flex flex-row justify-content-between">
										<div className="titles">
											<Link to="/"><h4>{items.title}</h4></Link>
										</div>
                                        <p className="amount">{items.salary}</p>
									</div>
                                    <p className="address"><span className="lnr lnr-map-marker"></span> {items.location}</p>
									<p>
                                    {items.description}
									</p>
									{/* <h5>Job Nature: Full time</h5> */}
									<div className="btns">
									    <button type="button" className="btn post-btn">
									      Search
									    </button>
									</div>
								</div>
							</div>
            </React.Fragment>
    )
}

export default Post
