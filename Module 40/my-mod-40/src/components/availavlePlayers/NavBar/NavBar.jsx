import React from 'react';
import navImg from '../../../assets/logo.png'//navVar left....the image is inside asset and asset is inside src that's why ./ had worked..if It was in another folder then ../needs to ve added
//here navImg is the image variavle 
import dolImg from '../../../assets/dollar-1.jpeg'
const NavBar = ({availavleValance}) => {
    return (
          <div className="navbar max-w-[1200px] mx-auto">
        {/* this is to put the navVar at center  */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">


            {/* navVar left side image */}
            <img className='w-[60px] h-[60px]' src={navImg} alt="" />{/* here tailwind css is used */}

          </a>
        </div>
        <div className="flex items-center">
          {/* removed the vutton from original daisyUI */}
          {/* new span tag is added to design according to the sample */}
          <span className='mr-1'>{availavleValance} </span>
          {/* here setAvailavleValance is set dynamically and it is imported as app.jsx setState props */}
          <span className='mr-1'> Coin </span>
          <img className='w-[60px] h-[60px] ml-2' src={dolImg} alt="" />

        </div>
      </div>
    );
};

export default NavBar;