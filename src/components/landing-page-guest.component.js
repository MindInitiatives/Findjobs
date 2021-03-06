import React, { useEffect, useState } from 'react'
import useDidMountEffect from '../helpers/useDidMountEffect'
import { Link } from 'react-router-dom'
import Header from '../shared/header.component'
// import Searchbox from '../shared/searchbox.component'
// import Post from './post.component'
import JobService from '../services/job.service'
import Pagination from "@mui/material/Pagination";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Footer from '../shared/footer';
import CustomDialog from '../shared/custom-dialog'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import ApplicationForm from './application-form.component'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 700,
	bgcolor: 'background.paper',
	borderRadius: '10px',
	boxShadow: 24,
	p: 4,
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
	  padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
	  padding: theme.spacing(1),
	},
	'& .MuiDialog-paper': {
		width: "450px"
	}
  }));

const LandingPageGuest = () => {

	const [post, setPost] = useState(
		{
            posts: [],
            currentPost: null,
            currentIndex: 0,
			keyword: "",

			page: 1,
			count: 0,
			pageSize: 3,
        }
		)

		useEffect(() => {
			  fetchAllData();
		}, [])

		useDidMountEffect(() => {
			fetchAllData() // react please run me if 'page' changes, but not on initial render
		}, [post.page, post.keyword]);  

		const [openModal, setOpenModal] = useState(false);
		const handleOpenModal = () => setOpenModal(true);
		const handleCloseModal = () => setOpenModal(false);

		const [openDialog, setOpenDialog] = useState(false);

		const handleClickOpen = () => {
			console.log("hi")
			setOpenDialog(true);
		};

		const handleCloseDialog = () => {
			setOpenDialog(false);
		};

		const theme = useTheme();
		const desktop = useMediaQuery(theme.breakpoints.up("lg"));
		const tablet = useMediaQuery(theme.breakpoints.up("sm"));
		const mobile = useMediaQuery(theme.breakpoints.up("xs"));

		const sizes = () => {
			// if (desktop) return "large";
			// if (tablet) return "medium";
			// if (mobile) return "small";
			 console.log(desktop, tablet, mobile)
		};

		const getRequestParams = (keyword, page, pageSize) => {
			let params = {};
		
			if (keyword) {
			  params["q"] = keyword;
			}
		
			if (page) {
			  params["page"] = page - 1;
			}
		
			if (pageSize) {
			  params["size"] = pageSize;
			}
		
			return params;
		  }

		  const onChangeSearchTitle = (e) => {
			const keyword = e.target.value;
			setPost(prevState => {
				return {...prevState, keyword: keyword}
			});
			}

	const setActivePost = (post, index) => {
		sizes();
		if (mobile && !desktop && !tablet) return handleClickOpen();
            setPost(prevState => {
				return {...prevState, currentPost: post, currentIndex: index}
			});
	  }


	// const fetchDataByKeyword = () => {
    //     JobService.findByKeyword(keyword)
    //       .then(response => {
	// 		setPost(prevState => {
	// 			return {...prevState, posts:response.data.data}
	// 		});
    //         console.log(response);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   }

	const fetchAllData = () => {
		const { keyword, page, pageSize } = post;
    	const params = getRequestParams(keyword, page, pageSize);
		JobService.getAll(params)
          .then(response => {
			const data = response.data
            setPost(prevState => {
				return {...prevState, posts:data.data, currentPost: data.data[0], count:data.meta.last_page}
			});
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
	}

	const handlePageChange = (event, value) => {
		console.log(value)
		setPost(prevState => {
			return {...prevState, page: value}
		});
	  }

	  const [anchorEl, setAnchorEl] = React.useState(null);
	  const open = Boolean(anchorEl);
	  const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	  };
	  const handleClose = () => {
		setAnchorEl(null);
	  };

	// const fetchDataById = (itemId) => {
    //     JobService.get(itemId)
    //       .then(response => {
    //         setDetails({
    //           details: response.data
    //         });
    //         console.log(response);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   }

	  const { posts, currentPost, currentIndex, keyword, page, count } = post;
	  const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
	  var cts = currentPost?.created_at,
      cdate = (new Date(cts)).toLocaleDateString('en-US', DATE_OPTIONS);
	  console.log(post)

    return (
    <React.Fragment>
        <Header/>
        
        <section className="banner-area relative" id="home">
				<div className='blob1 ellipse'></div>	
				<div className='blob2 ellipse'></div>	
				<div className='blob3 ellipse'></div>	
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center" style={{height: "343px"}}>
						<div className="banner-content col-lg-12">
							<h1 className="text-white text-left">
                            Find Your Dream Job				
							</h1>	
						</div>											
					</div>
				</div>
			</section>

			<section className="search-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<form action="search.html" className="serach-form-area">
								<div className="row justify-content-center form-wrap">
									<div className="col-lg-6 form-cols form-icon-prepend">
										<input type="text" className="form-control search" placeholder='Search by Keyword' name="search" onChange={(e) => onChangeSearchTitle(e)}/>
										<div className="svg-icon">
										<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M25 23.6925L18.0167 16.7091C19.6948 14.6945 20.5316 12.1104 20.3531 9.49452C20.1745 6.8786 18.9943 4.43223 17.058 2.66432C15.1216 0.896406 12.5782 -0.0569296 9.95692 0.00263186C7.33559 0.0621934 4.83814 1.13007 2.9841 2.9841C1.13007 4.83814 0.0621934 7.33559 0.00263186 9.95692C-0.0569296 12.5782 0.896406 15.1216 2.66432 17.058C4.43223 18.9943 6.8786 20.1745 9.49452 20.3531C12.1104 20.5316 14.6945 19.6948 16.7091 18.0167L23.6925 25L25 23.6925ZM1.88247 10.2048C1.88247 8.55878 2.37056 6.94975 3.28503 5.58115C4.1995 4.21256 5.49927 3.14586 7.01997 2.51597C8.54067 1.88607 10.214 1.72126 11.8284 2.04238C13.4428 2.3635 14.9256 3.15612 16.0895 4.32002C17.2534 5.48391 18.0461 6.96681 18.3672 8.58118C18.6883 10.1955 18.5235 11.8689 17.8936 13.3896C17.2637 14.9103 16.197 16.2101 14.8284 17.1245C13.4598 18.039 11.8508 18.5271 10.2048 18.5271C7.99832 18.5246 5.88293 17.647 4.32272 16.0868C2.76252 14.5266 1.88492 12.4112 1.88247 10.2048Z" fill="#62BECB"/>
										</svg>

                                    
                            </div>
									</div>
                                    <div className="col-lg-4 form-cols form-icon-prepend">
										<input type="text" className="form-control" name="location"placeholder='Search by Location'  onChange={(e) => onChangeSearchTitle(e)}/>
										<div className="svg-icon">
										<svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.29184 5.87744C8.61552 5.87744 7.95439 6.07799 7.39206 6.45374C6.82972 6.82948 6.39143 7.36354 6.13261 7.98837C5.8738 8.61321 5.80608 9.30076 5.93802 9.96408C6.06996 10.6274 6.39564 11.2367 6.87387 11.7149C7.3521 12.1932 7.9614 12.5188 8.62473 12.6508C9.28805 12.7827 9.9756 12.715 10.6004 12.4562C11.2253 12.1974 11.7593 11.7591 12.1351 11.1968C12.5108 10.6344 12.7114 9.97329 12.7114 9.29697C12.7103 8.39037 12.3497 7.5212 11.7087 6.88014C11.0676 6.23908 10.1984 5.87847 9.29184 5.87744ZM9.29184 11.0067C8.95368 11.0067 8.62312 10.9065 8.34195 10.7186C8.06078 10.5307 7.84163 10.2637 7.71223 9.95127C7.58282 9.63885 7.54896 9.29507 7.61493 8.96341C7.6809 8.63175 7.84374 8.3271 8.08286 8.08798C8.32197 7.84887 8.62662 7.68603 8.95828 7.62006C9.28995 7.55409 9.63372 7.58795 9.94614 7.71735C10.2586 7.84676 10.5256 8.06591 10.7135 8.34707C10.9013 8.62824 11.0016 8.95881 11.0016 9.29697C11.0011 9.75026 10.8208 10.1848 10.5002 10.5054C10.1797 10.8259 9.74514 11.0062 9.29184 11.0067Z" fill="#62BECB"/>
										<path d="M15.8628 2.72094C14.2381 1.09668 12.0694 0.131811 9.77514 0.0125409C7.48091 -0.106729 5.22382 0.628058 3.43949 2.07509C1.65516 3.52212 0.470078 5.57881 0.112978 7.84821C-0.244123 10.1176 0.252067 12.4389 1.50578 14.3639L7.96586 24.2813C8.10962 24.5019 8.30618 24.6833 8.53773 24.8088C8.76928 24.9343 9.02849 25 9.29186 25C9.55523 25 9.81444 24.9343 10.046 24.8088C10.2775 24.6833 10.4741 24.5019 10.6179 24.2813L17.0781 14.3639C18.2415 12.5782 18.7556 10.4468 18.5343 8.32701C18.313 6.20725 17.3698 4.22798 15.8628 2.72094ZM15.6456 13.4307L9.29189 23.1843L2.93814 13.4307C0.993282 10.4451 1.41041 6.44956 3.92996 3.9299C4.63409 3.22575 5.47002 2.66718 6.39003 2.2861C7.31003 1.90501 8.29608 1.70887 9.29189 1.70887C10.2877 1.70887 11.2737 1.90501 12.1937 2.2861C13.1138 2.66718 13.9497 3.22575 14.6538 3.9299C17.1734 6.44956 17.5904 10.4451 15.6456 13.4307Z" fill="#62BECB"/>
										</svg>

                                    
                            </div>
									</div>
									<div className="col-lg-2 form-cols">
									    <button type="button" className="btn btn-info" onClick={() => fetchAllData()}>
									      Search
									    </button>
									</div>								
								</div>
							</form>
						</div>																	
					</div>
				</div>	
			</section>

            <section className="post-area section-gap">
				<div className="container">
					<div className="row justify-content-center d-flex">
						<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 post-list">
				<div className="ls-switcher">
					<div className='showing-result'>Showing&nbsp;{posts?.length}&nbsp;results</div>
					<div className='d-flex justify-content-between align-items-center'>
						<div>Sort by: </div>
						<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Latest
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Yesterday</MenuItem>
        <MenuItem onClick={handleClose}>Long ago</MenuItem>
      </Menu>
					</div>
				</div>
						<div className='card-bordered'>
						{
						posts 
						?
						posts.map((item, index) => (
							<div className={
								"single-post " +
								(index === currentIndex ? "active" : "")
							  } key={index}>
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
												<div className="btns">
													<button type="button" className="btn post-btn" onClick={() => setActivePost(item,index)}>
													See more
													</button>
													<Dialog
        fullScreen
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
		<div className="col-sm-12 col-12 sidebar">
						{currentPost ? (	
						<div className="single-slidebar">
						<div className="card-bordered">
            <div className="active-relatedjob">
                <div className="single-rated">
                    <Link to="single.html"><h4>{currentPost.title}</h4></Link>
                    <p className="address"><span className="lnr lnr-map-marker"></span> {currentPost.location}</p>
                
                    <Button variant="contained" color="secondary" onClick={handleOpenModal} className="btns btn-apply">Apply Via Find Job</Button>
					<BootstrapDialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <CustomDialog id="customized-dialog-title" onClose={handleCloseModal}>
          Modal title
        </CustomDialog>
        <DialogContent dividers>
			hi
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseModal}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
                </div>																	
            </div>
        <div className="job-details">
            <p>
            {currentPost.description}
            </p>
            
            <ul>
                <li>
                Company : {currentPost.company ? currentPost.company : "Not Available"}
                </li>
                <li>
                Category : {currentPost.category}
                </li>
                <li>
                Work Condition : {currentPost.work_condition}
                </li>
                <li>
                Job Type : {currentPost.type}
                </li>
                <li>
                Date Created : {cdate}
                </li>
                <li className={
								(currentPost.benefits === null ? "d-none" : "")
							  }>
                Benefits : {currentPost.benefits}
                </li>
				
            </ul>
        </div>

        <div className="job-experience">
            <h4 className="single-title">Job Description/Requirements</h4>
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
		 ) : (
            <div>
              <br />
              <p>...Could not Load selected job</p>
            </div>
		)}
						</div>
      </Dialog>
												</div>
											</div>
										</div>
						))
						:
						<div>could not fetch data</div>
						}	
						</div>

						<Pagination
									className="my-3"
									count={count}
									page={page}
									siblingCount={1}
									boundaryCount={1}
									color="primary"
									variant="outlined"
									shape="rounded"
									onChange={(event, value)=>handlePageChange(event, value)}
									/>

						</div>
						<div className={
								"col-lg-6 col-md-12 col-sm-12 col-xs-12 sidebar " +
								(mobile && !desktop && !tablet ? "d-none" : "")
							  }>
						{currentPost ? (	
						<div className="single-slidebar" style={{marginTop: "35px"}}>
						<div className="card-bordered">
            <div className="active-relatedjob">
                <div className="single-rated">
                    <Link to="single.html"><h4>{currentPost.title}</h4></Link>
                    <p className="address"><span className="lnr lnr-map-marker"></span> {currentPost.location}</p>
                
                    <Button variant="contained" color="secondary" onClick={handleOpenModal} className="btns btn-apply">Apply Via Find Job</Button>
					<BootstrapDialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <CustomDialog id="customized-dialog-title" onClose={handleCloseModal}>
          {currentPost.title}
		<p className="address"><span className="lnr lnr-map-marker"></span> {currentPost.location}</p>
        </CustomDialog>
        <DialogContent>
		<ApplicationForm/>
        </DialogContent>
        {/* <DialogActions>
          <Button variant="contained" color='primary' className='btn btn-block' autoFocus onClick={handleCloseModal}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
                </div>																	
            </div>
        <div className="job-details">
            <p>
            {currentPost.description}
            </p>
            
            <ul>
                <li>
                Company : {currentPost.company ? currentPost.company : "Not Available"}
                </li>
                <li>
                Category : {currentPost.category}
                </li>
                <li>
                Work Condition : {currentPost.work_condition}
                </li>
                <li>
                Work Type : {currentPost.type}
                </li>
                <li>
                Date Created : {cdate}
                </li>
                <li className={
								(currentPost.benefits === null ? "d-none" : "")
							  }>
                Benefits : {currentPost.benefits}
                </li>
				
            </ul>
        </div>

        <div className="job-experience">
            <h4 className="single-title">Job Description/Requirements</h4>
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
		 ) : (
            <div>
              <br />
              <p>...Could not Load selected job</p>
            </div>
		)}
						</div>
					</div>
				</div>
			</section>

		<Footer/>
		{/* <FooterBottom/> */}
        </React.Fragment>
    )
}

export default LandingPageGuest;