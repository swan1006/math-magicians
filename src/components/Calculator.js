import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-div">
        <input className="displayNum" type="text" id="result" placeholder="0" disabled />
        <div className="calculatorButtons">
          <button className="color-first" type="submit">AC</button>
          <button className="color-first" type="submit">+/-</button>
          <button className="color-first" type="submit">%</button>
          <button className="color-first" type="submit">/</button>
          <button className="color-second" type="submit">7</button>
          <button className="color-second" type="submit">8</button>
          <button className="color-second" type="submit">9</button>
          <button className="color-first" type="submit">*</button>
          <button className="color-second" type="submit">4</button>
          <button className="color-second" type="submit">5</button>
          <button className="color-second" type="submit">6</button>
          <button className="color-first" type="submit">-</button>
          <button className="color-second" type="submit">1</button>
          <button className="color-second" type="submit">2</button>
          <button className="color-second" type="submit">3</button>
          <button className="color-first" type="submit">+</button>
          <button className="color-second zero" type="submit">0</button>
          <button className="color-second" type="submit">.</button>
          <button className="color-first" type="submit">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
