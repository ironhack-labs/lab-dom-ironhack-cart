// ITERATION 1

function updateSubtotal(product) {
  console.log(product)
  const price = product.querySelector(".price span");
  console.log(price)
  console.log(price.innerHTML)
  const quantity = product.querySelector(".quantity input");
  console.log(quantity.value)
  const subtotal = product.querySelector(".subtotal span");
  console.log(subtotal.innerHTML)
  return (subtotal.innerHTML = price.innerHTML * quantity.value);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName("product");
  for (let product in products) {
    // stop the loop if it encounters a number
    if (isNaN(products[product]) == false) {
      break;
    }
    updateSubtotal(products[product]);
  }

  let subtotals = document.getElementsByClassName("subtotal");
  let totalNumber = 0;
  for (let subtotal in subtotals) {
    // stop the loop if it encounters a number
    if (isNaN(subtotals[subtotal]) == false) {
      break;
    }
    totalNumber += Number(subtotals[subtotal].querySelector("span").innerHTML);
  }
  let total = document.querySelector("#total-value span");
  total.innerHTML = totalNumber;
}

// ITERATION 3

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productToRemove = target.parentNode.parentNode;
  // console.log("The target in remove is:", target);
  // console.log("The product to remove is:", productToRemove);
  productToRemove.remove();
}

// ITERATION 5

function createProduct() {
  var cart = document.querySelector("#cart");

  var newProductInputs = document.querySelectorAll(".create-product td");
  console.log(newProductInputs[0])
  var newProductName = newProductInputs[0].querySelector("input").value;
  var newProductPrice = newProductInputs[1].querySelector("input").value;

  var template = document.querySelector("#productTemplate");
  var clone = template.content.cloneNode(true);
  var cloneProductItems = clone.querySelectorAll("td");
  var cloneProductRemove = cloneProductItems[4].querySelector("button");
  cloneProductItems[0].querySelector("span").innerHTML = newProductName;
  cloneProductItems[1].querySelector("span").innerHTML = Number(newProductPrice).toFixed(2);
  cloneProductRemove.addEventListener("click", removeProduct);

  cart.appendChild(clone);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
  let removeButtons = document.getElementsByClassName("btn-remove");
  for (let button in removeButtons) {
    if (isNaN(removeButtons[button]) == false) {
      break;
    }
    removeButtons[button].addEventListener("click", removeProduct);
  }
});
