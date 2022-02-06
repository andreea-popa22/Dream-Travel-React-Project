import React, {useContext} from 'react';
import Card from '../components/Card';
import classes from '../css/DestinationsItem.module.css';
import FavoritesContext from "../helpers/favorites-context";
import {auth} from '../services/firebaseConfig';

function DestinationsItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                offer: props.offer,
                period:props.period,
                description: props.description
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>&#128205; {props.offer}</p>
                    <p>&#128197; {props.period}</p>
                    <p>{props.description}</p>
                </div>
                { auth.currentUser ?
                    <div className={classes.actions}>
                        <button onClick={toggleFavoriteStatusHandler}>
                            {itemIsFavorite && auth.currentUser ? 'Remove from Favorites' : 'To Favorites'}
                        </button>
                    </div>
                    :
                    <div></div>
                }
            </Card>
        </li>
    );
}

export default DestinationsItem;