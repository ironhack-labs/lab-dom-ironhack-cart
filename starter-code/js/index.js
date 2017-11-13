function deleteItem(e){
  product = e.parentNode.parentNode;
  console.log(product);
  product.parentNode.removeChild(product);
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  products = document.getElementsByClassName("product");
  var finalPrice = 0;
  for(i = 1; i < products.length; i++) {
    var unitPrice = parseFloat(document.getElementsByClassName("product-unit-price")[i].innerHTML);
    var qty = parseFloat(document.getElementsByClassName("product-qty")[i].value);
    var totalItemPrice = unitPrice * qty;
    finalPrice += totalItemPrice;
    totalItemPriceText = document.createTextNode(totalItemPrice);
    document.getElementsByClassName("total-price")[i].innerHTML = "";
    document.getElementsByClassName("total-price")[i].appendChild(totalItemPriceText);
  }
  finalPriceText = document.createTextNode(finalPrice);
  document.getElementById("final-price").innerHTML = "";
  document.getElementById("final-price").appendChild(finalPriceText);
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
  /*
  var template = document.getElementsByClassName("template");
  var clon = template
  template[0].getElementsByClassName("product-name")[0].innerText = document.getElementById("p-name").value;
  template[0].getElementsByClassName("product-unit-price").innerText = document.getElementById("p-price").value;
  document.getElementById("cart").appendChild(template);
  */

var itm = document.getElementById("cart").firstElementChild;
console.log(itm);
var cln = itm.cloneNode(true);
console.log(cln);
cln.className="product";
console.log("AQUI");
console.log(cln);

// Append the cloned <li> element to <ul> with id="myList1"
document.getElementById("cart").appendChild(cln);
console.log(document);
}
/*
<div id ="template" class="product">
      <div class="product-name">
        <span>producto0</span>
      </div>
      <div class="product-cost">
        <span class="product-unit-price">0</span>
      </div>
      <div class="product-form">
        <form>
          <label for="product-qty">QTY</label>
          <input class="product-qty" type="text" name="qty">
        </form>
      </div>
      <div class="product-total-price">
        <span class="total-price">0</span>
      </div>
      <div>
        <button class="btn btn-delete" class="btn-delete" onclick="deleteItem(this)">Delete</button>
      </div>
    </div>
*/
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  
};
