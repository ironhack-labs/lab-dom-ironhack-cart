function getPriceByProduct(itemNode){

  var getPrice = document.querySelector(".price").innerHTML;
    console.log (getPice);

  var getNumberOfProduct = document.querySelector(".unit-input").innerHTML;
  console.log (getNumberOfProduct);

  var getPriceByProduct = getPrice * getNumberOfProduct ;
  console.log (getPriceByProduct);

  var theCost = document.querySelector(".cost").innerHTML;
  console.log (theCost);

  getPriceByProduct.replaceChild(theCost)
  console.log (getPriceByProduct);
}

function getTotalPrice() {

  var calculteButton = document.querySelector (".btn-success")

  calculateButton.onclick = function(calcuteTotalPrice){
    
    var clickedBtnCalculate = event.target; 

    var theTotalCost = clickedBtnCalculate.parentNode;

    var theTotalCost = document.querySelectorAll (".cost").innerHTML
    
    var totalCost = document.querySelector(".total-cost").innerHTML;

    theTotalCost.replaceChild(totalCost) 

  }
}

function updatePriceByProduct(productPrice, index){
  var cal
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
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

- Use at least 3 `onclick` events
- Use at least one `getElementById`
- Use at least one `getElementsByTagName`
- Use at least one `getElementsByClassName`


var products [
  {tshirtIronHack :   "10,50"},
  {cupIronHack :      "5,50"},
  {stickerIronHack :  "1,50"},
]

function deleteItem(e){
 
  var deleteButton = document.querySelector(".btn-delete");
  
    deleteButton.onclick = function (deleteItem) {
      var clickedButton = event.target; 
      var clickedDelete = clickedButton.parentNode;
                                         
      var unitInput = document.querySelector("unit-input");
      console.log(unitInput)
      unitInput.replaceChild (clickedDelete);
      newInput.value = "0";
    };
};