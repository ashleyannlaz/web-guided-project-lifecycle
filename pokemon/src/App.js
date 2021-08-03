import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {

  // ------------ OLD WAY
  // constructor() {
  //   super();
  //   this.state = {
  //     pokemon: data
  //   };
  // }
  // ------------ OLD WAY

  state = {
    // pokemon: data
    pokemon: [] 
    // when you don't have data
  }

  componentDidMount(){
    console.log("App: Component Mounts")
    setTimeout(() =>{
      this.setState({
        ...this.state, pokemon: data
      })
    }, 5000)
  }

  render() {
    console.log("App: Renders Component")
    return (
      <div className="App">
        {/* <Pokemon pokemon={this.state.pokemon} /> */}

        {
          (this.state.pokemon.length > 0) ? <Pokemon pokemon={this.state.pokemon} /> : <p>Loading</p>
        }


      </div>
    );
  }
}

export default App;
