import React, { use } from 'react';
import Country from './Country/Country';// a common practice is to put a file inside a folder
import './Countries.css'
const Countries = ({ countriesPromise }) => {
    const getCountries = use(countriesPromise);
    const countries = getCountries.countries;//there is a  key named countries and countries is an array inside the api
    console.log(countries)
    return (
        <div className='countries'>
            <h1>Total countries : {countries.length} {/* here total length of countries array is 250 */}
            </h1>
            {/* dynamic vox for map */}
            

            <div className='countries'>
                {/* this div is created to put the country elements into three columns and the grid and column codes are inside Countries.css file */}
                {
                countries.map(country => <Country 
                    key={country.cca3.cca3}//already we know it this is used to avoid the error in console log
                    country={country}></Country> )


            }
            </div>

        </div>
    );
};

export default Countries;
