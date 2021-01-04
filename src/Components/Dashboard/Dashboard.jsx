import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { SearchBar } from '../SearchBar/SearchBar'
import DashNav from './DashNav'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Accordion, AccordionSummary, LinearProgress } from '@material-ui/core'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import LandingPageFooter from '../Landing/LandingPageFooter';
import { fetchAllJobs } from '../../Redux/JobsRedux/actions'
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Dashboard = () => {
    const data = useSelector((state) => state.auth.userdata)
    const allJobs = useSelector(state => state.job.jobs)
    const [itemList, setList] = useState([])
    const [key, setKey] = useState(1)
    const jobs_applied = data.jobs_applied;
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)
    const [text, setText] = React.useState(`There are no jobs matching your profile. Please keep your Profile updated.`)
    const { TabPane } = Tabs;
    React.useEffect(() => {
        dispatch(fetchAllJobs())
        let data = []
        if (jobs_applied.length !== 0) {
            for (let i = 0; i < jobs_applied.length; i++) {
                data.push(allJobs.find(item => item.id == jobs_applied[i]))
            }
        }
        setList(data)
    }, [dispatch,key])
    function callback(key) {
        if (key == 1) {
            setKey(1)
            setText(`There are no jobs matching your profile.
            Please keep your Profile updated.`)
        }
        else if (key == 2) {
            setKey(2)
            setText(`You have not saved any jobs.`)
        }
        else if (key == 3) {
            setKey(3)
            setText(`You haven't applied to any jobs`)
        }
    }
    return (
        <div style={{ backgroundColor: "#FBFBFB" }}>
            <DashNav
                name={data.name}
            />
            <div style={{ marginTop: "65px", width: "100%", backgroundColor: "#F4F5F5", height: "90px" }}>
                <SearchBar></SearchBar>
            </div>
            <div style={{ display: "flex", width: "1100px", height: "520px", margin: "auto", textAlign: "center", justifyContent: "space-between", marginTop: "50px", fontSize: "larger", backgroundColor: "#FBFBFB" }}>
                <div>
                    <Card style={{ width: "700px" }} type="inner" title="Jobs for You" extra={<a href="#">More</a>}>
                        <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter={70}>
                            <TabPane tab="Matched" key="1">
                            </TabPane>
                            <TabPane tab="Saved" key="2">
                            </TabPane>
                            <TabPane tab="Applied" key="3">
                            </TabPane>
                        </Tabs></Card>
                    <Card style={{ width: "700px", textAlign: "center", marginTop: "20px",marginBottom:100 }}>
                        {key === 1 &&
                            <>
                                <img src={process.env.PUBLIC_URL + '/warn.png'} alt="" srcset="" height="70px" />
                                <div>{text}</div>
                            </>
                        }
                        {key === 2 &&
                            <>
                                <img src={process.env.PUBLIC_URL + '/warn.png'} alt="" srcset="" height="70px" />
                                <div>{text}</div>
                            </>
                        }
                        {key===3 && jobs_applied.length === 0 ?
                            <>
                                <img src={process.env.PUBLIC_URL + '/warn.png'} alt="" srcset="" height="70px" />
                                <div>{text}</div>
                            </>
                            :
                            key===3 &&
                            <>
                                <h1>Jobs Applied</h1>
                                {
                                    itemList?.map(item =>
                                        <Accordion key={item && item.id} style={{ margin: 3, padding: 10, outline: 'none', }} elevation={5}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <h3> {item && item.jobtitle}</h3>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                            <p > {item && item.company}</p>
                                            </div>
                                            <ul>
                                                <li style={{ listStyle: "none" }}> {item &&  item.experience} </li>
                                                <li style={{ listStyle: "none" }}> {item &&  item.city} </li>
                                            </ul>
                                            <p> {item && item.date} </p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                    )
                                }
                            </>
                        }
                    </Card>
                </div>
                <div>
                    <Card style={{ width: 350 }}>
                        <div >
                            <div style={{ display: "flex" }} >
                                <div style={{display:'grid',placeItems:'center',width: "60px", height: "60px", borderRadius: "35px", textAlign: "center", fontSize: "30px", fontWeight: "600", backgroundColor: "#4B30BD", color: "white" }} >
                                   <div style={{textAlign:'center'}}>
                                    {data.name[0].toUpperCase()}
                                   </div>
                                </div>
                                <div style={{ marginLeft: "20px" }} >
                                    <h2>{data && data.name}</h2>
                                    <div style={{ marginTop: "-15px" }}>
                                        Profile title Not mentioned
                                    </div ></div>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }} >
                                    <div>
                                        ProfileScore
                               </div>
                                    <div>
                                        Average
                               </div>
                                </div>
                                <div>
                                    <LinearProgress variant="determinate" value={60} />
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                    <Card style={{ width: "max-content", height: 70 }}>
                                        <div style={{ marginTop: "-15px", fontWeight: "1000" }}>9</div>
                                        <div>Recruiter Actions</div>
                                    </Card>
                                    <Card style={{ width: "max-content", height: 70 }}>
                                        <div style={{ marginTop: "-15px", fontWeight: "1000" }}>2</div>
                                        <div>Recruiter Mails</div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card style={{ width: "350px", height: "max-content", marginTop: "20px" }} type="inner" title="Profile Views" extra={<a href="#">View All</a>}>
                        <div>9 recruiters expressed interest in your profile</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Card></div>
            </div>
            <div style={{marginTop:"20px"}}>
            <LandingPageFooter  />
            </div>
        </div>
    )
}


export default Dashboard
