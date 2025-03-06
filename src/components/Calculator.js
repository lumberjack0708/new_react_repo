import React from 'react';

function add({ a, b }) {
  return a + b;
}

function subtract({ a, b }) {
  return a - b;
}

function multiply({ a, b }) {
  return a * b;
}

function divide({ a, b }) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

function Calculator({ a, b }) {
  return (
    <div>
      <span>和: {add({ a, b })}</span>&emsp;
      <span>差: {subtract({ a, b })}</span>&emsp;
      <span>積: {multiply({ a, b })}</span>&emsp;
      <span>商: {divide({ a, b })}</span>&emsp;
    </div>
  );
}

export default Calculator;