

// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  const total = price * quantity
  subtotal.innerHTML = total
  return total
  // ... your code goes here
}


function calculateAll() {
  const everyProduct = document.querySelectorAll('.product')
  let total = 0
  everyProduct.forEach((element) => { total += updateSubtotal(element) })
  const total_span = document.querySelector('.total span')
  total_span.innerHTML = total
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  const father = document.querySelector('#cart tbody')
  const tableSelect = target.parentNode
  const rowDelete = tableSelect.parentNode
  father.removeChild(rowDelete)
  calculateAll()
}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget
  console.log('The target in add is:', target)
  const productName = document.querySelector('.create-product .name input ')
  const productPrice = document.querySelector('.create-product .price input ')
  const rowToAdd = document.createElement('tr')
  rowToAdd.className = 'product'
  const td1 = document.createElement('td')
  td1.className = 'name'
  td1.innerText = productName.value
  const td2 = document.createElement('td')
  td2.className = 'price'
  td2.innerText = '$'
  const td3 = document.createElement('td')
  td3.className = 'quantity'
  const td4 = document.createElement('td')
  td4.className = 'subtotal'
  td4.innerText = '$'
  const td5 = document.createElement('td')
  td5.className = 'action'
  iQuantity = document.createElement('input')
  iQuantity.setAttribute('type', 'number')
  iQuantity.setAttribute('value', "0")
  iQuantity.setAttribute('min', "0")
  iQuantity.setAttribute('placeholder', 'Quantity')
  const sp1 = document.createElement('span')
  sp1.innerText = productPrice.value
  const sp2= document.createElement('span')
  const btn = document.createElement('button')
  btn.className = 'btn btn-remove'
  btn.innerText = 'Remove'
  rowToAdd.appendChild(td1)
  rowToAdd.appendChild(td2)
  rowToAdd.appendChild(td3)
  rowToAdd.appendChild(td4)
  rowToAdd.appendChild(td5)
  td2.appendChild(sp1)
  td3.appendChild(iQuantity)
  td4.appendChild(sp2)
  td5.appendChild(btn)
  // productName.required = true
  // console.log(productName.value)
  // if(productName.value==empty){don't appendChild---how could I do that?}
  document.querySelector('#cart tbody').appendChild(rowToAdd)

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelector('.btn-remove');
  removeProductBtn.addEventListener('click', removeProduct);//Why doesn't work on the new buttton remove childs?

  const createProductBtn = document.querySelector('.btn-create');
  createProductBtn.addEventListener('click', createProduct);
});
