import React from "react"
import { AppBar, Backdrop, Box, Fade, Grid, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom';
import styles from "./Recruiter.module.css"
import { Form } from "./Form";
import { RecruiterSignUp } from "./RecruiterSignUp";
import { TopRecruiterCompanies } from "./TopRecruiterCompanies";
import { Content } from "./Content";
import { Howdoesitwork } from "./Howdoesitwork";
import { HireBox } from "./HireBox";
import { JobPortal } from "./JobPortal";
import { Faq } from "./FAQ";
import { ClientSpeak } from "./ClientSpeak";
import { HRinsider } from "./HRinsider";
import { Footer } from "./Footer";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { useDispatch, useSelector } from "react-redux";
import { fetchRecruiters } from "../../Redux/RecruitRedux/action";

const useStyles = makeStyles(() => ({
    root: {
        padding: "15px 100px 0px",
        height: 65,
        background:"#4A5DC3"
    },
    backgroundImage: {
        backgroundImage: `url(banner.jpg)`,
        backgroundRepeat: `no-repeat center top`,
        height: "353px",
        backgroundSize: "cover",
        width: "100%",
        position: 'relative'
    },

    navLink: {
        fontFamily: `Roboto,Arial`,
        textDecoration: "none",
        color: "white",
        fontSize: 14,
        lineHeight: "18px",
        fontWeight: 900,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}));

const Recruiter = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const list=useSelector(state=>state.recruiter.recruiterList)
    const dispatch=useDispatch()

    React.useEffect(() => {
        dispatch(fetchRecruiters())
    }, [dispatch])

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <AppBar className={classes.root} position="relative">
                <Box display="flex" justifyContent="space-between" >
                    <div className={styles.left_band}>
                        <a href="/" >
                            <img src={process.env.PUBLIC_URL + '/navbarImg.png'} alt="logo" />
                        </a>
                        <Grid style={{ margin: 10 }}>
                            <NavLink className={classes.navLink} to="/home">Home</NavLink>
                        </Grid>
                        <Grid style={{ margin: 10 }}>
                            <NavLink className={classes.navLink} to="about-us">About us</NavLink>
                        </Grid>
                        <Grid style={{ margin: 10 }}>
                            <NavLink className={classes.navLink} to="hiring-plans">Hiring Plans</NavLink>
                        </Grid>
                        <Grid style={{ margin: 10 }}>
                            <NavLink className={classes.navLink} to="job-seeker">Job Seeker?</NavLink>
                        </Grid>
                        <Grid style={{ margin: 10 }}>
                            <NavLink className={classes.navLink} to="hr-insider">HR Insider</NavLink>
                        </Grid>
                    </div>
                    <div className={styles.right_band}>
                        <div>
                            <ul>
                                <li>080-47105555</li>
                                <li>recruiterservices@shine.com</li>
                            </ul>
                        </div>
                        <div>
                            <button className={styles.recruiterLogin_button} onClick={handleOpen} >
                                Recruiter login
                        </button>
                            <Modal
                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 300,
                                }}
                            >
                                <Fade in={open}>
                                    <div className={styles.modalLoginData}>
                                        <div className={styles.loginheader}>
                                            <span className={styles.title}>Login</span>
                                            <span className={styles.close} onClick={handleClose}></span>
                                        </div>
                                        <div className={`${styles.formData}`}>
                                            <Form list={list}/>
                                        </div>
                                    </div>
                                </Fade>
                            </Modal>
                        </div>
                    </div>
                </Box>
            </AppBar>
           {/* Body-Content */}
            <div className={classes.bodyContent}>
                <div className={classes.backgroundImage}>
                    <div className={styles.topCompanies}>
                        <h1>
                            Hire the Right Talent,
                            with Right Skills
                        </h1>
                        <br />
                        <p>Over 3.40 crore qualified candidates</p>
                        <div className={styles.twoButtons}>
                            <NavLink to="/" exact className={styles.yellow_bg}>
                                Post a Job for AlmostFree
                             </NavLink>
                            <NavLink to="/" className={styles.blue_bg}>
                                Free Candidate Search
                                <span className={styles.newFlash}>
                                    <small>NEW</small>
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className={styles.sideWidget}>
                    <NavLink to="#" className={styles.in}></NavLink>
                    <NavLink to="#" className={styles.facebook}></NavLink>
                    <NavLink to="#" className={styles.twitter}></NavLink>
                </div>


                <div className={styles.centerContent}>
                    <div className={styles.topCompanieshiring}>
                        <h2>Top companies are hiring on Shine</h2>
                        <TopRecruiterCompanies />
                    </div>
                </div>
                <>
                    <Content />
                </>
                <div className={styles.createOwnPlan}>
                    <div className={styles.line}>
                        <span>or</span>
                    </div>
                    <NavLink className={styles.ownPlanLink} to="#">Create your own plan</NavLink>
                </div>
                <>
                    <Howdoesitwork />
                </>
                <>
                    <HireBox />
                </>
                <>
                    <JobPortal />
                </>
                <>
                    <Faq />
                </>
                <>
                    <HRinsider />
                </>
                <>
                    <Footer />
                </>
                {/* Recruiter SignUP */}
                <div className={styles.recruitersignupform}>
                    <div>
                        <h2>Request free demo</h2>
                    </div>
                    <div>
                        <RecruiterSignUp />
                    </div>
                </div>
                {/* //Recruiter SignUP */}
            </div>
           {/* //Body-Content */}
            {/* Chat-Box Icon */}
            <div className={styles.chatBox}>
                <button>
                <WhatsAppIcon  color="action" fontSize="large"/>
                </button>
            </div>
            {/* //Chat-Box Icon */}
        </div>
    )
}
export { Recruiter }