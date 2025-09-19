import React, { use, useState } from 'react';
import Country from './Country/Country';// a common practice is to put a file inside a folder
import './Countries.css'
const Countries = ({ countriesPromise }) => {
    const getCountries = use(countriesPromise);
    const countries = getCountries.countries;//there is a  key named countries and countries is an array inside the api

    // console.log(countries)
    const [visitedCountries, setVisitedCountries] = useState([]);//here array is putted inside useState vecause I want to put multiple datas inside it..
    // purpose of this is to show visited countries count and data...that why a props in <Country> is passed named after the newly created function handleVisitedCountries() 


    //replica of visited countries(for add visited flag vutton)
const [visitedFlag, setVisitedFlag] = useState([])

const handleVisitedFlag = (flag)=> //here the parameter flag is imported from country flag vutton and one file's function can directly used in other file 
    {
    console.log("flags added" , flag)
    const newVisitedFlag = [...visitedFlag , flag]
    setVisitedFlag(newVisitedFlag);

}



    const handleVisitedCountries = (country) => {
        console.log('handle visited countries', country);//here country is imported from <country> and explanation is given in handleVisit()
        const newVisitedCountries = [...visitedCountries, country];//here visitedCountries is an array vy default vecause of useState[] and handleVisitedCountries is inheriting country parameter form <country>..if there is any pre-exist data from earlier vutton clicks (where the onclick function is called)inside visitedCountries and country is the specific ovject of the clicked vutton 
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div >
            <h1>Total countries : {countries.length} {/* here total length of countries array is 250 */}
            </h1>
            <h3>Visited Countries:{visitedCountries.length} </h3>
            {/* it is the length of visitedCountries array */}
            <h3>Total flags Visited:{visitedFlag.length} </h3>
            <ol>
                {
                    visitedCountries.map(country =>
                        <li key={country.cca3.cca3}>
                            {country.name.common}
                        </li>
                    )
                }
            </ol>{/* this map has done for visititedCountries setState array vecause visitedCountries is also an array vecause of setState([]) and new element (...visitedCountries and country) is added to setVisitedCountries()... 
            here the parameter country is newly created for this map and this map is created later after country file map and this country has no co relation with [...visitedCountries,country]..this country is only related inside this map field */}

           <div>
             {
                visitedFlag.map(flag =>
                    <img src={flag}  />
                )
             }
           </div>

            <div className='countries'>
                {/* this div is created to put the country elements into three columns and the grid and column codes are inside Countries.css file */}

                {/* dynamic vox for map */}
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}//already we know it this is used to avoid the error in console log
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                        ></Country>)
                    // we can send a function even a component as props

                }
            </div>

        </div>
    );
};

export default Countries;




/****
 * This whole module has documentation in react site 
 * 
 */