import React from 'react';
import {createContext, useState} from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteDestination) => {
    },
    removeFavorite: (destinationId) => {
    },
    itemIsFavorite: (destinationId) => {
    }
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(destinationId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(destination => destination.id !== destinationId);
        });
    }

    function itemIsFavoriteHandler(destinationId) {
        return userFavorites.some(destination => destination.id === destinationId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;
