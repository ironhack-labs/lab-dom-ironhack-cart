// ITERATION 1

function updateSubtotal($product) {
  let primera = document.querySelectorAll(".price > span");
  let primeraTexto = [];
  let unitPrice = [];

  primera.forEach(elm => {
    primeraTexto.push(elm.innerHTML);
  });
  primeraTexto.forEach(elm => {
    unitPrice.push(parseInt(elm, 10));
  });

  let numUnits = document.querySelectorAll(".quantity > input");
  let quantityProduct = [];

  numUnits.forEach(elm => {
    quantityProduct.push(elm.getAttribute("value"));
  });

  let multipliCate = [];

  for (let i = 0; i < unitPrice.length; i++) {
    for (let k = 0; k < quantityProduct.length; k++) {
      multipliCate.push(unitPrice[(i = k)] * quantityProduct[(k = i)]);
    }
  }

  let substitute = document.querySelectorAll(".subtotal > span");
  let subTotal = [];

  for (let i = 0; i < multipliCate.length; i++) {
    for (let k = 0; k < substitute.length; k++) {
      subTotal.push((substitute[(i = k)].innerHTML = multipliCate[(i = k)]));
    }
  }
}
updateSubtotal();

function calculateAll() {
  let getSubs = document.querySelectorAll(".subtotal span");
  let subsToValue = [];
  let valueToNums = [];

  getSubs.forEach(elm => {
    subsToValue.push(elm.innerHTML);
  });

  subsToValue.forEach(elm => valueToNums.push(parseInt(elm, 10)));

  let beSubTotal = document.querySelector("#total-value > span");
  let sum = 0;

  for (let i = 0; i < valueToNums.length; i++) {
    sum += valueToNums[i];
  }

  beSubTotal.innerHTML = sum;
}

calculateAll();

window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate");

  $calculateTrigger.addEventListener("click", calculateAll);
});

// ITERATION 4

let getButtons = document.querySelectorAll(".btn.btn-remove");
getButtons.forEach(elm => {
  elm.addEventListener("click", productRemoveListener);
});

function productRemoveListener(event) {
  let chilDren = document.querySelector(".product");

  chilDren.parentNode.removeChild(chilDren);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  // ...
}

// For development testing purposes, paste the following code inside of `calculateAll`:
// const $singleProduct = document.querySelector('.product');
// updateSubtotal($singleProduct);
// End of test
