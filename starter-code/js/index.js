window.onload = function () {
  //////IronBubbleProduct
 
  var calcPriceButton = document.getElementById("calculate-price-btn");
  var basketValue = document.getElementById("total-sum").innerHTML;

  calcPriceButton.addEventListener("click", function () {
    for (let i = 0; i < document.getElementsByClassName("product-wrapper").length; i++) {
    var price = document.getElementsByClassName("price")[i].innerHTML;
    var quantity = document.getElementsByTagName("input")[i].value;
    
    //setting a new total value:
    var total = parseInt(price) * quantity;
      document.getElementsByClassName("total")[i].innerHTML = total;
      // getting basket total sum
      for (let i = 0; i < document.getElementsByClassName("total").length; i++) {
        let basketlValue = 0;
        basketValue += total;
        document.getElementById("total-sum").innerHTML = basketValue;
      }
    };
  });

  //delete 
  var deleteButton = document.getElementsByClassName("btn-delete");

  deleteButton.addEventListener("click", function () {
      var wrapperDiv =  e.currentTarget.parentNode.parentNode;
      var parentDiv = e.currentTarget.parentNode.parentNode.parentNode;
      parentDiv.removeChild(wrapperDiv);
// should also update the BasketValue
  });

  //new
  // Get the data from the inputs.
var creatingNew = document.getElementById("create");
creatingNew.addEventListener("click", function () {
  var newProductName = document.getElementById("new-productname").value;
  var newProductPrice = document.getElementById("new-productprice").value;
  // Create a new product row with the data from the inputs
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "product-wrapper");

  //The structure of the new product should be the same
  var input = "<div><span id='product-name'>" + newProductName + "</span></div>";
  input += "<div>$<span class='price'>" + newProductPrice + "</span></div>";
  input += '<div><label>QTY</label><input type="text" placeholder="Quantity">/></div>';
  input += '<div><span class="total">0</span></div>';
  input += '<div><button class="btn-delete btn">Delete</button></div>';
 

  newDiv.innerHTML = input;
  var wrapParent = document.getElementById("cart-section");
  wrapParent.appendChild(newDiv);

 
  };





}



// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){







// // var calculatePriceButton = document.getElementById('calc-prices-button');
// //   var createItemButton = document.getElementById('new-item-create');
// //   var deleteButtons = document.getElementsByClassName('btn-delete');

// //   calculatePriceButton.onclick = getTotalPrice;
// //   createItemButton.onclick = createNewItem;

// //   for(var i = 0; i<deleteButtons.length ; i++){
// //     deleteButtons[i].onclick = deleteItem;
// //   }
// };