import React, { Component } from 'react'

export class ListToggle extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggled: false
        }
    }

    handleClick = () => {
        if (this.state.toggled === true){
            this.setState({
                toggled: false
            })
        } else {
            this.setState({
                toggled: true
            })
        }
    }


    render() {
        return (
            <div className="ListToggle" onClick={this.handleClick} data-toggled={this.state.toggled}>
                <div>
                    <i className="fa fa-fw fa-plus"></i>
                    <i className="fa fa-fw fa-check"></i>
                </div>
            </div>
        )
    }
}

export default ListToggle