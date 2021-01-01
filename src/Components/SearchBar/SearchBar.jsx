import React from 'react'
import styled from "styled-components"
import { SearchBar2 } from './SearchBar2'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import 'antd/dist/antd.css';
import { Input } from 'antd';


const SearchBarWrapper = styled.div`
width:600px;
margin:auto;
height:40px;
border:1px solid black;
border-radius:20px;
padding:10px;
display:flex;
position:relative;
`

const IconImage = styled.img`
height:20px;
padding-right:20px;
`




function SearchBar() {
    const { Search } = Input;
    const [open, setOpen] = React.useState(false);


    const useStyles = makeStyles((theme) => ({
        paper: {
            position: "absolute",
            margin: "auto",
            height: "200px",
            width: "100%",
            backgroundColor: "white",
            border: "2px solid #000",
            marginTop: "100px"

        }
    }));

    const handleCancel = () => {
        setOpen(false);
    };

    const classes = useStyles();





    return (
        <>
            <Search placeholder="Job title, skills" onClick={() => setOpen(true)} enterButton  style={{width:"50%", marginLeft:"25%", marginTop:"30px", borderRadius:"5px"}}/>
            <Modal className={classes.paper}
                open={open}
                onClose={handleCancel}
            >

                <SearchBar2 />


            </Modal>

        </>
    )
}


export { SearchBar }
