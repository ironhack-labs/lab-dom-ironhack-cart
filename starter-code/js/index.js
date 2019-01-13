function deleteItem(e){
 var productDiv =  e.currentTarget.parentNode.parentNode
 var container = e.currentTarget.parentNode.parentNode.parentNode
 container.removeChild(productDiv)


 console.log(e.currentTarget.parentNode.parentNode.parentNode)
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  
  var products = document.getElementsByClassName('products')
  var inputs = document.getElementsByClassName('quantity')
  var grandTotal = 0
  for(var i = 0; i<products.length; i++){
    
    var quantity = parseFloat(inputs[i].value) 
    var unitPrice = parseFloat(document.getElementsByClassName("cost")[i].firstElementChild.innerHTML.slice(1))
    var price = quantity * unitPrice
    document.getElementsByClassName("total-price-item")[i].firstElementChild.innerHTML = "$"+price
    grandTotal += parseFloat(document.getElementsByClassName("total-price-item")[i].firstElementChild.innerHTML.slice(1)) 

  }
  

  document.getElementById('grandTotal').firstElementChild.firstElementChild.innerHTML = "$"+grandTotal
 
  
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}
 {/* <div class="products">
        <div class="product-name"> <span>IronBubble-head</span> </div>
        <div class="cost"> <span>$25.00</span> </div>
        <div > <label  for="quantity" > QTY</label><input class="quantity" type="text" name="quantity" value="0">  </div>
        <div class="total-price-item"> <span> $0.00</span> </div>
        <div> <button class="btn btn-delete">Delete</button> </div>
    </div> */}
function createNewItem(){
  
  var divProduct = document.createElement("div")
  var container = document.getElementById("container")
  container.appendChild(divProduct);
  divProduct.setAttribute('class', 'products')
  var divProdName = document.createElement("div")
  divProduct.appendChild(divProdName)
  divProdName.setAttribute('class', 'product-name')
  var spanName = document.createElement("span")
  divProdName.appendChild(spanName)
  spanName.innerHTML = document.getElementById("create-item-input-name").value
  var divProdCost = document.createElement("div")
  divProduct.appendChild(divProdCost)
  divProdCost.setAttribute('class', 'cost')
  var spanCost = document.createElement("span")
  divProdCost.appendChild(spanCost)
  spanCost.innerHTML = document.getElementById("create-item-input-price").value
  var divQuantity = document.createElement("div")
  divQuantity.setAttribute("class", "div-quantity")
  divProduct.appendChild(divQuantity)
  var label = document.createElement('label')
  divQuantity.appendChild(label)
  label.setAttribute('for', 'quantity')
  label.innerHTML = "QTY"
  var input = document.createElement('input')
  divQuantity.appendChild(input)
  input.setAttribute('class', 'quantity')
  input.setAttribute('name', 'quantity')
  input.setAttribute('type', 'text')
  input.setAttribute('value', '0')
  var divTotPriceItem = document.createElement("div")
  divProduct.appendChild(divTotPriceItem)
  divTotPriceItem.setAttribute('class', 'total-price-item')
  var spanPriceTot = document.createElement('span')
  divTotPriceItem.appendChild(spanPriceTot)
  spanPriceTot.innerHTML = "$0.00"
  var divDelete = document.createElement("div")
  divProduct.appendChild(divDelete)
  var button = document.createElement("button")
  divDelete.appendChild(button)
  button.setAttribute("class", "btn btn-delete")
  button.innerHTML = "Delete"
  button.onclick = deleteItem











  

 



}

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
