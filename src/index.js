function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  let produto = price.innerHTML * quantity.value;

  let subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = produto;

  return produto;
}

function calculateAll() {
 
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);

  // ITERATION 2

  let produtos = document.getElementsByClassName("product");

  let totalValue = 0;
  for (let i = 0; i < produtos.length; i++) {
    totalValue += updateSubtotal(produtos[i]);
  }

  // ITERATION 3

  let total = document.querySelector("#total-value span");
  total.innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
 target.parentNode.parentNode.remove();

}

// ITERATION 5

const calculatePricesBtn = document.getElementById('calculate');
calculatePricesBtn.addEventListener('click', calculateAll);

const removeButton = document.getElementsByClassName('btn-remove');
for(let i =0; i<removeButton.length; i++){
removeButton[i].addEventListener('click', removeProduct);

}
