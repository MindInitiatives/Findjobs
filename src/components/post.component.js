import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
    console.log(props)
    const { item, index } = props;
    return (
        <React.Fragment>
            <div className={
                    "single-post " +
                    (index === item.currentIndex ? "active" : "")
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
									    <button type="button" className="btn post-btn" onClick={() => props.viewDetails(item.id)}>
									      Search
									    </button>
									</div>
								</div>
							</div>
            </React.Fragment>
    )
}

export default Post
