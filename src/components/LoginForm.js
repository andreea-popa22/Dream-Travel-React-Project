import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {signin} from "../helpers/auth";
import Footer from "./Footer";
import Header from "./Header";
import classes from '../css/LoginForm.module.css';

export default function LoginForm() {
    const [error, setError] = useState('');
    let email = useRef();
    const password = useRef();
    async function handleSubmit(event) {
        event.preventDefault();
        setError({error: ''});
        try {
            await signin(email.current.valueOf().value, password.current.valueOf().value);

        } catch (error) {
            setError({error: error.message});
        }
    }

    return (
        <section>
            <Header/>
            <section className={classes.auth}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' placeholder='Email' name='email' id='email' ref={email} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input type='password' id='password' placeholder='Password' name='password' ref={password}/>
                    </div>
                    <div className={classes.actions}>
                        <button type={"submit"}>Login</button>
                        <hr></hr>
                        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </form>
            </section>
            <img className={classes.photo} src='https://www.jetsetter.com//uploads/sites/7/2018/04/Yq6ObbTP-1-1380x690.jpeg'></img>
            <Footer/>
        </section>
    )
}