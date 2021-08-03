import React from 'react';
import Poki from './Poki';

class Pokemon extends React.Component {
  componentDidMount() {
    console.log("Pokemon: App Mounts")
  }
  render() {
    console.log("Pokemon: App Renders")
    return (
      <>
        {this.props.pokemon.map(pokemon => (
          <Poki key={pokemon.id} pokemon={pokemon}/>
        ))}
      </>
    );
  }
}

export default Pokemon;
