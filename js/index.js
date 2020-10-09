// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  console.log('Calculating subtotal, yey!');
  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  if(!quantity) return alert("No se puede!!");
  const subt = price * quantity;

  let subtotal = product.querySelector('.subtotal span')
  return subtotal.innerHTML = subt
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  for(let i=0; i>document.getElementsByClassName('product').length;++i){
  var singleLine = document.getElementsByClassName('product')[1];
  console.log(singleLine.querySelector('.price span').innerHTML)
}
  updateSubtotal(singleProduct);

  /* for(let i=0; i>document.getElementsByClassName('product').length;++i){
    const singleP = document.getElementsByClassName('product')[i];
    console.log(singleP);
  }*/
  
  // end of test

  // ITERATION 2
  //... your code goes here 


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
