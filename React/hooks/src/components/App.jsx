import React from "react";

// function App() {

//   const [count, setCount] = React.useState(0);

//   function increase() {
//     setCount(count + 1)
//   }
//   function decrease() {
//     setCount(count - 1)
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={decrease}>-</button>
//       <button onClick={increase}>+</button>
//     </div>
//   )
// }

function NewApp() {

  //setInterval(timing, 1000)

  const [time, setTime] = React.useState(new Date().toLocaleTimeString())

  function timing() {
    let time = new Date().toLocaleTimeString();
    setTime(time)
  }

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={timing}>Get Time</button>
    </div>
  )
}

export default NewApp;

