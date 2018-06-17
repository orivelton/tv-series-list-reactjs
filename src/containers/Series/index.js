import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
  state = {
    series: []
  }

  componentDidMount() {
  }

  onSeriesInputChange = e => {

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then( response => response.json())
      .then(json => this.setState({ series: json}));

    console.log(e);
    console.log();
  }

  render() {
    return (
      <div>
        The length of series array { this.state.series.length }

        <div>
          <input type="text" onChange={ this.onSeriesInputChange } />
        </div>
        <SeriesList list={ this.state.series } />
      </div>
    )
  }
}

export default Series;
