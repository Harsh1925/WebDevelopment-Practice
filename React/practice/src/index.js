import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <h1>oknnnn</h1>
)

// const numbers = [5, 1, 32, 20, 12]

// // --------------------Map Function---------------------------------

// // function double(x) {
// //   return x * 2;
// // }

// //  const newNumbers = numbers.map(double);

// // ------------------------------------------------------

// // =========================================================

// // var newNumbers = [];

// // numbers.forEach(function (x) { newNumbers.push(x * 2) })

// // ============================================================

// const newNumbers = numbers.map(function (x) { return x * 2 })

// const okNum = numbers.map(x => x * x)

// //------------------------Filter Function---------------------

// // const filNumbers = [];

// // numbers.forEach(function (x) {
// //   if (x < 13) {
// //     filNumbers.push(x)
// //   }
// // })

// // -------------------------------------------------------------------

// const filNumbers = numbers.filter(function (x) { return x < 13 })

// //-------------------------Reduce Function--------------------------

// // var reducedNumber = 0;

// // numbers.forEach(function (currNum) {
// //   reducedNumber += currNum;
// // })

// //-------------------------------------------------------------------

// const reducedNumber = numbers.reduce(function (accumulator, currNum) {
//   return accumulator + currNum;
// })

// const oknewNumber = numbers.reduce((acc, curr) => acc + curr);

// //---------------------------Find Function---------------------------

// const foundNumber = numbers.find(function (x) {
//   return x > 10
// })

// const foundIndex = numbers.findIndex(function (x) {
//   return x > 10
// })

// console.log(newNumbers)
// console.log(filNumbers)
// console.log(reducedNumber)
// console.log(foundNumber)
// console.log(foundIndex)
// console.log(okNum)
// console.log(oknewNumber)

// root.render(
//   <div>
//     <h1>Hello World</h1>
//     <h3>{newNumbers}</h3>
//     <h3>{filNumbers}</h3>
//     <h3>{reducedNumber}</h3>
//     <h3>{foundNumber}</h3>
//     <h3>{foundIndex}</h3>
//     <h3>{okNum}</h3>
//     <h3>{oknewNumber}</h3>
//   </div>
// );

