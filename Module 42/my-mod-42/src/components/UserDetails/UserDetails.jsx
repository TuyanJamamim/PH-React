import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();//laod data function of router
    console.log(user);
    return (
        <div>
            <h2>User details here</h2>
            {
                user.map(use =>)
            }
        </div>
    );
};

export default UserDetails;