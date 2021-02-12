// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName("product");
  var totalValue = 0;
  for (let i = 0; i < allProducts.length; i++) {
    var subtotalOfProducts = updateSubtotal(allProducts[i]);
    totalValue += subtotalOfProducts
  }
  document.querySelector("#total-value span").innerText = totalValue;
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parentProduct = target.parentNode.parentNode;
  const table = parentProduct.parentNode;
  console.log(parentProduct);
  console.log(table);
  table.removeChild(parentProduct);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }
});

