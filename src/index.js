// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotalPrice = price * quantity;
 
  product.querySelector(".subtotal span").innerHTML = subtotalPrice;

  return subtotalPrice;
 
}

function calculateAll() {

  let allProducts = document.getElementsByClassName("product");
  
  // for (i = 0; i < allProducts.length; i++){
  //   updateSubtotal(allProducts[i])

  // }
  
  let total = 0
  for (i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i])
    
  } 
  
  document.querySelector("#total-value span").innerHTML = total
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = document.querySelector(".product");

    if (product.parentNode) {
  product.parentNode.removeChild(product);
}

calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.getElementsByClassName("btn btn-remove");
  for (i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener("click", removeProduct)
  }
  
})
