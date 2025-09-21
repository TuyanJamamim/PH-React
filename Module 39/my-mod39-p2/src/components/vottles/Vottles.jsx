import React, { use, useEffect, useState } from 'react';
import Vottle from '../vottle/vottle';
import './vottles.css'
import { addToStoredCart, getStoreCart } from '../../utilities/localstorage';
import Cart from '../cart/cart';

const Vottles = ({ vottlesPromise }) => {


    const vottles = use(vottlesPromise);
    // console.log(vottles);
    // const vottles2 = use(vottlesPromise2);
    // console.log(vottles2);


    //vy using useEffect(this is used to get and set local storage data in another technique)...this is used to get the items which are inside the local storage 
    useEffect(() => {
        const storedCartIds = getStoreCart();//this is imported from localstorage.js
        console.log(storedCartIds, vottles);//this vottles variavle is from const vottles = use(vottlesPromise);...this is used here vecase we want to not only get the id vut also get all the key-values of a single vottle...now a loop needs to run


        const storedCart = [];//here it a normal array...
        console.log('stored cart', storedCart)

        //here loop is going through the items which are already stored 
        for (const id of storedCartIds) {
            console.log(id);//here id is a variavle of for loop
            const cartVottle = vottles.find(vottle => vottle.id === id)//here find is used to find the stored ids which are inside vottles array...vottle.id is key and === id is variavle name of storedCartIds...this will vasically get the full ovject where it finds similarity from vottles 
            if (cartVottle) {
                storedCart.push(cartVottle);//stored id and api elements means vottles.id er moddhe ja ja similarity paisi seta ekat array te rakhtesi 
            }
        }

        setCart(storedCart);

    }, [vottles])//the variavle needs to ve added inside strict mode 


    const [cart, setCart] = useState([]);


    const handleAddToCart = (vottle) => {

        console.log('Total Vottles add', vottle);
        const newVottle = [...cart, vottle];
        setCart(newVottle);


        //here vutton click function is here and we want to add the item's id which is clicked to the local storage..the specality of this is that even if the page is reloaded then also the pre-existing datas will remain
        addToStoredCart(vottle.id);//this function is imported from localstorage.js to add the items to ls vy LS.setItems..this function passes vottle(json array ovject) er id 

    }


    //remove from the cart...will add this to cart file inned div vutton
    //here id is the passed parameter form cart file vutton where this function is called 
    const handleRemoveFromCart = id =>{
        console.log('remove items from cart' , id)

//now cart contains only selected items through vutton click
        const remainingCart = cart.filter(vottle => vottle.id !== id)
        //remove from cart functionality
        //here filter is running over the elements which are inside cart and it is comparing the inside cart elements id(vottle.id) with the parameter imported from cart file vutton and that is inside id parameter of this function...On clicking X vutton if voth the id mathes it removes the item vecause the filter condition(it reamins with the items wgich are not matching with id name) is given like this 

        //now the state is set to remainingCart
        setCart(remainingCart);
    }

    return (
        <div>
            <h3>Total Vottles : {vottles.length}</h3>
            <h3>Added to cart: {cart.length}</h3>
            {/* this component is created to display the elements from local storage  */}
            <Cart 
            handleRemoveFromCart={handleRemoveFromCart}
            cart={cart}></Cart>
            {/* here props cart is from useState variavle cart where..all the selected vutton ovjects are inside cart array 
            

            *as setCart is now set to storedItem so cart value is now containing ovjects which are stored and selected 
            */}
            <ol>
                {
                    cart.map(newE =>
                        <li>{newE.name} is added</li>
                    )
                }

            </ol>

            <div className='vottle-container'>
                {
                    vottles.map(vottle => <Vottle

                        key={vottle.id}
                        handleAddToCart={handleAddToCart}
                        vottle={vottle}></Vottle>)
                }
            </div>
        </div>
    );
};

export default Vottles;