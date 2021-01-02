import React from "react"
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
        <div style={{ height: "500px", width: "782px", backgroundImage: `url('back1.jpg')`, margin:"auto",marginTop:"50px",textAlign:"center" }}>
           <div style={{height:'450px'}}>
            <h1>Browse & upload resume</h1>
            <h3>Upload your updated resume and you are done!</h3>
            <Upload {...props}>
                <Button onClick={()=>setSubmitted(true)} icon={<UploadOutlined />}>Upload Resume</Button>
            </Upload><br />
            <h6>Supported formats- pdf, doc, docx, rtf, txt files File size should not exceed 5 MB</h6>
            <h5>OR</h5>
            <h4>Forward your Resume to myresume@shine.com</h4>
           </div>
            <div style={{display:"flex", justifyContent:"space-between", height:"50px"}}>
                <button onClick={()=>props.handleback()} style={{width:"90px",  marginLeft:"30px", backgroundColor:"white", padding:"3px",borderRadius:"5px", border:"1px solid gray"}}>Previous</button>
                 {submitted==false && <button style={{ width:"90px", marginRight:"30px", backgroundColor:"white", padding:"3px",borderRadius:"5px", border:"1px solid gray"}} onClick={handleNext}>SKIP</button>}
                 {submitted==true && <button style={{ width:"90px", marginRight:"30px", backgroundColor:"white", padding:"3px",borderRadius:"5px", border:"1px solid gray"}} onClick={handleNext}>Next</button>}
                
                </div>

        </div>
    )
}

export { Register8 }

