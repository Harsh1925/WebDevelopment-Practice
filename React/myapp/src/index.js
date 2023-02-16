import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as calc from './components/calc';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const groot = ReactDOM.createRoot(document.getElementById("groot"))

const customStyle = {
  color: "violet",
  fontSize: "21px"
}

customStyle.fontSize = "25px"

root.render(
  <div>
    <h1 style={{ color: "red" }}>This is from ReactJS</h1>
    <p className='para'>Welcome back to React ladies and gentleman!!</p>
    <p style={customStyle}>Your Lucky number is {Math.floor(Math.random() * 10) + 1}</p>
    <App />
  </div>)

groot.render(
  <div>
    <ul>
      <li>{calc.add(1, 2)}</li>
      <li>{calc.multiply(2, 3)}</li>
      <li>{calc.substract(7, 2)}</li>
      <li>{calc.divide(5, 2)}</li>
    </ul>
  </div>
)



