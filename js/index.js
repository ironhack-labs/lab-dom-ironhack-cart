// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //I did not understand why this didn't work:
  //let price = document.querySelector(".price").getElementsByTagName('span')

  let price = product.querySelector(".price span").innerHTML
  console.log(price);

  //trial and error led me to the following way of accessing value
  // but i don't know why this works
  let quantity = product.querySelector(".quantity input").value
  console.log(quantity);
  

  let subtotal = price * quantity

 console.log(subtotal)

product.querySelector(".subtotal span").innerHTML = subtotal
  
  return subtotal



  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2

let allProducts = document.querySelectorAll(".product");

for (let product of allProducts) {
  console.log(product)
//for (let i = 0; i <allProducts.length; i++) {
//updateSubtotal(allProducts[i])}
updateSubtotal(product);

}


  // ITERATION 3
  let totalPrice = 0
  for (let i = 0; i < allProducts.length; i++) { 
  totalPrice += updateSubtotal(allProducts[i])
  document.querySelector('#total-value span').innerHTML = totalPrice;
}
 return totalPrice;
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

  const removeBtns = document.getElementsByClassName('btn btn-remove');
  for (let button of removeBtns) {
  button.addEventListener('click', removeProduct)}
})
