import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {FavoritesContextProvider} from "./helpers/favorites-context";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

ReactDOM.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </FavoritesContextProvider>,
    document.getElementById('root')
);