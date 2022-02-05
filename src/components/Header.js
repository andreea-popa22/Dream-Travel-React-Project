import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../services/firebaseConfig';
import classes from '../css/Header.module.css';
import FavoritesContext from "../helpers/favorites-context";

function Header() {
    const favoritesCtx = useContext(FavoritesContext);
    return (
        <header className={classes.header}>
            <Link className={classes.logo} to="/">Dream Travel</Link>
            <nav className={classes.alignContainer}>
                <ul className={classes.alignElem}>
                    <li>
                        <Link to="/destinations">Destinations</Link>
                    </li>
                </ul>
                {auth.currentUser
                    ? <ul>
                        <li>
                            <Link to="/favorites">Favorites
                                <span className={classes.badge}>
                                    {favoritesCtx.totalFavorites}
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <button onClick={() => auth.signOut()}>Logout</button>
                        </li>
                    </ul>
                    : <ul>
                        <li>
                            <Link to="/login">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                }
            </nav>
        </header>
    );
}

export default Header;