import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello, my friend",
      hasLoaded: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind (this);
  };

    
    handleInput(e) {
      this.setState({
        text: e.target.value, 
      });
    }
    
    handleClick(){
      this.setState({
        hasLoaded: this.state.hasLoaded ? true : false,
      });
      (<button onClick={this.handleClick}>Click Me!</button>)
    }


  render() {
    if (this.state.hasLoaded) {
      return (
        <div>
          <h1>Welcome to React!</h1>
          <hr />
          <input onChange = {(this.handleInput)} value = {this.state.text} id ="input" placeholder={"string"} />
        </div>
          );
      }else{
        return <div>
        <h1>Loading..</h1>
        <button onClick = {this.handleClick}> Load Page </button>
        </div>
      }
  }
}

export default App;