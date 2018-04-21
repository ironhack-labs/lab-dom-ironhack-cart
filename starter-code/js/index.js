

function deleteItem(){
  
  var deleting = document.getElementsByTagName("ul")[0];

      deleting.onclick = function(e) {
        if (e.target.className === "btn-delete")
          {
            // going from delete button to li

            var li = e.target.parentNode.parentNode.parentNode;
            deleting.removeChild(li);
          }
       };
}

function getPriceByProduct(){
  var obj1Elem = document.getElementsByClassName("objsPrices");
  var actualPrices = [];

    // taking an array of the prices

    for (i=0; i < obj1Elem.length; i++)
    {
      actualPrices.push(Number(obj1Elem[i].textContent.replace('$', '')));
    }
  return actualPrices;
}



function updatePriceByProduct(){
  var button = document.getElementById("calculate-btn");
  button.onclick = function(){
    var productPrice = getPriceByProduct();
    var productInput = createQuantityInput();

      for (i=0; i < productPrice.length; i++)
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
      // making an array of given quantities in text and changing them to numbers

      actualInputs.push(Number(inputQuantity[i].value));
    }
  return actualInputs;
  
}

function takeNewItemInput()  {
  var createBtn = document.getElementsByClassName('createBtn')[0];
  createBtn.onclick = function (){
    var newItemName = document.getElementsByClassName('newItem1')[0].value;
    var newItemPrice = document.getElementsByClassName('newItem2')[0].value;
    createNewItem(newItemName,newItemPrice);
  };
  
  
}

function createNewItem(newItemName,newItemPrice){
  var newItemParent = document.getElementsByTagName('ul')[0];
  var newItemModel = '<div class="nodeWrapper"> <div class="space "> <span> ' + newItemName + ' </span></div> <div class="space "><span class="objsPrices"> $' + newItemPrice + ' </span></div><div class="space "><form><label for="quantity">QTY</label><input type="number" class="input" id="btn-quantity"></form></div><div class="space "><span class="total">0</span></div><div class="space "><button type="button" class="btn-delete">Delete</button></div></div>';
  var newItemContainer = document.createElement('li');
  newItemContainer.innerHTML = newItemModel;
  newItemParent.appendChild(newItemContainer);
}


window.onload = function(){
  updatePriceByProduct();
  deleteItem();
  takeNewItemInput();
};
