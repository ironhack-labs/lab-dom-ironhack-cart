

function deleteItem(e){

}

function getPriceByProduct(){
  var obj1Elem = document.getElementsByTagName("p");
  var actualPrices = [];
    for (i=0; i < obj1Elem.length; i++)
    {
      actualPrices.push(Number(obj1Elem[i].textContent));
    }
  return actualPrices;
}



function updatePriceByProduct(){
  var button = document.getElementsByClassName("btn-success")[0];
  button.onclick = function(){
    var productPrice = getPriceByProduct();
    var productInput = createQuantityInput();

      for (i=0; i < productInput.length; i++)
      {
        var newTotal = productPrice[i]*productInput[i];
        var newElem = document.getElementsByClassName('total');
        newElem[i].innerHTML = "$" + newTotal;
      }
      getTotalPrice();
    };
}

function getTotalPrice() {
  var grandTotal = document.getElementsByClassName('total');
    var preGrandTotalArray = [];
    var grandTotalArray = [];
      
      for (i = 0; i < grandTotal.length; i++)
      {
        
        // pushing the text from the totals using class names and removing the $ sign
        
        preGrandTotalArray.push(grandTotal[i].textContent.replace('$', ''));
        
        // turning the text into numbers

        grandTotalArray.push(Number(preGrandTotalArray[i]));
      }
     
      // using reduce on the numbers to get the total sum
      total = grandTotalArray.reduce(function(a,b){
        return a+b;
      },0);
    
      var totalNewText = document.querySelector('h2 span');
      totalNewText.innerHTML = '$' + total;
    }

function createQuantityInput(){
  var inputQuantity = document.getElementsByTagName("input");
  var actualInputs = [];
    for (i=0; i < inputQuantity.length; i++)
    {
      actualInputs.push(Number(inputQuantity[i].value));
    }
  return actualInputs;
  
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
  updatePriceByProduct();
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
