import React from 'react';
import Link from './Link';
const navigationData = [
    {
        name: "Home",
        path: "/home",
        id: 1
    },
    {
        name: "About Us",
        path: "/about-us",
        id: 2
    },
    {
        name: "Services",
        path: "/services",
        id: 3
    },
    {
        name: "Contact",
        path: "/contact",
        id: 4
    },
    {
        name: "Blog",
        path: "/blog",
        id: 5
    }
];


const NavVar = () => {
    return (
        // <nav>
        // <ul className='flex gap-4 justify-center bg-slate-400 p-4 text-white font-bold'>
        //     <li><a href="/">Home</a></li>
        //     <li><a href="/">Avout</a></li>
        //     <li><a href="/">Vlog</a></li>


        // </ul>
        // </nav>

        <nav>

            <ul className='flex gap-4 justify-center bg-slate-400 p-4 text-white font-bold'>
                {
                    navigationData.map(route => <Link route={route}></Link>)
                }
                {/* here a seperate component is created to access the navigationData elements dynamically and map is done and map variavle(route) is passed to the component as props  */}

            </ul>

            <ul className='flex gap-4 justify-center bg-slate-400 p-4 text-white font-bold'>
                {
                    navigationData.map(route => <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
        </nav>



    );
};

export default NavVar;