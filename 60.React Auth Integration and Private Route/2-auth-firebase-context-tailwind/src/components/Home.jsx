import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home =() => {
    // const user = useContext(AuthContext); result with object 
    const {user} = useContext(AuthContext); // result just value , object value
    console.log(user)
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;