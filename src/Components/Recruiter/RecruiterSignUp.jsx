import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecruiters } from '../../Redux/RecruitRedux/action';
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
    const dispatch=useDispatch()
    const list=useSelector(state=>state.recruiter.recruiterList)
    React.useEffect(() => {
        dispatch(fetchRecruiters())
    }, [dispatch])

    return (
        <div className={styles.recruitersignupformdata}>
            <form>
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
                        name="phone"
                        value={value.phone}
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
                 <select name="day"
                         value={value.day}
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
        </div>
    )
}

export { RecruiterSignUp }