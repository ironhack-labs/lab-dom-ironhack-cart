function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var quantityItem = document.getElementsByClassName("quantity");
  var priceItem = document.getElementsByClassName("cost-Unit");//[i]innerHtml;
  var subtotalPriceItem= document.getElementsByClassName("item-totalprice")
   
  var totalSubItem = 0 ;
  var totalCart= 0;
    for ( i= 0 ; i < priceItem.length; i++) {
         
         var qty = parseInt(quantityItem[i].value);
         var cost = parseInt(priceItem[i].innerHTML.slice(1));

         totalSubItem = qty*cost;
         
         
         subtotalPriceItem[i].innerHTML= "$"+ totalSubItem;

         
    
   
       totalCart += totalSubItem;
       
      document.getElementById("cartCost").innerHTML= totalCart + "$";
       
    }
   
    
    

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

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('btn-success');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
