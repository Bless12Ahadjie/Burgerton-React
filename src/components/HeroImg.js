import React from 'react';
import image from './assets/burgerImg.svg'

const img ={
    width: "592px",
    height: "490px",
    marginTop: "-2rem"
}

const HeroImg = () => {
    return (
        <div>
            <img
            style={img}
            src={image}
            alt='Hero section Image'
            />
        </div>
    );
}

export default HeroImg;
