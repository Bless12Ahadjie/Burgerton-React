import React from 'react';
import logo from './assets/burgerton.svg'
import {Link, NavLink} from 'react-router-dom';



const navStyle ={
    margin: "0 6%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const logoStyle = {
   
    width: "115px",
    height: "72px",
    // display: "none"
}

const ulStyle = {
    display: "flex",
    listStyle: "none"
}

// link stylling

const active = ({isActive}) =>{
    return{
        color: isActive? "#000": "gray",
        textDecoration: "none",
        borderBottom: isActive&& "2px solid #F7A403",
    }
}

const Nav = () => {
    return (

        <div style={navStyle} className='Nav'>
            <div  className='logo'> 
            <Link to='/'>
               <img style={logoStyle}
                src={logo}
                alt='logo for Burgerton'
                 />
            </Link>
         
            </div>

            <ul style={ulStyle}>
                < NavLink to="/"  className='first' style={active} >Home</NavLink >
                < NavLink to="/about"  className='first' style={active} >About</NavLink >
                < NavLink to="/menu"  className='first' style={active} >Menu</NavLink >
                < NavLink to="/contact"  className='first' style={active} >Contact</NavLink >
                < NavLink to="location"  className='first' style={active} >Location</NavLink >
            </ul>

        
        </div>

    );
}

export default Nav;
