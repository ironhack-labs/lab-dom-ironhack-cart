function deleteItem(e){
  //select product row in which "delete"-button was clicked
  let productRow = event.currentTarget.parentNode.parentNode;
  
  //get index of product row within parent element and delete the respective product row
  let parent = document.querySelector('.product-rows');
  let index = Array.prototype.indexOf.call(parent.children, productRow);
  parent.removeChild(parent.children[index]); 
}

//get price for a product from cart
function getPriceByProduct(itemNode){
  let euroPrice = document.querySelectorAll(".price")[itemNode].innerText;
  let price = parseFloat(euroPrice.slice(1));
  console.log(price);
  return price;
}

function updatePriceByProduct(productPrice, index){
  let updatedPrice = document.querySelectorAll(".updated-price")[index];

  let productQuantity = Number(document.querySelectorAll(".qty")[index].value);

  updatedPrice.innerText = `€${(productPrice * productQuantity).toFixed(2)}`;

  return productPrice * productQuantity;
}

function getTotalPrice() {
  //check how many products exist
  let numberOfProducts = document.querySelectorAll(".product-row").length;
  
  //container variable for price
  let totalPrice = 0;
  
  //iterate over products
  for (let index = 0; index < numberOfProducts; index++) {
    /*let updatedPrice = document.querySelectorAll(".total-price")[i].innerText;
    updatedPrice = parseFloat(updatedPrice.slice(1));
    totalPrice += updatedPrice;
    */
    //use the available functions to calculate updated product price
    let productPrice = getPriceByProduct(index);
    let updatedPrice = updatePriceByProduct(productPrice, index);
  
    totalPrice += updatedPrice;
  }

  console.log("total price: " + totalPrice);
  
  let displayTotal = document.querySelector(".total-price");

  displayTotal.innerText = totalPrice.toFixed(2);

  return totalPrice;
}

//  !!! added this function to create the field between the input and the delete buttom
function createUpdatedProductData() {
  
  //create elements and add attributes
  let updatedPriceDiv = document.createElement('div');
  let updatedPriceSpan = document.createElement('span');
  updatedPriceSpan.setAttribute('class', 'updated-price');
  updatedPriceSpan.innerText = '€0.00';

  //add elements
  let parent = document.querySelector('.product-rows > :last-child');
  parent.appendChild(updatedPriceDiv);
  updatedPriceDiv.appendChild(updatedPriceSpan);

}

function createDeleteButton(){
  //create elements
  let buttonDiv = document.createElement('div');
  let button = document.createElement('button');
  button.setAttribute("class","btn btn-delete");
  //button.setAttribute('class', 'btn-delete');
  button.innerText = 'Delete';

  //add elements
  let parent = document.querySelector('.product-rows > :last-child');
  parent.appendChild(buttonDiv);
  buttonDiv.appendChild(button);

  //re-check HTML doc for new delete buttons
  deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    console.log(deleteButtons[i]);
    deleteButtons[i].onclick = deleteItem;
  }
}

//    !!! I did both, creating the input field and the div and the label in this function
function createQuantityNode(){
  //create necessary elements: div, label, input & assign attributes where necessary
  let qtyDiv = document.createElement('div');
  let qtyLabel = document.createElement('label');
  qtyLabel.innerText = 'QTY';

  let qtyInput = document.createElement('input');
  qtyInput.setAttribute('type', 'text');
  qtyInput.setAttribute('class', 'qty');
  

  //add elements
  let parent = document.querySelector('.product-rows > :last-child');
  parent.appendChild(qtyDiv);
  qtyDiv.appendChild(qtyLabel);
  qtyDiv.appendChild(qtyInput);
  console.log("create qtx node: ");
}

function createItemNode(dataType, itemData){
  //create div and span for product name and connect span to input variable
  let nameDiv = document.createElement('div');
  let nameSpan = document.createElement('span');
  nameSpan.innerText = dataType;

  //create div and span for product price and connect span to input variable (add class)
  let priceDiv = document.createElement('div');
  let priceSpan = document.createElement('span');
  priceSpan.setAttribute('class', 'price');
  console.log(typeof(itemData));
  priceSpan.innerText = "€" + Number(itemData).toFixed(2);

  //insert div and span for name
  let parent = document.querySelector('.product-rows > :last-child');
  parent.appendChild(nameDiv);
  nameDiv.appendChild(nameSpan);

  //insert div and span for price
  parent.appendChild(priceDiv);
  priceDiv.appendChild(priceSpan);
} 

function createNewItemRow(itemName, itemUnitPrice){
  //create div wrap
  let newItemRow = document.createElement('div');
  
  //add class to it
  newItemRow.setAttribute('class', 'product-row');

  let parent = document.querySelector('.product-rows');

  parent.appendChild(newItemRow);

  createItemNode(itemName, itemUnitPrice);
  createQuantityNode();
  createUpdatedProductData();
  createDeleteButton();

}

function createNewItem(){
  
  //store input values in variables
  let nameInput = document.querySelector(".add-product-name").value
  let priceInput = document.querySelector(".add-product-price").value

  //trigger function to create div wrap
  createNewItemRow(nameInput, priceInput);
}

window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    console.log(deleteButtons[i]);
    deleteButtons[i].onclick = deleteItem;
  }
};


/*
//create array with products
let products = [
  {
    name: 'Product 1',
    price: '25.05'
  },
  {
    name: 'Product 2',
    price: '2.05'
  }
]
/*

//connect products array to html
products.forEach(function(product) {
  const body = document.querySelector("body");

  let productRow = document.createElement("div");
  console.log(products.indexOf(product));
  body.insertBefore(productRow, body.childNodes[products.indexOf(product)+2]);
  productRow.innerHTML = '<div> <span class="name">' + products.name + '</span> </div>';
  console.log("product found");
})*/