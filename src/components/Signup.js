import React, { useState } from 'react';
import Styles from './App.css';

const Signup = () => {
        let user = 'bless'
        let pass = 'pass'

        const [users,setusersstate] =useState('')
        const [passwords,setpasswordstate] =useState('')
        const [logged, setlogged] =useState(false)
        const [Count,setCount] = useState(0)

        const Login =() =>{
            user ===users && pass === passwords && setlogged ('True');
        }

    return (
        <div className='nav-container'>
            <h2>Hey login here</h2>
             <input type='text' onChange={(e)=>{
                setusersstate(e.target.value)
             }} />
             <input type='password' onChange={(e)=>{
                setpasswordstate(e.target.value)
             }}/>
             <button onClick={Login}>Login</button>
             {logged && <h1>Hey {user} welcome back </h1>}


             <button onClick={()=>{setCount(Count-1)}}>-</button>
             <h1>{Count}</h1>
             <button onClick={()=>{setCount(Count+1)}}>+</button>



        </div>
    );
}

export default Signup;
