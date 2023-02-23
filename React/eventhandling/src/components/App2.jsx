import React from "react";

// function App2() {

//     const [fname, setfName] = React.useState("")
//     const [lname, setlName] = React.useState("")

//     function changefName(event) {
//         setfName(event.target.value)
//     }

//     function changelName(event) {
//         setlName(event.target.value)
//     }

//     return (
//         <div className="container">
//             <h1>Hello {fname} {lname}</h1>
//             <form>
//                 <input name="fName" placeholder="First Name" type="text"
//                     onChange={changefName}
//                     value={fname}
//                 />
//                 <input name="lName" placeholder="Last Name" type="text"
//                     onChange={changelName}
//                     value={lname}
//                 />
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

function App2() {

    const [fullName, setFullName] = React.useState({
        fname: "",
        lname: "",
        email: ""
    })

    function updateFullName(event) {

        // const newValue = event.target.value;
        // const inputName = event.target.name;

        const { value, name } = event.target

        setFullName(prevValue => {

            // if (name === 'fname') {
            //     return {
            //         fname: value,
            //         lname: prevValue.lname,
            //         email: prevValue.email
            //     }
            // }

            // else if (name === 'lname') {
            //     return {
            //         fname: prevValue.fname,
            //         lname: value,
            //         email: prevValue.email
            //     }
            // }

            // else if (name === 'email') {
            //     return {
            //         fname: prevValue.fname,
            //         lname: prevValue.lname,
            //         email: value
            //     }
            // }

            return {
                ...prevValue,
                [name]: value
            }
        }
        )
    }

    return (
        <div className="container">
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <h3>{fullName.email}</h3>
            <form>
                <input name="fname" placeholder="First Name" type="text"
                    onChange={updateFullName}
                    value={fullName.fname}
                />
                <input name="lname" placeholder="Last Name" type="text"
                    onChange={updateFullName}
                    value={fullName.lname}
                />
                <input name="email" placeholder="Email" type="text"
                    onChange={updateFullName}
                    value={fullName.email}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App2;