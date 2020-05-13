// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input").value;
  let subTotal = price.innerHTML * quantity;
  product.querySelector(".subtotal span").innerHTML = subTotal;
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  [...products].forEach(function (elem) {
    updateSubtotal(elem);
  })
  // ITERATION 3
  //does innerHTML not work with querySelectorAll?
  let nodes = document.querySelectorAll(".subtotal span");
  let array = [];
  [...nodes].forEach(function (elem) {
    array.push(Number(elem.innerHTML));
  })
  let total = array.reduce(function (acc, elem) {
    return acc + elem;
  })
  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  event.querySelector(".product");
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  [...removeBtns].forEach(function (elem) {
    elem.addEventListener('click', removeProduct)
  })
});
