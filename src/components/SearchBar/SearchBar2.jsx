import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {useThrottle} from 'use-throttle' 
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import db from "../../utils/db"
import db4 from "../../utils/db4"
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux"
import { searchReq } from "../../redux/jobs/actions"

const SearchBarWrapper = styled.div`
width:25%;
margin:auto;
height:40px;
border:1px solid black;
border-radius:20px;
padding:10px;
display:flex;
position:relative;
`

const SuggestionBox=styled.div`
margin:auto;
width:100%;
display:${({len})=>(len!==0? "flex":"none")};
flex-direction:column;
flex:0 0 auto;
max-height:150px;
overflow:auto;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;
border:1px solid black;
background:#FFFFFF;

& *{
    flex:1;
    padding:5px;
    text-align:left;
    padding-left:30px;
}

& :nth-child(${({active})=>active}){
    background:#00FFFF;
    color:white;
    font-weight:bold;
}
`

function SearchBar2() {
    const [query, setQuery] = useState("")
    const [active,setActive]=useState(0)
    const [location, setLocation] = useState("")
    const [experience, setExperience] = useState("")
    const [loading, setLoading] = useState(false)
    const [suggestion, setSuggestions] = useState([])
    const [suggestion2, setSuggestions2] = useState([])
    const throttledText=useThrottle(query,1000)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.app.data)



    // useEffect(()=>{
    //     setQuery(throttledText)       
    // },[throttledText,setQuery])

    // const handleInputChange = (e) => {
    //     setQ(e.target.value)
    //    setLoading(true)
    //     setTimeout(()=>{
    //         setLoading(false)
    //     },1000)
    // }
    
    useEffect(()=>{
        if(query===""){
          setSuggestions([])
        }
        else {
          var out=db.filter((item)=>item.title.toLowerCase().indexOf(query)!==-1? true:false
          
          )
          .map((item)=>item.title)
          setSuggestions(out)
        
        
        for(var i=0;i<out.length-1;i++){
            if(out[i]==out[i+1]){
            out.splice(i+1, 1)
            i--
            }
        }}
        console.log(out)
        setLoading(false)
      },[query])

      useEffect(()=>{
        if(location===""){
          setSuggestions2([])
        }
        else {
          var out=db4.filter((item)=> item.city.toLowerCase().indexOf(location)!==-1? true:false
          
          )
          .map((item)=>item.city)
          setSuggestions2(out)    
        }
        console.log(out)
        setLoading(false)
      },[location])

      const handleSubmit=()=>{
          const payload={
              query:query,
              location:location,
              exp:experience
          }
          console.log(payload)
          dispatch(searchReq(payload))
      }

    

    return (
        <div style={{display:"flex", justifyContent:"space-evenly", backgroundColor:"white", width:"100%",height:"100%"}}>
            <div style={{width:"20%",marginTop:"75px"}}>
            <TextField id="outlined-basic" label="Job Title,Skills" value={query} variant="outlined" onChange={(e)=>{setQuery(e.target.value)}} style={{width:"100%"}} />
    {
        !loading && <SuggestionBox active={active} len={suggestion.length}>{suggestion.map((item,index)=>
            (<div 
                onMouseOver={()=>setActive(index+1)}
                onClick={()=>setQuery(item)}
                >{item}</div>))}</SuggestionBox>
    }
    </div>
    <div style={{width:"20%",marginTop:"75px"}}>
    <TextField id="outlined-basic2" label="Location" variant="outlined" value={location} onChange={(e)=>{setLocation(e.target.value)}} style={{width:"100%"}} />
    {
        !loading && <SuggestionBox active={active} len={suggestion2.length}>{suggestion2.map((item,index)=>
            (<div 
                onMouseOver={()=>setActive(index+1)}
                onClick={()=>setLocation(item)}
                >{item}</div>))}</SuggestionBox>
    }
    </div>
    <FormControl variant="outlined" style={{width:"20%",marginTop:"75px"}}>
        <InputLabel id="demosadsd-simple-select-outlined-label">Experience (Years)</InputLabel>
    <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={experience}
          onChange={(event)=>setExperience(event.target.value)}
          label="Experience (Years)"

        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={1}>1 Year</MenuItem>
          <MenuItem value={2}>2 Years</MenuItem>
          <MenuItem value={3}>3 Years</MenuItem>
          <MenuItem value={4}>4 Years</MenuItem>
          <MenuItem value={5}>5 Years</MenuItem>
          <MenuItem value={6}>6 Years</MenuItem>
          <MenuItem value={7}>7 Years</MenuItem>
          <MenuItem value={8}>8 Years</MenuItem>
          <MenuItem value={9}>9 Years</MenuItem>
          <MenuItem value={10}>10 Years</MenuItem>
          <MenuItem value="10+">10+ Years</MenuItem>          
        </Select>
        </FormControl>

        <button style={{height:"50px",marginTop:"75px", width:"10%"}} onClick={()=>handleSubmit()}>SUBMIT</button>
    
    </div>
    )
}


export { SearchBar2 }
