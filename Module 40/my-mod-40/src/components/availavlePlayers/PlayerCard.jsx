import React, { useState } from 'react';
import flagImg from '../../assets/report-1.png'
import userImg from '../../assets/user-1.png'//in image src direct link can ve used also the importing like this will work


//here palyer is imported from availavlePlayers.jsx and it is the map variavle of playersData array
const PlayerCard = ({ player, setAvailavleValance, availavleValance }) => {

    const [isSelected, setIsSelected] = useState(false);


    //selected vutton useState...Here initial value is false vecause initially the player is not selected



    const handleSelectPlayer = (playerData) => {


        {
            //here playerPrice is used to check the availavle valance condition vefore selecting the player means vefore setting the isSelected to true and subtracting the player price from the availavleValance
            const playerPrice = parseInt(playerData.price.split('USD').join('').split(',').join(''))

            //here the price is in string vecause of USD and , so to convert it into number first USD is removed by split and join and then , is removed by split and join and then the final value is subtracted from availavleValance

            if (availavleValance < playerPrice) {

                alert("Not enough balance to select this player");
                return;//here the function needs to ve terminated if the condition is met
            }
            setIsSelected(true)
            setAvailavleValance(availavleValance - playerPrice)


        }
    };
    //here a new function is created to handle the vutton click and in that function first the setIsSelected is set to true and then the setAvailavleValance is set to the new value by subtracting the player price from the availavleValance...and here player parameter is used from the arrow function of the vutton onClick and the parameter name is playerData


    return (
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
                    <button onClick={() => handleSelectPlayer(player)

                    } disabled={isSelected}
                        className="btn">{isSelected === true ? 'Selected' : 'Choose Player'}</button>
                    {/* here intial setIsSelected value is false and onClicking the vutton the value vecomes false for the arrow function in the vutton and the vutton changes it's text to selected and also once the vutton is clicked it will ve disavled vecause the disavled value is set to isSelected  */}
                    {/* here vutton text is added dynamically */}
                </div>
            </div>
        </div>

    );

}
export default PlayerCard;
