/*let x = 2.8,
  y = 7.3;
console.log(x - y);*/

let x = "2.8",
  y = 7.3;
console.log(x - y); // c бинарным оператор минус строка автоматически посчиталась числом

let z = -x;
y = 7.3;
console.log(z, typeof z);

let a = true,
  b = null,
  c = undefined;
console.log(-a); // -1  т.е унарный оператор преобразует в number
console.log(-b); // -0
console.log(-c); //NaN
console.log(typeof -a, typeof -b, typeof -c);
