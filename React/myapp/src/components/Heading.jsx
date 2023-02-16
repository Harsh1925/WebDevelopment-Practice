import React from 'react';

function Heading() {

    const date = new Date(2019, 1, 1, 21);  //1, 1, 06   //1, 1, 15  //1, 1, 21
    const currentTime = date.getHours();

    let greeting;

    const greetingStyle = {
        color: ""
    }

    if (currentTime < 12) {
        greeting = "Good Morning";
        greetingStyle.color = "red";
    }
    else if (currentTime < 18) {
        greeting = "Good Evening";
        greetingStyle.color = "green";
    }
    else {
        greeting = "Good Night";
        greetingStyle.color = "blue";
    }

    return <h1 className='heading' style={greetingStyle}>
        {greeting}
    </h1>

}

export default Heading;