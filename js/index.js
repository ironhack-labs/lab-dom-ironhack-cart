// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
 

  const price = product.querySelector('.price span').innerHTML;
      

      var quantity =product.querySelector(".quantity input").value;
      
      const subTotal = product.querySelector('.subtotal span');
      let result = Number.parseFloat(price) * Number.parseFloat(quantity);
      
      subTotal.innerHTML= result;
  
      return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProducts = document.querySelectorAll('.product');
  var total = 0;
  for(var i=0; i< singleProducts.length; i++){
   
    total +=  updateSubtotal(singleProducts[i]);
  }
  var show=  document.querySelector('#total-value span');
  show.innerHTML= total;

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
  var granny = target.parentNode.parentNode;
  granny.parentNode.removeChild(granny)
  calculateAll();
  //... your code goes here
}

// ITERATION 5
const singleProducts = document.querySelectorAll('.product');
var total = 0;
for(var i=0; i< singleProducts.length; i++){
  var current= singleProducts[i]
  var btDelete = current.querySelector('.btn-remove');
  btDelete.addEventListener('click',removeProduct)
}
function createProduct() {
  let title= document.querySelector('.create-product input[type='text']')
  let price = document.querySelector('.create-product input[type='number']')


  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});