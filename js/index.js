// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('input').value;
  let sub = price * quantity;
  return product.querySelector('.subtotal span').innerHTML = sub;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  let all = document.querySelectorAll(".product") 
  [...all].forEach((elem) => {
    updateSubtotal(elem);
    let total = total + (all[elem].quantity * all[elem].price);
    //elem.querySelector('.subtotal span').innerHTML + elem.querySelector('.subtotal span').innerHTML
})
return total;
}

//BONUS
// ITERATION 4 bonus

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5 bonus

function createProduct() {
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});
