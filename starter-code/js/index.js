function deleteItem(e){

}


function getPriceByProduct(itemNode){
  return document.getElementById("unitprice").innerText;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(){
  // console.log("DEBUG getTotalPrice called");
      const unitprice = parseFloat(document.getElementById("unitprice").innerText);
      const quantity = parseFloat(document.getElementById("firstinput").value);
      const totalprice = quantity * unitprice;
      console.log(totalprice);
      // return totalprice;
}

// calculatePriceButton.addEventListener('click', function getTotalPrice() {
//   // function(event){
//     console.log("CLICKED!");

//    console.log(quantity);
//   //  console.log(totalprice);
  
  
//   });
//   // return unitPrice;


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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
