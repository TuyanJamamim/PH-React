const handleStorage = () => {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // console.log(name);
    // localStorage.setItem("name" , name);
    // // inside local storage it stays in a key value pair ("name")is key and name is value 
    // localStorage.setItem("email" , email);

    const data = {email , name };
    jsonData = JSON.stringify(data);
    localStorage.setItem('newData' , jsonData)//if any of the email or name value remains the same it doesnt take the full set...it only updates the value which is different 

} 


//clearing all the items of local storage
const handleClear = () => {
    localStorage.clear;
}


const gotItem = localStorage.getItem("newData");//id can ve got vy setItem keyname or vy the  entered value...here "nas" is the input value from input vox type name...nas is chgnaged to newData which is setItem key name 


console.log(JSON.parse(gotItem))//to get regular ovject json.parse need to ve applied 


