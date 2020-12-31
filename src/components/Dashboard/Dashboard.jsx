import React from 'react'

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { SearchBar } from '../SearchBar/SearchBar'



const Dashboard = () => {
    const data = useSelector((state) => state.userdata)
    const isAuth = useSelector((state) => state.isAuth)
    const dispatch = useDispatch()

    
    return (
        <div>
            <SearchBar></SearchBar>
            {
              data &&  data.map((item)=>(
                    <div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <div>{item.name}</div>
                    <div>{item.name}</div>
                    <div>{item.name}</div>
                    <div>{item.name}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard
