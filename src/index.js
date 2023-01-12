// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input').value

  let subTotal = product.querySelector('.subtotal span')

  subTotal.innerHTML = price.innerText * quantity

  return subTotal.innerHTML
}

function calculateAll() {
  
  // ITERATION 2
  //... your code goes here
  const productsArray = document.getElementsByClassName('product')
  

  for(let i = 0; i < productsArray.length; i++) 
  {
    updateSubtotal(productsArray[i])
  }

  // ITERATION 3
  //... your code goes here
  let sum = 0;

  let subTotals = document.querySelectorAll('.subtotal span')

  for(let i = 0; i < subTotals.length; i++)
  {
    let numb = subTotals[i].innerText

    sum += parseInt(numb)
    
  }

  const total= document.querySelector('#total-value span')
  
  total.innerText = sum 

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
