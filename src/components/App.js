import React, { Component } from 'react';
import '../styles/App.css';


class Header extends Component {
  render() {
    return (
      <nav>Navigation Bar</nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>Footer</footer>
    );
  }
}

class BaseLayout extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Footer/>
      </div>
    );
  }
}

class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: [],
    }
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: this.state.whatToSay});
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
          <input onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.state.onClick}/>
          <DisplayComponent sayWhat={this.state.sayWhat} />
        </div>
      </div>
    );
  }
}

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}

class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}
//

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>

        </BaseLayout>
        <ParentComponent />
      </div>
    );
  }
}

export default App;
