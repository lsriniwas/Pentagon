import React from 'react'
import styles from '../../Styles/JobListing.module.css'
import SearchIcon from '@material-ui/icons/Search';

const JobSearch = ({ value, setValue, handleSubmit }) => {
    return (
        <div style={{display:"flex"}}>
        <div className={styles.search_wrapper}>
            <input 
                type="text"
                placeholder="Job / Company / Location"
                value={value}
                onChange={e => setValue(e.target.value)}
                className={styles.search_input}
                />
            <span className={styles.search_icon} onClick={handleSubmit}>
                <SearchIcon style={{ color : 'white' }} />
            </span></div>

            <div style={{marginLeft:"500px"}}>FILTER</div>
        </div>
    )
}

export default JobSearch
