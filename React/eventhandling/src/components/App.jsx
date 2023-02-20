import React from "react";

function App() {

    const [ogText, setText] = React.useState("Hello");
    const [isOver, setOver] = React.useState(false);
    const [name, setname] = React.useState("");
    const [headText, setheadText] = React.useState("Hello");

    function isMouseon() {
        setOver(true)
    }

    function notonButton() {
        setOver(false)
    }

    function changeText(event) {
        //setText("Submitted");
        setText(`Hello ${name}`)
        setheadText("Submitted")

        event.preventDefault();
    }

    function changeName(event) {
        setname(event.target.value);
        setheadText(`Hello ${event.target.value}`);

    }

    return (
        <div className="container">
            <h1>{ogText}</h1>
            <form onSubmit={changeText}>
                <input type="text" placeholder="What's your name?"
                    onChange={changeName}
                    value={name}
                />
                <button
                    style={{ backgroundColor: isOver ? "black" : "white" }}
                    onClick={changeText}
                    onMouseOver={isMouseon}
                    onMouseOut={notonButton}
                >Submit</button>
            </form>
            <h1>{headText}</h1>
        </div>
    )
}

export default App;