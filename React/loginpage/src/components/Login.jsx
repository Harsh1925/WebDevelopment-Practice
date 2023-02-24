import React from "react"
import Input from "./Input"
import isLoggedIn from "./App"

function Login(props) {
    return (<form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!props.isLoggedIn && <Input type="confirm" placeholder="Confirm Password" />}
        <button type="submit">{props.isLoggedIn ? "Login" : "Register"} </button>
    </form>
    )
}

export default Login;