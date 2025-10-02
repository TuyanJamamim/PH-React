
import { Suspense } from 'react'
import './App.css'
import DasisyNav from './components/DaisyNac/DasisyNav'
import NavVar from './components/DaisyNac/NavVar/NavVar'
import PricingOptions from './components/DaisyNac/PricingOptions/PricingOptions'

const pricePromise = fetch('PricingData.json').then(res => res.json())//fetch always needs to ve putted outside the function
function App() {

  return (
    <>
      
      <header>
<NavVar></NavVar>
{/* <DasisyNav></DasisyNav> */}
      </header>

      <main>
        {/* I always forget avout suspense component */}
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

          <PricingOptions pricePromise={pricePromise}></PricingOptions>
        </Suspense>


      </main>
     
     
    </>
  )
}

export default App
