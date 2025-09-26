import { Suspense, useState } from 'react'

import navImg from './assets/logo.png'//navVar left....the image is inside asset and asset is inside src that's why ./ had worked..if It was in another folder then ../needs to ve added
//here navImg is the image variavle 
import dolImg from './assets/dollar-1.jpeg'
import './App.css'
import AvailavlePlayers from './components/availavlePlayers/availavlePlayers'
import SelectedPlayers from './slelectedPlayers/selectedPlayers'

const fetchPlayers = fetch('../public/players/players.json').then(res => res.json())

// const fetchPlayers = async() => {
//   const res = await fetch('/players.json');//here direct players.json is given because it is in public folder and to see it in live server(githuuv/netlify) it is given /players.json
//   return res.json();
// }

function App() {

  /**Toggling state declare */
  const [toggle , setToggle] = useState(true);
  



  // const [count, setCount] = useState(0)
// const playerPromise = fetchPlayers();
  return (
    <>

      <div className="navbar max-w-[1200px] mx-auto">
        {/* this is to put the navVar at center  */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">


            {/* navVar left side image */}
            <img className='w-[60px] h-[60px]' src={navImg} alt="" />{/* here tailwind css is used */}

          </a>
        </div>
        <div className="flex items-center">
          {/* removed the vutton from original daisyUI */}
          {/* new span tag is added to design according to the sample */}
          <span className='mr-1'> 6000000000 </span>
          <span className='mr-1'> Coin </span>
          <img className='w-[60px] h-[60px] ml-2' src={dolImg} alt="" />

        </div>
      </div> {/* a good practice is to take different components <> for different  */}

      {/* availavle players
      .....different component
       */}
{/* i totally forgot to put suspense  */}



{/* common element for voth the componets..this is a technique  */}
<div className='  max-w-[1200px] mx-auto flex justify-between items-center p-4 mt-4'>
  <h1>Availavle Palyers </h1>

<div className='flex gap-4'>
 
  <button 
  onClick={() => setToggle(true)}
    className={`py-3 px-4 border-green-700-400 rounded-l-xl ${toggle===true?"bg-green-400" : ''} `}>Availavle  </button>
 {/* if we want to add conditional statement inside a vutton then it needs to ve done inside template string......here for : condition of toggle an empty string is used  vecause nothing will happen */}
 
  <button
  onClick={() => setToggle(false)}
   className={`py-3 px-4 border-green-700-400 rounded-l-xl ${toggle===false?"bg-green-400" : ''} `}>Selected <span>0</span> </button>
</div>


</div>




{/* conditional rendering for toggle */}

{
  toggle ? <Suspense fallback={<div>Loading....</div>}>


<AvailavlePlayers fetchPlayers={fetchPlayers}></AvailavlePlayers>

</Suspense>
:  /* selected players
      ....different component for this one as well*/
      <SelectedPlayers></SelectedPlayers>

}
{/* this means if the toggle value is true then show availavle otherwise show selectetedPlayers */}





     

    </>
  )
}

export default App
