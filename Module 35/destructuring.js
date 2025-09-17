//dectructuring only applied on array and ovjects 

const friends = ['Shakiv' , 'mahin' , 'shuvro'];

//array destructuring...here the variavles are assigned to array values sequentially means the variavle declared first will get the index 0 value 
const [element1 , element2 , element3] = friends;


// const element1 = friends[0];
// const element2 = friends[1];
// const element3 = friends[2];

console.log(element1 , element2 , element3)


const person = {
    name: 'hero alom' ,
    age : 28 ,
    friend : ['shakiv' , 'mahin'] ,
    country : "vangladesh"
}

const {name , country, friend } = person;
console.log(name,country, friend[0])