// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = Number(price * quantity);

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalPrice;

  return subtotal
}

function calculateAll() {

  const allProducts = document.getElementsByClassName("product");

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }
   

  const totalValue = document.querySelector("#total-value span");
  const productTotal = document.getElementsByClassName("subtotal");

  let totalPrice = 0;

  for (let i = 0; i < productTotal.length; i++) {
    totalPrice += Math.floor(productTotal[i].querySelector('span').innerText);
  }

  totalValue.innerHTML = totalPrice;
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const parentRow = target.parentNode;
  const parentProduct = parentRow.parentNode

  parentProduct.parentElement.removeChild(parentProduct);

  calculateAll()
}

// ITERATION 5

function createProduct() {
  const createProductButton = document.getElementById('create')
  createProductButton.addEventListener('click', createProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName("btn-remove")
  
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
