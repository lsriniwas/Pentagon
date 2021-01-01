import { AppBar, Box, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchJobsPosted, logoutRecruiter } from '../../Redux/RecruitRedux/action'
import styles from "../../Components/Recruiter/Recruiter.module.css"
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import { ProfileContainer } from './ProfileContainer'


const useStyles = makeStyles(() => ({
    root:{
        padding:"10px 10px 0px 10px",
        zIndex:800
    },
    navLink: {
        fontFamily: `Roboto,Arial`,
        textDecoration: "none",
        color: "white",
        fontSize: 14,
        lineHeight: "18px",
        fontWeight: 900,
    },
}));

const RecruiterProfile = () => {
    const classes=useStyles()
    const dispatch = useDispatch()
    const handleLogout=()=>{
        dispatch(logoutRecruiter())
    }
    return (
        <div>
             <AppBar className={classes.root} position="relative">
                <Box display="flex" justifyContent="space-between" >
                <div className={styles.left_band}>
                        <a href="/" >
                            <img src={process.env.PUBLIC_URL + '/navbarImg.png'} alt="logo" />
                        </a>
                        <Grid style={{ margin: 10 }}>
                            <NavLink className={classes.navLink} to="/">Home</NavLink>
                        </Grid>
                        <Grid style={{ margin: 10 }}>
                            <NavLink className={classes.navLink} to="about-us">About us</NavLink>
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
                            <button onClick={handleLogout}className={styles.recruiterLogin_button} >
                                Logout
                            </button>
                        </div>
                    </div>
                </Box>
            </AppBar>
              
              <ProfileContainer/>
              
        </div>
    )
}

export {RecruiterProfile}
