import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addRecruiter, fetchRecruiters } from '../../Redux/RecruitRedux/action';
import styles from "./Recruiter.module.css"
import { UseSignUpDataHOOK } from './UseSignUpDataHOOK';

const location = [
    "Hyderabad",
    "Bangalore",
    "Bhopal",
    "Chennai",
    "Mumbai",
    "Goa",
    "Delhi",
    "Kolkata",
    "Kochi",
    "Lucknow"
  ];

const init = {
    name: "",
    email: "",
    contact: "",
    password: "",
    type: "",
    location:"",
    "company_name":""
};

const RecruiterSignUp = () => {
    const [value, setValue] = UseSignUpDataHOOK(init);
    const [error,setError]=useState(false)
    const history=useHistory()
    const dispatch=useDispatch()
    const list=useSelector(state=>state.recruiter.recruiterList)
    React.useEffect(() => {
        dispatch(fetchRecruiters())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {...value};    
        setValue(formData)
        // checking whether user already exists or not
        const temp=list.findIndex(item=>item.contact===value.contact||item.email===value.email)
        if(temp!==-1){
            setError(true)
        }
        else{
            setError(false)
            setValue(init)
            dispatch(addRecruiter(formData))
            dispatch(fetchRecruiters())
            const location = {
                pathname: '/recruiter',
                state: {formData}
              }
            history.push(location)
        }
      };
    return (
        <div className={styles.recruitersignupformdata}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={value.name}
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={value.email}
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={value.password}
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <input type="number1" disabled name="countrycode" value="+91" />
                    <input
                        type="number2"
                        placeholder="Mobile No."
                        name="contact"
                        value={value.contact}
                        onChange={e => setValue({ [e.target.name]: e.target.value })}
                    />
                </div>

                <div className={styles.radio} >
                    <div>
                        <input
                            type="radio"
                            value="Company"
                            name="type"
                            checked={value.type === "Company"}
                            onChange={e => setValue({ [e.target.name]: e.target.value })}
                        />
                    </div>
                    <p>Company</p>
                    <div >
                        <input
                            type="radio"
                            value="Consultant"
                            name="type"
                            checked={value.type === "Consultant"}
                            onChange={e => setValue({ [e.target.name]: e.target.value })}
                        />
                    </div>
                    <p>
                        Consultant
                    </p>
                </div>
                 <p>Location</p>
                 <div>
                 <select name="location"
                         value={value.location}
                        onChange={e=>setValue({[e.target.name]:e.target.value})}>
                        <option value="">Select Location</option>
                        {location.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                 </div>
                 <div>
                     <input type="submit" value="Sign Up"/>
                 </div>
            </form>
            {
                error && 
                <div className={styles.error}>
                    User Already exist
                </div>
            }
        </div>
    )
}

export { RecruiterSignUp }