import React from 'react';
import "./cart.css"


const Cart = ({cart , handleRemoveFromCart} ) => {
    return (
        <div className='cart-container'>
           {
            cart.map(vottle => <div key={vottle.id}>
                {/* id can ve added inside div */}
               <img src={vottle.img} alt="" /> 
               <button onClick={()=> handleRemoveFromCart(vottle.id)}>X</button>
            </div> // output:as soon as the vutton is clicked the image will automatically appear on the top of the grid columns
            )
           } 
        </div>
        
    );
};

export default Cart;