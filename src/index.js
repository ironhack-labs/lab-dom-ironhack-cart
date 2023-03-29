// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceVal = price.innerHTML
  const quantityVal = product.querySelector('.quantity input').value;
  const subtotal = priceVal * quantityVal;

  product.querySelector('.subtotal span').innerHTML = subtotal //.toFixed(2);

  return subtotal;


}
  // ITERATION 2
function calculateAll() {
  let subtotalSum = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => {
    return subtotalSum += updateSubtotal(product)
  }) 

  document.querySelector('#total-value span').innerHTML = subtotalSum;

}

  
  
  

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
target.parentNode.parentNode.remove()
 

  }

// ITERATION 5

function createProduct() {
  const productName = document.querySelectorAll('.create-product input')[0].value
  console.log(productName)
  const priceName = document.querySelectorAll('.create-product input')[1].value
  const newProduct = document.createElement('tr')
  newProduct.classList.add('product')
  const newName = document.createElement('td')
  newName.innerText = productName
  newName.classList.add('name')
  const newPrice = document.createElement('td')
  newPrice.classList.add('quantity')
  newPrice.innerText = priceName
  const newSubtotal = document.createElement('td')
  newSubtotal.classList.add('subtotal')
  const newAction = document.createElement('td')
  newAction.classList.add('action')
  const tBody = document.querySelector('tbody')
  tBody.appendChild(newProduct)
  newProduct.appendChild(newName)
  newProduct.appendChild(newPrice)
  newProduct.appendChild(newSubtotal)
  newProduct.appendChild(newAction)
  console.log("blabla")
	
  
  //productName.appendChild()
  //priceName.appendChild()



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.btn-remove');
  removeButton.forEach(element =>  {
    element.addEventListener('click', removeProduct);

 
  })

  const addButton = document.querySelector('#create');
  
  addButton.addEventListener('click', createProduct);

 
  })
;


