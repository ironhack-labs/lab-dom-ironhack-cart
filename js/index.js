// ITERATION 1





function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(`.price span`);
  let quantity = product.querySelector(`.quantity input`);
  let multi = price.innerText * quantity.value
  const loq = product.querySelector(`.subtotal span `)
  loq.innerText = multi
  return multi
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  const jose = document.querySelectorAll(`.product`)

  jose.forEach(eachjose => {
    updateSubtotal(eachjose)
  })





  // ITERATION 3
  //... your code goes here
  let juan = 0
  jose.forEach(eachnumber => {
    juan += updateSubtotal(eachnumber)
  })
  const ana = document.querySelector(`#total-value span`)
  ana.innerHTML = juan

}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //... your code goes here
  //let julio
  //explosion.forEach(eachnumber=>{
  // julio+=
  //})
}



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);;
  //... your code goes here
  const explosion = document.querySelectorAll('.btn-remove');
  explosion.forEach(eachexplosion => {
    eachexplosion.addEventListener('click', removeProduct);
  })
});
