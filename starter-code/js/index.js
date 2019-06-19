window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  
// ---------------------------------------------------------------------

  // function deleteItem(e){

  // }

  let price = document.getElementsByClassName('price');
  let quantity = document.getElementsByClassName('quantity');
  let itemTotal = document.getElementsByClassName('itemTotal');
  let cartTotal = 0
 
  calculatePriceButtonn.onclick(function getPriceByProduct(){
    let itemPrice = span.getAttribute(price);
    let itemQuantity = span.getAttribute(quantity);
    console.log(itemPrice);
    console.log(itemQuantity);
    
    for (i=0; i < itemQuantity.length; i++) {
      let getItemTotal.innerHTML = Number(itemPrice[i]) * Number(itemQuantity[i]);
      span.setAttribute(itemTotal, getItemTotal);
    }
  })

  // function updatePriceByProduct(productPrice, index){

  // }

  // function getTotalPrice() {

  // }

  // function createQuantityInput(){

  // }

  // function createDeleteButton(){

  // }

  // function createQuantityNode(){

  // }

  // function createItemNode(dataType, itemData){

  // }

  // function createNewItemRow(itemName, itemUnitPrice){

  // }

  // createItemButton.onclick(function createNewItem(){

  // })

};
