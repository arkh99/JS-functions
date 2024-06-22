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

checkin(flight, copy); 
console.log(flight);
console.log(alireza);



