// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = document.querySelector(".price span").innerHTML;
  let quantity = document.querySelector(".quantity input").value;
  let subtotal = document.getElementById("subtotal");
  //let subtotal2 = document.getElementById("subtotal");

  //product 2
  let price1 = document.querySelector(".price1 span").innerHTML;
  let quantity1 = document.querySelector(".quantity1 input").value;
  let subtotal1 = document.getElementById("subtotal1");

  let total = quantity * price;
  subtotal.textContent = total;

  let total1 = quantity1 * price1;
  subtotal1.textContent = total1;



  console.log(quantity, price, total, subtotal);
  console.log(quantity1, price1, total1, subtotal1);

  alert("calculate price clicked!");


}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  let generalTotal = document.getElementById("calculate");
  generalTotal = total + total1;
  // ----------------Hasta aquí he llegado, entiendo lo que hay que hacer pero plasmarlo en código tengo dificultades aún --------
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

});
