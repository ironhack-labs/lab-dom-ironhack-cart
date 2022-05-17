// ITERATION 1

function updateSubtotal(productNode) {
  const price = productNode.querySelector('.price span')
  const quantity = productNode.querySelector('.quantity input')
  const subtotal = price.textContent * quantity.value
  console.log('price : ',price.textContent , 'quantity : ',quantity.value, '=',subtotal)
  const subTotalEl = productNode.querySelector('.subtotal span')
  subTotalEl.textContent = subtotal
  return parseFloat(subtotal)
  //... your code goes here
}

function calculateAll() {
  // end of test

  // ITERATION 2
  const total = Array.from(document.querySelectorAll('.product')).reduce((accu, productEl)=>{
    return updateSubtotal(productEl)+accu
  },0)
  console.log('total', total)

  // ITERATION 3
  const totalEl = document.querySelector('#total-value span')
  totalEl.innerText=total
}



// ITERATION 4

const buttonsArr = Array.from(document.querySelectorAll('.btn-remove'))
buttonsArr.forEach( btn=> btn.addEventListener('click',e=>removeProduct(e)))

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target,target.closest('tr'));
  //... your code goes here
  target.closest('tr').remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  console.log('create Element')
  const productName=document.querySelector('.create-product input[type="text"]')
  console.log('---->',productName)
  const productPrice=document.querySelector('.create-product input[type="number"]')
  createNewLine(productName.value,productPrice.value)
  calculateAll()
}


const createBtn = document.getElementById('create')
createBtn.addEventListener('click',createProduct)

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', (el)=>{
    el.preventDefault()
    calculateAll()
  });


});

//programmatic creation of the new table row !

function createNewLine( productName, price ) {
  const newLine = document.createElement('tr')
  newLine.classList.add('product')
  //NAME
  const tdName= document.createElement('td')
  tdName.classList.add('name')
  tdName.innerHTML=`<span>${productName}</span>`
  //PRICE
  const tdPrice= document.createElement('td')
  tdPrice.classList.add('price')
  tdPrice.innerHTML=`$<span>${price}</span>`
  //QUANTITY
  const tdQuantity = document.createElement('td')
  tdQuantity.classList.add('quantity')
  const quantityInput = document.createElement('input')
  quantityInput.setAttribute('type','number')
  quantityInput.setAttribute('value','0')
  quantityInput.setAttribute('min','0')
  quantityInput.setAttribute('placeholder','Quantity')
  tdQuantity.appendChild(quantityInput)
  //SUBTOTAL
  const tdSubtotal = document.createElement('td')
  tdSubtotal.classList.add('subtotal')
  tdSubtotal.innerHTML=`$<span>0</span>`
  //ACTION
  const tdAction = document.createElement('td')
  tdAction.classList.add('action')
  const actionButton=document.createElement('button')
  actionButton.classList.add('btn','btn-remove')
  actionButton.textContent='Remove'
  tdAction.appendChild(actionButton)
  //----------------COMBIN
  newLine.appendChild(tdName)
  newLine.appendChild(tdPrice)
  newLine.appendChild(tdQuantity)
  newLine.appendChild(tdSubtotal)
  newLine.appendChild(tdAction)
  //final append
  document.querySelector('tbody').appendChild(newLine)
  newLine.querySelector('.btn-remove').addEventListener('click',removeProduct)
  console.log(newLine)
}




//-----------------------------------------------------------------
//-----------------------------------------------------------------
// function createProduct() {
//   console.log('create Element')
//   const productName=document.querySelector('.create-product input[type="text"]')
//   console.log('---->',productName)
//   const productPrice=document.querySelector('.create-product input[type="number"]')
//   const newLine = document.createElement('tr')
//   newLine.classList.add('product')
  
//   newLine.innerHTML=`
//     <td class="name">
//       <span>${productName.value}</span>
//     </td>
//     <td class="price">$<span>${productPrice.value}</span></td>
//     <td class="quantity">
//       <input type="number" value="0" min="0" placeholder="Quantity" />
//     </td>
//     <td class="subtotal">$<span>0</span></td>
//     <td class="action">
//       <button class="btn btn-remove">Remove</button>
//     </td>`
//   document.querySelector('tbody').appendChild(newLine)
//   newLine.querySelector('.btn-remove').addEventListener('click',removeProduct)
//   calculateAll()
// }