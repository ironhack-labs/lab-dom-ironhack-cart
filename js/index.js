// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');


  // I need to get to the price and the quantity 
  const price = product.querySelector('.price span').innerHTML; 
  const quantity = product.querySelector('#cart > tbody > tr > td.quantity > input[type=number]').value;
  // check in the console if I have the value when I click
  //console.log(price);
  //console.log(quantity);

  let subtotalPrice = price * quantity; 
  //console.log(subtotalPrice);
  
  

  let subTotal = product.querySelector('#cart > tbody > tr > td.subtotal> span');
  //console.log(subTotal.innerHTML);
  subTotal.innerHTML= subtotalPrice; 
  
  return subtotalPrice
  //... your code goes here
}

function calculateAll() {

  // ITERATION 2
  const multiProducts = document.querySelectorAll('.product');
  //console.log(multiProducts);
  for (let product of multiProducts){    
    // get the value of each product 
    // for(let i = 0;i <allProducts.length; i++){
    //upadateSubtotal(product[i])   }
  updateSubtotal(product);
  }


  // ITERATION 3
  
  let totalPrice = 0;
  for (let i=0; i < multiProducts.length; i++) {
    totalPrice += updateSubtotal(multiProducts[i]);
    //console.log(totalPrice);
  }
  
  console.log("total:",totalPrice);
  document.querySelector('#total-value span').innerHTML = totalPrice;
  //return totalPrice;
}

// not working - but working for the others so I don't understand 

// ITERATION 4

function removeProduct(event) {
  //const target = event.currentTarget;
  //console.log(event.target);
  //console.log('The target in remove is:', target.parentNode.parentNode);
  const product = event.target.parentNode.parentNode;
  product.remove();
  calculateAll();
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
  const remove = document.querySelectorAll('.btn-remove');

  remove.forEach(function(button){
    button.addEventListener('click',removeProduct);
  })
  
 
});

  



