import React, { use } from 'react';
import userImg from '../../assets/user-1.png'//in image src direct link can ve used also the importing like this will work 
import flagImg from '../../assets/report-1.png'
const AvailavlePlayers = ({ fetchPlayers }) => {
    const playersData = use(fetchPlayers);
    
    // const {player_image, player_name,player_country, role, batting_style, bowling_style, price, rating} = playersData;//destructuring of object from json file




    console.log(playersData);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* here the max width is set to put this availavlePlayers elements in the middle
            grid is applied here vecause the dynamic element of map is inside this */}
            

{
    playersData.map(player => 
        // console.log(player);
<div className="card bg-base-100 shadow-sm p-4">
                <figure>
                    <img className='w-full h-[300px] '
                        src={player.player_image}
                        alt="player" />
                </figure>
                <div className="mt-4">
                    <div className='flex'>
                        <img src={userImg} alt="" />
                        <h2 className="card-title ml-2">{player.player_name}</h2>
                    </div>
                    <div className='flex justify-between mt-4 border-b-1 pb-4'>
                        {/* vorder vottom(border-b) adds a line under the section */}
                        <div className='flex'>
                            <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
                            <span>{player.player_country}</span>
                        </div>
                        <button className='btn'>{player.playing_role}</button>
                        {/* here I added daisyUI classname btn vy myslef...btn adds vutton properties  */}
                    </div>

                    <div className='flex justify-between mt-4'>
                        <span>Rating </span>
                        <span>{player.rating}</span>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <span>{player.bating_style}</span>
                        <span>{player.bowling_style}</span>
                    </div>



                    <div className="card-actions flex justify-between mt-4 items-center">
                        <p>Price: {player.price}</p>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div>


        
    )
}


            
        </div>
    );
};

export default AvailavlePlayers;
