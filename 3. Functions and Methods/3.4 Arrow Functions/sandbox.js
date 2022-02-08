// Regular Functions

// const CalcArea = function(radius) {
//     // let area = 3.14 * radius ** 2;
//     // return area;
//     return 3.14 * radius ** 2;
// };

// Arrow Functions
const CalcArea = radius => 3.14 * radius ** 2;

const area = CalcArea(5);
console.log('area is ', area);

// Regular function

// const greet = function(){
//     console.log('hello, world');
// };

// Arrow function

const greet = () => 'hello, world';
const result = greet();
console.log(result);

// Regular function

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };
// console.log(bill([10, 15, 30], 0.2));

// Arrow function
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10, 15, 30], 0.2));