function deleteOtherItem(theLine){
  // console.log(x);
  var elem = document.getElementById("line"+theLine);
  console.log(elem);
  elem.remove();
}

function calcPrices(){
  var num = document.querySelectorAll(' .line').length;
  var arr = [];
  for (var i = 1; i <= num; i++) {
    var elem = document.getElementById("price"+i).innerHTML;
    if(!document.getElementById("input"+i).value) {
      alert("Come on! Fill the input fields!");
      return;
    }
    var qty = document.getElementById("input"+i).value;

    var res = elem * qty;
    arr.push(res);

    console.log("les prix : "+elem);
    console.log("les qty : "+qty);
    console.log("res : "+res);
  }
  var sum = arr.reduce((a, b) => a + b, 0);
  console.log("sum : "+sum);

  document.getElementById("total").innerHTML = sum;

}

var el = document.getElementsByClassName('content');
function addLine(){

  el.innerHTML += '<div class="line" id="line3"><div class="twenty"><span>The other thing</span></div><div class="twenty"><span id="price2">24</span></div><div class="twenty"><span class="quantity">QTY</span><input type="number" id="input3"></div><div class="twenty"><span>0.00€</span></div><div class="twenty"><button class="btn btn-delete" onclick="deleteOtherItem(3)">Delete</button></div></div><button class="btn btn-success" onclick="addLine()">Add Line</button></div>';
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

}
/*
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
*/
