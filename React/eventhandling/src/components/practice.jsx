import React from "react";

const cats = ["meow", "jemmy", "fuslie"]

const dogs = ["rae", "miyoung", "wendy"]

const animals = [...cats, "mika", "nabi", ...dogs]

function looping(objects) {

    const updated = objects.map(revName => revName + " ");
    return updated;

}


function print() {

    return (<div>
        <h2>{looping(cats)}</h2>
        <h2>{looping(dogs)}</h2>
        <h2>{looping(animals)}</h2>
    </div>)
}

export default print;