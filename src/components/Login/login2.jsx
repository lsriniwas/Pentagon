import React, { Component } from "react"
import { connect } from "react-redux"
import { Loginreq } from "../../redux/actions"
import { Route, Redirect } from "react-router-dom"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { loginreq } = this.props
        const { username, password } = this.state
        loginreq(username,password)

    }

    render() {
        const { username, password } = this.state
        const { isAuth,token } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        name="username"
                        placeholder="User Name"
                        onChange={this.handleChange} />
                    <br />
                    <input
                        type="text"
                        value={password}
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange} />
                        <br/>
                    <input type="submit" value="submit" />
                </form>
                { isAuth ? "LOGGED IN" : "LOGGED OUT"}
        {isAuth ?  <Redirect to="/" />:""}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        token: state.token,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginreq:(uname,pass)=>dispatch(Loginreq(uname,pass)),
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)