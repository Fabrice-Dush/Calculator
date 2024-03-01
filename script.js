"use strict";
const computationEl = document.querySelector(".computation");
const btnEqual = document.querySelector(".btn-equal");
const calculatorEl = document.querySelector(".calculator");

let currentValue = "";
let operatorValue = "";
let computedValue = "";
let all = "";

calculatorEl.addEventListener("click", function (event) {
  const btn = event.target.closest(".btn-number");
  if (!btn) return;
  currentValue = btn.dataset.number;
  computationEl.textContent += currentValue;
});

calculatorEl.addEventListener("click", function (event) {
  if (!currentValue) return;
  const btn = event.target.closest(".btn-operation");
  if (!btn) return;
  const { operator } = btn.dataset;
  operatorValue = operator;
  computationEl.textContent += ` ${operatorValue} `;
});

btnEqual.addEventListener("click", function () {
  console.log(opera);
  switch (operatorValue) {
    case "+":
  }
});
