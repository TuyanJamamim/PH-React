const person ={
    name: 'Tuan',
    age : 25 ,
    friends : ["shakiv" , "mahin"] ,
    salary : 20000 ,
    10 : 'secret code'
}

//dot notation 
// const myName = person.name;
//bracket notation cases- 10: "secret code",when an itirable parameter is used inside bracket notation 
const myName = person['name'];
console.log(myName);
console.log(person['10']);