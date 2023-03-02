// ITERATION 1
function updateSubtotal(product) {
  console.log(
    "Calculating subtotal, yey!",
    product
  );

  // get price and quantity elements and assign them to variables
  const priceElement = product.querySelector(".price span");
  const price = parseFloat(priceElement.innerText);
  console.log("Price:", price);

  const quantityElement = product.querySelector(".quantity input");
  const quantity = parseInt(quantityElement.value);
  console.log("Quantity:", quantity);

  const subtotal = price * quantity;
  console.log("Subtotal:", subtotal);

  // calculate subtotal
  const subTotal = price * quantity;

  // get the subtotal Element and assign it to the new total
  const subtotalElement = product.querySelector(
    ".subtotal span"
  );
  subtotalElement.innerText = subTotal;

  console.log("The subtotal is ", subTotal);
  return subTotal
}

function calculateAll() {
  // ITERATION 2
  // get all products
  const allProducts =
    document.getElementsByClassName(`product`);

  // loop through each product and execute updatesubtotal function
  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    const element = allProducts[i];
    const subtotal = updateSubtotal(element);
   
      totalPrice += subtotal;
    }
      // get HTML element of totalPrice 
  const totalElement = document.querySelector(`#total-value span`)
  totalElement.innerText = totalPrice

  }




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  // get HTML element of the create button and store in variable
  const createButton = document.getElementById(`create`);

  // add eventlistener on click 
  createButton.addEventListener(`click`, createProduct() => {
    const newProductElement = document.querySelector(`.create product`);
    const newProduct = newProductElement.value
  })
}

window.addEventListener("load", () => {
  const calculatePricesBtn =
    document.getElementById("calculate");
  calculatePricesBtn.addEventListener(
    "click",
    calculateAll
  );

  //... your code goes here
});
