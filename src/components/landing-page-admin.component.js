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
import Footer from '../shared/footer'
import FooterBottom from '../shared/footer-bottom'
// import PostDetails from './post-details.component'
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });

const LandingPageAdmin = () => {


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

		const handleClickOpen = () => {
			setOpenModal(true);
		};

		const handleCloseModal = () => {
			setOpenModal(false);
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


	const refreshList = () => {
		fetchAllData();
		setPost({
			currentPost: null,
		  	currentIndex: 0
		});
	  }

	const fetchDataByKeyword = () => {
        JobService.findByKeyword(keyword)
          .then(response => {
			setPost(prevState => {
				return {...prevState, posts:response.data.data}
			});
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
      }

	const fetchAllData = () => {
		const { keyword, page, pageSize } = post;
    	const params = getRequestParams(keyword, page, pageSize);
		JobService.getMy(params)
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

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#0F4A7B',
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          marginTop: '4px',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

	  const { posts, currentPost, currentIndex, keyword, page, count } = post;
	//   const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
	  const DATE_OPTIONS = {year: 'short'};
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
                            Jobs			
							</h1>	
						</div>											
					</div>
				</div>
			</section>

            <section className="post-area section-gap">
				<div className="container">
					<div className="row justify-content-center d-flex">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 post-list">
				<div className="action-area">
			<div className="search-area no-margin">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<form action="search.html" className="serach-form-area">
								<div className="row justify-content-center form-wrap">
									<div className="col-lg-8 form-cols form-icon-prepend">
										<input type="text" className="form-control" placeholder='Search by Keyword' name="search" onChange={(e) => onChangeSearchTitle(e)}/>
										<div className="svg-icon">
                                            <i className='fa fa-search'></i>
										{/* <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M25 23.6925L18.0167 16.7091C19.6948 14.6945 20.5316 12.1104 20.3531 9.49452C20.1745 6.8786 18.9943 4.43223 17.058 2.66432C15.1216 0.896406 12.5782 -0.0569296 9.95692 0.00263186C7.33559 0.0621934 4.83814 1.13007 2.9841 2.9841C1.13007 4.83814 0.0621934 7.33559 0.00263186 9.95692C-0.0569296 12.5782 0.896406 15.1216 2.66432 17.058C4.43223 18.9943 6.8786 20.1745 9.49452 20.3531C12.1104 20.5316 14.6945 19.6948 16.7091 18.0167L23.6925 25L25 23.6925ZM1.88247 10.2048C1.88247 8.55878 2.37056 6.94975 3.28503 5.58115C4.1995 4.21256 5.49927 3.14586 7.01997 2.51597C8.54067 1.88607 10.214 1.72126 11.8284 2.04238C13.4428 2.3635 14.9256 3.15612 16.0895 4.32002C17.2534 5.48391 18.0461 6.96681 18.3672 8.58118C18.6883 10.1955 18.5235 11.8689 17.8936 13.3896C17.2637 14.9103 16.197 16.2101 14.8284 17.1245C13.4598 18.039 11.8508 18.5271 10.2048 18.5271C7.99832 18.5246 5.88293 17.647 4.32272 16.0868C2.76252 14.5266 1.88492 12.4112 1.88247 10.2048Z" fill="#62BECB"/>
										</svg> */}

                                    
                            </div>
									</div>
									<div className="col-lg-4 form-cols">
									    <button type="button" className="btn btn-info" onClick={() => fetchAllData()}>
									      Search
									    </button>
									</div>								
								</div>
							</form>
						</div>																	
					</div>
				</div>	
			</div>
            <div className='button-add'>
            <button type="button" className="btn add-btn" onClick={() => fetchAllData()}>
									      <i className='fa fa-plus mr-2'></i> New Job
									    </button>
            </div>
                </div>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} aria-label="customized table">
<TableHead>
<TableRow>
<StyledTableCell></StyledTableCell>
<StyledTableCell>Job title</StyledTableCell>
<StyledTableCell align="right">Date modified</StyledTableCell>
<StyledTableCell align="right">Candidates</StyledTableCell>
<StyledTableCell align="right"><i className="fa fa-filter mr-2"></i>Filter</StyledTableCell>
</TableRow>
</TableHead>
<TableBody>
{posts.map((row) => (
<StyledTableRow key={row.id}>
<StyledTableCell>
    <div className='status red'></div>
</StyledTableCell>
  <StyledTableCell component="th" scope="row">
    {row.title}
  </StyledTableCell>
  <StyledTableCell align="right">{(new Date(row.updated_at)).toLocaleDateString('en-GB')}</StyledTableCell>
  <StyledTableCell align="right">{row.candidates? row.candidates : "Not Available"}</StyledTableCell>
  <StyledTableCell>
      <div className='d-flex justify-content-between align-items-center'>
      <Button variant="contained" color="secondary">
  Edit
</Button>
      <Button variant="outlined" color="primary">
  Delete
</Button>
      </div>
  </StyledTableCell>
</StyledTableRow>
))}
</TableBody>
</Table>
</TableContainer>

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
					</div>
				</div>
			</section>

		{/* <Footer/> */}
		<FooterBottom/>
        </React.Fragment>
    )
}

export default LandingPageAdmin;