function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}
var grandTotal = 0;
function getTotalPrice() {
 // FOR TOP PRODUCT ONLY
  // var itemUnitPrice = document.getElementById('cost').textContent;
  // itemUnitPrice = parseFloat(itemUnitPrice.replace(/[^0-9-.]/g, ''));
  // var qty = document.getElementById('qty').value;
  // var totalPrice = itemUnitPrice * qty;
  // document.getElementById('prod-tot-price').textContent = "$" + totalPrice.toFixed(2);
   

    let products = document.getElementsByClassName('product');
    let qtys = document.getElementsByClassName('qty');
    let prices = document.getElementsByClassName('cost');

     for(let i=0; i<products.length; i++){
        window.product = products[i];
        let qty = qtys[i].value;
        let price = prices[i].innerText;
        let prodTotalPrice = qty * price;
          grandTotal = grandTotal + prodTotalPrice;
      product.getElementsByClassName('prod-tot-price')[0].innerText = "$" + prodTotalPrice;
     }
     document.getElementById('grand-total').innerText = grandTotal;
     //grandTotal = 0;
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
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
