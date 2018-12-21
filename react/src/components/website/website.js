import React from 'react';
import update from 'immutability-helper';

import { Button, Pagination } from 'react-materialize';

const MOVIES = ["Jaws", "Rubber", "Up"];
const CATEGORIES = ["Action", "Horror", "Comedy", "Fiction"];

class ScoreBox extends React.Component {
  onSelect = (activePage) => {
    this.props.changeScore(this.props.movieName, this.props.category, activePage);
  }

  render() {
    return (
      <div>
        <p className="paginator-movie">{this.props.category}</p>
        {}
        <Pagination className="paginator" items={5} activePage={this.props.score} onSelect={this.onSelect} />
      </div>
    )
  }
}

class MovieBox extends React.Component { 
  render() {
    return (
      <div className="movie-box">
        <h5 className="movie-header">{this.props.movieName}</h5>
        {Object.keys(this.props.categoryScores).map(c => (
          <ScoreBox movieName={this.props.movieName} category={c} score={this.props.categoryScores[c]} changeScore={this.props.changeScore} key={this.props.title+c}/>
        ))}
      </div>
    )
  }
}

class Website extends React.Component {
  constructor(props) {
    super(props);

    var initialScores = {};

    // Instantiate state
    for (var i=0; i<MOVIES.length; i++) {
      const m = MOVIES[i];
      initialScores[m] = {};
      for (var j=0; j<CATEGORIES.length; j++) {
        const c = CATEGORIES[j];
        initialScores[m][c] = Math.ceil(Math.random()*5);
      }
    }

    this.state = {
      scores: initialScores
    }
  }

  changeScore(movie, category, score) {
    // https://github.com/kolodny/immutability-helper
    const newScores = update(this.state.scores, {[movie]: {[category]: {$set: score}}});
    this.setState({scores: newScores});
  }

  buttonClicked() {
    const scoreSums = {};
    CATEGORIES.forEach(c => {
      scoreSums[c] = 0;
    })

    for (var movie in this.state.scores) {
      for (var category in this.state.scores[movie]) {
        scoreSums[category] += this.state.scores[movie][category];
      }
    }
    console.log("your scores are:")
    console.log(scoreSums);
  }
  
  render() {
    return (
      <React.Fragment>
        {MOVIES.map(m => 
          <MovieBox movieName={m} categoryScores={this.state.scores[m]} changeScore={this.changeScore.bind(this)} key={m}/>
        )}
        <Button waves='light' onClick={this.buttonClicked.bind(this)}>Go</Button>
      </React.Fragment>
    )
  }
}

export default Website;