import React from 'react'
import Navbar from './navbar';
import Main from './main';
import Card from './card';
import Footer from './footer';


function Lending() {
    return (
        <div>
            <Navbar />
            <Main />
            <div className='mainc'>
                <div className='cards flex-1'>
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/346.jpeg'} h1='Terry' name2='Unknown - Human' name3='Earth (Replacement Dimension)' name4='Get Schwifty' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/353.jpeg'} h1='Tiny Rick' name2='Dead - Human' name3='Earth (Replacement Dimension)' name4='Big Trouble in Little Sanchez' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/470.jpeg'} h1='Alien Spa Employee' name2='Alive - Alien' name3='Alien Day Spa' name4='Rest and Ricklaxation' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/474.jpeg'} h1='Dancer Cowboy Morty' name2='Alive - Human' name3='Citadel of Ricks' name4='The Ricklantis Mixup' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/603.jpeg'} h1='Crossy' name2='Alive - Unknown' name3='Ricks’s Story' name4='Never Ricking Morty' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/654.jpeg'} h1='Plane Crash Survivor' name2='Unknown - Human' name3='Near-Duplicate Reality' name4='The Vat of Acid Episode' />

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Lending
