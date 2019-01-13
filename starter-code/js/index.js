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

  divProduct.innerHTML = '<div class="product-name"> <span></span> </div><div class="cost"> <span></span> </div><div class="div-quantity"> <label  for="quantity" > QTY</label><input class="quantity" type="text" name="quantity" value="0">  </div><div class="total-price-item"> <span> $0.00</span> </div><div> <button class="btn btn-delete">Delete</button> </div>'
  
  
  
  var productsName = document.getElementsByClassName('product-name')
  var productName = productsName[productsName.length-1]
  var spanName = productName.firstElementChild
  spanName.innerHTML = document.getElementById("create-item-input-name").value
 
  var productsCost = document.getElementsByClassName('cost')
  var productCost = productsCost[productsCost.length-1]
  var spanCost = productCost.firstElementChild
  spanCost.innerHTML = document.getElementById("create-item-input-price").value
  
  var buttonsDelete = document.getElementsByClassName('btn-delete')
  var button = buttonsDelete[buttonsDelete.length-1]
  
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
