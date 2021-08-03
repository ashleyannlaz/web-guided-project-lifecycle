import React from "react";

class AppClass extends React.Component {
  // constructor() {
  //   console.log("Set Up State")
  //   // this isn't run again after a change of state
  //   super();
  //   this.state = {
  //     name: "Warren"
  //   };
  // }

  // new way of doing constructor

  state = {
    name: "Warren"
  }

  handleNameButtonClick = (e) => {
    console.log("Change State")

    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  componentDidMount () {
    console.log("Component Mounted");
  }
  // use Effect with an empty array is the same as component did Mount

  componentDidUpdate(prevProps, prevState) {
    console.log("Old Props", prevProps);
    console.log("New Props", this.props);
    console.log("Old State", prevState);
    console.log("New State", this.state);
    console.log("Component Updated");
    if (this.state !== prevState.name){

    }
}

  render() {
    console.log("Render the DOM");

    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <p>This is the class based component.</p>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
