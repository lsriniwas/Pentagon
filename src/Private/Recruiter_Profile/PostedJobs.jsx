import { Accordion, AccordionSummary, Button, LinearProgress, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { applicantDetails, fetchAllPostedByUser } from '../../Redux/RecruiterProfile/actions'
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ApplicantDetails } from './ApplicantDetails'
export const PostedJobs = ({ presentUser }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allJobs = useSelector(state => state.jobReducer.allJobs)
    const loading = useSelector(state => state.jobReducer.allJobs)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        dispatch(fetchAllPostedByUser(presentUser.formData.id))
    }, [])
    
    React.useEffect(() => {
        if (allJobs.length !== 0) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        }
    }, [])
    
        const handleOpen = (id) => {
          dispatch(applicantDetails(id))
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
 
    return (
        <div>
            {isLoading ?
                <div>
                    <LinearProgress color="secondary" />
                </div>
                :
                <>
                    {
                            allJobs?.map((item) => (
                                <Accordion key={item.id} style={{ margin: 5, padding: 10, outline: 'none' }} elevation={5}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <h3 > {item.jobtitle} </h3>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                            <p > {item.company}</p>
                                            </div>
                                            <ul>
                                                <li style={{ listStyle: "none" }}> {item.experience} </li>
                                                <li style={{ listStyle: "none" }}> {item.city} </li>
                                            </ul>
                                            <p> {item.date} </p>
                                            {
                                                item.applied?.map(item => 
                                                <Button 
                                                variant="contained" color="primary"
                                                key={item}
                                                style={{margin:10}}
                                                onClick={()=>handleOpen(item)}>Applicant Id:{item}</Button>)
                                            }
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                    }
                </>
            }
            {   
                open&&
                <div 
                style=
                {{
                position:'fixed',
                background:'rgba(0,0,0,0.5)',
                width:'100vw',
                height:'100%',
                top:0,left:0,
                display:'grid',
                placeItems:'center',
                boxSizing:'border-box',
                zIndex:1000
            }}
                >
                    <ApplicantDetails handleClose={handleClose} />
                </div>
            }
        </div>
    )
}
