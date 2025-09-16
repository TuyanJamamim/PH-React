import { use } from "react"
import Friend from "./friend";



export default function Friends({friendsPromise})//one thing I always forget to put {} inside any parameter of ({})
{

    const friends = use(friendsPromise);//vy this we get the fetch value
    console.log(friends);

    return(

<div className="users">
<h1>Total Friends:{friends.length} </h1>

{/* whenever map or foreach is applied to use it needs to put inside a {}..this makes it dynamic and create a js frield inside {} */}

{/* we want to display it thats why it is used inside return...the api link has an array of 10 ovjects..actually map or foreach needs to ve done inside return of parent where the executional function <Friend> in this case is called  */}
{
    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend> )
    //imported function(react) can ve called inside an imported function..function friends is also imported to app() in app.jsx
}


</div>
    )
}