// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  console.log(quantity)
  return product.querySelector('.subtotal span').innerHTML = price * quantity

}

function calculateAll() {

  // ITERATION 2 & 3

  const allProducts = document.querySelectorAll('.product')
  let sum = 0
  allProducts.forEach(element => {
    sum += updateSubtotal(element)
  });

  document.querySelector('#total-value span').innerHTML = sum

}


// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  const productToRemove = target.parentNode.parentNode   //  parent node up to class=product

  document.querySelector('#total-value span').innerHTML -= productToRemove.querySelector('.subtotal span').innerHTML  //  updating total price
  
  productToRemove.parentNode.removeChild(productToRemove)  //  getting one more parent node to remove the complete product class row 

}

// ITERATION 5

function createProduct() {


  
}

window.addEventListener('load', () => {

  const removebtn = document.querySelectorAll('.btn-remove')
  removebtn.forEach(elm => {
    elm.onclick = evt => {
      removeProduct(evt)
    }
  })

  const createbtn = document.querySelector('#create')
  createbtn.onclick


  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});
