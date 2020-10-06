// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  console.log("Calculating subtotal, yey!");
  const multiplicacion = price.innerHTML * quantity.value;
  const subTotal = product.querySelector(".subtotal span");
  return (subTotal.innerHTML = multiplicacion);
}
function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  console.log(products);
  // ITERATION 3
  let total = 0;
  products.forEach(function (p) {
      let subtotal = updateSubtotal(p);
      total += subtotal;
  });
  const value = document.querySelector("#total-value span");
  value.innerHTML = total;
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  console.log(target.parentNode.parentNode.parentNode);
  const fila = target.parentNode.parentNode;
  const body = target.parentNode.parentNode.parentNode;
  body.remove(fila);
  //... your code goes here
}
// ITERATION 5
function createProduct() {
  //... your code goes here
}
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeProducts = document.getElementsByClassName("btn btn-remove");
  for (let i = 0; i < removeProducts.length; i++) {
      removeProducts[i].addEventListener("click", removeProduct);
  }
});
