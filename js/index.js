// ITERATION 1 

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");
  const result = price * quantity;
  subtotal.innerText = result;
  return result
}

function calculateAll() {
  let totalPrice = 0;
  products = document.querySelectorAll("tr.product");
  total = document.querySelector("#total-value span")
  productsArr = [...products];
  productsArr.forEach(product => {
    totalPrice += updateSubtotal(product)
  });
  total.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const cart = document.querySelector("#cart tbody")
  const fila = target.parentNode.parentNode;
  cart.removeChild(fila)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeButtons = document.querySelectorAll(".btn-remove")
  console.log(removeButtons)
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeButtons.forEach(button => button.addEventListener('click', removeProduct));
  ;

});
