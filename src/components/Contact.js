import React from 'react';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contact = () => {
    const contactStyle={
        margin:"2rem 8%",
        display:"flex",
        justifyContent: "center",
        alignItems: "center"

    }
    const containerStyle ={
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
        width: "850px",
        height: "502px",
    }
    
    return (
        <div style={contactStyle}>
           
            <div style={containerStyle}>
                <ContactLeft/>
                <ContactRight/>

            </div>
        </div>
    );
}

export default Contact;
