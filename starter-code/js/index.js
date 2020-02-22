var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let deleteButton1 = document.querySelectorAll('tbody button')[0]
let deleteButton2 = document.querySelectorAll('tbody button')[1]

function updateSubtot($product) {

  let price = Number($product.querySelector('.pu').querySelector('span').innerText)
  let quantity = Number($product.querySelector('.qty').querySelector('input').value)

  subTot = price * quantity

  $product.querySelector('.subtot').querySelector('span').innerText = subTot
  return subTot
}

// subtot and Totalproduct

function calcAll() {
  let allProducts = document.querySelectorAll('.product') //array of products
  let total = 0;
  let totalProducts = document.querySelector('h2').querySelector('span') // targeting the total 
  for (let i = 0; i < allProducts.length; i++) {
    let sub = updateSubtot(allProducts[i])

    total += sub
  }
  totalProducts.innerText = total
}
$calc.onclick = calcAll;

// Deleting products


let table = document.querySelector('tbody')

let deleteRow = function (event) {
  //let table1 = event.currentTarget.parentNode.parentNode.parentNode
  let currentRow = event.currentTarget.parentNode.parentNode
  table.removeChild(currentRow)
}

deleteButton1.onclick = deleteRow;  
deleteButton2.onclick = deleteRow;  

// Adding new products

let createButton = document.querySelector('#create')

let createProduct = function(event){

  let newPrice = document.querySelector('.new').querySelectorAll('input')[1].value

//creating a new row from existing row
let existingRow = document.querySelector('.product')
let newRow = existingRow.cloneNode(true)
table.appendChild(newRow)

//adding new product name and price
document.querySelector('.name').innerText = document.querySelector('.new input').value;
document.querySelector('.pu').innerText = document.querySelectorAll('.new input')[1].value;
}

createButton.onclick = createProduct