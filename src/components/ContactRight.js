import React from 'react';
import Btn from './Btn';

const ContactRight = () => {
    const container ={
        width: "80%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
    return (
        <div style={container}>
            <input type='text' placeholder='Enter Full name'/>
            <input type='email' placeholder='Enter your email'/> 
            <input type='textbox' placeholder='whats your message'/> 
            <Btn What='Submit'/>

        </div>
    );
}

export default ContactRight;
