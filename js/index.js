// ITERATION 1

function updateSubtotal(product) {
 const price = product.querySelector(".price span").innerText;
 const quantity = product.querySelector(".quantity input").value;
 const subtotalPrice = price * quantity;
 product.querySelector(".subtotal span").innerText = subtotalPrice;
 return subtotalPrice;
}

function calculateAll() {
 
  // ITERATION 2
  const severalProducts = document.getElementsByClassName("product");
  console.log(severalProducts);
  for( let i=0;i<severalProducts.length;i++){
    updateSubtotal(severalProducts[i])
  }
 

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
