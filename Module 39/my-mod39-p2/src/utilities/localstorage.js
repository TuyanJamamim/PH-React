/* here the whole process is:
*first getting items from localStorage and if thre is no items then []

*set the get items to the local storage 

*save the get items to local storage vy set items
*/

const getCartFromLocalStorage = ()=>{

    const storedCartString = localStorage.getItem('cart')

    //if storedCartString has content then perform the parse operation and this needs to ve declared inside the function

if(storedCartString){
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
}
return[];//otherwise return empty array vecause the valid ovjects are inside an array 
}

const addCartToLocalStorage = (id) =>{
const cart = getCartFromLocalStorage();//here the cart items are got vy calling this function and now the items of this function needs to set 
const newCart = [...cart,id];// this means old items and new items 
saveToLocalStorage(newCart);
}

//save itmes of what we got 
const saveToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);//here cart parameter is taken from addItemsTocart function  
    const setCartItems = localStorage.setItem('cart', cartStringified)
}

export{getCartFromLocalStorage as getStoreCart, addCartToLocalStorage as addToStoredCart}