import * as React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0,
      valueFrom: null,
      valueTo: null,
    };
  }

  handleReset = () => {
    this.setState({
      displayValue: this.valueFrom.value,
    });
    this.intervalID = setInterval(this.tick, 1000);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      displayValue: this.valueFrom.value,
      valueFrom: this.valueFrom.value,
      valueTo: this.valueTo.value,
    });
    this.intervalID = setInterval(this.tick, 1000);
  };

  tick = () => {
    if (this.state.valueTo && this.state.valueFrom) {
      this.setState(prevState => ({
        displayValue: parseInt(prevState.displayValue) + 1,
      }));
    }
    if (this.state.displayValue >= this.state.valueTo && this.state.valueTo && this.state.valueFrom) {
      clearInterval(this.intervalID);
    }
  };

  render() {

    return (
      <div>
        <div>
          {this.state.displayValue}
        </div>
        <div>
          <button onClick={this.handleReset}>Reset</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            ref={(input1) => this.valueFrom = input1}
            placeholder="from"
          />
          <input
            type="number"
            ref={(input) => this.valueTo = input}
            placeholder="to"
          />
          <button type="submit">Count</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.querySelector('#root'),
);
