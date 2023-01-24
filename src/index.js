// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input").value;
  console.log(price, quantity);
  const price1 = price.innerHTML
  let subtotalPrice =  price1 * quantity;
  let subtotal = product.querySelector(".subtotal span");
subtotal.innerHTML = subtotalPrice;
return subtotalPrice;
}

function calculateAll() {
  //ITERATION 2
  let allProducts = document.getElementsByClassName("product");
  let total = 0;
  for(let i = 0; i < allProducts.length; i++){
  total+= updateSubtotal(allProducts[i]);
  }// ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
  
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
}
);
