// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");

  let result = quantity * price;
  subtotal.textContent = result;

  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let subtotalsArr = [];
  let total;
  const totalValue = document.querySelector("#total-value span");

  // ITERATION 2
  const allProducts = document.querySelectorAll("tr.product");
  allProducts.forEach(product => {
    let subtotal = updateSubtotal(product);
    subtotalsArr.push(subtotal);
  });
  // allProducts.forEach(product => updateSubtotal(product));

  // ITERATION 3
  total = subtotalsArr.reduce((acc, curr) => acc + curr);
  totalValue.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
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
