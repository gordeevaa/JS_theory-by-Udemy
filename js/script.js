"use strict";/*  - говорим скриптовому файлу, что мы работаем с современном режиме,
где уже не работают некоторые неточности, которые были в старых стандартах JavaScript. */

/* 1 ТЕМА: */
let nuber = 5;/*  - первый способ объявления переменной, где наша переменная изменяема */
const leftBorderWidth = 1;/*  - CamelCase — стиль написания составных слов. Здесь значение переменной постоянно, мы его поменять не можем. */

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);/*  - прямых const не бывает. */

console.log(name);/*  - хостинг или всплытие переменных (использование переменной до того, как она была объявлена). */
var name = 'Alena';/*  - третий устаревший вариант объявления перменной. */

/* 2 ТЕМА: "УСЛОВИЯ"*/
if (4 == 9) {
    console.log('Ok!');
}

if (4 == 4) {
    console.log('Ok!');
}

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

if (1) { /* - условие, будет всегда верно */
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

/* 3 ТЕМА: */
/* Синтаксис условий записи при помощи тернарного оператора: */
(num === 50) ? console.log('Ok!') : console.log('Error');
/* Сначала идет условие, которое мы проверяем, т.е. наша переменная равна (num === 50).
Если вдруг это условие верно, то выполняется это действие - console.log('Ok!');
если не верно, то это - console.log('Error'). */

/* Оператор называется тернарным, потому что в его работе участвуют аж 3 аргумента.
Это единственный тернарный оператор, который есть в JS на текущий момент. */


/* 4 ТЕМА: Специальная конструкция switch. Используют для избежания больших ветвлений условий.
Это такая модификация if, которая поддерживает сразу несколько проверок и условий. */
/* Конструкция switch всегда идет на строгое сравнение. */

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
    console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}


const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
    console.log('Неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}


const num = '50';

switch (num) {
    case '49':
        console.log('Неверно');
        break;
    case '100':
    console.log('Неверно');
        break;
    case '50':
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}


/* 5 ТЕМА: Логические операторы - и (&&), или(||), не(!).
Все эти операторы нам что-то возвращают, дают какой-то результат (возвращаемое значение). */

/* ОПЕРАТОР И '||'. */
const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Я сыт!');
}

/* Мы применили логический оператор и получили в целом 1 результат, 
т.е. это сравнение нам вернуло правду. 
Именно поэтому у нас выполнилось это действие. */

console.log((hamburger && fries)); /* - это выражение внутри скобок просто вернуло нам
логический тип данных - true.
Результат логических операций - это какое-то логическое булевое значение. */


const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log((hamburger && fries));


/* Динамическая типизация.
5 сущностей, которые всегда будут false - это 0 (ноль), пустая строка (''), null,
inderfind, NaN. 
Все остальное всегда будет true. */


const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}

/* Согласно таблице приоритетов операторов, сперва выполняется строгое сравнение, потом уже 'или' и потом 'и'. */


const hamburger = 3;
const fries = 1;
const cola = 0;

if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}


const hamburger = 3;
const fries = 1;
const cola = 0;

console.log (hamburger === 3 && cola && fries)/*  - при запуске возвращет само значение (первое ложное значение, на котором он остановил свою работу),
т.е. 0 (т.к. количество колы 0). */

if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}


console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'какая-то строка');
/* Если общий результат сравнения отрицательный, то оператор может дать что-то, 
что в логическом ключе юудет неправдой. */

/* Отсюда есть 2 правила:
- оператор "и" всегда возвращает первое ложное значение, если оно есть.
На нем он запинается, его возвращает и дальше код уже не идет;
- если все агументы верны, код дошел до конца, то возвращется значение последнего аргумента. */

/* ОПЕРАТОР ИЛИ '||'. */
const hamburger = 3;
const fries = 0;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

/* Как только оператор ИЛИ получает правдивое значение true, ему совершенно нет смысла 
выполнять какие-то операции, которые идут дальше. Т.к. уже есть правдивое значение.

ИЛИ запинается на правде. 

Когда правда найдена, то значение будет возвращено.

Если же все неправда, то возвращается последнее ложное значение.*/

const hamburger = 0;
const fries = null;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

console.log(hamburger || cola || fries);



let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);
/* Получаем, что уже хоть что-то готово. */



const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

/* Сначала происходит сравнение, потом лоническое И, потом логическое ИЛИ. */

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


/* ОПЕРАТОР НЕ '!'.
Работает этот оператор таким образом, что сначала он агумент к которому он применен превращает 
его в логический тип данных либо true, либо false. 
После этого этот оператор возвращает его в противоположное значение. */

console.log(!0);


/* 6 ТЕМА: ЦИКЛЫ. Используются для повторения однотипных действий. 
3 способа:*/

/* 1. Пока наше условие не выполнено, выполняй такие-то действия: */

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

/* 2. Сначала заставляем наш цикл что-то сделать, а уж потом проверить условие и, 
если необходимо, выйти из цикла: */

let num = 50;

do {
    console.log(num);
    num++;
}
while (num < 55);


/* 3. Цикл "for", самый частоиспользующийся.  */

let num = 50;

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

/* где, i - итерратор;
i < 8 - условие, при котором цикл остановит свою работу;
i++ - шаг цикла, т.е. что будет происходить каждый раз в новом цикле. */


/* Закончить цикл досрочно можно при помощи break или continue. */

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }

    console.log(i);
}

/* 7 ТЕМА: Цикл в цикле и метки.  */

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);       
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";     
    }

    result += '\n';
}

console.log(result);


/* МЕТКИ. */

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);      
        }       
    }
}


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);      
        }       
    }
}