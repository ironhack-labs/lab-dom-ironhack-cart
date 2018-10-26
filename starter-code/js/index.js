



function deleteItem(e){

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

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

 
 

  calculatePriceButton.onclick = function(){
    var uprice1 = document.getElementById('unitprice1').innerText;
    console.log(uprice1);
    var input1 = document.getElementById('quantity1').value;
    console.log(input1);
    var tprice1 = document.getElementById('totalPriceEl1');
    tprice1.innerHTML = (Number(uprice1) * parseFloat(input1)); 

    var uprice2 = document.getElementById('unitprice2').innerText;
    console.log(uprice1);
    var input2 = document.getElementById('quantity2').value;
    console.log(input2);
    var tprice2 = document.getElementById('totalPriceEl2');
    tprice2.innerHTML = (Number(uprice2) * parseFloat(input2)); 

    var total = document.getElementById('total-price');
    total.innerHTML = (Number(uprice1) * parseFloat(input1)) + (Number(uprice2) * parseFloat(input2));
    
    //element = document.createElement('span')
    //element.innerHTML =(Number(uprice) * parseFloat(input));  
    //tprice.appendChild(element)
    // 
  }

};


 // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }