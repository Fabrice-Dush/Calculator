"use strict";

//? DOM elements
const prevEl = document.querySelector(".prevEl");
const currentEl = document.querySelector(".currentEl");
const btnEqual = document.querySelector(".btn-equal");
const calculatorEl = document.querySelector(".calculator");
const btnClearAll = document.querySelector(".btn-clear");
const btnClearOne = document.querySelector(".btn-clearOne");

//? Globals
let prevOperand, currentOperand, operation;

const updateUI = function () {
  currentEl.textContent = currentOperand;
  if (operation) prevEl.textContent = `${prevOperand} ${operation}`;
  else prevEl.textContent = `${prevOperand}`;
};

const getNumber = function (number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand += number;
};

const getOperation = function (operator) {
  if (!currentOperand) return;

  if (currentOperand && operation) {
    compute();
  }
  operation = operator;
  prevOperand = currentOperand;
  currentOperand = "";
};

const compute = function () {
  const prevNumber = Number.parseFloat(prevOperand);
  const currentNumber = Number.parseFloat(currentOperand);

  let computed;
  switch (operation) {
    case "+":
      computed = prevNumber + currentNumber;
      break;
    case "-":
      computed = prevNumber - currentNumber;
      break;
    case "*":
      computed = prevNumber * currentNumber;
      break;
    case "/":
      computed = prevNumber / currentNumber;
      break;
    default:
      return;
  }

  currentOperand = computed;
  prevOperand = "";
  operation = null;
};

const clear = function () {
  currentOperand = "";
  prevOperand = "";
  operation = null;
};
clear();

//? Event handlers
calculatorEl.addEventListener("click", function (event) {
  const btn = event.target.closest(".btn-number");
  if (!btn) return;
  getNumber(btn.dataset.number);
  updateUI();
});

calculatorEl.addEventListener("click", function (event) {
  const btn = event.target.closest(".btn-operation");
  if (!btn) return;
  getOperation(btn.dataset.operator);
  updateUI();
});

btnEqual.addEventListener("click", function () {
  compute();
  updateUI();
});

btnClearAll.addEventListener("click", function () {
  clear();
  updateUI();
});

btnClearOne.addEventListener("click", function () {
  currentOperand = currentOperand.slice(0, -1);
  updateUI();
});
