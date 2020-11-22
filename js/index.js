// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  //console.log(price.innerHTML);
  let subtotal = price.innerHTML * quantity.value;
  //console.log(subtotal);
  let subtotalPage = product.querySelector(".subtotal span");
  subtotalPage.innerHTML = subtotal;
  return subtotal;


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = [...document.getElementsByClassName("createProduct")];
  allProducts.forEach((prod) => {
  });
  // ITERATION 3
  //... your code goes here
  const sumSubTotal = [...document.querySelectorAll(".product .subtotal span")]
    .map((price) => Number(price.textContent))
    .reduce((acc, curValue) => (acc += curValue), 0);
  console.log("sumbsubtotal", sumSubTotal);
  const totalValueCell = document.querySelector("#total-value span");
  totalValueCell.innerHTML = sumSubTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  return target

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
