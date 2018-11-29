function deleteItem(e){
   let divParent =  e.currentTarget.parentElement.parentElement;
   divParent.remove(divParent);
     getTotalPrice();

}

function getPriceByProduct(itemNode){
  element = document.getElementById("price");
  return element;
}

function updatePriceByProduct(productPrice, index){
  
  let qty = document.getElementsByClassName('quantity')[index].value;
  let totalprice  =  parseFloat(productPrice) * parseFloat(qty);
  console.log(totalprice);
  document.getElementsByClassName('price-qty')[index].innerHTML =  totalprice.toFixed(2);

}

function getTotalPrice() {
  let prices = document.getElementsByClassName('price');
  console.log(prices[0].innerHTML);
  let priceArr = [].slice.call(prices);
  let total= 0;
  priceArr.forEach((price,index) => {
    updatePriceByProduct(price.innerHTML,index);
    let totalPriceByProduct = document.getElementsByClassName('price-qty')[index].innerHTML;
    total += parseFloat(totalPriceByProduct);
    console.log(totalPriceByProduct);
  });
  
  document.getElementById('totalPrice').innerHTML = total.toFixed(2);
  console.log(total);  

}

function createQuantityInput(){
  let newQtyInput = document.createElement("input");
  newQtyInput.setAttribute('type','number');
  newQtyInput.setAttribute('class','quantity');
  newQtyInput.setAttribute('value','0');
  return newQtyInput;
}

function createDeleteButton(){
  let newDeleteBtn = document.createElement("button");
  newDeleteBtn.setAttribute('class','btn btn-delete');
  newDeleteBtn.innerHTML = "Delete";
  return newDeleteBtn;
}

function createColDiv(){
  let createDivCol = document.createElement("div");
  createDivCol.setAttribute('class','col');
  return createDivCol;
}

function createPriceyNode(){
  let createPrice = document.createElement("span");
  createPrice.setAttribute('class','price');
  return createPrice;
}
function createTotalyNode(){
  let createTotalyNode = document.createElement("span");
  createTotalyNode.setAttribute('class','price-qty');
  createTotalyNode.innerHTML = "0.00";
  return createTotalyNode;
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  //Receive the values from new Item and new price
  let newItem  = document.getElementById('newItem').value;
  let newPrice = document.getElementById('qtyItem').value;

  //Checks if new item and price fields are filled in, otherwise it display a nice message
  if(!(newItem == "" || newPrice == "")){

  //Finds the container in HTML then create the Wrapper class wher each element of the new item will show up
  let mainDiv = document.getElementById('container');
  let createWrapper = document.createElement("div");
  createWrapper.setAttribute('class','prod-wrapper');
  mainDiv.appendChild(createWrapper);

  //Create a new div for each element of the new row for the new product 
  let col1 =  createColDiv();
  let col2 =  createColDiv();
  let col3 = createColDiv();
  let col4 = createColDiv();
  let col5 = createColDiv();
  
  //First Div receives the item name
  col1.innerHTML = newItem;
  
  //the second receives the dollar sign then receives a new span and the price from the users and add 2 decimals for the number
  col2.innerHTML = "$";
  col2.appendChild(newPriceSpan);
  let newPriceSpan = createPriceyNode();
  newPriceSpan.innerHTML = parseFloat(newPrice).toFixed(2);

  //the third div receives Qty text and a new input tag
  col3.innerHTML = "Qty";
  col3.appendChild(createQuantityInput());

  //the forth div receives a dollar sign and a span with a text 0.00
  col4.innerHTML = "$";
  col4.appendChild(createTotalyNode());

  //here we create a new button and set a addEventListener to it so that each can be able to be deletable, and then we attach the button to the fifth div
  deleteButton = createDeleteButton();
  deleteButton.addEventListener('click',deleteItem);
  col5.appendChild(deleteButton);

  //Here we append all new Div to the mains Wrapper div
  createWrapper.appendChild(col1);
  createWrapper.appendChild(col2);
  createWrapper.appendChild(col3);
  createWrapper.appendChild(col4);
  createWrapper.appendChild(col5);
}else{
  alert('Fill in New Item and Price Fields! Thank you... You\'re welcome');
}
  
  
}



window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
 
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.addEventListener('click',getTotalPrice);
  //createItemButton.addEventListener('click',createNewItem);

  var createItemButton = document.getElementById('new-item-create');
  createItemButton.addEventListener('click',createNewItem);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener('click',deleteItem);
    console.log(deleteButtons[i].parentElement.parentElement);
  }
};
