// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subTotal = price * quantity
  
 product.querySelector('.subtotal span').innerHTML = subTotal
 return subTotal
}

function calculateAll() {

  // ITERATION 2
  //... your code goes here
  let total = 0
  for(let i = 0;i < document.querySelectorAll('.product').length; i++){
    let multi = document.querySelectorAll('.product')[i]
    
    
 // ITERATION 3
  //... your code goes here
    total += updateSubtotal(multi)
  }
  document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
    let padre = document.querySelector('tbody')
    const hijo = target.parentNode.parentNode
    let removeElement = padre.removeChild(hijo)
    
    calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove')
  for(let i = 0; i < removeBtn.length; i++){
  removeBtn[i].addEventListener('click', removeProduct)
  }
});

// let padre = document.querySelector('.prueba')
// console.log(padre)