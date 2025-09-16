

import Counter from './counter'
import Batsman from './batsmen'
import Users from './users'
import Friends from './friends'
import './App.css'
//vy declaring <suspense> inside app.jsx automatically adds this import  
import { Suspense } from 'react'


//fetch variavle needs to ve outside of function App()
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())



// fetching using async()
const  fetchFriends = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();

}





function App() {
//extra step for async
const friendsPromise = fetchFriends();



// functions can ve called velow and avove index
  function handleClick() {
    alert('I am clicked')
  }

  const handleClick3 = () => {
    alert('Click me third time')
  }

  const handleAdd5 = (num) => {
    num = num + 5;
    alert(num);

  }
  return (
    <>

      <h1>Vite + React</h1>

      {/* suspense structure:a fallack function(showa loading when the page loads) inside the tag and an <user> means where the fetch will ve executes is added..look in the react wevsite documentation */}
      <Suspense fallback={<h3>Loading....</h3>}>

        <Users fetchUsers={fetchUsers}></Users>{/* this Users in my function creation */}

      </Suspense>


      {/* suspense for friends using async */}
      <Suspense fallback={<p>Loading....</p>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>



      <Counter></Counter>


      {/* Normally how event handler is added to js
     <button onClick="function()">Click Me</button> */}

      {/* event handler in react */}
      <button onClick={handleClick}>Click Me</button>
      {/* another technique to add event handler..rarely used */}
      <button onClick={
        function handleClick2() {
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
      <button onClick={() => handleAdd5(7)}>Click me para</button>

    </>
  )
}

export default App
