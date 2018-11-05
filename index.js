//function deleteItem(e){/}

//function getPriceByProduct(itemNode){}

//function updatePriceByProduct(productPrice, index){}

//function getTotalPrice() {}

//function createQuantityInput(){}

//function createDeleteButton(){}

//function createQuantityNode(){}

//function createItemNode(dataType, itemData){}

//function createNewItemRow(itemName, itemUnitPrice){}

//function createNewItem(){}

/*
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
*/


// --------------ITEMS, PRICE, AND QUANTITY ARRAYS --------------------------

var itemsInCart = ["Iron-BubbleHead", "IronShirt"]
var quantityPerItem = []
var pricePerItem = [25,15]


// ------------------- ADD ITEMS TO LIST FUNCTION ----------------------------
function addItem(){
  var item = document.getElementById("newItemName")
  itemsInCart.push(item.value)

  var quantity = document.getElementById("quantity")
  quantityPerItem.push(parseInt(quantity.value))

  var price = document.getElementById("pricePerUnit")
  var totalPrice = price * quantity
  pricePerItem.push(parseInt(totalPrice.value))

  addItemToCart()

}


// ---------------------ADD ITEMS TO CART FUNCTION ---------------------------
function addItemToCart (){

  var quantity = document.getElementById("quantity")
  var quantityInt = parseInt(quantity.value)



}


// ------------------------CALCULATE PRICE FUNCTION --------------------------------------

function calculatePrice (){
   var buyingObject = prompt("Por favor escriba EXACTAMENTE el nombre del artículo que desea comprar")
   console.log(buyingObject)
   console.log(typeof buyingObject)
   //var element = document.getElementById(buyingObject)
   //console.log(element)
   //console.log(typeof element)
   var quantity = document.getElementById(buyingObject + "-units")
   console.log(quantity)
   var quantityValue = parseInt(quantity.value)

   var price = pricePerItem.indexOf(element)

   var totalPrice = quantityValue * price
   var outputPrice = document.getElementById(element + "-total")

   outputPrice.innerText = totalPrice

}

//-----------------------DELETE OBJECTS FUNCTION ------------------------------ 

fucntion deleteObject (){
   
}

//----------------------TOTAL PRICE FUNCTION ---------------------------------

function totalPrice (){

}


/*
<div class = "item" id = "ironBubbleHead">
<div>
  <span>IronBubble-head</span>
</div>
<div>
  <p>$ <span id = price>25.00</span></p>
</div>
<div>
  <label for="numberOfUnits"> QTY </label>
  <input type="text" id = "numberOfUnits">
</div>
<div>
  <span>0</span>
</div>
<div><button class = "btn-delete btn">Delete</button></div>
</div>

*/