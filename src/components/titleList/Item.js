import React from 'react'
import ListToggle from './ListToggle';

export default function Item() {
    return (
        <div className="Item" style={{backgroundImage: "url(' + this.props.backdrop + ')"}}>
            <div className="overlay">
                <div className="title">{this.props.title}</div>
                <div className="rating">{this.props.score} / 10</div>
                <div className="plot">{this.props.overview}</div>
                <ListToggle />
            </div>
        </div>
    )
}