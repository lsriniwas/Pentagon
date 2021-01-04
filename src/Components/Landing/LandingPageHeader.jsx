import React from 'react'
import styles from '../../Styles/HomeMid.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Loginreq } from "../../Redux/user/actions"
import { Redirect } from "react-router-dom"
import { Login1 } from '../Login/Login1';

const LandingPageHeader = () => {
    const error = useSelector((state) => state.error)
    const isAuth = useSelector((state) => state.isAuth)
    const dispatch = useDispatch()

   const handleCancel = () => {
        setOpen(false);
    };

    const handleSubmit = (email, password) => {
        dispatch(Loginreq(email, password));
        if (isAuth) {
            setTimeout(() => {
                setOpen(false);
            }, 2000);
        }
    };


    const useStyles = makeStyles((theme) => ({
        paper: {
            position: "absolute",
            margin:"auto",
            height:"500px", 
            width:"782px",
            backgroundImage:`url('/back1.JPG')`,
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            
            top: `30%`,
            left: `30%`
        }
    }));
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    return (
        <section className={styles.home_mid}> 
        {isAuth ? <Redirect to="/dashboard" /> : ""}
            <div className={styles.content}>
                <div className={styles.box_one}>
                    <h1 style={{color:"white"}}>Growth on your mind?</h1>
                    <h2 style={{color:"white"}}>Explore 300,000+ jobs</h2>
                    <div className={styles.white_box}>
                        <p style={{marginTop:"12px"}}>Job title, skills</p>
                        <SearchIcon color="primary"/>
                    </div>
                </div>
                <div className={styles.registration}>
                <button><Link to={'/register'}>Register for free</Link></button>
                <div className={styles.sign_in}>
                            <button onClick={() => setOpen(true)}>Sign In</button>
                            <Modal className={classes.paper}
                                open={open}
                                onClose={handleCancel}
                            >
                                <Login1 
                                style={{ backgroundImage:`url('back1.jpg')`}}
                                    handleSubmit={handleSubmit}
                                    error={error}

                                />

                            </Modal>


                        </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPageHeader
