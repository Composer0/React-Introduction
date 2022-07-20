import React from 'react';
import { userIsRegistered } from './App';

function Registered() {
    return(

userIsRegistered === true ? 
    <button type="submit">Submit</button> :
    <div>
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
    </div>
    )
}

export default Registered;