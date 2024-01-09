//implicit coercion
console.log(5==5);
console.log(5=='5');

console.log(5===5);
//Don't change data type
console.log(5==='5');

console.log("--------------------");

//NaN
console.log(NaN == NaN);
console.log(NaN === NaN);

console.log("--------------------");

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(10));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(undefined + 1));

console.log("--------------------");

console.log(0 === -0);
console.log(0 == -0);

console.log("--------------------");

console.log(Object.is(-0, +0));
console.log(Object.is(NaN, NaN));