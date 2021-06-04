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

  // console.log(`Pretul unitar este ${priceValue}, iar cantitatea este ${quantityValue}`)

  subtotal.textContent = subtotalPrice

  return subtotalPrice
}

// *********************

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productNodes = document.querySelectorAll('.product')
  const totalNode = document.querySelector('#total-value span')

  let total = 0
  productNodes.forEach(product => {    
    total +=  updateSubtotal(product) 
  })

  totalNode.textContent = total
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // target.parentNode.parentNode.remove()
  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductNameNode = document.querySelector('#create-product-name')
  const newProductName = newProductNameNode.value
  const newProductPriceNode = document.querySelector('#create-product-price')
  const newProductPrice = newProductPriceNode.value
  console.log(`Introducem ${newProductName} la pretul de ${newProductPrice}`)
  createNewChild(newProductName, newProductPrice)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here


  const removeProductBtns = document.querySelectorAll('.btn-remove')
  removeProductBtns.forEach( (removeButton) => {
    removeButton.addEventListener('click', (e) => {
      // e.currentTarget.style.color = 'green'
      removeProduct(e)
    })
  })


});

// window.addEventListener('load', () =>{
//   const removeProductBtns = document.querySelectorAll('.btn-remove')
//   removeProductBtns.forEach( (removeButton) => {
//     removeButton.addEventListener('click', (e) => {
//       // e.currentTarget.style.color = 'green'
//       removeProduct(e)
//     })
//   })
// })

const newProductBtn = document.querySelector('#create')
newProductBtn.addEventListener('click', ()=>{
  createProduct();
})


function createNewChild(name, price){

  const newTr = createElement('tr', ['product'], '')

  const td1 = createElement('td', ['name'], '')
  const span1 = createElement('span', [], name)
  td1.appendChild(span1)

  const td2 = createElement('td', ['price'], '$')
  const span2 = createElement('span', [], price)
  td2.appendChild(span2)

  const td3 = createElement('td', ['quantity'], '')
  const input3 = createElement('input', [], '')
  // input3.type = 'number'
  input3.setAttribute('type', 'number')
  input3.setAttribute('value', '0')
  input3.setAttribute('min', '0')
  input3.setAttribute('placeholder', 'Quantity')

  td3.appendChild(input3)

  const td4 = createElement('td', ['subtotal'], '$')
  const span4 = createElement('span', [], 0)
  td4.appendChild(span4)
  
  const td5 = createElement('td', ['action'], '')
  const button5 = createElement('button', ['btn', 'btn-remove'], 'Remove')
  td5.appendChild(button5)

  newTr.appendChild(td1)
  newTr.appendChild(td2)
  newTr.appendChild(td3)
  newTr.appendChild(td4)
  newTr.appendChild(td5)
  
  console.log(newTr)

  const tableBody = document.querySelector('tbody')
  tableBody.appendChild(newTr)

  document.querySelector('#create-product-name').value = ''
  document.querySelector('#create-product-price').value = '0'

// I don't understand why did not get the eventListener by default
  button5.addEventListener('click', (e) => {
    // e.currentTarget.style.color = 'green'
    removeProduct(e)
  })

  
}



function createElement(newElementType, newElementClassList, newElementTextContent = ''){
  const newElement = document.createElement(newElementType)
  // newElement.className = newElementClass
  newElementClassList.forEach( (newElementClass) => {
    newElement.classList.add(newElementClass)
  })

  let text = document.createTextNode(newElementTextContent);
  newElement.appendChild(text);

  return newElement
}



// class CustomElement{
//   constructor( elementType, elementClass, elementInnerText){
//     this.type = elementType
//     this.class = elementClass
//     this.innerText = elementInnerText
//   }
// }



///TESTS ======= TESTS ======= TESTS ======= TESTS ======= TESTS ======= TESTS
console.log( createElement('h1', ['red']))

const newTr = createElement('tr', ['product'], 'some text')
console.log( newTr)
console.log( createElement('td', [], 'Ironhack Presentations Stopwatch'))