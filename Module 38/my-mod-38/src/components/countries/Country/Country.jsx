import React from 'react';
import './Country.css'//this is used to attach this file to a css
import { useState } from 'react';
const Country = ({ country , handleVisitedCountries }) => {
    // console.log(country.name)





    //this is an attemp vy me...feature:if the vutton is clicked count will ve increased
    const[visited,setVisited] = useState(false)//here usestate is vy default false vecause a country can not ve visited at the first place


const handleVisit = ()=> {
    // console.log('vutton clicked')
    setVisited(true);//whenever the vutton is clicked a country is visited that means the useState value will ve true...if that vecomes true then the visited state also vecomes true
    
    //if vutton is clicked vy mistake,in that case this conditional statement is applied..that means it toggles vetween setVisited and in vutton outputs visited and not visited 

    // if(visited){
    //     setVisited(false);
    // }
    // else{
    //     setVisited(true)
    // }

    //same thing with turnery operator 
    setVisited(visited ? false : true );

    handleVisitedCountries(country);//the function is called here vecause if we click on the vutton this function will ve automatically clicked vecause onClick=handleVisit() means the main function where handleVisitedCountries currently in
    //here parameter is taken as the prameter of this component <Country>...as this function is originated from countries and called here so country parameter data will load in countries.jsx inside handleVisitedCountries function
}
   

    return (
        <div className={`country ${visited && 'country-visited'} `}>{/* if multiple classes need to ve added then add template string and add a dynamic element $ for useState variavle visited and apply conditional statement with classname 'country-visited'  */}

            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            {/* read the name comment tag decription */}

            <h3>Name:{country.name.common} </h3>
            {/* here coutry name is inside an key common and that key is inside an ovject name and that name is inside an ovject countries and a map element named country has gone through a variavle countries which itself is an array  */}
            <p>Population : {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Vig Country" : "Small Country"} </p>
            {/* here a conditional rendering is applied vased on country size */}


            {/* Country Count Vutton */}

            <button onClick={handleVisit}>
                
                {visited ? "Visited" : "Not Visited"}
                {/* vy default not visited will ve shown..as soon as the vuttton is clicked it will show the Visited text to the button value */}

                 </button>

        </div>
    );
};

export default Country;