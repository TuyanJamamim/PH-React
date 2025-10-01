import React from 'react';
import SelectedCard from '../components/availavlePlayers/SelectedCard/SelectedCard';
import PlayerCard from '../components/availavlePlayers/PlayerCard';

const SelectedPlayers = ({ purchasedPlayers, removePlayer}) => {


    return (
        <div className='max-w-[1200px] mx-auto'>{/* here mx-auto is used to put elements in the center */}
           {

            purchasedPlayers.map(player => <SelectedCard player={player} removePlayer={removePlayer}></SelectedCard>)


           }
        </div>
    );
};

export default SelectedPlayers;