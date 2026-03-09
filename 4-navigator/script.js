let positionLat = 10;
let positionLong = 20;

let addressLong = 40;
let addressLat = 60;

let sum = Math.sqrt(Math.pow(addressLat - positionLat, 2) + Math.pow(addressLong - positionLong, 2));
console.log(sum);
