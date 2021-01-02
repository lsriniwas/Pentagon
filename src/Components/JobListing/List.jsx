import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import styles from '../../Styles/JobListing.module.css'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { apply_job} from '../../Redux/user/actions';
import { job_apply } from '../../Redux/JobsRedux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: "35%",
    backgroundColor: "#eee",
    position: 'relative',
    overflow: 'auto',
    maxHeight: "780px"
  },
  right : {
    width : "100%",
    maxWidth : "100%",
    overflow : 'auto',
    height : "520px",
    maxHeight : "780px",
    marginLeft : "5px"
  }
}));

export default function JobListingContent({ data }) {
  const classes = useStyles();
  const [id, setId] = useState("1")
  const userdata = useSelector((state) => state.auth.userdata)
  const dispatch = useDispatch()
  const handleClick = (jobId) => {
    setId(jobId)
  }
  useEffect(() => {
      if(data.length){
          setId(data[0].id)
      }
  },[data])

  const handleApply=(appliedids)=>{
      console.log(id,userdata.id)
      const payload1={
          jobs_applied:[...userdata.jobs_applied,id]
      }
      console.log(payload1)
      dispatch(apply_job(payload1,userdata.id))
      console.log(appliedids)
      const payload2={
          applied:[...appliedids,userdata.id]
      }
      dispatch(job_apply(payload2,id))
      alert("Applied Successfully")
  }

  return (
      <div className={styles.split_view}>
        <List className={classes.root}>
        {data?.map((job) => (
            <div key={job.id} className={styles.list_section} onClick={() => handleClick(job.id)}>
                <h3 className={styles.job_list_left_box_title}> {job.jobtitle} </h3>
                <p className={styles.company_name}> {job.company} </p>
                <ul>
                    <li> {job.experience} </li>
                    <li> {job.city} </li>
                </ul>
                <p> {job.date} </p>
            </div>
        ))}
        </List>
        <List className={classes.right}>
            {
                data?.filter(job => job.id == id).map(job => (
                    <>
                        <div className={styles.job_details}>
                            <h2>{job.jobtitle}</h2>
                            <p>{job.company}</p>
                            <div className={styles.job_details_mid}>
                                <p><img src={process.env.PUBLIC_URL + '/shine_images/experience_bag.png'} alt=""/><span>{job.experience}</span></p>
                                <p><img src={process.env.PUBLIC_URL + '/shine_images/location_pin.png'} alt=""/><span>{job.city}</span></p>
                            </div>
                            <div className={styles.job_details_base}>
                                <div className={styles.orange_button} onClick={()=>handleApply(job.applied)}>Apply</div>
                                <p>Posted : {job.date}</p>
                            </div>
                        </div>
                        <div className={styles.key_skills}>
                            <h3>Key Skills</h3>
                            <ul>
                                {

                                   job.skills.length>0&& job.skills.split(",").map(skill => <li>{skill}</li>)
                                }
                            </ul>
                        </div>
                        <div className={styles.job_snippet}>
                            <h3>Job Detail</h3>
                            <p>{job.snippet}</p>
                            <p><strong>Industry : </strong>{job.industry}</p>
                        </div>
                    </>
                ))
            }
        </List>
      </div>
  );
}
