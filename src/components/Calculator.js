import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    const buttonName = e.target.innerText;
    setState(calculate({
      ...state,
    }, buttonName));
  };

  const { total, operation, next } = state;

  const result = (
    <p>
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </p>
  );
  return (
    <div className="calculator-div">
      <div className="displayNum" id="result">{result}</div>
      <div className="calculatorButtons">
        <button className="color-first" type="submit" onClick={onClickHandler}>AC</button>
        <button className="color-first" type="submit" onClick={onClickHandler}>+/-</button>
        <button className="color-first" type="submit" onClick={onClickHandler}>%</button>
        <button className="color-first" type="submit" onClick={onClickHandler}>÷</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>7</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>8</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>9</button>
        <button className="color-first" type="submit" onClick={onClickHandler}>x</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>4</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>5</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>6</button>
        <button className="color-first" type="submit" onClick={onClickHandler}>-</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>1</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>2</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>3</button>
        <button className="color-first" type="submit" onClick={onClickHandler}>+</button>
        <button className="color-second zero" type="submit" onClick={onClickHandler}>0</button>
        <button className="color-second" type="submit" onClick={onClickHandler}>.</button>
        <button className="color-first" type="submit" onClick={onClickHandler}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
