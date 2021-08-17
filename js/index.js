// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  const priceValue = price.innerText
  // console.log(priceValue)
  const qtyValue = quantity.value
  // console.log(qtyValue)
  const subTotal = qtyValue * priceValue
  // console.log(subTotal)
  let subTotalPlace = product.querySelector('.subtotal span')
  subTotalPlace.innerText = subTotal
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let everyRow = document.getElementsByClassName('product')
  // updateSubtotal(everyRow)
  for (let i = 0; i < everyRow.length; i++) {
    updateSubtotal(everyRow[i])
    // console.log(everyRow[i])
  }


  // ITERATION 3
  //... your code goes here
  let allTotal = document.querySelectorAll('.subtotal span')
  console.log(allTotal)
  let sum = 0
  for (let i = 0; i < allTotal.length; i++) {
    sum += parseInt(allTotal[i].innerText)
  }
  console.log(sum)
  const totalPricePlace = document.getElementById('total-value')
  totalPricePlace.innerText = `Total: $${sum}`

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode.parentNode.parentNode
  let child = target.parentNode.parentNode
  parent.removeChild(child)
  console.log('The target in remove is:', target, target.parentNode.parentNode.parentNode);
  calculateAll()
  //... your code goes here

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // const target = event.currentTarget;
  // const parent = target.parentNode.parentNode
  const inputName = document.getElementById('inputName').value
  const inputPrice = document.getElementById('inputPrice').value
  console.log(inputName, inputPrice)
  const tableRow = document.createElement("tr")
  tableRow.classList.add("product")
  tableRow.innerHTML = `<td class="name"><span>${inputName}</span></td><td class="price">$<span>${inputPrice}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity"/></td><td class="subtotal">$<span>0</span></td><td class="action"><button id="newRemoveButton" class="btn btn-remove">Remove</button></td>`
  const table = document.getElementsByTagName('tbody')
  table[0].appendChild(tableRow)
  const newRemoveButton = document.getElementById('newRemoveButton')
  newRemoveButton.addEventListener('click', removeProduct)


  // const dangerousElement = document.createElement("p")
  // dangerousElement.innerHTML = "<script> console.log('danger')</script> I am a <span style='color: red'> text node </span> and I can only contain text, I cannot contain children"
  // document.body.appendChild(dangerousElement);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }

  const createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct)
});