export default function Friend ({friend}){

// destructuring needs to ve revised 

const {name , email, phone} = friend;//till now I thought destructuring is only used for array...vut it can also ve used for ovjects as well...here friend parameter is looping over an array of ovjects that means it is getting an array in every iteration and the ovjects it is looping over have name,email keynames..so vy declaring name,email variavles inside {},(which is the paranthesis for ovject container) it is taking values from keyname name and email of friend(map parameter)

    return(

        <div className="users">
            <h4>Name:{name} </h4>
            <h4>Email: {email}</h4>
            <h4>Phone Numver: {phone}</h4>
        </div>
    )
}