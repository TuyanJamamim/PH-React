import { use } from "react"

export default function Users({fetchUsers})//here fetchUsers is a prop from app() function <user>
{

//this is preoared to get the fetched api    
const users = use(fetchUsers);//here use is got from react like useState and an import is added at the top of this code file automatically
console.log(users);
 return (

    <div className="users">
        <h1>Users: {users.length} </h1>
        {/* here inside fetch link there are ovjects inside an array so the array length 10 will ve printed  */}
    </div>
 )
}