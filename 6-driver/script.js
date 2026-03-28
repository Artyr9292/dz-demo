function logName() {
    console.log(`Мое имя Антон`);
}

const a = logName();
logName();


function logNames(names, surname) {
    console.log(`Мое имя ${names} ${surname}`);
}
logNames('Антон', 'Ларичев');


function countDepositSum(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
    
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1, 2);

console.log(countDepositSum(1000, 48, 0.10));


