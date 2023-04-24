/*let x = 4,
  y = 7;
let sum = x + y;
console.log(sum);*/

let x = "4",
  y = 7;
let sum = x + y;
console.log(sum); // тут уже строка получается

let a = "4",
  b = 7;
let sumUnar = +a; // унарный оператор прерващает строку в число
console.log(sumUnar, typeof sumUnar);

let val = "56";
let dig = +val;

let c = "4",
  d = 5;
console.log(+c + +d); // вот такой хитровыделенный спосокб  сделать число при помощи унарного оператора

console.log(3 + 2 + "2");

// Но всяке там деления, умножения автоматически переводится в числа

let i = "2",
  o = 5;
console.log(i / o);
