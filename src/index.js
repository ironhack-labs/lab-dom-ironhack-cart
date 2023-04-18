// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value; //because its a type number

  let total = price * quantity;

  // let p1 = product.getElementByClassName('price')
  // let p2 = product.getElementByClassName('quantity')

  let subTotal = product.getElementsByClassName("subtotal")[0];
  subTotal.innerText = total;

  return total;
}

function calculateAll() {

  let products = document.getElementsByClassName("product");
  let myProducts = [...products];

  let subTotal = 0;

  for (let i = 0; i < myProducts.length; i++) {
    subTotal += updateSubtotal(myProducts[i]);
  }

  const total = document.querySelector("#total-value span");
  total.innerHTML = subTotal.toString();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target to remove is:', target.parentNode.parentNode); //parentNode is to move up in the tree.
  target.parentNode.parentNode.remove();
}

const removeButton = document.getElementsByClassName('btn-remove');
for(let i = 0; i < removeButton.length; i++) {
  removeButton[i];
  removeButton[i].addEventListener('click', removeProduct);
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
});
