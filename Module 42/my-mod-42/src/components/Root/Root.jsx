import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideVar from '../sideVar/SideVar';
import './Root.css'
const Root = () => {
    return (
        <div>
            <Header></Header>{/* this is a fixed component */}

{/* here Outlet and sideVar are putted inside a div to position them into a horizontal line */}
            <div className='flex'>
                {/* this flex put the sidevar and outlet in one horizontal +
                 line  */}
                <SideVar>
                    
                </SideVar>
                <Outlet></Outlet>
                    {/* imported from react router..this is not fixed means after clicking the changed elements are coming here*/}

            </div>
            <Footer></Footer>
            {/* this is also fixed component */}
        </div>
    );
};

export default Root;