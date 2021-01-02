import React from "react"
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import 'date-fns';



const Register4A = props => {
    const [company, setCompany] = React.useState(false)
    const [designation, setDesignation] = React.useState(false)
    const [selectedDate1, setSelectedDate1] = React.useState(new Date('2014-08-18T21:11:54'))
    const [selectedDate2, setSelectedDate2] = React.useState(new Date('2021-01-02T21:11:54'))
    const [lakh, setLakh] = React.useState(false)
    const [thousand, setThousand] = React.useState(0)
      
    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };
    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
    };

    const handleSubmit=()=>{
        const payload={
            company:true,
            company_Name:company,
            designation:designation,
            from:selectedDate1,
            till:selectedDate2,
            salary:lakh+" "+thousand,            
        }
        props.handleSubmit(payload)
    }

    return (
        <div style={{ height: "500px", width: "782px", backgroundImage: `url('back1.jpg')`, margin:"auto",marginTop:"50px",textAlign:"center" }}>
            <h1>Tell us in which company you are working?</h1>
            <h3>If you are not presently working, please enter the company you worked with most recently</h3>
            <TextField id="outlined-basic" label="Company" variant="outlined" onChange={(e) => { setCompany(e.target.value) }} /><br />
            {
                typeof(company) =="string" && <div>
                    <TextField id="outlined-basic" label="Job Designation or Job Title" variant="outlined" onChange={(e) => { setDesignation(e.target.value) }} /><br />
                </div>

            }
            {
                typeof(designation) =="string" && <div>
                    <h5>How long have you been working here</h5>
                    <div style={{ display: "flex", marginLeft:"170px" }}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="From"
                                value={selectedDate1}
                                onChange={handleDateChange1}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider> 
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Till"
                                value={selectedDate2}
                                onChange={handleDateChange2}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
            }
            {
                typeof(designation) =="string" && <div style={{textAlign:"center",marginTop:"10px"}}>
                    <h2>What's your current Annual Salary?</h2>
                    <div style={{display:"flex",marginLeft:"200px"}}>
                        <TextField id="outlined-basic" label="Lakh" variant="outlined" onChange={(e) => { setLakh(Number(e.target.value)) }} />
                        <TextField id="outlined-basic" label="Thousand" variant="outlined" onChange={(e) => { setThousand(Number(e.target.value)) }} /><br />
                    </div>
                </div>
            }
            <div style={{ display: "flex", justifyContent: "space-between",position:"fixed", top:500 }}>
                <div style={{display:"hidden"}}></div>
                 <button style={{marginTop:"200px", marginRight:"30px", backgroundColor:"white", padding:"5px",borderRadius:"5px", border:"1px solid gray"}} onClick={()=>{handleSubmit()}}>NEXT</button>
                
            </div>
        </div>
    )
}


export { Register4A }