// ITERATION 1

function updateSubtotal(product) {
  console.log(product);
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.getElementsByTagName('input');


  //To number
  const q = quantity[0].value;
  const p = price.innerText

  var currentP = Number(q);
  var currentQ = Number(p);
  //... your code goes here
var newPrice = currentP * currentQ
var subtotal = product.getElementsByClassName('subtotal')[0]
subtotal.innerHTML = newPrice
return newPrice ; 
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
   /* const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);

    console.log(singleProduct);
    */
  // end of test

  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product');

  multipleProducts.forEach((product) =>{
    updateSubtotal(product)
  });

  // ITERATION 3
  var totalCalc = [...multipleProducts].reduce((accumulator, currentValue) =>{
    return accumulator + updateSubtotal(currentValue);
  },0);

  console.log(totalCalc);

  let total = document.querySelector('#total-value');
  total.innerText = `Total: $${totalCalc}`;



// ITERATION 4
}
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  var removeP = document.getElementsById('remove');
  removeP.onclick = function(){

  }

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

