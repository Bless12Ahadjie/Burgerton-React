import React from 'react';
import callIcon from './assets/phone-call.png';
import emailIcon from './assets/email.png';
import gitIcon from './assets/github.png';
import locationIcon from './assets/location.png'
import XIcon from './assets/multiply.png'




const ContactLeft = () => {
    const contactInfo ={
        width: "40%",
        height: "100%",
        color: "ariablue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F7A403",
        color:"#f6f6f6"
    }

    const image ={
        width:"20px"
    }
    return (
        <div  style={contactInfo}>
           <img style={image} src={callIcon} alt='Phone icon'/> <p>+233 557 451 685</p> 
           <img style={image} src={emailIcon} alt='Email icon'/>  <p>Blaise0ahadjie@gmail.com</p> 
           <img style={image} src={gitIcon} alt='Email icon'/> <p>@Blaise12ahadjie</p>
           <img style={image} src={XIcon} alt='Email icon'/><p>@Ahadjiebless1</p> 
           <img style={image} src={locationIcon} alt='Email icon'/><p>Takoradi-Ghana</p>

        </div>
    );
}

export default ContactLeft;
