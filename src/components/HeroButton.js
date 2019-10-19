import React from 'react'

export default function HeroButton() {
    return (
        <a href="#" className="button" data-primary={this.props.primary}>
            {this.props.text}
        </a>
    )
}

export default HeroButton;