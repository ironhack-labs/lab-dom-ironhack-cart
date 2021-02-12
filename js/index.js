// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value
  const subTotalPrice = price * quantity
  const subTotal= document.querySelector(".subtotal span")
  subTotal.innerHTML = subTotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const totalProducts = document.querySelectorAll(".product");
  console.log(totalProducts)
  let TotalPrice = 0;
  for (i=0; i< totalProducts; i++){
    TotalPrice+=totalProducts[i];
    console.log(TotalPrice);
  }
  
  // ITERATION 3
  const totalPrice = document.querySelector("#total-value span").innerHTML
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
