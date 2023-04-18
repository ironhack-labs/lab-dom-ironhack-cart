// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  let subtotalText = product.querySelector(".subtotal span");

  subtotal = price * quantity;
  subtotalText.innerText = subtotal;

  product.querySelector(".subtotal span").innerText = subtotal.toFixed(2);

  return subtotal;
}

// ITERATION 2
function calculateAll() {
  let allProducts = document.getElementsByClassName("product");
  let sum = 0;

  for(let i = 0; i < allProducts.length; i++){
    updateSubtotal(allProducts[i]);
    sum += updateSubtotal(allProducts[i]);
  }




// ITERATION 3
  let totalAll = document.querySelector("#total-value span");
  totalAll.innerHTML = sum;
}





// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
  }

  const removeButton = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButton.length; i++){
    removeButton[i];
    removeButton[i].addEventListener('click', removeProduct);
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
