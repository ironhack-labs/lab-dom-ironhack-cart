// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const priceValue = price.innerHTML
  const quantityValue = quantity.value 
  
  const subtotalPrice = quantityValue * priceValue
  
  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = subtotalPrice

  return subtotalPrice

}

// ITERATION 2 AND ITERATION 3

const productList = document.querySelectorAll('tbody tr')

function calculateAll() {

  let subtotalAll = 0

  productList.forEach(function(elm) {
    
    console.log(updateSubtotal(elm))
    
    subtotalAll += updateSubtotal(elm)

    const totalSum = document.querySelector('#total-value span')

    totalSum.innerHTML = subtotalAll
    
  })
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  document.querySelectorAll('.action button').forEach(elm => {
    
    elm.onclick = event => {

      const parent = (event.currentTarget).parentNode

      const supParent = parent.parentNode
      
      document.querySelector('tbody').removeChild(supParent)

      const supParentSubtotal = updateSubtotal(supParent)

      const totalSum = document.querySelector('#total-value span')

      totalSum.innerHTML = totalSum - supParentSubtotal
    
    }

  })

}


// ITERATION 5

function createProduct() {

  const newProductName = document.querySelectorAll('.create-product input')[0]
  const newProductPrice = document.querySelectorAll('.create-product input')[1]

  const newName = newProductName.value
  const newPrice = newProductPrice.value

  const newRow = document.createElement('tr')

  const newTd1 = document.createElement('td')
  newRow.appendChild(newTd1)

  const newTd2 = document.createElement('td')
  newRow.appendChild(newTd2)
  
  const newTd3 = document.createElement('td')
  newRow.appendChild(newTd3)
  
  const newTd4 = document.createElement('td')
  newRow.appendChild(newTd4)

  const newTd5 = document.createElement('td')
  newRow.appendChild(newTd5)

  document.querySelector('tbody').appendChild(newRow)

  newRow.setAttribute('class', 'product')
  newTd1.setAttribute('class', 'name')
  newTd2.setAttribute('class', 'price')
  newTd3.setAttribute('class', 'quantity')
  newTd4.setAttribute('class', 'subtotal')
  newTd5.setAttribute('class', 'action')

  const newSpan = document.createElement('span')
  const newBtn = document.createElement('button')
  const textRemove = document.createTextNode('Remove')
  newBtn.appendChild(textRemove)
  newBtn.setAttribute('class', 'btn btn-remove')

  const newInput = document.createElement('input')
  newInput.setAttribute('type', 'number')
  newInput.setAttribute('value', '0')
  newInput.setAttribute('min', '0')
  newInput.setAttribute('placeholder', 'Quantity')

  newTd1.appendChild(newSpan)
  newTd1.innerHTML = newName
  
  newTd2.appendChild(newSpan)
  newTd2.innerHTML =  ('$')+ newPrice

  newTd3.appendChild(newInput)

  newTd4.appendChild(newSpan)
  newSpan.innerText = '$0'

  newTd5.appendChild(newBtn)

  const tfootInput = document.querySelector('tfoot input')
  tfootInput.value = ""
  
}


window.addEventListener('click', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.action button')
 
  removeButton.forEach(function(element) {
    
    element.addEventListener('click', removeProduct)
    
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);

}
  
);
