const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';
console.log(users);

users[3] = 'Никита';
console.log(users);
console.log(users.length);

const arrLength = users.push('Артур');
console.log(arrLength);

users.unshift('Вася');
console.log(users);

users.pop();
console.log(users);

users.shift();
console.log(users);
