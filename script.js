'use strict';

const bookings = []
const createBooking = function (flightnum, passnum = 1, price = 199 * passnum) {
    const booking = {
        flightnum,
        passnum,
        price
    } 
    console.log(booking);
    bookings.push(booking);
}


const flight = "AB123";
const alireza = {
    name: "Alireza Khoshnami",
    passport: 123456
}
// first making a copy of out object
const copy = { ...alireza}

const checkin = function (flightnum, passenger) {
    flightnum = "BC456";
    passenger.name = "Mr. " + passenger.name;
    if (passenger.passport === 123456) {
        console.log("checked in");
    }
    else {
        alert("wrong passport number");
    }
}

// checkin(flight, copy); 


// all function in js are first class citizens means that they are just values
// higher order functions are the functions that receive functions as arguments or return functions as results or both
// the function that passed as argument to a higher order function is called callback function

const oneword = function (str) {
    return str.replaceAll(" ", "").toLowerCase();
}

const firstupper = function (str) {
    const newstr = str.replace(str[0], str[0].toUpperCase())
    return newstr;
}

const higher = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
}

// higher("alireza", firstupper);

// const high5 = function () {
//     console.log("👋");
// }

// document.body.addEventListener("click", high5)

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);

//     }
// }


// arrow function returning an anonymous arrow function
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet("chetori")("Alireza");

const lufthansa = {
    airline: "lufthansa",
    code: "LH",
    bookings: [],
}


const aircanada = {
    airline: "Air Canada",
    code: "AC",
    bookings: [],
}

// a function for objects 
const book = function(flightnum, name) {
    // console.log(`${name} booked a seat on ${this.airline} flight: ${this.code}${flightnum}`);
    this.bookings.push({
        flight: `${this.code}${flightnum}`,
        name,
    })
}


book.call(aircanada, 12345, "Alireza");
book.call(aircanada, 12345, "Alireza");
book.call(aircanada, 12345, "Alireza");

book.call(lufthansa, 123456, "Mohsen")
book.call(lufthansa, 123456, "Mohsen")
book.call(lufthansa, 123456, "Mohsen")



const arr = [987, "saam"];
// book.apply(aircanada, arr);
book.call(aircanada, ...arr);
console.log(aircanada.bookings);

// the difference between call and apply method is that call receives arguments for the functuion with the object name but apply receives the arguments for the fucntion within an array


