import React from 'react'

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { SearchBar } from '../SearchBar/SearchBar'



const Dashboard = () => {
    const data = useSelector((state) => state.auth.userdata)
    const isAuth = useSelector((state) => state.auth.isAuth)
    const dispatch = useDispatch()

    console.log(data)
    return (
        <div>
            <SearchBar></SearchBar>
            
                    <div>
                    <div>{data.name}</div>
                    <div>{data.email}</div>
                    <div>{data.name}</div>
                    <div>{data.name}</div>
                    <div>{data.name}</div>
                    <div>{data.name}</div>
                    </div>
               
            
        </div>
    )
}

export default Dashboard
