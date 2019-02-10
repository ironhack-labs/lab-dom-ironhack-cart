var products = [
  { name: "IronBubble-head", price: 25 },
  { name: "IronShirt", price: 15 },
  { name: "IronCup", price: 10 },
  { name: "IronSticker", price: 1 },
  { name: "IronAxe", price: 100 }
];



function deleteItem(e){



}

function getPriceByProduct(){
  var productPrice = products[0].price
  return productPrice

}

function updatePriceByProduct(productPrice, index){


}

function getTotalPrice() {
  var totalPrice = getPriceByProduct() * createQuantityNode()
  return totalPrice

}

function createQuantityInput(){

}

function createDeleteButton(){
//   var newDIV = document.createElement("div")
//   var newDivInfo = "<button class=\"btn-delete\">Delete</button>"
//   newDiv.innerHTML = newDivInfo

// }
var newDIV = document.createElement("div")
newDIV.innerHTML = "hola"
// body.appendChild(newDIV) 

}

function createQuantityNode(){

  var qty = document.getElementsByClassName("quantity")
  qty.innerHTML = Math.floor(Math.random() * 9 + 1)
  return qty
 
  
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var showNewProducts = document.getElementsByClassName("productName")
  showNewProducts.innerHTML = products[0].name




}

  // // body.appendChild(newDIV)
  // newDIV.innerHTML = “hola <span>chicos</span>”
  // ewDIV = element.querySelector("div").setAttribute(“class”, “input”)









// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
