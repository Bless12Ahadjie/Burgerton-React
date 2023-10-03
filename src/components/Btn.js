import React from 'react';
import  style from '../App.css'
const Btn = (props) => {
    return (
        <div>
            <button onClick={props.onClick} style={props.style}>{props.What}</button>
        </div>
    );
}

export default Btn;
