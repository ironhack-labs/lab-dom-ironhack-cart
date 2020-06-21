// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  var subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = Number(price.innerHTML) * quantity.value;
  return Number(subtotal.innerHTML);
}

function calculateAll() {
 
  var prod = cart.getElementsByClassName("product");
  let somme = 0;
  for (let i = 0; i < prod.length; i++) {
    somme = somme + updateSubtotal(prod[i]);
  }
  let total = document.querySelector("#total-value span");
  total.innerHTML = somme;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const quantity = target.querySelector(".quantity input");
  quantity.value = 0;

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("click", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeBtn = document.querySelectorAll("btn-remove");
  removeBtn.addEventListener("click", removeProduct);
});
