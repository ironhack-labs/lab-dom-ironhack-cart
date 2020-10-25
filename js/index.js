// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subTotal = price.innerHTML * quantity.value;
  product.querySelector(".subtotal span").innerHTML = subTotal;
  /* no entiendo = creía que poniendo ese último igual
estaria definiendola otra vez la constante ?? */
  return subTotal;
}

function calculateAll() {
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);

  // ITERATION 2
  //... your code goes here
  const productList = document.querySelectorAll(".product");

  let resultado = 0;
  productList.forEach((elm) => {
    resultado += updateSubtotal(elm);
  });
  console.log(resultado);

  console.log("hola");

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector("#total-value span");
  totalPrice.innerHTML = resultado;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
