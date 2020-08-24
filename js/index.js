// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  console.log(price);
  console.log(quantity);
  /*
    let price_value = product.querySelector('.price span');
    let quantity_value = product.querySelector('.quantity input');
  
    console.log(price_value.innerHTML);
    console.log(quantity_value.value);
  */
  let subtotal = price.innerHTML * quantity.value;
  console.log("Subtotal: ", subtotal);

  let subtotal_element = product.querySelector(".subtotal span");
  console.log(subtotal_element);
  subtotal_element.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName("product");

  let total = 0

  Array.from(products).forEach(product => {
    //console.log(child)
    let xt = updateSubtotal(product);

    total = total + xt

  })

  console.log(total)

  let total_element = document.getElementById("total-value");
  console.log(total_element);
  total_element.innerHTML = "Total: $" + total;






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
