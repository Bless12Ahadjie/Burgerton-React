import React from 'react';
import Btn from './Btn';
import { useHref, useNavigate } from 'react-router-dom';
import Contact from './Contact';


const pStyle ={
   width: "500px",
   height: "300px",
   color: "000",
    fontSize: "66px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "103%",
    marginTop: "5rem" 
}
const pTwo ={
    marginTop: "-8rem"
}
const btnHome ={
    width: "339px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}
const ordeStyle ={
    background: "#Fff",
    color: "#FFA600"
}


const LeftBody = () => {
    const navigate = useNavigate()
    return (
        <div  className='leftStyle'>
            <p style={pStyle}>We’re always in the mood for food</p>
            <p style={pTwo}>no one needs to tell you what restaurant brgerton is.we serves the best burgers in the western part of africa</p>
            <div style={btnHome}>
                
                 <Btn onClick={()=>{navigate('/menu')}} style={{ fontSize: "18px",border: "0",marginTop: "1rem",borderRadius: "8px",height: "43px",width: "157px",color:"#fff" ,background: "#FFA600",cursor: "pointer"}}  What="Order Now"/>
                
               
                 <Btn onClick={()=>{navigate('/contact')}}  style={{ fontSize: "18px",border: "1px solid #FFA600",marginTop: "1rem",borderRadius: "8px",height: "43px",width: "157px",color:"#FFA600" ,background: "#fff",cursor: "pointer"}} What="Reach Us"/>
                 
                 
                 </div>
                 <p id='set'></p>
                 {/* <Navlink >Hello</Navlink> */}
                 
        </div>
    );
}

export default LeftBody;
