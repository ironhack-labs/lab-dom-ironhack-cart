function deleteItem(itemNode){
  itemNode.parentNode.removeChild(itemNode);
  updateAllPrices();
}

function getPriceByProduct(itemNode){
  var price = itemNode.querySelector('.price>span').innerHTML || 0;
  var qty = itemNode.querySelector('input').value || 0;
  return qty*price;
}

function updatePriceByProduct(itemNode, productPrice){
  itemNode.querySelector('.total-price-product>span').innerHTML = productPrice;
}

function updateAllPrices() {
  var allItems = document.querySelectorAll('.product');
  var totalPriceHTML = document.querySelector('.total-price>span');
  var totalPrice = 0;

  //Calculate all prices
  for(var i = 0; i < allItems.length; i++ ){
    var price = getPriceByProduct(allItems[i]);
    updatePriceByProduct(allItems[i],price);
    totalPrice += price;
  }

  totalPriceHTML.innerHTML = totalPrice;
}

function createNewItem(){
  //GET NAME AND PRICE VALUES
  var createNameInput = document.getElementById('create-name');
  var createPriceInput = document.getElementById('create-price');
  var name = createNameInput.value || "Mystery Item 👻";
  var price = createPriceInput.value || 1 ;
  //reset input values for future use
  createNameInput.value="";
  createPriceInput.value="";

  //DEFINE NEW PRODUCT BLUEPRINT
  var productBluePrint = '<div class = "product"><div class="name container"><span>'+name+
  '</span></div><div class="price container"><span>'+price+
  '</span></div><div class="qty container"><label>QTY</label><input class="qty-input" value="1" type="number" min="0"></input></div><div class="total-price-product container"><span>0</span></div><div class="delete btn btn-delete container">DELETE</div></div>'

  //CREATE NEW DIV
  var newItem = document.createElement('div');
  newItem.innerHTML = productBluePrint;

  //INSERT NEW DIV INTO PAGE
  var productList = document.getElementById('product-list');
  productList.appendChild(newItem);

  //UPDATE PAGE
  updateAllPrices();
  addEventsToDeleteButtons();
  addEventsToQtyInputs();
}

function addEventsToDeleteButtons(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length; i++){
    deleteButtons[i].onclick = function(e) { deleteItem(e.currentTarget.parentNode); }
  }
}

function addEventsToQtyInputs(){
  var inputs = document.getElementsByClassName('qty-input');
  for(var i = 0 ; i<inputs.length; i++){
    inputs[i].addEventListener('input',function(){updateAllPrices()});
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('create-button');

  addEventsToDeleteButtons();
  addEventsToQtyInputs();

  calculatePriceButton.onclick = function() { updateAllPrices(); }
  createItemButton.onclick = function(){ createNewItem(); }


};
