import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {signup} from '../helpers/auth';
import Header from "./Header";
import Footer from "./Footer";
import classes from "../css/LoginForm.module.css";

export default function SignUpForm() {
    const [error, setError] = useState();
    const email = useRef();
    const password = useRef();
    const age = useRef();
    const name = useRef();

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');
        try {
            await signup(email.current.value, password.current.value, age.current.value, name.current.value);
        } catch (error) {
            setError({error: error.message});
            console.log(error)
        }
    }


    return (
        <section>
            <Header/>
            <section className={classes.auth}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' placeholder='Email' name='email' id='email' ref={email}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input type='password' id='password' placeholder='Password' name='password' ref={password}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Your Full Name</label>
                        <input placeholder='Full Name' name='name' id='name' ref={name}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='age'>Your Age</label>
                        <input placeholder='Age' name='age' id='age' ref={age}/>
                    </div>
                    <div className={classes.actions}>
                        <button type={"submit"}>Sign up</button>
                        <hr></hr>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </section>
            <Footer/>
        </section>
    )
}

