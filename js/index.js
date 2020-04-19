// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yay!');
  
  let price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseInt(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {

  let products = document.querySelectorAll('.product'); // Select all the products
  let totalValue = 0;
  
  [...products].map(el => totalValue += updateSubtotal(el)) // Apply the function to each of the products and add the values

  document.querySelector("#total-value span").innerHTML = totalValue;

}

function removeProduct(event) {

  const target = event.currentTarget;
  let table = target.parentNode.parentNode.parentNode;

  table.removeChild(target.parentNode.parentNode);
  calculateAll();
}

function createProduct() {
  console.log("You created a product!");
}

window.addEventListener('load', () => {
  
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteProductBtn = document.querySelectorAll(".btn-remove");
  [...deleteProductBtn].map(el => el.addEventListener("click", removeProduct));

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
