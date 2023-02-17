import React from "react";

var isLoggedIn = false;

function renderConditionally() {
    if (isLoggedIn) {
        return <h1>Hello! You are logged In!!</h1>
    }
    else {
        return (
            <form className="form">
                <input type="text" name="username" id="username" placeholder="Username" />
                <input type="text" name="password" id="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        );
    }
}

function App() {
    return <div className="container">{renderConditionally()}</div>
}

export default App;
