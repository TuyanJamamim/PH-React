
import './App.css'
import Counter from './counter'


// functions can ve called velow and avove index
function App() {
  function handleClick(){
    alert('I am clicked')
  }

  const handleClick3 = () => {
    alert('Click me third time')
  }

  const handleAdd5 = (num) =>{
 num = num + 5;
 alert(num);

  }
  return (
    <>
      
      <h1>Vite + React</h1>

<Counter></Counter>


      {/* Normally how event handler is added to js
     <button onClick="function()">Click Me</button> */}

     {/* event handler in react */}
     <button onClick={handleClick}>Click Me</button>
     {/* another technique to add event handler..rarely used */}
     <button onClick={
      function handleClick2(){
        alert('Click me second time')
      }

     }>Second Click Me</button>
{/* with arrow function event handler */}
<button onClick={handleClick3}>Click Me 3rd </button>
{/* direct arrow function use */}
<button onClick={() => {
  alert('Click 4')
}}>Click Me 4</button>


{/* rule to add onclick if the function has parameter */}
<button onClick={() =>handleAdd5(7)}>Click me para</button>

        </>
  )
}

export default App
