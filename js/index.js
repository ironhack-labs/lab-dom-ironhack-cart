// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')


  let priceNumber = price.innerHTML;
  let quantityNumber = quantity.value;

  let subtotal = priceNumber * quantityNumber;

  let subtotalPrice = product.querySelector(".subtotal span")
  
  subtotalPrice.innerText = subtotal;

  return subtotal;


}
  // ITERATION 2
  //... your code goes here

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

let productos = document.getElementsByClassName("product");
let sum = 0;

for (let i=0; i < productos.length; i++){

  sum += updateSubtotal(productos[i])

}

  // ITERATION 3
  //... your code goes here

let valorTotal = document.querySelector("#total-value span");

  valorTotal.innerText = sum;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
 
target.parentNode.parentNode.remove();


}

// ITERATION 5

function createProduct() {
  //... your code goes here




  
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeButtons = document.getElementsByClassName("btn btn-remove")

for (let i = 0; i < removeButtons.length; i++){

  removeButtons[i].addEventListener("click", removeProduct)
  
}

});



