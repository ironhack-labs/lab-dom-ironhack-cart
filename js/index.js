// ITERATION 1

function updateSubtotal(product) {
  //console.log("Calculating subtotal, yey!");
  //... your code goes here
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let subTotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  let calculateTotal = 0;
  const eachSubtotal = document.querySelectorAll(".product");
  eachSubtotal.forEach(function (elm) {
    // updateSubtotal(elm)
    calculateTotal += updateSubtotal(elm);
  });

  // ITERATION 3
  //... your code goes here

  // const allSubtotals = document.querySelectorAll('.subtotal span')

  // allSubtotals.forEach(function (elm) {
  //   calculateTotal += parseInt(elm.innerHTML)
  // })
  document.querySelector("#total-value span").innerHTML = calculateTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // cloning nodes from product
  let productNode = document.querySelector(".product");
  let newProduct = productNode.cloneNode(true);

  //variables calling name and price elements
  let newProductName = document.querySelector(".name span");
  let newProductPrice = document.querySelector(".price span");

  //variables for creating new name and price
  let createNewName = document.querySelector(".newName");
  let createNewPrice = document.querySelector(".newPrice");

  //accessing content and creating a new product row
  newProductName.innerHTML = createNewName.value;
  newProductPrice.innerHTML = createNewPrice.value;
  document.querySelector("tbody").appendChild(newProduct);

  // Adding remove button
  //   const removeNewProductBtn = document.querySelector(".btn-remove");
  //   removeNewProductBtn.forEach(function (elm) {
  //     elm.addEventListener("click", removeProduct);
  //   });
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here

  const removeItemBtn = document.querySelectorAll(".btn-remove");
  removeItemBtn.forEach(function (elm) {
    elm.addEventListener("click", removeProduct);
  });

  const createItemBtn = document.querySelectorAll("#create");
  createItemBtn.forEach(function (elm) {
    elm.addEventListener("click", createProduct);
  });
});
