import React from 'react';
import './vottle.css'//this is a good technique to add seperate css file for vottle inside vottle folder and an angta like this needs to ve added  
const Vottle = ({vottle}) => {

    console.log(vottle);
    //here {} is used for destructuring vecause loop is running through an ovjects which are inside an array
    const {img} = vottle;
    return (
        <div className='card'>
            <img src={img} alt="" />
        </div>
    );
};

export default Vottle;