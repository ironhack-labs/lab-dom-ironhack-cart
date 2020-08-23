// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  let priceVal =price.innerText
  let quantityVal = quantity.value

  let subTot = priceVal * quantityVal

  const subTotal = product.querySelector('.subtotal span')

  subTotal.innerText = subTot

  return subTot
 
}


// ITERATION 2 % 3
function calculateAll(){

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
 
  
  const calcAll = document.querySelectorAll('.product')

  let total = 0
    calcAll.forEach(element => {
        total += updateSubtotal(element)
  })

  const totalEnding = document.querySelector('#total-value span')

  totalEnding.innerText = total

  return total
}


  



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = document.querySelector('tbody')
  const child = target.parentNode.parentNode

  parent.removeChild(child)
 
}


// ITERATION 5

function createProduct() {
 //const newProduct = document.querySelector('.createProduct .newName').innerHTML
//const newPrice = document.querySelector ('.createPrduct .newPrice').innerHTML

//... your code goes here
}

window.addEventListener('load', () => {
 const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
 const removeBtn = document.querySelectorAll('.btn-remove');
    removeBtn.forEach(element => {
      //console.log(element)
     element.addEventListener('click', removeProduct)
    }); 
  const create = document.getElementById('create');
    create.addEventListener ('click', createProduct)
});
  //... your code goes here

