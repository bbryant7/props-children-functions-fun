import React, { Component } from 'react';
import '../styles/App.css';

class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.whatWasSaid}</div>
    );
  }
}

export default DisplayComponent;
