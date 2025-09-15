import './App.css'//here app.css file is imported to get css consists style for singer component

export default function Singer ({name , age = 0 }){
   
    return(
<div className='singer'>


    {/* here singers is an array of ovjects and vy map function variavle singer it runs through the elements of array means the ovjects is acccessed vy it and here to get the ovjects elements the ovj keys are called 
    alt approach:what I have used here means I have taken the values of it's keyname inside function calling(react style means in app.jsx file map function section) {
        
    }*/}
    <h3>Name: {name} </h3>
    {/* <p>Id: {singer.id} </p> */}
    <p>Age: {age} </p>
</div>
    )
}