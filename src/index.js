// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;

  let subtotalText = product.querySelector(".subtotal span")
  let subtotal = price * quantity;
  subtotalText.innerText = subtotal;

  return subtotal;
}
// ITERATION 2
  //... your code goes here
function calculateAll() {
let allProducts = document.getElementsByClassName("product");
let sumTotal = 0
for (let i = 0; i < allProducts.length; i++){
  updateSubtotal(allProducts[i]);
  sumTotal += updateSubtotal(allProducts[i]);
}

  // ITERATION 3
  //... your code goes here
let totalAll = document.querySelector("#total-value span");
totalAll.innerHTML= sumTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
  //... your code goes here
  }

  const removeButton = document.getElementsByClassName('btn-remove');
  for (let i=0; i<removeButton.length; i++){
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

  
  let button = document.getElementById("calculate");
  button.onclick = function(){
    window.alert('Calculate prices clicked');
  };
});
