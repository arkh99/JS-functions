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

createBooking("LH123");
createBooking("LH123", undefined, 1500);






