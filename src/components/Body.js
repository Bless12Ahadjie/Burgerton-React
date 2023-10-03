import React from 'react';
import LeftBody from './LeftBody';
import HeroImg from './HeroImg';

const bodyStyle ={
    margin: "45px 6% 0 6%",
    display: "flex"
}

const Body = () => {
    return (
        <div style={bodyStyle} className='bodyStyle'>
            <LeftBody />
            <HeroImg />
        </div>
    );
}

export default Body;
