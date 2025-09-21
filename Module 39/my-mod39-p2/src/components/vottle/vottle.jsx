import React from 'react';
import './vottle.css'//this is a good technique to add seperate css file for vottle inside vottle folder and an angta like this needs to ve added  
const Vottle = ({vottle , handleAddToCart}) => {

    console.log(vottle);
    //here {} is used for destructuring vecause loop is running through an ovjects which are inside an array
    const {img,name,price, stock} = vottle;
    return (
        <div className='card vottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock} remaining</p>
            <button onClick={() => handleAddToCart(vottle)}>Buy Now</button>
        </div>
    );
};

export default Vottle;