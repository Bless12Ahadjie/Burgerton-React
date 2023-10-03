import React from 'react';
import web404 from './assets/climb.jpg';
import { useNavigate } from 'react-router-dom';

const Web404 = () => {
    const btn ={
        background: "#fff",
        border: "1px solid #f6f6f6",
        cursor: "pointer"
    }
    const container ={
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    const image404 ={
        width: "40%",
        height: "50%"
    }

    const navigate = useNavigate()
    return (
        <>
        <button onClick={()=>{navigate(-1)}} style={btn}>Back</button>
        <div style={container}>
             <img style={image404} src={web404 } alt='404'/>
             <h1>404 - Page under Construction</h1>
        </div>

        </>
    );
}

export default Web404;
