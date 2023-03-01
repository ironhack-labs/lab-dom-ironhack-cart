// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    const products = document.querySelectorAll(".product");
  
    products.forEach((product) => {
      const quantityInput = product.querySelector(".quantity input");
      const unitPrice = parseFloat(product.querySelector(".price span").textContent);
      const quantity = parseInt(quantityInput.value);
      const subtotal = unitPrice * quantity;
      product.querySelector(".subtotal span").textContent = subtotal.toFixed(2);
    });
  
  }

}
const quantityInputs = document.querySelectorAll(".quantity input");

quantityInputs.forEach((input) => {
  input.addEventListener("change", updateSubtotal);
});

  
// ITERATION 2
function calculateAll() {
  let total = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    const quantityInput = product.querySelector(".quantity input");
    const unitPrice = parseFloat(product.querySelector(".price span").textContent);
    const quantity = parseInt(quantityInput.value);
    const subtotal = unitPrice * quantity;
    product.querySelector(".subtotal span").textContent = subtotal.toFixed(2);
    total += subtotal;
  });

//ITERATION3
  document.querySelector("#total-value span").textContent = total.toFixed(2);
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productRow = target.parentNode.parentNode;
  const tbody = document.querySelector('tbody');
  tbody.removeChild(productRow);
  calculateAll();
}

const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach((button) => {
  button.addEventListener('click', removeProduct);
});


////////// ITERATION 5

function createProduct() {
  //... your code goes here
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
