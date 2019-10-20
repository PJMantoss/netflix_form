import React from 'react'

export default class HeroButton extends React.Component {
    constructor(){
        super()
        this.state = {
            primary: "",
            text: ""
        }
    }

    render(){
        return (
            <a href="#" className="Button" data-primary={this.props.primary}>
                {this.props.text}
            </a>
        )
    }
    
}