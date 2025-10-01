import React from 'react';
// this component is created only to generate links for <a> tag
const Link = ({route}) => {
    return (
       <li>
        <a href={route.path}>{route.name}</a>
       </li>
    );
};

export default Link;