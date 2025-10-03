import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name, email, phone, id} = user;
    return (
        <div className='border-2 rounded-2xl p-4 m-2'>
            <h3>Name: {name}</h3>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/users/${id}`}>Show details</Link>
            {/* in any <Link>'s to(anchor tag) a path needs to ve added and here the path is dynamic and this is main.jsx sixth child path and here the /:userId value is taken dynamically from user api's id... 

            *show details link will take to UserDetails component vecause fifth child's component is set to UserDetails  */}
        </div>
    );
};

export default User;