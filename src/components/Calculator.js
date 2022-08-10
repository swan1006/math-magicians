import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onClickHandler = (e) => {
    const buttonName = e.target.innerText;
    this.setState((prevValue) => calculate({
      ...prevValue,
    }, buttonName));
  };

  result = () => {
    const { total, operation, next } = this.state;
    return (
      <p>
        {total}
        {' '}
        {operation}
        {' '}
        {next}
      </p>
    );
  }

  render() {
    return (
      <div className="calculator-div">
        <div className="displayNum" id="result">{this.result()}</div>
        <div className="calculatorButtons">
          <button className="color-first" type="submit" onClick={this.onClickHandler}>AC</button>
          <button className="color-first" type="submit" onClick={this.onClickHandler}>+/-</button>
          <button className="color-first" type="submit" onClick={this.onClickHandler}>%</button>
          <button className="color-first" type="submit" onClick={this.onClickHandler}>÷</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>7</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>8</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>9</button>
          <button className="color-first" type="submit" onClick={this.onClickHandler}>x</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>4</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>5</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>6</button>
          <button className="color-first" type="submit" onClick={this.onClickHandler}>-</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>1</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>2</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>3</button>
          <button className="color-first" type="submit" onClick={this.onClickHandler}>+</button>
          <button className="color-second zero" type="submit" onClick={this.onClickHandler}>0</button>
          <button className="color-second" type="submit" onClick={this.onClickHandler}>.</button>
          <button className="color-first" type="submit" onClick={this.onClickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
