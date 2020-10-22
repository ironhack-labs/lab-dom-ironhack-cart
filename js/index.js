// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  //console.log(`quantity is ${quantity}`);
  const total = (price * quantity);
  //console.log(`price is ${price}`);
  //console.log(`${price} ${quantity} my total is ${total}`);
  const subTotal = product.querySelector('.subtotal span');
  return subTotal.innerHTML = total;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  
  let totalValue = 0; 

  const cartItemElements = document.getElementsByClassName('product');
  for (cartItemElement of cartItemElements){
    totalValue += updateSubtotal(cartItemElement)
  }
  
  console.log(totalValue)

  document.querySelector("#total-value span").innerHTML = totalValue
  //console.log(total);
  
  // ITERATION 3
  
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
