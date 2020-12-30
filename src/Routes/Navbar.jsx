import React from "react"
import { NavLink } from "react-router-dom"



const link = [
    {
        to: "/register",
        title: "Register"
    },
    {
        to: "/login",
        title: "Login"
    }
]

function Navbar() {
    return (
        <div style={{marginBottom:"50px"}}>

            <a>
                {link.map((link) => (
                    <NavLink
                        exact
                        style={{ padding: 10 }}
                        activeStyle={{ fontWeight: "bold", comor: "red" }}
                        key={link.to}
                        to={link.to}
                    >
                        {link.title}
                    </NavLink>
                ))}
            </a></div>
    )
}

export { Navbar }