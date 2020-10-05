import React from "react";
import "./SortingVisualizer.css";
import * as bubbleSort from "../Algorithms/bubbleSort";
export default class SortingVisualizer extends React.Component {
  anims = [];
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 200; i++) {
      array.push(randomIntFromInterval(50, 500));
    }
    this.setState({ array });
  }

  bubbleSort() {
    const arrayBars = document.getElementsByClassName("array-bar");
    let result = bubbleSort.bubbleSort(
      this.state.array,
      (color, x, y) => {
        this.anims.push([color, x, y]);
      },
      (x, height) => {
        this.anims.push(["swap", x, height]);
      }
    );
    for (let i = 0; i < this.anims.length; i++) {
      if (this.anims[i][0] === "swap") {
        setTimeout(() => {
          arrayBars[this.anims[i][1]].style.height = `${this.anims[i][2]}px`;
        }, i * 2);
      } else {
        setTimeout(() => {
          arrayBars[
            this.anims[i][1]
          ].style.backgroundColor = `${this.anims[i][0]}`;
          arrayBars[
            this.anims[i][2]
          ].style.backgroundColor = `${this.anims[i][0]}`;
        }, i * 2);
      }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
          <br />
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
      </>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
