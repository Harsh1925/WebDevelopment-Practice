const PI = 3.14159;

const square = x => x * x;

const add = (x, y) => x + y;

// module.exports.add = add;
// module.exports.square = square;
// module.exports.PI = PI;

//--------------------------------

//exports.square = square
//exports.add = add
//exports.PI = PI

const math = {
    add: add,
    PI: PI,
    square: square,
}

module.exports = math;

