import React from 'react';
import Web404 from './Web404';


const locationStyle={
    margin:"0 8%",
}


const Location = () => {
    // const[Click,setClick] = useState(0)

    return (
        <div style={locationStyle}> 
         <Web404/>
         {/* <p>You clicked {Click} times</p>
         <button onClick={()=}>Clicked Me</button> */}

        </div>
    );
}

export default Location;
