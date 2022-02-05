import React, {useContext} from 'react';

import FavoritesContext from '../helpers/favorites-context';
import MeetupList from '../components/DestinationsList';
import Header from "../components/Header";
import Footer from "../components/Footer";
import classes from '../css/Destinations.module.css';
import DestinationsList from "../components/DestinationsList";

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>;
    } else {
        content = <DestinationsList destinations={favoritesCtx.favorites} />;
    }

    return (
        <div>
            <Header/>
            <section>
                <h1>My Favorites</h1>
                <main className={classes.main}>
                    {content}
                </main>
            </section>
            <Footer/>
        </div>
    );
}

export default Favorites;