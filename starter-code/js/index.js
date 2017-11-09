function deleteItem(e){
  var node = e.currentTarget.parentNode.parentNode;
  node.parentNode.removeChild(node);
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    totalCart = 0;
    for( i=0; i<document.getElementsByClassName("cart").length; i++){
      price = parseFloat(document.getElementsByClassName("cost")[i].innerText);
      units = parseInt(document.getElementsByClassName("qty")[i].value);
      total = price*units;
      totalCart += total;
      totalLabel = document.getElementsByClassName("tot-price")[i];
      message=document.createTextNode(total);
      totalLabel.innerHTML="";
      totalLabel.appendChild(message);
    }
    totalCartLabel = document.getElementById("cart-total-amount");
    messageTot=document.createTextNode(totalCart);
    totalCartLabel.innerHTML="";
    totalCartLabel.appendChild(messageTot);
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
  var cartdiv = document.createElement('div');
  document.body.appendChild(cartdiv);
  lastElement = document.getElementById("calculate");
  document.body.insertBefore(cartdiv, lastElement);
  cartdiv.className = 'cart';
  var prodnamediv = document.createElement('div');
  cartdiv.appendChild(prodnamediv);
  prodnamediv.className = 'prod-name';
  product = document.getElementById("new-prod-name").value;
  message=document.createTextNode(product);
  prodnamediv.appendChild(message);
  var prodpricediv = document.createElement('div');
  cartdiv.appendChild(prodpricediv);
  prodpricediv.className = 'unit-cost';
  spancur = document.createElement('span');
  prodpricediv.appendChild(spancur);
  spancur.className="currency";
  spancur.innerHTML="$";
  span = document.createElement('span');
  prodpricediv.appendChild(span);
  span.className="cost";
  span.innerHTML = parseFloat(document.getElementById("new-prod-price").value);
  var qtyinputdiv = document.createElement('div');
  cartdiv.appendChild(qtyinputdiv);
  qtyinputdiv.className = 'qty-input';
  qtyinputlabel = document.createElement('label');
  qtyinputdiv.appendChild(qtyinputlabel);
  qtyinputlabel.innerHTML="QTY ";
  qtyinput = document.createElement('input');
  qtyinputdiv.appendChild(qtyinput);
  qtyinput.className = 'qty';
  qtyinput.type = 'number';
  var prodtotaldiv = document.createElement('div');
  cartdiv.appendChild(prodtotaldiv);
  prodtotaldiv.className = 'total';
  spancur = document.createElement('span');
  prodtotaldiv.appendChild(spancur);
  spancur.className="currency";
  spancur.innerHTML="$";
  spantot = document.createElement('span');
  prodtotaldiv.appendChild(spantot);
  spantot.className="tot-price";
  var deletebut = document.createElement('div');
  cartdiv.appendChild(deletebut);
  deletebut.className = 'delete';
  var delbutton = document.createElement('button');
  deletebut.appendChild(delbutton);
  delbutton.className = 'btn-delete';
  delbutton.innerHTML = "Delete";
  deleteButtons = document.getElementsByClassName('btn-delete');
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
