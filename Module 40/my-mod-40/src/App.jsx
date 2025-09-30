import { Suspense, useState } from 'react'


import './App.css'
import AvailavlePlayers from './components/availavlePlayers/availavlePlayers'
import SelectedPlayers from './slelectedPlayers/selectedPlayers'
import NavBar from './components/availavlePlayers/NavBar/NavBar'

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

const [availavleValance , setAvailavleValance] = useState(6000000000);//initial valance is 6000000000
//this state is for the valance in the navVar
//setAvailavleValance is passed as props to the availavlePlayers component and then to the playerCard component and in the playerCard component it is used in the onClick function of the vutton choose player


  return (
    <>
<NavBar availavleValance={availavleValance}></NavBar>
{/* completely different component for NavVar */}


    {/* a good practice is to take different components <> for different  */}

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


<AvailavlePlayers fetchPlayers={fetchPlayers} 
availavleValance={availavleValance}
setAvailavleValance={setAvailavleValance}></AvailavlePlayers>

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
