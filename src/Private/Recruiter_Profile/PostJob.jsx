import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { CustomHook } from './CustomHook'

const init={
        "experience":"",
        "skills": "",
        "qualification_required": "",
        "industry": "",
        "recruiter_id":"",
        "jobtitle": "",
        "company": "",
        "city": "",
        "state": "",
        "date": new Date().toDateString(),
        "snippet":"",
        "applied": []
}

const PostJob = () => {
    const [value,setValue]=CustomHook(init)
    const dispatch=useDispatch()
    const handleFormSubmit=()=>{
        dispatch()
    }
    return (
        <div>
            PostJob
            <form>
                <div>
                    <label htmlFor="">Job Title</label>
                    <input value={value.jobtitle} type="text" name="jobtitle" onChange={e=>setValue({[e.target.name]:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input value={value.snippet} type="text" name="snippet" onChange={e=>setValue({[e.target.name]:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Company Name</label>
                    <input value={value.company} type="text" name="company" onChange={e=>setValue({[e.target.name]:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">City</label>
                    <input value={value.city} type="text" name="city" onChange={e=>setValue({[e.target.name]:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">State</label>
                    <input value={value.state} type="text" name="state" onChange={e=>setValue({[e.target.name]:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Experience</label>
                    <input value={value.experience} type="text" name="experience" onChange={e=>setValue({[e.target.name]:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Qualification Required</label>
                    <input value={value.qualification_required} type="text" name="qualification_required" onChange={e=>setValue({[e.target.name]:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Skills</label>
                    <input value={value.skills} type="text" name="skills" onChange={e=>setValue({[e.target.name]:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Industry</label>
                    <input value={value.industry} type="text" name="industry" onChange={e=>setValue({[e.target.name]:e.target.value})} />
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export { PostJob }


