import React from "react"
import TextField from '@material-ui/core/TextField';


const Register1 =props=>{

    const[name,setName]=React.useState("")
    const[email,setEmail]=React.useState("")
    const[mobile,setMobile]=React.useState("")
    const[password,SetPassword]=React.useState("")

    const handleNext=()=>{
        const payload={
            name:name,
            email:email,
            contact:mobile,
            password:password
        }
        props.handleSubmit(payload)
    }

        return (
            <>
            <div style={{
                height:"500px", width:"782px",
                backgroundImage:`url('back1.jpg')`, 
                margin:"auto",display:"flex",boxShadow:'0 0 12px 0 rgba(132,132,132,0.3)'}}>
                 <div style={{display:'grid',placeItems:'center',width:'40%'}}>
                    <div style={{width:'79px',display:'block',height:"101px",background:'url(https://static1.shine.com/c/s1/bundles/registration_sprite-1cf96c8.png)', backgroundPosition: '-13px -17px no-repeat' }}>
                    </div>
                    <div style={{marginTop:-300,fontWeight:700}}>
                        <h1 style={{fontWeight:700,textAlign:'center'}}>Let’s get started, tell us about yourself.</h1>
                    <p style={{textAlign:'center'}}>Don’t worry, we won’t send you spam</p>
                    </div>
                 </div>
                 <div style={{height:'100%',borderLeft:'1px solid #dfdfdf',padding:1,}}></div>
                    <div style={{padding:'40px 40px',width:'60%'}}>
                    <TextField required style={{width:'100%',marginBottom:10}} id="outlined-basic" label="Name"  size="small" variant="outlined" onChange={(e)=>{setName(e.target.value)}} /><br/>
                    <TextField required style={{width:'100%',marginBottom:10}} id="outlined-basic"size="small" label="Email" variant="outlined" onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                    <TextField required style={{width:'100%',marginBottom:10}} id="outlined-basic" size="small"label="Mobile Number" variant="outlined" onChange={(e)=>{setMobile(e.target.value)}} /><br/>
                    <p >
                    Your details will be visible only to genuine recruiters
                    </p>
                    <TextField required style={{width:'100%',marginBottom:10}} id="outlined-basic"size="small" label="Password" variant="outlined" onChange={(e)=>{SetPassword(e.target.value)}} /><br/>
                    <div style={{width:'100%',marginBottom:10,display:'flex',flexDirection:'row-reverse'}}>
                    <button onClick={handleNext} style={{borderRadius:'5px',color:'white',border:'none',outline:'none',backgroundImage:'linear-gradient(-136deg, #a194dd 0%, #80aad7 100%)',width:'150px',height:'45px',padding:'0px 10px',textAlign:'center',lineHeight:'-50'}}>Continue</button>
                    </div>
                    <div style={{display:'flex'}}>
                        <img src={process.env.PUBLIC_URL+'/shine_images/faang.png'} width="100%" alt=""/>
                    </div>
                    </div>
            </div>
            <div style={{height:"80px", width:"782px", margin:"auto",marginTop:"20px",padding:'8px',boxShadow:'0 0 12px 0 rgba(132,132,132,0.3)'}}>
                    <div>By registering, you agree to our terms & conditions & privacy policy.</div>
                    <div>
                    You hereby authorize Shine.com and/or its representatives to call you, e-mail you, or SMS you. This consent will supersede any registration for any Do Not Call (DNC) / National Do Not Call (NDNC).
                    </div>
            </div>
            </>
        )
    }

export { Register1 }