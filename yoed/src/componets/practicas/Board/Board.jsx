import React, { Component } from "react";
import Square from "../Square/Square";

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onclick={() => this.handleClick(i)}
      />
    );
  }
}

export default Square;
