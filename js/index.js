// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  const subOperation = price*quantity

  console.log (subOperation)

  let sub = product.querySelector(".subtotal span");

  sub.innerHTML = subOperation

return subOperation

};

function calculateAll() {
 
 // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProducts = document.querySelectorAll('.product');
  let mySum=0;
    allProducts.forEach((elem) =>{
      console.log (elem)
      console.log (updateSubtotal(elem))
    mySum += updateSubtotal(elem)
  })


  // ITERATION 3
  //... your code goes here
let totalPrice = document.querySelector ("#total-value span")
totalPrice.innerText = mySum

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
