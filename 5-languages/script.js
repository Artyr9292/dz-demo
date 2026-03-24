//6.4. Оператор нулевого слияния
let age = 0;

console.log(age || 18);
console.log(age ?? 18);


//6.5. Упражнение - Проверка прав
let balance = 100;
let bonusBalance = 900;
let isBanned = false;
let isExist = false;
let isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) 
    && !isBanned
    && !isExist
    && isSelling;
console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);
