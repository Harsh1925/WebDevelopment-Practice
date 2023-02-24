import React from "react";
import Login from "./Login"

var isLoggedIn = true;

// function renderConditionally() {
//     if (isLoggedIn) {
//         return <h1>Hello! You are logged In!!</h1>
//     }
//     else {
//         return (
//             <Login />
//         );
//     }
// }

function App() {
    return <div className="container">
        {
            isLoggedIn ? <h1>Hello & Logged IN</h1> : <Login isLoggedIn={isLoggedIn} />
        }
        {
            isLoggedIn ? <Login isLoggedIn={isLoggedIn} /> : null
        }

    </div>
}

export default App;
