// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value
  let result = price * quantity
  const subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = result
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  // ITERATION 3
  //... your code goes here
  let acumTotal = 0
  const products = [...document.getElementsByClassName('product')];
  products.forEach(el => updateSubtotal(el))
  const subTotals = [...document.querySelectorAll('.subtotal span')]
  acumTotal = subTotals.reduce((acc, elem) => {
    acc += Number(elem.innerText)
    return acc
  }, 0)
  let totalNode = document.querySelector('#total-value span')
  totalNode.innerHTML = acumTotal
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.remove()
 
}

// ITERATION 5

function _createAllNodes() {
  const trProductNode = document.createElement('tr')
  trProductNode.className = 'product'
  const tdNameNode = document.createElement('td')
  tdNameNode.className = 'name'
  const spanNameNode = document.createElement('span')
  tdNameNode.appendChild(spanNameNode)
  trProductNode.appendChild(tdNameNode)
  //
  const tdPriceNode = document.createElement('td')
  tdPriceNode.className = 'price'
  tdPriceNode.innerHTML = '$'
  const spanPriceNode = document.createElement('span')
  tdPriceNode.appendChild(spanPriceNode)
  trProductNode.appendChild(tdPriceNode)
  //
  const tdQuantityNode = document.createElement('td')
  tdQuantityNode.className = 'quantity'
  const inputQuantityNode = document.createElement('input')
  inputQuantityNode.setAttribute('type', 'number')
  inputQuantityNode.setAttribute('value', '0')
  inputQuantityNode.setAttribute('min', '0')
  tdQuantityNode.appendChild(inputQuantityNode)
  trProductNode.appendChild(tdQuantityNode)

  const tdSubtotalNode = document.createElement('td')
  tdSubtotalNode.className = 'subtotal'
  tdSubtotalNode.innerHTML = '$0'
  const spanSubtotalNode = document.createElement('span')
  tdSubtotalNode.appendChild(spanSubtotalNode)
  trProductNode.appendChild(tdSubtotalNode)

  const tdActionNode = document.createElement('td')
  tdActionNode.className = 'action'
  const btnActionNode = document.createElement('button')
  btnActionNode.className = 'btn btn-remove'
  btnActionNode.innerText = 'Remove'
  btnActionNode.setAttribute('type', 'button')
  btnActionNode.addEventListener('click', removeProduct)
  tdActionNode.appendChild(btnActionNode)
  trProductNode.appendChild(tdActionNode)

  //debugger
  return trProductNode
  
}


function createProduct() {
  //... your code goes here
  const getProduct = document.getElementById('product-name').value
  const getPrice = document.getElementById('product-price').value
  const insertElemTbody = document.getElementsByTagName('tbody')[0]

  const newProd = _createAllNodes()
  insertElemTbody.appendChild(newProd)
  const newProdName = newProd.querySelector('.name span')
  newProdName.innerText = `${getProduct}`
  const newProdPrice = newProd.querySelector('.price span')
  newProdPrice.innerText = `${getPrice}`

  insertElemTbody.appendChild(newProd)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = document.getElementsByClassName('btn btn-remove')
  for (let i = 0; i < removeBtn.length; i ++){
    removeBtn[i].addEventListener('click', removeProduct, false)
  }

  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)
});
