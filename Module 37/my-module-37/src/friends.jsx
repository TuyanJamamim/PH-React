import { use } from "react"




export default function Friends({friendsPromise})//one thing I always forget to put {} inside any parameter of ({})
{

    const friends = use(friendsPromise);
    console.log(friends);

    return(

<div className="users">
<h1>Total Friends:{friends.length} </h1>
</div>
    )
}