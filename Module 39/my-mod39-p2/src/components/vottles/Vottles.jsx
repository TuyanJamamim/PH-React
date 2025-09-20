import React, { use } from 'react';
import Vottle from '../vottle/vottle';

const Vottles = ({vottlesPromise }) => {

    
    const vottles = use(vottlesPromise);
    // console.log(vottles);
// const vottles2 = use(vottlesPromise2);
// console.log(vottles2);

    return (
        <div>
            <h3>Total Vottles : {vottles.length}</h3>
            {
                vottles.map(vottle => <Vottle

                    key={vottle.id}
                    
                    vottle ={vottle}></Vottle>)
            }
        </div>
    );
};

export default Vottles;