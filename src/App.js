import React, { Component } from "react";
import plants from "./plants.json";
import ImageCard from './components/ImageCard';
import "./App.css";

class App extends Component {
  state = {
    plants,
  	message: "Click on any image to start the game!",
		score: 0,
		topScore: 0
	};

  handleClick = (id, clicked) => {

		const imageOrder = this.state.plants;

		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "Oh no! You lose. Try again by clicking any image",
				score: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "Good job! Keep guessing.",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

  
  render() {
		return (
      <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1>Plants vs Zombies Clicky Game!</h1>
            <p>Click on any image only once to earn points, don't click on image twice to not loose your progress!</p>
          </div>
			    <div className="start-message text-center">
						<p>{this.state.message}</p>
				  </div>
					<div className="scores text-center">
						<p> Your Score: {this.state.score} | Top Score: {this.state.topScore}</p>
					</div>
				</div>	
        <div className="row justify-content-center">
					{this.state.plants.map(image => (
					  <ImageCard
						  key={image.id}
						  id={image.id}
						  name={image.name}
              clicked={image.clicked}
						  image={image.image}
						  handleClick={this.handleClick}
						/>
					))}
        </div>
			</div>

		);
	}
}

export default App;
