// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let subtotal = price * quantity;
  console.log(subtotal);
  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll(".product");
  let subtotals = 0;
  products.forEach((product) => {
    console.log(product);
    subtotals += updateSubtotal(product);
  });
  const result = document.querySelector("#total-value span");
  result.innerText = subtotals.toFixed(2);
}

// ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log("The target in remove is:", target);

//   window.addEventListener("Remove", () => {
//     const calculatePricesBtn = document.getElementById("remove");
//     calculatePricesBtn.addEventListener("click", calculateAll);

//     //... your code goes here
//   });

//   //... your code goes here
// }

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
  console.log(newProductInputs[0]);
  var newProductName = newProductInputs[0].querySelector("input").value;
  var newProductPrice = newProductInputs[1].querySelector("input").value;

  var template = document.querySelector("#productTemplate");
  var clone = template.content.cloneNode(true);
  var cloneProductItems = clone.querySelectorAll("td");
  var cloneProductRemove = cloneProductItems[4].querySelector("button");
  cloneProductItems[0].querySelector("span").innerHTML = newProductName;
  cloneProductItems[1].querySelector("span").innerHTML = Number(
    newProductPrice
  ).toFixed(2);
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

// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });
