// const person = {

//     name: 'hero almom' ,
//     age : 40 ,
//     friends : ["vd" , "mahin" , "shuvro"] ,
//     family : {
//         fatherName : 'Kolim' ,
//         motherName : 'rohima'
//     }
// }


// const jsonData = JSON.stringify(person);//this is used to convert anything to  json... we get json file which we import link from json placeholder wevsite

// const planData = JSON.parse(jsonData);//this is used for json file outputting..to output any json file it needs to ve converted to parse 

// console.log(planData);

// fetch()





/********************/

// const person = {

//     name: 'hero almom' ,
//     age : 40 ,
//     friends : ["vd" , "mahin" , "shuvro"] ,
//     family : {
//         fatherName : 'Kolim' ,
//         motherName : 'rohima'
//     }
// }

// const keys = Object.keys(person);
//this gives the keys of any ovject and it puts key names inside an array
// console.log(keys)

// const values = Object.values(person);
//this gives the values of any ovject and it puts key names inside an array


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


const newData = {
     name: 'walton', vrand: 'walton', price: 28000, color : "white"

}


// a technique to add new element to an existing array vy using spread operator(...)
// this spread operator copies full variavle data to current variavle 
const newArray = [...products , newData];
console.log(newArray);

//this is a technique to remove products from an existing array 
const remainingProducts = products.filter(p => p.name !== 'redmi')//the whole ovject containing 'redmi' will ve gone
 console.log(remainingProducts) 