import React, { Component } from 'react';
import '../styles/App.css';

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>

          <button type="button" className="btn btn-info btn-sm" onClick={this.props.onClick}>Say It!</button>
        </div>
      </div>
    );
  }
}
