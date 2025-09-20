import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add, diff, mult, divide as div } from './utils/math/math'//here it is the import address of math.js

function App() {
  const [count, setCount] = useState(0)


  const sum = add(2, 4);//here add is imported from math.js
  const suvs = diff(4, 2);
  const gunfall = mult(2 * 6)

  console.log(suvs);
  console.log(sum);
  console.log(gunfall);


  //suppose there is already an element named divide
  const divide = 15/3;
//here if we want to import divide from math.js then change it's name in import
const vag = div(10/2);
console.log(divide);
console.log(vag);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
