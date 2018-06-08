
var numberOfProducts = 2;



function deleteItem(e){
  var parent = e.currentTarget.parentNode;
  var child = e.currentTarget.parentNode.getElementsByTagName("div");
  // console.log(child);
  // console.log(child.length);

  // console.log(parent.removeChild(child));

  //Exception to for loop: do not increment i as length of child is going to decrease each time... i stays fixed and length is going down
  for (var i = 0; i < child.length;) {
    // console.log("i: " + i);
    // console.log("child[i]: " + child[i]);
    // console.log("child1.length: "+ child.length);
    parent.removeChild(child[i]);
  }
  
  numberOfProducts -= 1;
  console.log("numberOfProducts in deleteItem: " + numberOfProducts);
  
}


//Gets the price of the product

// function getPriceByProduct(itemNode){
function getPriceByProduct(value) {
  priceByProduct = document.getElementsByClassName("unit-cost-class")[value-1].innerHTML;
}

function updatePriceByProduct(productPrice, index){

}

//Function to calculate the price
function getTotalPrice() {
  var totalPrice;
  var totalPriceAllProducts = 0;
  for (var i = 1 ; i <= numberOfProducts; i++) { 
  createQuantityInput(i);
  getPriceByProduct(i);
  // console.log(i);
  // console.log(createQuantityInput(i));
  // console.log(getPriceByProduct(i));
  // console.log(priceByProduct);
  // console.log(quantityInput);
  totalPrice = priceByProduct * quantityInput;
  var totalPriceDisplay = document.getElementsByClassName('total-price-class')[i-1];
  totalPriceDisplay.innerHTML = totalPrice;
  totalPriceAllProducts += parseInt(totalPrice);
}
var totalPriceAllProductsDisplay = document.getElementById("total-price-all-products");
totalPriceAllProductsDisplay.innerHTML = "$" + totalPriceAllProducts;
}

//Get the quantity of the product
var quantityInput;
function createQuantityInput(value){
  console.log("numberOfProducts: " + numberOfProducts);
  console.log("value: " + value);
  console.log(document.getElementsByClassName("unit-number-class")[value-1].value);
  quantityInput = document.getElementsByClassName("unit-number-class")[value-1].value;
}

function createDeleteButton(parentNode){
  var btnBtnDelete = document.createElement("div");

  console.log(parentNode);
  parentNode.appendChild(btnBtnDelete);
  
  btnBtnDelete.className = "btn btn-delete";
  btnBtnDelete.innerHTML = "Delete";
  console.log(btnBtnDelete);

  
}

function createQuantityNode(parentNode){
  var unitNumber = document.createElement("div");
  var labelTag = document.createElement("label");
  var unitNumberClass = document.createElement("input");

  parentNode.appendChild(unitNumber);
  unitNumber.className = "unit-number";
  unitNumber.appendChild(labelTag);
  labelTag.innerHTML = "QTY";
  unitNumber.appendChild(unitNumberClass);
  unitNumberClass.className = "unit-number-class";
  unitNumberClass.setAttribute("type", "number");


}

//New function added to create a field with the total price
function createTotalPrice(parentNode) {
  var totalPriceDiv = document.createElement("div");
  var totalPriceClass = document.createElement("span");

  parentNode.appendChild(totalPriceDiv);
  totalPriceDiv.className = "total-price";
  totalPriceDiv.innerHTML = "$";
  totalPriceDiv.appendChild(totalPriceClass);
  totalPriceClass.className = "total-price-class";
  totalPriceClass.innerHTML = "0.00";
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var productWrap = document.createElement('div');
  var productName = document.createElement('div');
  var productNameClass = document.createElement('span');
  var unitCost = document.createElement('div');
  var unitCostClass = document.createElement("span");
  var newItems = document.querySelector('.new-items');

  newItems.appendChild(productWrap);
  productWrap.className = "product-wrap";
  productWrap.appendChild(productName);
  productName.className = "product-name";
  productName.appendChild(productNameClass);
  productNameClass.className = "product-name-class";
  productNameClass.innerHTML = itemName;
  productWrap.appendChild(unitCost);
  unitCost.className = "unit-cost";
  unitCost.innerHTML = "$";
  unitCostClass.className = "unit-cost-class";
  unitCost.appendChild(unitCostClass);
  unitCostClass.innerHTML = itemUnitPrice;

  createQuantityNode(productWrap);
  createTotalPrice(productWrap);
  createDeleteButton(productWrap);



  // console.log(productWrap);
  // console.log(productName);
  // console.log(productNameClass);
  // console.log(unitCost);

  //TO BE CONTINUED HERE
}

function createNewItem(){
  //Register the name and the unit price entered
  var itemName = document.getElementById("itemName").value;
  var itemUnitPrice = document.getElementById("itemUnitPrice").value;
  //Create a row for the new item, with the name and the unit price already populated
  createNewItemRow(itemName, itemUnitPrice);
  //Create a quantity field to be completed
  // createQuantityNode();
  //Don't know what this is for??
  // createItemNode(dataType, itemData);
  //Create a field with the total price (why isn't that in the pre-existing functions???)
  // createTotalPrice();
  //Create a delete button
  // createDeleteButton();

  numberOfProducts += 1;
}


//Question: why do we use window.onload here and not for the other functions?
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  console.log(deleteButtons);

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  deleteButtons.onclick = deleteItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
