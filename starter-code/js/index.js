function deleteItem(e){
  var buttonPressedToDelete=e.currentTarget;
  var divRow= buttonPressedToDelete.parentNode.parentNode;
  divRow.parentNode.removeChild(divRow);

}

function getPriceByProduct(itemNode) {
  var totalPrice=itemNode.getElementsByClassName('total-price')[0];
  var price= itemNode.getElementsByClassName('price')[0];
  actualQuantity=parseInt(itemNode.getElementsByTagName('input')[0].value);
  price=parseFloat(price.innerHTML.replace(/[^0-9\.]/g,''));
  resultPrice= (actualQuantity * price).toFixed(2);
  totalPrice.innerHTML="$"+resultPrice;

  return parseFloat(resultPrice);

  }


function getTotalPrice() {
  var itemNodes= document.getElementsByClassName('row');
  var resultPrice=0;
  for (var i=0; i< itemNodes.length; i++) {
    if (itemNodes[i].getElementsByTagName('input')[0].name ==="qty" ) {
    resultPrice += getPriceByProduct(itemNodes[i]);
    }
  }
  var totalPrice= document.getElementsByTagName('h2')[0].children[0];
  totalPrice.innerHTML= "$"+resultPrice;
}

function activateDeleteButton(newRow){
  var buttonDeleteNew= newRow.querySelectorAll(".btn-delete")[0];
  buttonDeleteNew.onclick=deleteItem;
}

function createNewItemRow(itemName, itemUnitPrice){
    var row= document.getElementsByClassName("row")[0];
    var parent=row.parentNode;
    var newRow=row.cloneNode(true);

    newRow.querySelectorAll(".item")[0].innerHTML=itemName;
    newRow.querySelectorAll(".price")[0].innerHTML="$"+itemUnitPrice;
    newRow.querySelectorAll(".total-price")[0].innerHTML="$0.00";

    activateDeleteButton(newRow);

    parent.insertBefore(newRow, parent.lastChild);


}

function createNewItem(){
  var itemName= document.querySelectorAll('input[name="new-name"]')[0].value;
  var itemUnitPrice= document.querySelectorAll('input[name="new-price"]')[0].value;
  createNewItemRow(itemName, itemUnitPrice);


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
