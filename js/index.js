// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");
  const priceV = price.innerHTML;

  const quantity = product.querySelector(".quantity input");
  const quantityV = quantity.value;

  console.log(priceV);
  console.log(quantityV);
  const subValue = priceV * quantityV;

  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerHTML = subValue;

  return subValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");

  let total = 0;

  products.forEach(function (product) {
    let result = updateSubtotal(product);
    total += result;
  });

  //const subTotal =document.querySelector('.subtotal span')
  //const totValue= subTotal.innerHTML   //mirar aqui

  const totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = total;
  console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  const removeItem = document.querySelectorAll("btn btn-remove");
  removeItem.addEventListener("click", removeProduct);
}
/*
deleteButton.addEventListener('click', function (event) {
    console.log('Delete clicked');
    // Delete the card (parent div) when button is clicked
    // Check on `.parentNode`  and `.remove()`
  })
*/

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
