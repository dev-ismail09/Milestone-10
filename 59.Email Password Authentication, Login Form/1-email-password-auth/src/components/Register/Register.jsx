import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const auth = getAuth(app);

    // way -1 - easy way

    const handleEmail = (event) =>{
        // console.log(event.target.value)
    }
    const handlePassword = (event) =>{
        // console.log(event.target.value)
    }
    
    const handleSubmit = (event) =>{
        // 1. prevent page refresh
        event.preventDefault();
        setSuccess('');
        setError('');
        // console.log(event.target.email.value)
        // 2. collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please Make Sure one uppercase later');
            return;
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('Plase Make Sure one Number');
            return;
        }
        else if(password.length < 6){
            setError('Please Make Sure 6 later');
            return;
        }

        // 3. create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const singUpUser = result.user;
            console.log(singUpUser);
            setError('');
            event.target.reset();
            setSuccess('Suceessfully Create a Account');

        })

        .catch(error =>{
            console.error(error.message);
            setError(error.message);
            setSuccess('');
        })
    }

    return (
        <div className='text-center mt-5'>
            <h4>Register</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-30 mb-4 rounded' onChange={handleEmail} type="email" name="email" id="email" placeholder='Type Your Email' required/>
                <br />
                <input className='w-30 mb-4 rounded' onBlur={handlePassword} type="password" name="password" id="password" placeholder='Type Your Password' required/>
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;