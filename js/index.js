// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // Calculation of the Subtotal of each product
  const subtotalPrice = price.innerText * quantity.value;

  // Quering the subtotal element where we want to update the subtotal $
  const subtotalResult = product.querySelector(".subtotal span");

  // Adding the subtotal price to the subtotal element
  subtotalResult.innerText = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {

  // ITERATION 2 / 3
  // Querying and selecting all product rows (t.product) in the table
  const cartProducts = document.querySelectorAll("tr.product");

  // Converting the NodeList into an array so we can use methods as forEach, filter..
  const cartProductsArr = Array.from(cartProducts);

  // Using the forEach method to iterate on each product to get their values and callback the updateSubtotal
  let sumAll = 0;
  cartProductsArr.forEach(element => {
    const sumAll += updateSubtotal(element);
  });

  // Querying the element we want to upadte (Total) and passing it the sumAll result
  const total = document.querySelector("#total-value > span");
  total.innerText = sumAll;
  return sumAll;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //Querying the parent and the child elements where the event fires
  const cartTable = document.querySelector("#cart > tbody")
  const productRow = target.parentNode.parentNode;

  // Removing the child where the event fires
  cartTable.removeChild(productRow);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  // Calculate Prices
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remove | 1. Querying the document for all "Remove" buttons
  const removeBtn = document.querySelectorAll(".btn-remove");
  let removeBtnArr = Array.from(removeBtn);

  // Remove | 2. Looping through each button and adding an EventListener
  removeBtnArr.forEach(btn => btn.addEventListener("click", removeProduct));
});
