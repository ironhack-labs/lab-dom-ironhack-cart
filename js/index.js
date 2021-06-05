// ITERATION 1

// Update Subtotal for a specific product
function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const priceValue = parseFloat(price.textContent)
  const quantityValue = parseFloat(quantity.value)
  
  const subtotalPrice = priceValue * quantityValue

  // console.log(`Price: ${priceValue}, quantity: ${quantityValue}`)

  subtotal.textContent = subtotalPrice

  return subtotalPrice
}

// *********************calculateTotal*******************

function calculateAll() {
  const productNodes = document.querySelectorAll('.product')
  const totalNode = document.querySelector('#total-value span')

  let total = 0
  productNodes.forEach(product => {    
    total +=  updateSubtotal(product) 
  })

  totalNode.textContent = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const toRemove = target.parentNode.parentNode
  console.log('You decided to remove: ', toRemove);
  toRemove.remove()
  //recalculate the total if it has already been calculated
  if(document.querySelector('#total-value').textContent != '0'){
    calculateAll()
  }
  
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductNameNode = document.querySelector('.create-product input[type="text"]')    //('#create-product-name')
  const newProductName = newProductNameNode.value
  const newProductPriceNode = document.querySelector('.create-product input[type="number"]')    //('#create-product-price')
  const newProductPrice = newProductPriceNode.value
  console.log(`Introducem ${newProductName} la pretul de ${newProductPrice}`)
  if( newProductName != '' && newProductPrice != '0'){
    addNewChild(newProductName, newProductPrice)
  }else{
    alert("Please complete both name and price for new product.")
  }
  
}


function addNewChild(name, price){

  const newTableRow = document.createElement('tr')
  newTableRow.classList.add('product')
  newTableRow.innerHTML = `
      <td class="name">
        <span>${name}</span>
      </td>
      <td class="price">$<span>${Number(price).toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `


  newTableRow.classList.add('newTr')
  
  // adding new tr to the tbody parent
  const tableBody = document.querySelector('tbody')
  tableBody.appendChild(newTableRow)

  //asigning eventListener to the new button
  const button = document.querySelector('.newTr .btn-remove')
  button.addEventListener('click', (e) => {
    // e.currentTarget.style.color = 'green'
    removeProduct(e)
  })  

  //personalize new tr
  document.querySelector('.newTr .name span').textContent = name
  document.querySelector('.newTr .price span').textContent = price


  //the identifying newTr clas no longer needed => delete it
  document.querySelector('.newTr').classList.remove('newTr')

  //reset input form
  document.querySelector('.create-product input[type="text"]').value = ''   //('#create-product-name').value = ''
  document.querySelector('.create-product input[type="number"]').value = '0'   //('#create-product-price').value = '0'

}



//Event listeners

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here


  const removeProductBtns = document.querySelectorAll('.btn-remove')
  removeProductBtns.forEach( (removeButton) => {
    removeButton.addEventListener('click', (e) => {
      console.log('This is ', e.target)
      // e.currentTarget.style.color = 'green'
      removeProduct(e)
    })
  })


  
  const newProductBtn = document.querySelector('#create')
  newProductBtn.addEventListener('click', ()=>{
    createProduct();
  })


});






///TESTS ======= TESTS ======= TESTS ======= TESTS ======= TESTS ======= TESTS


