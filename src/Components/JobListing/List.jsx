import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Paper } from '@material-ui/core';
import styles from '../../Styles/JobListing.module.css'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 450,
    backgroundColor: "#eee",
    position: 'relative',
    overflow: 'auto',
    maxHeight: "550px"
  },
  right : {
    width : "100%",
    maxWidth : "100%",
    overflow : 'auto',
    maxHeight : "550px",
    marginLeft : "5px"
  }
}));

export default function PinnedSubheaderList({ data }) {
  const classes = useStyles();
  const [id, setId] = useState("1")
  const handleClick = (jobId) => {
    setId(jobId)
  }

  return (
      <div className={styles.split_view}>
        <List className={classes.root}>
        {data?.map((job) => (
            <Paper key={job.id} className={styles.list_section} onClick={() => handleClick(job.id)}>
                <h3 className={styles.job_list_left_box_title}> {job.jobtitle} </h3>
                <p className={styles.company_name}> {job.company} </p>
                <ul>
                    <li> {job.experience} </li>
                    <li> {job.city} </li>
                </ul>
                <p> {job.date} </p>
            </Paper>
        ))}
        </List>
        <List className={classes.right}>
            {
                data?.filter(job => job.id == id).map(job => (
                    <>
                        <div className={styles.job_details}>
                            <h1>{job.jobtitle}</h1>
                            <p>{job.company}</p>
                            <div className={styles.job_details_mid}>
                                <p><img src={process.env.PUBLIC_URL + '/shine_images/experience_bag.png'} alt=""/><span>{job.experience}</span></p>
                                <p><img src={process.env.PUBLIC_URL + '/shine_images/location_pin.png'} alt=""/><span>{job.city}</span></p>
                            </div>
                        </div>
                        <div>{job.snippet}</div>
                    </>
                ))
            }
        </List>
      </div>
  );
}
