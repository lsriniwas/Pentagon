import React from 'react'
import styles from '../../Styles/Dashboard.module.css';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux"
import {logout} from "../../Redux/user/actions"
import { useHistory } from "react-router-dom"


const DashNav = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const onClick = ({ key }) => {
        if(key==6){
            dispatch(logout())
        };
    };

    const handlePush =()=>{
        history.push(`/user-profile`)
    }

    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="1">My orders</Menu.Item>
            <Menu.Item key="2">-Courses</Menu.Item>
            <Menu.Item key="3">-Job Assistance</Menu.Item>
            <Menu.Item key="4">Services</Menu.Item>
            <Menu.Item key="5">Account Settings</Menu.Item>
            <Menu.Item key="6">Sign out</Menu.Item>
        </Menu>
    );

    return (
        <div className={styles.navbar_main}>
        
        <div className={styles.navbar_wrapper} >
            <img src={process.env.PUBLIC_URL + '/nav_logo.png'} alt="Logo" className={styles.logo} />
            <p className={styles.links}>Search Jobs</p>
            <p className={styles.links}>Jobs for You</p>
            <p className={styles.links}>Mailbox</p>
            <p className={styles.links} onClick={handlePush}>Profile</p>
            <p className={styles.links}>My Job Alerts</p>
            <p className={styles.links} >Services</p>
            <p className={styles.covid}>COVID-19 Career Guide</p>
            </div>
            <div style={{display:"flex"}}>
            <img src={process.env.PUBLIC_URL + '/cart.png'} alt="" srcset="" height="30px" style={{marginRight:"20px"}}/>
                <img src={process.env.PUBLIC_URL + '/bell.png'} alt="" srcset="" height="30px"/>

            <Dropdown overlay={menu} >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{border:"1px solid white", padding:"5px", color:"white", width:"max-content", fontSize:"larger", marginRight:"120px", marginLeft:"40px"}}>
                   Hi, {props.name} <DownOutlined />
                </a>
            </Dropdown>
        </div>
        </div>
    )
}

export default DashNav

