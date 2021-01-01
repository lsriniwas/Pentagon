import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { SearchBar2 } from './SearchBar2'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


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


const Input = styled.input`
border:none;
outline:none;
flex:1;
`

function SearchBar() {

    const [open, setOpen] = React.useState(false);    
    

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: "absolute",
            margin: "auto",
            height: "200px",
            width: "100%",
            backgroundColor:"white",
            border: "2px solid #000",
            marginTop:"100px"

        }
    }));

    const handleCancel = () => {
        setOpen(false);
    };

    const classes = useStyles();





    return (
        <>
            <SearchBarWrapper>
                <IconImage
                    src="https://www.flaticon.com/svg/static/icons/svg/269/269128.svg"></IconImage>
                <Input onClick={() => setOpen(true)}></Input>
            </SearchBarWrapper>

            <Modal className={classes.paper}
                open={open}
                onClose={handleCancel}
            >
                
                    <SearchBar2/>
                

            </Modal>

        </>
    )
}


export { SearchBar }
