// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector (".price span").innerHTML;
  let quantity = product.querySelector (".quantity input").value;
  
  let subTotalPrice = price*quantity;
  let subTotal = product.querySelector(".subtotal span")

subTotal.innerHTML = subTotalPrice

return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  const getProducts = document.getElementsByClassName("product")
  
  let total = 0;
  for (let i=0; i<getProducts.length; i++){

    total += updateSubtotal (getProducts[i])
  }

  // ITERATION 3
  //... your code goes here

  document.querySelector("#total-value span").innerHTML = total;
  return total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //O user clicou por último
  console.log('The target in remove is:', target.parentNode.parentNode);
 target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here

  //Add a click event handler to the "Create Product" that will take a function named createProduct as a callback.
 
  //TO BE COMPLETED...
 
  const productParent= document.querySelector("#parent");

  let productName = product.querySelector(".create-product input").innerHTML;
  let priceValue = product.querySelector(".create-product input").value;

}
window.addEventListener('load', () => {
  let newProduct = document.querySelector(".create-product");
  newProduct.addEventListener('click', createProduct);


  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
 let removedProduct = document.querySelectorAll(".btn-remove");
 removedProduct.forEach(product=>product.addEventListener("click", removeProduct));
 


});
