// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input").value;
  
  let priceIs = Number (price.innerHTML);
  let subTotalPrice = priceIs * quantity;
  product.querySelector(".subtotal span ").innerHTML = subTotalPrice;
   
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  //... your code goes here
  const allProductsDOM = document.querySelectorAll(".product");
  let totalPrice = 0;
  allProductsDOM.forEach ((eachElement) =>{
    totalPrice += updateSubtotal(eachElement);
  })
    

  // ITERATION 3
  //... your code goes here
  
  document.querySelector("#total-value span").innerHTML = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest (".product").remove()
  
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

  const removeButtonDOM = document.querySelectorAll(".btn-remove")
  removeButtonDOM.forEach((eachBtn) => {
    eachBtn.addEventListener("click", removeProduct)
  })
  
});
