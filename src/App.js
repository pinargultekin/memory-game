import React from 'react';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';
import Wrapper from './components/Wrapper';
import flowers from './flowers.json';
import './App.css';

class App extends React.Component {
  
  state = {
    flowers,
    selected: [],
    score: 0,
    highestscore: 0
  };

  
  shuffle = id => {
    this.setState({
      flowers: this.state.flowers.sort(function (a, b) {
        return 0.5 - Math.random();
      })
    });
  };

  
  selectImg = id => {
   
    let selected = this.state.selected;

    if (selected.indexOf(id) === -1 && this.state.score < 12) {
      
      selected.push(id);
      var newScore = this.state.score + 1;
      this.setState({
        selected: selected,
        score: newScore,
        highestscore: newScore > this.state.highestscore ? newScore : this.state.highestscore
      })
      if (newScore === 12) {
        this.setState({
          score: 0,
          selected: [],
        })
       alert("Woww! Great memory!!!");
      }
    }
    
    else {
      this.setState({
        score: 0,
        selected: [],
      })
      alert("Oh no! Try again harder.");
    }
    
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <Jumbotron />
          </div>
          <div className="row">
            <div className="col m12 text-center">
              <Scoreboard
                score={this.state.score}
                highestscore={this.state.highestscore}
              />
            </div>
            <div className="col m12">
              {this.state.flowers.map(img => (
                <Cards
                  id={img.id}
                  key={img.id}
                  image={img.image}
                  shuffle={this.shuffle}
                  selectImg={this.selectImg}
                />
              ))}
            </div>
          </div>
        </div>

      </Wrapper>
    );
  }
}

export default App;
