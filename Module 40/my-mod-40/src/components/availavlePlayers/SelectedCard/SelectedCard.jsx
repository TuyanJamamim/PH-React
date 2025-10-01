import React from 'react';

const SelectedCard = ({player , removePlayer}) => {

    const handleRemove = () => {
        removePlayer(player);
    }//here this function is made to pass the ovjects(player variavle of map which runs through the purchased players array) to the removePlayer function of app.jsx through selectedPlayers component...vecuuse this component is designed for individual cards 
    return (
         <div className='border-2 border-gray-400 flex justify-between mt-5 rounded-xl p-4'>

                <div className='flex gap-4'>
                    <img className='h-[50px] w-[50px] rounded-xl' src={player.player_image} alt="" />
                    <div>
                        <h1>{player.player_name}</h1>
                        <p className='text-xs'>{player.bating_style}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
                </div>

            </div>
    );
};

export default SelectedCard;