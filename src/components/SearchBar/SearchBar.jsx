import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {useThrottle} from 'use-throttle' 
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

const RightIcon = styled.div`
display:flex;
flex: 0 0 auto;
padding-right:10px;
`

const Spinner = styled.div`
border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
 margin-left:10px;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

const Input = styled.input`
border:none;
outline:none;
flex:1;
`

const SuggestionBox=styled.div`
margin:auto;
width:600px;
display:${({len})=>(len!==0? "flex":"none")};
flex-direction:column;
flex:0 0 auto;
max-height:150px;
overflow:auto;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;
border:1px solid black;

& *{
    flex:1;
    padding:5px;
    text-align:left;
    padding-left:30px;
}

& :nth-child(${({active})=>active}){
    background:gray;
    color:white;
    font-weight:bold;
}
`

function SearchBar() {
    
    

    

    return (
        <>
    <SearchBarWrapper>
        <IconImage
            src="https://www.flaticon.com/svg/static/icons/svg/269/269128.svg"></IconImage>
        <Input onClick={alert("as")}></Input>
       
    </SearchBarWrapper>
    
    </>
    )
}


export { SearchBar }
