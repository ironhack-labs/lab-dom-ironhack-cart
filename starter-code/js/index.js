
var inventory = [
  {
    product: 'ironBubble-head',
    price: 33
  },
  {
    product: 'ironShirt',
    price: 20
  },
  // {
  //   product: 'CARAJO',
  //   price: 100
  // },

]

// var allProducts = document.querySelectorAll('.allProducts')
// var allPrices = document.querySelectorAll('.allPrices')
// var
var calculateButton = document.querySelector('.calculate')


function fillTable(){
  var allProducts = document.querySelectorAll('.allProducts')
  var allPrices = document.querySelectorAll('.allPrices')
  inventory.forEach(function(data, i){
    var name = data.product
    allProducts[i].innerHTML = name
    var price = data.price
    var price1 = '$' + price.toFixed(2)
    allPrices[i].innerHTML = price1

  })

}

fillTable()

function calculateAllTotal(){
  calculateButton.onclick = function(){
    var totalSum = []
    for(var i = 0; i< inventory.length; i++){
      var price = inventory[i].price
      console.log(`segundo ${price}`)
      var allQty = document.querySelectorAll('.qty')
      var qtyNumber = allQty[i].value

      var total = price * qtyNumber
        totalSum.push(total)
        console.log(totalSum)
      totalNum = '$' + total.toFixed(2)
      console.log(totalNum)
      var allTotal = document.querySelectorAll('.allTotal')
      allTotal[i].innerHTML = totalNum
      var lastTotal = document.getElementById('lastTotal')
      var subtotal = totalSum.reduce((a, b) => a + b, 0)
      lastTotal.innerHTML = '$' +subtotal
    }

  }

}

calculateAllTotal()

function deleteRow(){
  for(var  i = 0; i < inventory.length; i++){
      var tr = document.querySelectorAll('tr')
      var redButton = document.querySelectorAll('.btn-danger')
      redButton[i].onclick = function(){
      this.parentNode.parentNode.remove()
    }
  }

}

deleteRow()


var tableBody = document.querySelector('.table-body')

function createNewLine(){
  var newItem = document.getElementById('newItem')
  var newPrice = document.getElementById('newPrice')

    var newobj = {
      product: newItem.value,
      price: Number(newPrice.value)
    }
  inventory.push(newobj)
  console.log(inventory)

  var table = document.querySelector('.table')
  // var tableBody = document.querySelector('.table-body')
  var row = document.createElement("tr");

    var cellProduct = document.createElement("td");
    cellProduct.setAttribute("class", "allProducts");

    var cellPrice = document.createElement("td");
    cellPrice.setAttribute("class", "allPrices");

    var cellQuantity = document.createElement("td");
    // cellQuantity.setAttribute("class", "allPrices");
    cellQuantity.innerHTML = "QTY"

    var input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'qty');
    input.setAttribute('placeholder', '0');

    cellQuantity.appendChild(input);
  // input.focus();

  var cellTotal = document.createElement("td");
  cellTotal.setAttribute('class', 'allTotal')

  var cellbutton = document.createElement("td");
  // cellbutton.setAttribute('class', 'allTotal')
  var newButton = document.createElement('button')
  newButton.setAttribute('type', 'button')
  newButton.setAttribute('class', 'btn-danger')
  newButton.setAttribute('value', 'carajo')
  newButton.innerHTML = "Delete"

  cellbutton.appendChild(newButton)

  row.appendChild(cellProduct);
  row.appendChild(cellPrice);
  row.appendChild(cellQuantity);
  row.appendChild(cellTotal);
  row.appendChild(cellbutton);
  tableBody.appendChild(row);
  fillTable()
  calculateAllTotal()
deleteRow()

}
function clickCreate(){
  var createButton1 = document.querySelector('.createButton1')

  createButton1.onclick = function(){
    createNewLine()
    var createButton = document.querySelectorAll('.createButton1')
    this.parentNode.parentNode.remove()

    createYellow()
    deleteRow()

  }

}

clickCreate()


function createYellow(){

  var rowButton = document.createElement("tr");

  var cellInput = document.createElement('td')
    var itemInput = document.createElement('input')
    itemInput.setAttribute('id','newItem')
    itemInput.setAttribute('type','text')
    itemInput.setAttribute('placeholder','Item')
    cellInput.appendChild(itemInput)

  var cellInputPrice = document.createElement('td')
    var itemInputPrice = document.createElement('input')
    itemInputPrice.setAttribute('id','newPrice')
    itemInputPrice.setAttribute('type','text')
    itemInputPrice.setAttribute('placeholder','Price')
    cellInputPrice.appendChild(itemInputPrice)

  var cellEmptyQty = document.createElement('td')
  var cellEmptyTotal = document.createElement('td')

  var cellCreateButton = document.createElement('td')

    var yellowButton = document.createElement('button')
      yellowButton.setAttribute('type', 'button')
      yellowButton.setAttribute('class', 'btn-warning createButton1')
      // yellowButton.setAttribute('class', 'createButton1')
      yellowButton.innerHTML = "Create"
      cellCreateButton.appendChild(yellowButton)


    rowButton.appendChild(cellInput)
    rowButton.appendChild(cellInputPrice)
    rowButton.appendChild(cellEmptyQty)
    rowButton.appendChild(cellEmptyTotal)
    rowButton.appendChild(cellCreateButton)
    tableBody.appendChild(rowButton)
    var createButton1 = document.querySelector('.createButton1')
    clickCreate()

}

// function runProgram(){
//   fillTable()
//   calculateAllTotal()
//   deleteRow()
//   // createNewLine()
//   clickCreate()
//   // createYellow()
// }
//
// runProgram()
// x[1].remove()

// var newText = x.textContent('porfavor')
//
// function deleteItem(e){
//
// }
//
// function getPriceByProduct(itemNode){
//
// }
//
// function updatePriceByProduct(productPrice, index){
//
// }
//
// function getTotalPrice() {
//
// }
//
// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//
// }
//
// function createQuantityNode(){
//
// }
//
// function createItemNode(dataType, itemData){
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }
//
// function createNewItem(){
//
// }
//
// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   // calculatePriceButton.onclick = getTotalPrice;
//   // createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
