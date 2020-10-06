// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  console.log(price,quantity);
      let subtotal = price * quantity;
      product.querySelector('.subtotal span').innerHTML = subtotal;
      return subtotal;
}





function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  

const calculatePrices = [...document.querySelectorAll('.product')];
calculatePrices.forEach(singleProduct => updateSubtotal(singleProduct));

console.log(calculatePrices);



  // ITERATION 3

  let total = 0
  calculatePrices.forEach(function(singleProduct){
  let subtotal = updateSubtotal(singleProduct)
  total += subtotal
  })
  const value = document.querySelector('#total-value span')
  value.innerHTML = total 
}





// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
 //console.log(target.parentNode.parentNode.parentNode);

 const fila = target.parentNode.parentNode
 const body = target.parentNode.parentNode.parentNode
 body.remove(fila)


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}
