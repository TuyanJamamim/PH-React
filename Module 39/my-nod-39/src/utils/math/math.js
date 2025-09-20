
//js file can ve created inside vite package
const add = (a,c) => a+c;
const diff = (a , c) => a-c;
const multipyTwoNum = (a,c) => a*c;
const divide = (a,c) => a/c;

//if we export add and diff from here we can use that in another file as imported file 
export {add , diff, multipyTwoNum as mult, divide}//here multipyTwoNum is passing as mult
