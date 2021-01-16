// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const subtotalPrice = price.innerText * quantity.value

  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerText = subtotalPrice

  return subtotalPrice
}

function calculateAll() {

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product')
  let totalPrice = 0
  
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i])
    totalPrice += updateSubtotal(allProducts[i])
  }

  // ITERATION 3
  const totalPriceUpdated = document.querySelector('#total-value span')
  totalPriceUpdated.innerHTML = totalPrice

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const targetToRemove = target.parentNode.parentNode

  const targetToRemoveParent = targetToRemove.parentNode

  targetToRemoveParent.removeChild(targetToRemove)

  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createTextInput = document.querySelectorAll('.create-product input')
  let createName = createTextInput[0].value
  let createPrice = createTextInput[1].value

  if (createPrice != 0 && createName !='') {
    const tableBody = document.querySelector('tbody')

    //New Row
    const newRow = document.createElement('tr')
    newRow.setAttribute('class', 'product')

    tableBody.appendChild(newRow)

      //New name Column
      const newNameColumn = document.createElement('td')
      newNameColumn.setAttribute('class', 'name')

      newRow.appendChild(newNameColumn)

        //Span inside name Column
        const newNameSpan = document.createElement('span')
        const productName = document.createTextNode(createName)
        newNameSpan.appendChild(productName)

        newNameColumn.appendChild(newNameSpan)

      //New price Column
      const newPriceColumn = document.createElement('td')

      const DollarSign1 = document.createTextNode('$')
      newPriceColumn.appendChild(DollarSign1)

      newPriceColumn.setAttribute('class', 'price')

      newRow.appendChild(newPriceColumn)

        //Span inside price Column
        const newPriceSpan = document.createElement('span')
        const productPrice = document.createTextNode(createPrice)
        newPriceSpan.appendChild(productPrice)

        newPriceColumn.appendChild(newPriceSpan)

      //New quantity Column
      const newQuantityColumn = document.createElement('td')
      newQuantityColumn.setAttribute('class', 'quantity')

      newRow.appendChild(newQuantityColumn)
        
        //Input inside quantity Column
        const newQuantityInput = document.createElement('input')
        newQuantityInput.setAttribute('type', 'number')
        newQuantityInput.setAttribute('value', '0')
        newQuantityInput.setAttribute('min', '0')
        newQuantityInput.setAttribute('placeholder', 'Quantity')

        newQuantityColumn.appendChild(newQuantityInput)

      //New subtotal Column
      const newSubtotalColumn = document.createElement('td')
      newSubtotalColumn.setAttribute('class', 'subtotal')
      const DollarSign2 = document.createTextNode('$')
      newSubtotalColumn.appendChild(DollarSign2) 

      newRow.appendChild(newSubtotalColumn)

        //Span inside subtotal Column
        const newSubtotalSpan = document.createElement('span')
        const subtotalText = document.createTextNode('0')
        newSubtotalSpan.appendChild(subtotalText)

        newSubtotalColumn.appendChild(newSubtotalSpan)

      //New action Column
      const newActionColumn = document.createElement('td')
      newActionColumn.setAttribute('class', 'action')

      newRow.appendChild(newActionColumn)

        //Button inside action Column3
        const newActionButton = document.createElement('button')
        const actionText = document.createTextNode('Remove')
        newActionButton.setAttribute('class', 'btn btn-remove')
        newActionButton.appendChild(actionText)

        newActionColumn.appendChild(newActionButton)

  
  createTextInput.forEach(input => input.value = '')

  }
  else {
    alert("Por favor rellena todos los datos")
  }

}

window.addEventListener('click', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // Remove button
  const allRemoveBtn = document.querySelectorAll('.btn-remove')
  
  for (let i = 0; i < allRemoveBtn.length; i++) {
    allRemoveBtn[i].onclick = removeProduct
  }

  // Create button
  const createBtn = document.querySelector('#create')
  createBtn.onclick = createProduct
});




