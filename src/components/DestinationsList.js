import React from 'react';
import DestinationsItem from './DestinationsItem';
import classes from '../css/DestinationsList.module.css';

function DestinationsList(props) {
    return (
        <ul className={classes.list}>
            {props.destinations.map((destination) => (
                <DestinationsItem
                    key={destination.id}
                    id={destination.id}
                    image={destination.image}
                    title={destination.title}
                    offer={destination.offer}
                    period={destination.period}
                    description={destination.description}
                />
            ))}
        </ul>
    );
}

export default DestinationsList;