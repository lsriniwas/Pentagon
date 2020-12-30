import React, { useState } from 'react'
import styles from "./Recruiter.module.css"
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
    root:props=>({
        "& .one":{
            display:props.state?"flex":"none"
        },
        "& .two":{
            display:props.state1?"flex":"none"
        },
        "& .three":{
            display:props.state2?"flex":"none"
        },
        "& .four":{
            display:props.state3?"flex":"none"
        }
    })

}));

const Faq = () => {
    const [state,setState]=useState(false)
    const [state1,setState1]=useState(false)
    const [state2,setState2]=useState(false)
    const [state3,setState3]=useState(false)
    
    const classes =useStyles({state,state1,state2,state3})
    return (
        <div className={`${styles.faq} ${classes.root}`}>
           <h2>Frequently Asked Questions</h2>
           <div className={styles.faqQuestions}>
             <label onClick={()=>setState(prev=>!prev)}>1.How can I request for a demo session?</label>
             <div className="one">You need to fill your name, email and phone number along with your location details. Our recruitment solution experts will get in touch with you shortly.</div> 
           </div>
           <div className={styles.faqQuestions}>
             <label  onClick={()=>setState1(prev=>!prev)}>2.How can I make payment?</label>
             <div className="two">After successful registration or sign in, select your preferred plan and you will be redirected to the payment page. You can check your order details and make payment through money wallets and bank accounts. Once your payment is successfully made, you can start hiring candidates.</div> 
           </div>
           <div className={styles.faqQuestions}>
             <label  onClick={()=>setState2(prev=>!prev)}>3.How can I get customized plan basis my requirement?</label>
             <div className="three">To get your plan customized, contact our recruitment specialist at 080-47105555. You can also fill the demo form for a callback request.
             </div>
           </div>
           <div className={styles.faqQuestions}>
             <label  onClick={()=>setState3(prev=>!prev)}>4.What should I do if my payment failed and money deducted from my bank account?</label>
             <div className="four">There are numerous reasons why a payment might fail. If your transaction was not authorized, you would receive your payment back into your bank accounts. You can also contact your payment provider for the information about why the payment was declined.</div> 
           </div> 
        </div>
    )
}

export {Faq}
