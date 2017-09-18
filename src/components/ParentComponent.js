import React, { Component } from 'react';
import '../styles/App.css';
import ChildComponent from './ChildComponent.js';
import DisplayComponent from './DisplayComponent.js';

class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",

    }
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    let whatToSay = e.target.value
    this.setState({whatToSay: whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  // {Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.}
  render() {
    return (
      <div>
        <div>
          <input onChange={this.handleInput} value={this.state.whatToSay} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent whatWasSaid={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}

export default ParentComponent;
