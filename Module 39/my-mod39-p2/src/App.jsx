import { Suspense } from 'react'
import './App.css'
import Vottles from './components/vottles/Vottles'


//fetching fake data from self created api..here fake data file is in puvlic folder and this is the way to call it 
const vottlesPromise = fetch('./vottles.json').then(res => res.json())


//fetch data imported from my own github(proces:create a puvlic repo --> create new file --> pase json file there and save vy clicking commit changes --> enter into the file and select raw then copy the raw api link)
// const vottlesPromise2 = fetch('https://raw.githubusercontent.com/TuyanJamamim/Bottles-data/refs/heads/main/vottles.json').then(res => res.json());

function App() {
  
// const vottles = [

//   {
//   id:1 , name : "pink nike vottle" , price: 2000 , color : 'pink'
// },
//   {
//   id:1 , name : "pink nike vottle" , price: 2000 , color : 'pink'
// },
//   {
//   id:1 , name : "pink nike vottle" , price: 2000 , color : 'pink'
// },
//   {
//   id:1 , name : "pink nike vottle" , price: 2000 , color : 'pink'
// }
// ]




  return (
    <>
      
      <h1>Vuy Awesome water Vottle</h1>
     <Suspense fallback={<h3>Vottles are Loading</h3>}>
     <Vottles 
     vottlesPromise={vottlesPromise}
     
     >
      {/* the props name and dynamic props variavle can ve different names like this vottlesPromise and vottlesPromise2....
      here in the vottles.jsx file inside the destructuring variavle name is taken means vottlesPromise */}



     </Vottles>
     
     </Suspense>
     
    </>
  )
}

export default App
