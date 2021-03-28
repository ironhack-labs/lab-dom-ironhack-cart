// ITERATION 1
function updateSubtotal(product) {
  //.... your code goes here
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  let subTotal = price.innerText * quantity.value

  const subtotalBlock = product.querySelector('.subtotal span')

  subtotalBlock.innerText = subTotal

  return subTotal
}

function calculateAll() {
  //// code in the following two lines is added just for testing purposes.
  //// it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  //// end of test

  // ITERATION 2
  //... your code goes here
  const productsList = document.querySelectorAll('.product')

  let total = 0

  productsList.forEach(singleProduct => {
    total += updateSubtotal(singleProduct)
  });
  console.log(`Total: ${total}`)

  // ITERATION 3
  //... your code goes here
  const totalBlock = document.querySelector('#total-value span')

  totalBlock.innerText = total


}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  //This great grandparent node contains all product nodes.
  const productNodesTable = target.parentNode.parentNode.parentNode
  console.log(productNodesTable)
  
  //The 'const target', is JUST the remove button, 
  //we need the FULL product row(tr.product[target]).
  //This grandparent conatins everything related to the 
  //product associated with the targeted remove button;
  //the whole product row.
  const fullProductNode = target.parentNode.parentNode
  console.log(fullProductNode)
  
  //Now we call the great grandparent of 'target'
  //and kill its child, who is the grandparent of 'target'.
  productNodesTable.removeChild(fullProductNode)

  //We also re-call calculateAll() to 
  //re - calculate the total now that there's one subtotal less
  calculateAll()
}

// ITERATION 5
function createProduct() {
  //... your code goes here
  //First, the new product data:
  createdProductName = document.querySelector('.create-product input')
  createdProductPrice = document.querySelector('.create-product input[type ="number"]')

  //Now we create the new product:
  //----START OF CREATION
  //--
  //Whole product row: tr .product
  const newProduct = document.createElement('tr')
  newProduct.setAttribute('class', 'product')
  //--
  //Child1: td .name
  const productName = document.createElement('td')
  productName.setAttribute('class', 'name')
  const productNameSpan = document.createElement('span')
  const productNameSpanText = document.createTextNode(createdProductName.value)
  productNameSpan.appendChild(productNameSpanText)
  productName.appendChild(productNameSpan)
  //Append to whole product row (tr .product)
  newProduct.appendChild(productName)
  //--
  //Child2: td .price  
  const productPrice = document.createElement('td')
  productPrice.setAttribute('class', 'price')
  const productPriceMoneySign = document.createTextNode('$')
  productPrice.appendChild(productPriceMoneySign)
  const productPriceSpan = document.createElement('span')
  const productPriceSpanValue = document.createTextNode(createdProductPrice.value)
  productPriceSpan.appendChild(productPriceSpanValue)
  productPrice.appendChild(productPriceSpan)
  //Append to whole product row (tr .product)
  newProduct.appendChild(productPrice)
  //--
  //child3: td .quantity
  const productQuantity = document.createElement('td')
  productQuantity.setAttribute('class', 'quantity')
  const productQuantityInput = document.createElement('input')
  productQuantityInput.setAttribute('type', 'number')
  productQuantityInput.setAttribute('value', '0')
  productQuantityInput.setAttribute('min', '0')
  productQuantityInput.setAttribute('placeholder', 'Quantity')
  productQuantity.appendChild(productQuantityInput)
  //Append to whole product row (tr .product)
  newProduct.appendChild(productQuantity)
  //--
  //child4: td .subtotal
  const productSubtotal = document.createElement('td')
  productSubtotal.setAttribute('class', 'subtotal')
  const productSubtotalMoneySign = document.createTextNode('$')
  productSubtotal.appendChild(productSubtotalMoneySign)
  const productSubtotalSpan = document.createElement('span')
  const productSubtotalSpanValue = document.createTextNode(0)
  productSubtotalSpan.appendChild(productSubtotalSpanValue)
  productSubtotal.appendChild(productSubtotalSpan)
  //Append to whole product row (tr .product)
  newProduct.appendChild(productSubtotal)
  //--
  //child5: td .action
  const productAction = document.createElement('td')
  productAction.setAttribute('class', 'action')
  const productActionButton = document.createElement('button')
  productActionButton.setAttribute('class', 'btn btn-remove')
  const productActionButtonText = document.createTextNode('Remove')
  productActionButton.appendChild(productActionButtonText)
  productAction.appendChild(productActionButton)
  //Append to whole product row (tr .product)
  newProduct.appendChild(productAction)
  //--
  //----END OF CREATION
  //Now we append the entire HTML node we created to the original table 
  //and as a normal product (we add an 'if' to ask if the name is empty or not):
  const productsTable = document.querySelector('tbody')
  if (createdProductName.value.length > 0){
    productsTable.appendChild(newProduct)
    console.log(productsTable)
  }
  //Since all 'Remove' buttons were programmed when the page loaded
  //and this new button didnt exist until after the page loaded,
  //we have to re-program this new 'Remove' button:
  const newRemoveBtns = document.querySelectorAll('.btn-remove');
  const newRemoveBtn = newRemoveBtns[newRemoveBtns.length - 1]
  newRemoveBtn.addEventListener('click', removeProduct);

  //And finally we clear the inputs:
  createdProductName.value = ""
  createdProductPrice.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  //--
  //Remove Button
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', removeProduct);
  })
  //--
  //Create Button
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  //--
});
