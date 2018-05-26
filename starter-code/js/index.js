/*function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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

}*/

window.onload = function(){
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var productsListContainer = document.getElementById("products-list");

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var productPrice = document.getElementsByClassName('product-price');
  var quantity = document.getElementsByTagName('input');
  var total = document.getElementsByClassName('total');
  var totalOverall = document.getElementById('total-overall');

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;


  calculatePriceButton.onclick = function() {
    totalOverall.innerText = '0';
    for (var i = 0; i < productPrice.length; i++) {
      total[i].innerText = Math.round(Number(productPrice[i].innerHTML) * Number(quantity[i].value) * 100) / 100;
      totalOverall.innerText =  Number(totalOverall.innerText) + Number(total[i].innerText);
    }
  }

  createItemButton.onclick = function() {
    var itm =productsListContainer.lastElementChild;
    var cln = itm.cloneNode(true);
    cln.getElementsByClassName("product-name")[0].innerText = document.getElementById("product-name").value;
    cln.getElementsByClassName("product-price")[0].innerText = document.getElementById("product-price").value;

    productsListContainer.appendChild(cln);   
    //call deleteItems here again so we can delete items we build dynamically
    deleteItems();
    //var newElement = document.createElement("div");
    //newElement.innerHTML = ;
    //productsListContainer.appendChild(newElement);
  }

  function deleteItems (){
    
    for(var i = 0; i<deleteButtons.length; i++){
      var productWrapper = deleteButtons[i].parentElement;
      deleteButtons[i].onclick = function() {
        //use this to refer to this button and remove parent element
        this.parentElement.remove();
        //old code:productsListContainer.removeChild(productWrapper);
      }
      //deleteButtons[i].onclick = deleteItem;
    }
  }

  deleteItems();







};


