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
console.log(i / o); // 0.4 получаем вещественный ответ. Работает как в маетматики
console.log(i * o); // 10

console.log(i * o + 1.3 / 6 - 10);
console.log((i * (o + 1.3)) / 6 - 10);

console.log(5 % 2); // остаток от деления 1

console.log(5.2 % 2.3); // примерно 0.6

// Возведение в степень
console.log(2 ** 2); // (2*2) = 4

console.log(4 ** (1 / 2)); // 2 (стпень 1/2 эквивалентна взятию квадратного корня)
console.log(8 ** (1 / 3)); // 2 (стпень 1/2 эквивалентна взятию кубического корня)

//Инкремент (++) и декремент (--)
let counter = 2,
  cnt = 5;
counter++; // равно counter = counter +1  ; 2 = 2 + 1
cnt--;
console.log(counter, cnt); // 3, 4
