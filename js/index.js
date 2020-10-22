// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  // const priceValue = price.getAttribute('span');
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  // let subtotal = document.getElementsByClassName('subtotal');
  let subtotal = price*quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;

  // console.log(quantity)
  // // console.log (priceValue)
  // console.log (subtotal)
  // console.log(price)
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    singleprod=products[i]
    updateSubtotal(singleprod)
    total += parseFloat(singleprod.querySelector('.subtotal span').innerHTML);
    
  }
  
  document.querySelector('#total-value span').innerHTML=`${total}`;
 
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
