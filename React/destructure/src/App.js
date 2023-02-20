import React from "react";
//import Data from "./data";
import Cars from "./practice";

function App() {
    //const [cat, dog] = Data;
    const [honda, tesla, tata] = Cars;
    const [teslaTopColour, secColor] = tesla.coloursByPopularity;
    const { coloursByPopularity: [hondaTopColour] } = honda;
    const { coloursByPopularity: tataTopColour = "crimson" } = tata;
    const { topSpeed: teslaTopSpeed, zeroToSixty } = tesla.speedStats;
    const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
    const { topSpeed: tataTopSpeed = "169" } = tata.speedStats;
    console.log(tataTopSpeed)
    return (<table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
        <tr>
            <td>{tata.model}</td>
            <td>{tataTopSpeed}</td>
            <td>{tataTopColour}</td>
        </tr>
    </table>)
}

export default App;