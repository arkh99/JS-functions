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

// const lufthansa = {
//     airline: "lufthansa",
//     code: "LH",
//     bookings: [],
// }


// const aircanada = {
//     airline: "Air Canada",
//     code: "AC",
//     bookings: [],
// }

// // a function for objects
// const book = function(flightnum, name) {
//     // console.log(`${name} booked a seat on ${this.airline} flight: ${this.code}${flightnum}`);
//     this.bookings.push({
//         flight: `${this.code}${flightnum}`,
//         name,
//     })
// }


// book.call(aircanada, 12345, "Alireza");
// book.call(aircanada, 12345, "Alireza");
// book.call(aircanada, 12345, "Alireza");

// book.call(lufthansa, 123456, "Mohsen")
// book.call(lufthansa, 123456, "Mohsen")
// book.call(lufthansa, 123456, "Mohsen")



// const arr = [987, "saam"];
// book.apply(aircanada, arr);
// book.call(aircanada, ...arr);


// the difference between call and apply method is that call receives arguments for the functuion with the object name but apply receives the arguments for the fucntion within an array


// bind method
// const booklh = book.bind(lufthansa);
// booklh(69, "mohsen");
// booklh(83, "alireza");
// booklh(51, "lmd;ma");

// console.log(lufthansa.bookings);
// console.log(aircanada.bookings);

// lufthansa.planes = 300;
// lufthansa.buyplane = function() {
//     console.log(this);

//     lufthansa.planes++
//     console.log(this.planes);
// };
 
// document.querySelector(".buy").addEventListener("click", lufthansa.buyplane.bind(lufthansa));
// in the event handler function the this keyword always points to the element in which the handler is atached to


// const addtax = (rate, value) => value + value * rate;
// const addvat = addtax.bind(null ,.23);
// console.log(addvat(1500));

// const addtax = function(rate) {
//     return function (value) {
//         console.log(value * rate / 100 + value);
//     }
// }

// const addvat = addtax(23);
// addvat(250);


/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀 */

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    awnsers: [0 , 0, 0 , 0],
    registerNewAnswer() {
        console.log("Enter your awnser");
        for (const x of this.options) {
            console.log(x);
        }
        const option = prompt("Your option?");
        if (option >= 0 && option <= 3) {
            this.awnsers[option]++;
        }
        else {
            console.log("please provide a valid option");
        }
        this.displayresults();
    },

    displayresults() {
        const type = prompt("choose between string or array");
        if (type === "array") {
            console.log(`The results are: ${this.awnsers}`);
        }
        else if (type === "string") {
            console.log(`The results are: ${this.awnsers.toString()}`);
        } else {
            console.log("please provide a valid type !");
        }
    }
}

document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));
