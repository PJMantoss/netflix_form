import React, { Component } from 'react'

export class TitleList extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            mounted: false,
            apiKey: '6a711b2f9574da2458063937e061f1c3'
        }
    }

    loadContent(){

        fetch('https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                data: data
            })
        }).catch((err) => {
            console.log('There has been an error');
        });
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default TitleList
