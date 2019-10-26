var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product = document.querySelector('.product');
let $products = document.querySelectorAll('.product');
let $deleteButtons = document.querySelectorAll('.btn-delete');
let table = document.querySelector('tbody');
let createButton = document.getElementById('create');
let numberOfCells = document.querySelector('tr').cells.length;

table.addEventListener('DOMNodeInserted', loadButtons);
table.addEventListener('DOMNodeInserted', instaCalc);

function createProduct() {
  let nameOfProduct = document.querySelector('.new input[type="text"').value;
  let priceOfProduct = document.querySelector('.new input[type="number"').value;
  let lastIndexOfTable = table.rows.length
  let whereToCells = table.rows[lastIndexOfTable - 1];

  table.insertRow(lastIndexOfTable).setAttribute('class','product');

  for (i = 1; i <= numberOfCells; i++) {
    table.rows[lastIndexOfTable].insertCell(whereToCells);
  }

  table.rows[lastIndexOfTable].cells[0].setAttribute('class', 'name');
  table.rows[lastIndexOfTable].cells[1].setAttribute('class', 'pu');
  table.rows[lastIndexOfTable].cells[2].setAttribute('class', 'qty');
  table.rows[lastIndexOfTable].cells[3].setAttribute('class', 'subtot');
  table.rows[lastIndexOfTable].cells[4].setAttribute('class', 'rm');

  table.rows[lastIndexOfTable].cells[0].innerHTML = ` <span>${nameOfProduct}</span>`;
  table.rows[lastIndexOfTable].cells[1].innerHTML = ` $<span>${priceOfProduct}</span>`;
  table.rows[lastIndexOfTable].cells[2].innerHTML = ` <label><input type="number" value="1" min="0"></label>`;
  table.rows[lastIndexOfTable].cells[3].innerHTML = ` $<span>0</span>`;
  table.rows[lastIndexOfTable].cells[4].innerHTML = ` <button class="btn btn-delete">Delete</button>`;

}

function deleteItem($deleteButton) {
  // console.log($deleteButton.parentNode.parentNode.rowIndex)
  // productToRemove.parentNode.deleteRow(productToRemove.rowIndex);
  let productRow = $deleteButton.parentNode.parentNode.rowIndex - 1;
  table.deleteRow(productRow);
  console.log("se ha pulsado")
}

function updateSubtot(product) {
  let quantity = product.querySelector('input').value;
  let unitPrice = product.querySelector('.pu span').innerText;
  let subTotPriceNode = product.querySelector('.subtot span');
  let subTotPrice = quantity * unitPrice;
  subTotPriceNode.innerHTML = subTotPrice;
  return subTotPrice
}

function calcAll() {
  let totalNode = document.querySelector('h2 span')
  let allSubTotals = document.querySelectorAll('.product');
  let totalCart = 0;
  allSubTotals.forEach(subtotal => {
    updateSubtot(subtotal);
    totalCart += updateSubtot(subtotal)
  });
  totalNode.innerHTML = totalCart;
}

$calc.onclick = function (e) {
  e.preventDefault()
  calcAll();
}

createButton.onclick = function (e) {
  e.preventDefault()
  createProduct();
}

function loadButtons(){
  $deleteButtons = document.querySelectorAll('.btn-delete');
  
  $deleteButtons.forEach(function (d) {
  d.onclick = function (e) {
    e.preventDefault()
    deleteItem(d);
  }
})
}

function instaCalc(){
  let $products = document.querySelectorAll('.product');
  $products.forEach(function (e) {
    e.querySelector('input').addEventListener('change', function () {
      updateSubtot(e);
    });
  })
}

loadButtons();
instaCalc();