import React from 'react';
import classes from '../css/Footer.module.css';

function Footer() {
    return (
        <div>
            <footer>
                    <a className={classes.link1} href="#">Home</a>
                    <a className={classes.link1} href="#">Services</a>
                    <a className={classes.link1} href="#">About</a>
                    <a className={classes.link1} href="#">Terms</a>
                    <a className={classes.link1} href="#">Privacy Policy</a>
            </footer>
        </div>
    )
}

export default Footer;