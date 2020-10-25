// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
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

// ITERATION 5 CREATE PRODUCT

function createProduct(evt) {

  const target = evt.currentTarget
  const customProduct = target.parentNode.parentNode
  let customName
  let customPrice

  customProduct.querySelectorAll('input').forEach(input => {
    if (input.type === 'text') {
      customName = input.value      //  SAFE NEW CUSTOM NAME PRODUCT
    }
    customPrice = input.value     //  SAFE NEW CUSTOM PRICE PRODUCT
  })

  //  CLONING AN EXISTING ROW 
  let clonerow = document.querySelector('.product').cloneNode(true)
  
  //  ADDING THE CUSTOM PRICE TO THE CLONE ROW
  clonerow.querySelector('.price span').innerHTML = customPrice

  //  ADDING THE CUSTOM NAME TO THE CLONE ROW
  clonerow.querySelector('.name span').innerHTML = customName
  
  //  ADDING THE CLONE ROW TO THE TABLE
  document.querySelector('tbody').appendChild(clonerow)

  //  RESETTING CUSTOM VALUES
  customProduct.querySelectorAll('input').forEach(input => input.value = '')

  const removebtn = document.querySelectorAll('.btn-remove')

  removebtn.forEach(elm => {
    elm.onclick = evt => {
      removeProduct(evt)
    }
  })

}


window.addEventListener('load', () => {

  //  ON CLICK REMOVE ACTION
  const removebtn = document.querySelectorAll('.btn-remove')
  
  removebtn.forEach(elm => {
    elm.onclick = evt => {
      removeProduct(evt)
    }
  })

  //  ON CLICK CREATE ACTION
  const createbtn = document.querySelector('#create')

  createbtn.onclick = evt => {
    createProduct(evt)
  }


  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});
