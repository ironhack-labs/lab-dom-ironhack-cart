// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector(".price span").innerText);
  const quantity = parseFloat(product.querySelector(".quantity input").value);
  const subtotal = (price * quantity).toFixed(2);
  product.querySelector(".subtotal span").innerText = subtotal;
  return parseFloat(subtotal);
}


function calculateAll() {
  let total = 0;
  const products = document.getElementsByClassName("product");
  Array.from(products).map((tr) => {
    total += updateSubtotal(tr);
  });

  const totalContainer = document.getElementById("total-value");
  totalContainer.firstElementChild.innerText = total.toFixed(2);
}
// end of test

// ITERATION 2
//... your code goes here

// ITERATION 3
//... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const buttonHolder = target.parentElement.parentElement;
  buttonHolder.parentElement.removeChild(buttonHolder);
  calculateAll();
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
