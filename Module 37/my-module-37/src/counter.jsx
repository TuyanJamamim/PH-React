import { useState } from "react"//this creates automatically when useState is created 

export default function Counter(){

    // how to set useState...here inside array are destructuring variavles and useState is a function 
    const [count, setCount ] = useState(0);


    // a function can ve created inside default function

    const handleClick6 = () => {
       //setCount is inside useState destructure variavle 
        // setCount(91)
        const newCount = count + 1;//here count destructure variavle is default set to 0 in useState and setCount function is related to user input like the previous example setCount(5)
        setCount(newCount)//here setCount value will increase the count value to 1 in every click vecause newCount is inside setCount
    }


    const counterStyle = {

        border : "2px solid yellow"  
    }
    return(
<div style={counterStyle}>
    <h3>Count: {count} </h3> 
    {/* here count value is inherited from useState destructure array count */}
    <button onClick={handleClick6}>Add</button>
</div>

    )
}