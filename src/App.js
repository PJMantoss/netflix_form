import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      apiKey: '6a711b2f9574da2458063937e061f1c3',
      searchTerm: "",
      searchUrl: ""
    }

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyUp(e){
    if (e.key === 'Enter' && this.state.searchTerm !== ''){
      let searchUrl = "search/multi?query" + '&api_key=' + this.apiKey;
    }
  }

  handleChange(e){
    this.setState({
      searchTerm : e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input 
                onKeyUp={this.handleKeyUp} 
                onChange={this.handleChange} 
                type="search" 
                placeholder="Search for a movie..." 
                value={this.state.searchTerm} 
            />
          </div>
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results"  url={this.state.searchUrl} />
        <TitleList title="Top TV picks for Mantoss"  url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now"  url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror"  url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats"  url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic"  url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
  
}

export default App;
