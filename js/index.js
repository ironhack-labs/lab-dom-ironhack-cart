// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = Number(price) * parseFloat(quantity);
  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}


// ITERATION 2

function calculateAll() {
  const cartItemElements = document.getElementsByClassName("product");

  let totalValue = 0;

  for (cartItemElement of cartItemElements) {
    totalValue += updateSubtotal(cartItemElement);
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = totalValue;
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
