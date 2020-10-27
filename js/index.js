// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const mult = price.innerHTML * quantity.value
  const subtotal = product.querySelector('.subtotal span')
  return subtotal.innerText = mult
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test
  
  // ITERATION 2
  const pricesArr = []
  const productsCollection = document.getElementsByClassName('product')
  const productArray = [...productsCollection]
  for(let i = 0; i < productArray.length; i++){
    let a = updateSubtotal(productArray[i])
    pricesArr.push(a)
  }

  // ITERATION 3
  const totalValue = document.getElementById('total-value')
  const sumPrice = pricesArr.reduce((suma,item) => {
    return suma += item
  },0)
  totalValue.innerHTML = sumPrice

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target.parentNode.parentNode)
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()

}

// ITERATION 5

function createProduct() {

  const createNameInput = document.querySelectorAll('.create-product input')[0].value
  const createPriceInput = document.querySelectorAll('.create-product input')[1].value
  const tbody = document.getElementsByTagName('tbody')
  const tbodyArr = [...tbody]
  const createElement = (name) => {
    return document.createElement(name)
  }

  const newTr = createElement('tr')
  newTr.className = 'product'
  const newTdName = createElement('td')
  newTdName.className = 'name'
  newTdName.innerHTML = `<span>${createNameInput}</span>`
  const newTdPrice = createElement('td')
  newTdPrice.className = 'price'
  newTdPrice.innerHTML = `$<span>${createPriceInput}</span>`
  const newQuantity = createElement('td')
  newQuantity.className = 'quantity'
  newQuantity.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />'
  const newTdSubtotal = createElement('td')
  newTdSubtotal.className = 'subtotal'
  newTdSubtotal.innerHTML = '$<span>0</span>'
  const newRemoveBtn = createElement('td')
  newRemoveBtn.innerHTML = '<button class="btn btn-remove">Remove</button>'
  newTr.appendChild(newTdName)
  newTr.appendChild(newTdPrice)
  newTr.appendChild(newQuantity)
  newTr.appendChild(newTdSubtotal)
  newTr.appendChild(newRemoveBtn)

  const createNameInputNew = document.querySelectorAll('.create-product input')[0]
  createNameInputNew.value = ''
  const createPriceInputnew = document.querySelectorAll('.create-product input')[1]
  createPriceInputnew.value = 0
  
  return tbodyArr[0].appendChild(newTr)

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const btnRemoveCollection = document.getElementsByClassName('btn-remove')
  const btnRemoveArray = [...btnRemoveCollection]

  function reload(){
    const btnRemoveCollection = document.getElementsByClassName('btn-remove')
    const btnRemoveArray = [...btnRemoveCollection]
    for(let i = 0; i < btnRemoveArray.length; i++){
      btnRemoveArray[i].addEventListener('click', removeProduct)
    }
  }


  for(let i = 0; i < btnRemoveArray.length; i++){
    btnRemoveArray[i].addEventListener('click', removeProduct)
  }
  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct)

  const reloadFunction = document.getElementById('create')
  reloadFunction.addEventListener('click', reload)

});
