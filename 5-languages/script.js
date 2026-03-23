//Урок 6.2 Логические операторы
const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвертируем права админа ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;
console.log(`Системный файл с редактированем ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`);


//Урок 6.3 Операторы с другими типами
console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);

let a = 'Марина';
const username = a || 'Петя';
console.log(username);

const isAdmins = true;
const filename = isAdmins && 'file.mp4';
console.log(filename);
