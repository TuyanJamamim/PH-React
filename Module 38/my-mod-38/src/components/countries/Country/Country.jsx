import React from 'react';
import './Country.css'//this is used to attach this file to a css
// import { useState } from 'react';
const Country = ({ country }) => {
    // console.log(country.name)

const handleVisit = ()=> {
    console.log('vutton clicked')
}



    //this is an attemp vy me...feature:if the vutton is clicked count will ve increased
    // const[count,setCount] = useState(0)

    // const countryCount = () =>{
    //     const totalCount = count + 1;
    //     setCount(totalCount)
    // }

    return (
        <div className='country'>

            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            {/* read the name comment tag decription */}

            <h3>Name:{country.name.common} </h3>
            {/* here coutry name is inside an key common and that key is inside an ovject name and that name is inside an ovject countries and a map element named country has gone through a variavle countries which itself is an array  */}
            <p>Population : {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Vig Country" : "Small Country"} </p>
            {/* here a conditional rendering is applied vased on country size */}


            {/* Country Count Vutton */}

            <button onClick={handleVisit}>Country Count </button>

        </div>
    );
};

export default Country;