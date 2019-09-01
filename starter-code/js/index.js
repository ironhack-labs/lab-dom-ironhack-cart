let productData = [{
    productName: "IronBubble-head",
    productPrice: 25
  },
  {
    productName: "IronShirt",
    productPrice: 15
  },
  {
    productName: "IronCup",
    productPrice: 10
  },
  {
    productName: "IronSticker",
    productPrice: 1
  },
  {
    productName: "IronAxe",
    productPrice: 100
  }
];

let currentProduct = 0;


function deleteItem(e) {  // ######################################

  console.log(this);                  //  => gets the button!
  console.log(e.currentTarget);       // => gets the line! event listener here.

  console.log(this.parentNode.parentNode);
  document.body.removeChild(this.parentNode.parentNode);

}

//function getPriceByProduct(itemNode) {
//}

//function updatePriceByProduct(productPrice, index) {
//}

function getTotalPrice() { //onclick event

  let totalPrice = 0;   

  let allLines = document.getElementsByClassName('wrapper');

  Array.from(allLines).forEach(element =>{

    let desiredQuantity = element.childNodes[2].childNodes[1].value;
    let unitPrice = element.childNodes[1].childNodes[0].innerHTML;
    let totalAmount = parseFloat((desiredQuantity) * (unitPrice));

    element.childNodes[3].childNodes[0].innerHTML=totalAmount.toFixed(2);
    totalPrice += totalAmount;
  });

  
  document.getElementById('total-sum').innerHTML=totalPrice.toFixed(2);

}

//function createQuantityInput() {
//}

//function createDeleteButton() {
//}

//function createQuantityNode() {
//}

//function createItemNode(dataType, itemData) {
//}

//function createNewItemRow(itemName, itemUnitPrice) {
//}

function createNewItem() { // onclick event

  let newDiv = document.createElement('div');
  newDiv.className = 'wrapper';
  newDiv.id = `line${currentProduct}`;
  document.body.insertBefore(newDiv, document.getElementById('wrapper-buttons-below'));

  let div4productName = document.createElement('div');
  div4productName.className = "col1";
  newDiv.appendChild(div4productName);

  let span4productName = document.createElement('span');
  span4productName.innerHTML = productData[currentProduct].productName;
  div4productName.appendChild(span4productName);

  let div4unitPrice = document.createElement('div');
  div4unitPrice.className = "col2";
  newDiv.appendChild(div4unitPrice);

  let span4unitPrice = document.createElement('span');
  span4unitPrice.className = "unit-price currency";
  span4unitPrice.innerHTML = productData[currentProduct].productPrice.toFixed(2);
  div4unitPrice.appendChild(span4unitPrice);

  let div4quantity = document.createElement('div');
  div4quantity.className = "col3";
  newDiv.appendChild(div4quantity);

  let label4qty = document.createElement('label');
  label4qty.innerHTML = "QTY ";
  div4quantity.appendChild(label4qty);

  let input4qty = document.createElement('input');
  input4qty.type = "number";
  input4qty.className = "desired-quantity";
  div4quantity.appendChild(input4qty);

  let div4amount = document.createElement('div');
  div4amount.className = "col4";
  newDiv.appendChild(div4amount);

  let totalamt = document.createElement('span');
  totalamt.className = "total-amount currency";
  totalamt.innerHTML = "0.00";
  div4amount.appendChild(totalamt);

  let div4deleteBtn = document.createElement('div');
  div4deleteBtn.className = "col5";
  newDiv.appendChild(div4deleteBtn);

  let delButton = document.createElement('button');  // ##################################
  delButton.classList.add('btn', 'btn-delete');
  delButton.onclick = deleteItem;                
  delButton.innerHTML = 'delete';
  div4deleteBtn.appendChild(delButton);

  //deleteButtons = document.getElementsByClassName('btn-delete');
  
  currentProduct++;

};

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

   //for (var i = 0; i < deleteButtons.length; i++) {
   //  deleteButtons[i].onclick = deleteItem;
   //}

  createNewItem();

};