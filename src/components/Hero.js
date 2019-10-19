import React from 'react'

export default function Hero() {
    return (
        <div id="hero" className="Hero" style={{backgroundImage: "url(https://images.alphacoders.com/633/633643.jpg)"}}>
            <div className="content">

                <img className="logo" src="https://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
                <h2></h2>
                <p></p>

                <div className="">
                    <HeroButton primary={true} text="Watch Now" />
                    <HeroButton primary={false} text="+ My list" />
                </div>

            </div>

            <div className=""></div>

        </div>
    )
}

export default Hero;