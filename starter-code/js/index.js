// function getTotalPrice() {
//   let quant = Number.parseInt(document.getElementsByClassName('quantity')[0].value)
//   let price = Number.parseInt(document.getElementsByClassName('product-cost')[0].innerText.substr(1,document.getElementsByClassName('product-cost')[0].innerText.lenght))
//   let total = quant * price
//   document.getElementsByClassName("total")[0].innerText = '$' + (total).toFixed(2)
// }

function getTotalPrice() {

  quantityArray = [...document.getElementsByClassName('quantity')]
  priceArray = [...document.getElementsByClassName('product-cost')]

  for (i=0; i<quantityArray.length; i++)	{
    
    let quant = Number.parseInt(quantityArray[i].value)
    let price = priceArray[i].innerText.substr(1,5)
    let total = quant * price
    document.getElementsByClassName("total")[i].innerText = '$' + (total).toFixed(2)
  }

  SumArray = [...document.getElementsByClassName("total")]
  let SumOfSumArray = 0
  for(let i=0; i<SumArray.length; i++){
    // console.log(SumArray[i].innerText)    
    SumOfSumArray += Number.parseInt(SumArray[i].innerText.substr(1,5))
  }
console.log(SumOfSumArray)

  let myNewDiv = document.createElement('h2')
  
  myNewDiv.innerText = "Total Price: " + SumOfSumArray

  document.getElementsByClassName('items')[0].appendChild(myNewDiv)
}


function deleteItem(e){
  let currentItemdiv = e.currentTarget.parentElement.parentElement
  let parentdiv = e.currentTarget.parentElement.parentElement.parentElement
  
  parentdiv.removeChild(currentItemdiv)
  
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}



function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

// class itemRow{
//   constructor(itemName, itemUnitPrice) {
//     this.itemName = itemName
//     this.itemUnitPrice = itemUnitPrice
//   }
// }

// function createNewItemRow(itemName, itemUnitPrice){
console.log(document.getElementsByClassName("items")[0])
function createNewItemRow(){

  blueprintNode = document.getElementById('1').cloneNode(true)
  AllItemsLenght = [...document.getElementsByClassName("singleItem")].length
  
  // console.log(blueprintNode)
  blueprintNode.id = AllItemsLenght + 1
  let inputPrice = document.getElementsByClassName('newItemPrice')[0].value
  let inputName = document.getElementsByClassName('newItemName')[0].value
  blueprintNode.getElementsByClassName('product-name')[0].innerText = inputName
  blueprintNode.getElementsByClassName('product-cost')[0].innerText = inputPrice
  
  
  
  console.log(document.getElementsByClassName("items")[0])
  document.getElementsByClassName("items")[0].append(blueprintNode)
  var deleteButton = blueprintNode.getElementsByClassName('btn-delete')[0];
  deleteButton.onclick = deleteItem;
  // newNode = node.cloneNode(true)

}

function createNewItem(){

}


const nodeList = document.getElementsByClassName("quantity");
[...nodeList].forEach(node => {
  node.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getTotalPrice();
    }
  });
});

function setupDeleteHandlers() {
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  
  var addNewItemButton = document.getElementById('addNewItem');

  calculatePriceButton.onclick = getTotalPrice;
  addNewItemButton.onclick = createNewItemRow;
  // createItemButton.onclick = createNewItem;

  setupDeleteHandlers()
};


