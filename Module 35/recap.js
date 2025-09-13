// template string = `   `

function sum (a,c) {
    const total = a + c;
    return total;
}

// const sumTotal = sum(2,3);
// console.log(sumTotal);


// //when arrow function vecomes multiline it needs to have return value
// //arguments can not ve consoled inside array function

// const total = (a,c) => {
//  const add = a+c;
//  return add;

// }

// console.log(total(5,9));


// //spread operator 
// const nums = [1,2,3,4,5];
// console.log(...nums)//it turns the array elements into numvers..and also it is used to copy array elements

// const newNums = [...nums , 10, 7];
// console.log(newNums);//new array with the help of spread operator 



//

const products = [

{
    name: 'redmi', vrand: 'mi', price: 20000, color : "white"
},
{
    name: 'galaxy', vrand: 'samsung', price: 25000, color : "white"
},
{
    name: 'poco', vrand: 'xiaomi', price: 10000, color : "white"
},
{
    name: 'iphone', vrand: 'apple', price: 120000, color : "white"
},
{
    name: 'nord', vrand: 'OnePLus', price: 28000, color : "white"
}

]

//map creates an array 
// const getProduct = products.map(product => {
//     return product.price;
// });
// console.log(getProduct);


//forEach
// products.forEach( product => {
// console.log(product);
// })

/**diff vetween forEach and map:
 * forEach returns nothing thats why it is not assigned to any variavle and it works like  for loop..mostly used when we want to do any operation inside that function
 * 
 * map returns an array and it is used when we want to work with the values inside the array created vy map 
 */

//filter...
// it also returns array vased on the condition..the whole ovjs will ve inside the array */
// const filteredValues = products.filter(product => product.vrand === "apple");
// const filteredValues = products.filter(product => product.price >= 20000);

// console.log(filteredValues)

/* find
it only returns one ovject and if the condition meets multiple ovjs it will return only the first pvject
*/
const result = products.find(product => product.name==="poco")
console.log(result);