/*
const bmwX3Price = 100000;
const budget = 20000;

let message;
if(budget > bmwX3Price) {
    message = 'BMW';
} else {
    message = 'Велосипед';
}

console.log(`Я хочу купить ${message}`);

10 > 0 ? console.log('Больше 0') : console.log('Не больше');
if(10 > 0) {
    console.log('Больше 0')
} else {
    console.log('Не больше');
}
console.log(`Я хочу купить ${message}`);


const str = 10 > 0 ? 'Больше 0' : 'Не больше';
console.log(str);


console.log(`Я хочу купить ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`);
*/

const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message = budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

console.log(`Я хочу купить ${message}`);

let message2 = budget > bmwX3Price ? 'BMW' : 'Велосипед';
console.log(`Я хочу купить ${message2}`);


