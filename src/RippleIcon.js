import React, { Component } from 'react';
import './App.css';

export default class RippleIcon extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <i className={this.props.icon+" RippleIcon"}/>
    );
  }
}
