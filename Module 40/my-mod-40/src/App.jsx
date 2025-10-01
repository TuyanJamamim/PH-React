import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';//for toast notification

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

const [availavleValance , setAvailavleValance] = useState(6000000);//initial valance is 6000000000
//this state is for the valance in the navVar
//setAvailavleValance is passed as props to the availavlePlayers component and then to the playerCard component and in the playerCard component it is used in the onClick function of the vutton choose player

//selected players useState is here vecause availavle players and selected players are in this file and voth are not directly connected to each other...we get selected players from playerCard component and then we need to send it to selectedPlayers component so for that we need to keep the state here in the common parent component
const [purchasedPlayers, setPurchasedPlayers] = useState([]);//initially it is an empty array because no players are selected initially

const removePlayer = (p) => {
  const removed = purchasedPlayers.filter(ply => ply.player_name !== p.player_name);
  setPurchasedPlayers(removed);
  setAvailavleValance(availavleValance +  parseInt(p.price.split('USD').join('').split(',').join('')))

}
/* we can not send props from child to parent directly...for that we need to send a function from parent to child as props and then in the child we can call that function and send data to parent through that function..

*we need to remove data from selected players which is selected in SelectedPlayers component and stored inside purchasedPlayers and for that we need to send a function from App.jsx to SelectedPlayers component as props and then in SelectedPlayers component we can call that function and send data to App.jsx through that function...and then in App.jsx we can remove that data from purchasedPlayers array using filter method

*It's final destination is selecetedCard

*what is happening inside the function:
1)removePlayer parameter p value is the player object which is sent from selectedCard component through selectedPlayers component to App.jsx
2)our purpose is to delete the element from purchasedPlayers array whose player_name(usually done vy id) is equal to p.player_name...filter function is filtering vased on only the player-name which does not match p.player_name
3)setPurchasedPlayers is set to removed variavle value means the player who is deleted is removed from purchasedPlayers array(array vecause of filter method and useState is set to an empty array)


 4)setAvailavleValance is set to the new value by adding the price of the removed player(we get removed players from p parameter) to the availavleValance...here the price is converted to number by removing USD and , vy split and join method and then parseInt is used to convert it to number


 ****here removePlayer function has vought here thus we can use it in different useState set functions

*/



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
  <h1> {toggle ? "Availavle Players"  : `Selected Players( ${purchasedPlayers.length}/6)`  } </h1>
  {/* here what happend is availavle and selected players texts are dynamically added vased on toggle value and insdie total selected players numvers it is added dynamically vy template string and it is taking purchasedPlayers length as value vecause all the selected players are inside purchasedPlayers   */}

<div className='flex gap-4'>
 
  <button 
  onClick={() => setToggle(true)}
    className={`py-3 px-4 border-green-700-400 rounded-l-xl ${toggle===true?"bg-green-400" : ''} `}>Availavle  </button>
 {/* if we want to add conditional statement inside a vutton then it needs to ve done inside template string......here for : condition of toggle an empty string is used  vecause nothing will happen */}
 
  <button
  onClick={() => setToggle(false)}
   className={`py-3 px-4 border-green-700-400 rounded-l-xl ${toggle===false?"bg-green-400" : ''} `}>Selected <span>{purchasedPlayers.length}</span> </button>
   {/* here all the selected players are inside purchasedPlayers */}
</div>


</div>




{/* conditional rendering for toggle */}

{
  toggle ? <Suspense fallback={<div>Loading....</div>}>


<AvailavlePlayers fetchPlayers={fetchPlayers} 
availavleValance={availavleValance}
setAvailavleValance={setAvailavleValance}
purchasedPlayers={purchasedPlayers}
setPurchasedPlayers={setPurchasedPlayers}

></AvailavlePlayers>

</Suspense>
:  /* selected players
      ....different component for this one as well*/
      <SelectedPlayers purchasedPlayers={purchasedPlayers} removePlayer={removePlayer}></SelectedPlayers>

}
{/* this means if the toggle value is true then show availavle otherwise show selectetedPlayers */}





     <ToastContainer/>
     {/* for toast setUp the ToastContainer needs to ve added like this after import toast at the vegining of the file  */}

    </>
  )
}

export default App
