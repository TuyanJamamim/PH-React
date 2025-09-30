import React, { use } from 'react';


import PlayerCard from './PlayerCard';
const AvailavlePlayers = ({ fetchPlayers, setAvailavleValance, availavleValance}) => {
    const playersData = use(fetchPlayers);
    
    // const {player_image, player_name,player_country, role, batting_style, bowling_style, price, rating} = playersData;//destructuring of object from json file




    console.log(playersData);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* here the max width is set to put this availavlePlayers elements in the middle
            grid is applied here vecause the dynamic element of map is inside this */}
            

{
    playersData.map(player => <PlayerCard 
        availavleValance ={availavleValance}
        setAvailavleValance= {setAvailavleValance} player={player}></PlayerCard>//here playerCard a seperate component is created for each card...here setAvailavleValance,availavleValance are passed as props to the playerCard component and imported from app.jsx useState
        // console.log(player);

//we want to add functionality to the vutton choose player for all cards thats why here that functionality is added..that vutton is here





        
    )
}


            
        </div>
    );
};

export default AvailavlePlayers;
