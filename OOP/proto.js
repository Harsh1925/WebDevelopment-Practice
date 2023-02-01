function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);

console.log(color1.hex());

//-----------------------------------------------------

class newColor {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    rgb() {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`;
    }
    hex() {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const color3 = new newColor(40, 50, 60);
const color4 = new newColor(0, 0, 0);

//---------------------------------------------------------

class Pet {
    constructor(name, age) {
        console.log('IN PET CONSTRUCTOR!');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('IN CAT CONSTRUCTOR!');
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWWW!!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOOF!!';
    }
    eat() {
        return `${this.name} scarfs his food!`;
    }
}

const monty = new Cat("monty", 9);
console.log(monty.eat());
console.log(monty.meow());