// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerHTML;

  const quantity = product.querySelector(".quantity input").value;

  let subtotal = price * quantity;

  product.querySelector(".subtotal span").innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // // const singleProduct = document.querySelector(".product");
  // // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let totalPrice = 0;

  allProducts.forEach((elem) => {
    updateSubtotal(elem);

    // ITERATION 3

    totalPrice += updateSubtotal(elem);
  });
  document.querySelector("#total-value span").innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let original = document.querySelector(".product");
  let clone = original.cloneNode(true);

  let nameClone = document.querySelector(".name span");
  let priceClone = document.querySelector(".price span");
  let nameCreator = document.querySelector(".nameCreator");
  let priceCreator = document.querySelector(".priceCreator");
  
  nameClone.innerHTML = nameCreator.value;
  priceClone.innerHTML = priceCreator.value;
  
  document.querySelector("tbody").appendChild(clone);

  nameCreator.value = "";
  priceCreator.value = 0;
  
  
  const button = document.querySelector(".btn-remove");
  button.addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const buttons = document.querySelectorAll(".btn-remove");
  buttons.forEach((elem) => elem.addEventListener("click", removeProduct));

  const creatorButton = document.querySelector("#create");
  creatorButton.addEventListener("click", createProduct);

});
