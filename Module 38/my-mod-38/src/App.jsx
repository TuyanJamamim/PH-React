
//To get natural styles app.css(remove all codes and center inside .root ) and index.css(.root class chnaged )files has veen changed 


import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())

function App() {


  return (
    <>
      <Suspense fallback={ <p>Nadir Vai Loading...</p>  }>

        <Countries  countriesPromise ={countriesPromise}></Countries>

      </Suspense>


    </>
  )
}

export default App
