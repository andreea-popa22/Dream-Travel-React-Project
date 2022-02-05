import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import classes from '../css/Home.module.css';


function Home() {
    return (
        <div>
            <Header/>
            <section>
                <h1 className={classes.text1}>Home page</h1>
                <p className={classes.text2}>“Travel is the only thing you buy that makes you richer”</p>
                <p className={classes.text2}>~Focus on the journey~</p>
                <img className={classes.home1} src='https://upload.wikimedia.org/wikipedia/commons/0/05/Hot_air_balloon_over_a_pagoda_in_Bagan.jpg'></img>
            </section>
            <Footer/>
        </div>
    )
}

export default Home;