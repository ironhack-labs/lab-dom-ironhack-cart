/*
   1. add event listener on calculate button
   2. get price of item
   3. get quantity of item
   4 calculate total price
   5. update total price element

   1. add event listener to the delete-btn
   2. delete the item
*/



// function deleteItem(e){
//   var row = e.target.parentElemet;
//   debugger
//   row.remove();

// }


function getPriceByProduct(){

  var allRows = document.getElementsByClassName("row");

  var totalProductPrice = 0;

  for (let i = 0; i < allRows.length; i++) {
    var price = parseInt(document.getElementsByClassName("price")[i].innerHTML);
    var qty = document.getElementsByClassName("qty")[i].value;
    var total = price * qty;
   // totalProductPrice += total;
    document.getElementsByClassName("total-price")[i].innerHTML = total;
  }


  console.log(totalProductPrice)

  // convert below function to achieve price of all products
  for (let i = 0; i < allRows.length; i++) {

    var subTotal = document.getElementsByClassName("total-price")[i].innerHTML;
    console.log("subtotal per row", subTotal)

    totalProductPrice += parseInt(subTotal);

  }
  document.getElementById("price-all-product").innerHTML = totalProductPrice

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

  //get value of input fields / store in variable so we can reuse them
  var newProductName = document.getElementById('add-product-name').value;
  var newProductPrice = document.getElementById('add-product-price').value;
 
  //Create new div, which will serve as a container for new elements.
  var row = document.createElement('div');
  //assign a class attribute with name row to div
  row.setAttribute("class", "row");

  //Create new paragraph
  var productName = document.createElement("p");
  //Assign user input as the inner html of paragraph
  productName.innerHTML = newProductName;
  //add paragraph inside div called row
  row.appendChild(productName);

  //Another paragraph with inner html "$"
  var productPrice = document.createElement("p");
  productPrice.innerHTML = "$"
  

  //Create a span and set class to price,
  // and inner html to input value of add-product-price
  var spanPrice = document.createElement("span");
  spanPrice.setAttribute("class", "price");
  spanPrice.innerHTML = newProductPrice
  //add span to paragraph
  productPrice.appendChild(spanPrice);
  //add paragraph to row
  row.appendChild(productPrice);

  // create input with class name qty
   var inputQuantity = document.createElement("input");
   inputQuantity.setAttribute("class", "qty");
  // append input to row
   row.appendChild(inputQuantity);

  //Another paragraph with inner html "$"
  var totalPriceElement = document.createElement("p");
  totalPriceElement.innerHTML = "$";

  //Create a span and set class to total-price,
  // and inner html to input value of "0.00"
  var spanTotalPrice = document.createElement("span");
  spanTotalPrice.setAttribute("class", "total-price")
  spanTotalPrice.innerHTML = "0.00"

  //add span to paragraph
  totalPriceElement.appendChild(spanTotalPrice)
// add paragraph to row
  row.appendChild(totalPriceElement);
 
  //create a button with class btn btn-delete (for styling and new event listener)
  var newButton = document.createElement("button")
  newButton.innerHTML = "Delete";
  newButton.setAttribute("class", "btn btn-delete")
  row.appendChild(newButton);


  //insert new row into DOM/HTML
  var referenceNode = document.querySelector('.row');
  // Insert the new node before the reference node
  referenceNode.parentNode.insertBefore(row, referenceNode.nextSibling);
  
}

window.onload = function(){


  var calculatePriceButton = document.getElementById('calc-prices-button');
  var addProductButton = document.getElementById('add-product-btn');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }


  //calculatePriceButton.onclick = getPriceByProduct;

  calculatePriceButton.addEventListener("click", function(){
    getPriceByProduct()
  })

  deleteButtons[0].addEventListener('click', function(e) {
    row = document.getElementsByClassName('row');
    e.target.parentElement.parentElement.removeChild(row[0]);
  });

  addProductButton.addEventListener('click', function(){
    createNewItem() 
  });

}
