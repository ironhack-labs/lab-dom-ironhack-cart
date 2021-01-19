// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML; 
  const quantity = product.querySelector('#cart > tbody > tr > td.quantity > input[type=number]').value;
  //console.log(price);
  //console.log(quantity);

  const subtotalPrice = price * quantity; 
  //console.log(subtotalPrice);
  
  

  let subTotal = product.querySelector('#cart > tbody > tr > td.subtotal> span');
  //console.log(subTotal.innerHTML);
  subTotal.innerHTML= subtotalPrice; 
  
  return subTotal
  //... your code goes here
}

function calculateAll() {

  // ITERATION 2
  const multiProducts = document.querySelectorAll('.product');
  //console.log(multiProducts);
  for (let product of multiProducts){    
    // get the value of each product 
    // for(let i = 0;i <allProducts.length; i++){
    //upadateSubtotal(product[i]);    }
  updateSubtotal(product);
  }

  console.log(multiProducts);

  // ITERATION 3
  
  let totalPrice = 0;
  for (let i=0; i < multiProducts.length; i++) {
    totalPrice += updateSubtotal(multiProducts[i]);
    console.log(totalPrice);
    document.querySelector('#total-value span').innerHTML = totalPrice;
  }
  return totalPrice;
}

// not working - but working for the others so I don't understand 

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
