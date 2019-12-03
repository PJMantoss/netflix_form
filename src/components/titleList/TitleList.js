import React, { Component } from 'react';
import Item from './Item';

export class TitleList extends Component {
    // apiKey = ;

    constructor(props){
        super(props)
        this.state = {
            data: [],
            mounted: false
        }
    }

    loadContent = () => {

        fetch('https://api.themoviedb.org/3/' + this.props.url + '&api_key=6a711b2f9574da2458063937e061f1c3')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                data: data
            })
        }).catch((error) => {
            console.log('There has been an error');
        });
    }

    getDerivedStateFromProps = (nextProps) => {
        if (nextProps.url !== this.props.url && nextProps.url !== ''){
            this.setState({
                mounted: true,
                url: nextProps.url
            }, ()=> {
                this.loadContent();
            });
        }
    }

    componentDidMount = () => {
        if (this.props.url !== ''){
            this.loadContent();
            this.setState({
                mounted: true
            })
        }
    }

    render() {
        let titles = '';
        if (this.state.data.results){
            titles = this.state.data.results.map((title, i) => {
                if (i<5) {
                    let name = '';
                    let backDrop = 'https://image.tmdb.org/t/p/original' + title.backdrop_path;
                    if (!title.name) {
                        name = title.original_title;
                    } else {
                        name = title.name;
                    }

                    return(
                        <Item 
                            key={title.id} 
                            title={name} 
                            score={title.vote_average}
                            overview={title.overview}
                            backdrop={backDrop} 
                        />
                    );
                } else {
                    return(
                        <div key={title.id}></div>
                    );
                }
            });
        }

        return (
            <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
               <div className="Title">
                   <h1>{this.props.title}</h1>
                   <div className="titles-wrapper">
                       {titles}
                   </div>
               </div> 
            </div>
        );
    }
}

export default TitleList;
