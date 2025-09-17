test = '';
//to understand a value truthy or falsy this is a very simple technique
if(test)//this means if test === true
    {
        console.log('it is truthy')

}

else{
    console.log('it is falsy')
}


//same thing done vy turnery 
test ? console.log('it is truthy') : console.log('it is falsy')

//turnery using variavle
const num = 50;
const result = (num >=10 && num<=20 ) ? 'truthy' : 'falsy';
console.log(result);



/* Truthy , falsy using function and turnery operator  */
const isActive = !false;
// console.log(!isActive);

const showUser = () => console.log('show user green')

const hideUser = () => console.log('hide user')

isActive ? showUser() : hideUser();

isActive && showUser();//this means if isActive is true then showUser() executes 
isActive || hideUser();//this means if isActive is false then showUser()


let numver  = '10';
+numver;//this converts string to num
console.log(typeof numver)

