// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

var priceString = document.querySelectorAll(".price");
var inputValue = document.querySelectorAll(".input");
var displayTotalPrice = document.querySelectorAll(".total-price");
var calculateBtn = document.querySelector(".btn-success");
var deleteBtn = document.querySelectorAll(".btn-delete");
var createBtn = document.querySelector(".btn-create");
var createProduct = document.querySelector(".new-creation1");
var createProduct1 = document.querySelector(".new-creation2");
var addList = document.querySelector(".shopping-cart");

calculateBtn.onclick = doCalculate;

//calculate the prices + quantity
function getTotalPrice(){
   for ( i = 0; i < priceString.length; i++){
    displayTotalPrice[i].innerHTML = (priceString[i].innerHTML) * (inputValue[i].value);
  };
};

var finalResult = 0;

// calculate the finalprice
function finalTotalPrice(){
  var bigTotal = document.querySelector(".final-result");
  for (j = 0; j < displayTotalPrice.length; j++){
    finalResult += displayTotalPrice[j].innerHTML;
    bigTotal.innerHTML = Number(finalResult);
  };
};

//did the calculation
function doCalculate (){
  getTotalPrice();
  finalTotalPrice();
};

// append the click delete functionality to the buttons that are there at first
deleteBtn.forEach(function (oneButton) {
  oneButton.onclick = function () {
      var isOkay = confirm("Are you sure?");
      if (isOkay) {
        oneButton.parentNode.remove();
      }
  };
});

//create new item (but not working)
createBtn.onclick = function(){
  var addProduct = document.createElement("div");
  addProduct.setAttribute("class", ".product" );
  addProduct.innerHTML = createProduct.value +  createProduct1.value + '<label class="quatity">Qty</label>' +' <input class="input" type="number" placeholder="0" />' + ' $<span class="total-price"></span>' + ' <button class="btn .btn-delete">Delete</button>';
  document.body.appendChild(addProduct);
    var newBtn = addProduct.querySelector(".btn-delete");
    newBtn.onclick = function() {
        //confirm with the user that the delete is okay
        var isOkay = confirm("Are you sure?");
        if (isOkay) {
          oneButton.parentNode.remove();
        };
    };
    createProduct.value="";
    createProduct1.value="";
};