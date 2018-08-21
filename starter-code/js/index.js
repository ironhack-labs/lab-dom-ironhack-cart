function deleteItem(e){
  //On click Delete Button
  let row = document.getElementById(e.path[2].id)
  row.parentNode.removeChild(row);  
  getTotalPrice();
}

function setDeleteButtons(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

function getTotalPrice() {
  //On Click Calculate Prices Button Calculates the total price
  let totalPrice = document.getElementById('grand-total')
  let total = 0;  
  let itemPrices = document.getElementsByClassName('item-price');
  let quantityItems = document.getElementsByClassName('item-quantity');
  let totalPrices = document.getElementsByClassName('total-price');
  
  for(i=0; i<itemPrices.length;i++){
    totalPrices[i].textContent = (parseFloat(itemPrices[i].textContent)*quantityItems[i].valueAsNumber).toFixed(2);
    total += parseFloat(itemPrices[i].textContent)*quantityItems[i].valueAsNumber;
  }
  totalPrice.innerText = total.toFixed(2);  
}

function createItemNode(){
  //console.log('create row new item')
  var divRow = document.createElement("div");
  divRow.setAttribute("id", "div-row-new");
  section2.appendChild(divRow);
  let inputOne = '<div><input id="input-item" type="text" placeholder="Item" value="Iron"></div>';
  let inputTwo = '<div><input id="input-price" type="number" placeholder="Price"></div>';
  let span = '<div><span></span></div>';
  let createButton = '<div><button id="btn-create">Create</button></div>'
  divRow.innerHTML = inputOne + inputTwo + span + span + createButton;
}

function createNewItemRow(itemName, itemUnitPrice){
  //On click the button Create new Item Row
  var divRow = document.createElement("div");
  divRow.setAttribute("id", "div-row-"+divRowId);
  divRowId++;
  section.appendChild(divRow);
  
  let spanOne = '<div><span>' + itemName + '</span></div>';
  let spanTwo = '<div><span>$ </span><span class="item-price">' + itemUnitPrice.toFixed(2) + '</span></div>';
  let label = '<div><label>QTY</label>';
  let input = '<input class="item-quantity" type="number" value="1"></div>';
  let spanThree = '<div><span>$ </span><span class="total-price">' + itemUnitPrice.toFixed(2) + '</span></div>';
  let button = '<div><button class="btn-delete">Delete</button></div>';
  
  divRow.innerHTML = spanOne + spanTwo + label + input + spanThree + button;  
  setDeleteButtons();
}

function createNewItem(){
  var newItem = document.getElementById('input-item');
  var newItemPrice = document.getElementById('input-price');
  if (!newItem.value == ""  && !newItemPrice.value == ""){
    createNewItemRow(newItem.value, parseFloat(newItemPrice.value));
  } else {
    console.log('No values entered error');
  } 
  getTotalPrice();
}

function initialSettings(body){

  // linking existing elements
  var body = document.getElementsByTagName('body')[0];
  
  // Populating initial nodes
  h2Header.innerText ='Ironhack Merchandising Shop';
  h2Foother.innerHTML = '<span>Total Price: $ </span><span id="grand-total">0.00</span>';
  calculatePriceButton.innerText = 'Calculate Prices';
  
  // Setting attributes to existing nodes
  main.setAttribute("id", "main-box" );
  
  // Adding to Document new nodes  
  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
  header.appendChild(h2Header);
  main.appendChild(section);
  main.appendChild(section2);
  footer.appendChild(calculatePriceButton);
  footer.appendChild(h2Foother);

  createItemNode();

    /*Adding initial rows*/
    var initialItems =[
      {item: "IronBubble-head", price:  25},
      {item: "IronShirt", price:  15},
      {item: "IronCup", price:  10},
      {item: "IronSticker", price:  1},
      {item: "IronAxe", price:  100}  
    ]
    for (i=0; i<5; i++){
      createNewItemRow(initialItems[i].item, initialItems[i].price);
    }
    getTotalPrice();
}

// Creating new global elements
var header = document.createElement("header");
var main = this.document.createElement("main");
var h2Header = this.document.createElement("h2");
var h2Foother = document.createElement("h2");  
var section = document.createElement("section");
var footer = this.document.createElement("footer");
var calculatePriceButton = document.createElement('button');
var section2 = document.createElement("section");

var divRowId = 0;

window.onload = function(){
  // Configuring intial settings
  initialSettings();

  //Setting interface buttons
  var createItemButton = document.getElementById('btn-create');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  //Set detete buttons
  setDeleteButtons();
};
