// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  let subTotal = product.querySelector(".subtotal span");
  subTotal.innerHTML = price * quantity;
  return subTotal;
}
function calculateAll() {
  const productCollection = document.getElementsByClassName("product");

  let total = 0;
  for (let i = 0; i <= productCollection.length - 1; i++) {
    total += +updateSubtotal(productCollection[i]).innerHTML;
  }
  document.getElementById("total-value").innerText = `Total:\$${total.toFixed(
    2
  )}`;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target)
  const tbody = target.parentNode.parentNode.parentNode;
  console.log(tbody)

  return tbody.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeProductBtns = document.querySelectorAll(".btn-remove");
  removeProductBtns.forEach(function(removeProductBtn){
    removeProductBtn.addEventListener("click", removeProduct);
  })
});

console.log()
