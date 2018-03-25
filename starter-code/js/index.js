function deleteItem(e){
  parent = e.currentTarget.parentNode.parentNode;
  parent.remove();  
  // Update price
  getTotalPrice();
  
}

function getPriceByProduct(itemNode){

    var productPrice = parseFloat(itemNode.querySelector(".unitPrice span").innerText);
    var productQuantity = parseFloat(itemNode.querySelector(".quantity-input").value);
    return(productPrice*productQuantity);


}


function getTotalPrice() {
  var priceNodes = document.getElementsByClassName('productRow');
  var totalPrice = 0;
  
    // Send full node to calculate price for each product
    for (let i = 0; i < priceNodes.length; i++){
    
    var productPrice = getPriceByProduct(priceNodes[i]);
    totalPrice += productPrice;   
    priceNodes[i].querySelector(".totalPrice").innerText = '$' + productPrice;

  }
  // Update Total
   document.querySelector(".cartTotal").innerText = '$' + totalPrice;
}

function createQuantityInput(){
    return '<div class="col-5"><input class="quantity-input" placeholder="1" value="1" type="number"></div>'
}

function createDeleteButton(){
  return '<div class="col-5"><button class="btn btn-delete"><i class="fas fa-trash-alt"></i></button></div>'

}



function createItemNode(itemName, itemUnitPrice){
  var newNode =
   '<div class="col-5"><span>' + itemName + '</span></div>' + 
   '<div class="col-5 unitPrice"><span>' +  itemUnitPrice +  '</span></div>' +
   createQuantityInput() + 
   '<div class="col-5"><span class="totalPrice">$0</span></div>' + 
   createDeleteButton();
   ;

   return newNode;
}

function createNewItemRow(itemName, itemUnitPrice){
    
  //Get where we're going to put the content
    var thisRow = document.getElementsByClassName('newProductRow');
    
    //Build the content
    var content = document.createElement('div');
    content.innerHTML = createItemNode(itemName,itemUnitPrice);
    content.className = "productRow";
    
    //Insert the content
    thisRow[0].parentNode.insertBefore(content, thisRow[0]);
      
}



function createNewItem(){
    var newProductName = document.getElementById('newProductName').value;
    var newProductPrice = document.getElementById('newProductPrice').value;

    if (newProductName === "" || newProductPrice === "" || newProductPrice === 0){
        alert ('Can\'t create a new product without a name or pricetag!');
    }

    else{ 
            // Create a new product
            createNewItemRow(newProductName,newProductPrice);
            // Reset inputs
            document.getElementById('newProductName').value = '';
            document.getElementById('newProductPrice').value = 0;
            // Activate delete buttons
            activateDeleteButtons();
            getTotalPrice();
            
        }
    }


function activateDeleteButtons(){
      var deleteButtons = document.getElementsByClassName('btn-delete');
      for(var i = 0; i<deleteButtons.length ; i++){
        deleteButtons[i].onclick = deleteItem;
      }
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