import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    
    let x = event.clientX;
    let y = event.clientY;
    drawChromeBoiAtCoords(x, y)
    
  }
  keyDownEvent = (e) => {
    (e.key === 's') ? resize('-') : null;
    (e.key === 'a') ? resize('+') : null;
  }
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyDown={this.keyDownEvent}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
