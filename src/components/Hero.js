import React from 'react';
import HeroButton from './HeroButton';

export default function Hero() {
    return (
        <div id="hero" className="Hero">
            <div className="content">

                <img className="logo" src="https://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
                <h2>Season 2 Now Available</h2>
                <p>Narcos is an American crime drama web television series created and produced by Chris Brancato, Carlo Bernard, and Doug Miro. Set and filmed in Colombia, seasons 1 and 2 are based on the story of drug kingpin Pablo Escobar, who became a billionaire through the production and distribution of cocaine.</p>

                <div className="button-wrapper">
                    <HeroButton primary={true} text="Watch Now" />
                    <HeroButton primary={false} text=" + My list" />
                </div>

            </div>

            <div className="overlay"></div>

        </div>
    )
}