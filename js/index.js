// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  product.querySelector('.price span').innerHTML = price

  const quantity = product.querySelector(".quantity input");
  product.querySelector(".quantity input").innerHTML = quantity

  button.onclick = (product) => {
    const total = product.querySelector(".calculate-total");
    const calculateSubtotal = price * quantity

    product.querySelector(".total-value").textContent = calculateSubtotal
  }
}

  // INTENTO 3
  //for (i = 1; i <= total_items; i++) {
  // itemID = document.getElementsByClassName("quantity" + i);}
  // document.getElementsByClassName("calculate - total").innerHTML = "$" + total;


  // INTENTO 2
  // product.getElementByClass(".quantity").innerHTML =
  //(price.querySelector("tbody subtotal").innerHTML);

  // INTENTO 1
  //let totalQuantity = (price * quantity)

  //let subtotal = product.querySelector('.subtotal');
  //subtotal.innerHTML = totalQuantity
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
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
