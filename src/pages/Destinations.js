import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DestinationsList from "../components/DestinationsList";
import classes from '../css/Destinations.module.css';

const DUMMY_DATA = [
    {
        id: 'd1',
        title: 'Vienna, Austria',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Karlskirche_Wien_September_2016.jpg',
        offer: ' Hilton Hotel | 3 nights | 239$ | ',
        period: '18-21 Dec 2022',
        description: 'Capital of the Republic of Austria and one of Europe\'s most visited cities, Vienna owes much of its charm and rich history to its splendid location on the banks of the Danube River.',
    },
    {
        id: 'd2',
        title: 'Milan, Italy',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Milan_Cathedral_%28Duomo_di_Milano%29_evening.jpg',
        offer: ' Plaza Hotel | 5 nights | 379$ | ',
        period: '18-23 May 2022',
        description: 'Charming yet undeniably gritty, Milan is the wealthiest, most stylish city in Italy; a perfect example of old-world romance meets urban steel.',
    },
    {
        id: 'd3',
        title: 'Santorini, Greece',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Oia_sunset_-_panoramio_%282%29.jpg',
        offer: ' Sunset Villa | 7 nights | 769$ | ',
        period: '18-25 August 2022',
        description: 'With its reputation for dazzling panoramas, romantic sunsets and volcanic-sand beaches, it’s hardly surprising Santorini features on so many travelers’ bucket lists.',
    },
];

function Destinations() {
    return (
        <div>
            <Header/>
            <section>
                <br/>
                <h1>Destinations</h1>
                <main className={classes.main}>
                    <DestinationsList destinations={DUMMY_DATA}/>
                </main>
            </section>
            <Footer/>
        </div>
    )
}

export default Destinations;