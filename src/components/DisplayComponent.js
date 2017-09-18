import React, { Component } from 'react';
import '../styles/App.css';

class DisplayComponent extends Component {
  render() {
    return (
      <div>
      <h4 className="card-title">State, props, children, function, fun!</h4>
       <h6 className="card-subtitle mb-2 text-muted">Messages</h6>
      {this.props.whatWasSaid}
      </div>
    );
  }
}

export default DisplayComponent;
