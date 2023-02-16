import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Header from "./header"

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
    )
}

function App() {
    return (
        <div>
            <Header />
            <h1 className="heading">My Contacts</h1>
            <Avatar img="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8" />
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
