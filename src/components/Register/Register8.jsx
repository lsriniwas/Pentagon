import React, { Component } from "react"
import { connect } from "react-redux"
import { Regreq } from "../../redux/actions"
import { useSelector } from "react-redux"
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



const Register8 = props => {
    const[submitted,setSubmitted]=React.useState(false)


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            margin: "auto",
            justifyContent: "center",
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: "max-content",
                padding: "10px"
            },
        },
    }));
    const classes = useStyles();

    const handleNext = () => {
        const payload = {
            "resume":"n/a"

        }
        console.log(payload)
        props.handleSubmit(payload)
    }

    return (
        <div style={{ height: "500px", width: "782px", backgroundImage: `url('back1.jpg')`, marginLeft: "100px" }}>
            <h1>Browse & upload resume</h1>
            <h3>Upload your updated resume and you are done!</h3>
            <Upload {...props}>
                <Button onClick={()=>setSubmitted(true)} icon={<UploadOutlined />}>Upload Resume</Button>
            </Upload><br />
            <h6>Supported formats- pdf, doc, docx, rtf, txt files File size should not exceed 5 MB</h6>
            <h5>OR</h5>
            <h4>Forward your Resume to myresume@shine.com</h4>
           
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <button onClick={()=>props.handleback()}>BACK</button>
                 {submitted==false && <button onClick={handleNext}>SKIP</button>}
                 {submitted==true && <button onClick={handleNext}>Next</button>}
                
                
                </div>

        </div>
    )
}

export { Register8 }

