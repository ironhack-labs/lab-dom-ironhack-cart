function deleteItem(){
  this.parentElement.parentElement.remove()
  //also can pass the event to this function and use e.currentTarget.parentElement
  // few timesto access the parent-parent DOM element and call removeChild on it
}

function getTotalPrice() {
  let total = 0;
  for(let i = 0; i < costPerUnit.length; i++){
    let costPP = parseFloat(costPerUnit[i].innerText.slice(1, 10));
    let qtyOfItems = quantityPerProduct[i].value;
    let totalPP = costPP * qtyOfItems;
    totalPerProduct[i].innerText = `$${totalPP}`
    total += totalPP;
  }
  grandTotal.innerText = total;

}

function createQuantityInput(){
// creating input
let newQtyInput = document.createElement('input');
newQtyInput.setAttribute('type', "number");
newQtyInput.setAttribute('name', 'units');
newQtyInput.setAttribute('placeholder', ' How many?');

//creating label
let newQtyLabel = document.createElement('label');
newQtyLabel.setAttribute('for', 'units');
newQtyLabel.innerText = 'QTY: '

//putting input and label in a div
let newQtyDiv = document.createElement('div');
newQtyDiv.setAttribute('class', 'unit-to-buy');
newQtyDiv.classList.add('quantity');
newQtyDiv.appendChild(newQtyLabel);
newQtyDiv.appendChild(newQtyInput);

//returning a div
return newQtyDiv
}

function createDeleteButton(){
  //creating new button
  let newDeleteButton = document.createElement('button');
  newDeleteButton.innerText = 'Delete';
  newDeleteButton.setAttribute('class', 'btn');
  newDeleteButton.classList.add('btn-delete')

  //wrapping the button in a div
  let newDeleteButtonDiv = document.createElement('div');
  newDeleteButtonDiv.setAttribute('class', 'delete-btn-container');
  newDeleteButtonDiv.appendChild(newDeleteButton);

  //returning new div
  return newDeleteButtonDiv
}
//product name
function createProductDiv(){
  let newProductNameSpan = document.createElement('span');
  let newItemName = newItemNameInput.value || 'Iron sticker';
  if(!newItemName.includes('Iron') && !newItemName.includes('iron')) {
    newItemName = 'Iron ' + newItemName;
  }
  newProductNameSpan.innerText = newItemName;

  let newProductNameDiv = document.createElement('div');
  newProductNameDiv.setAttribute('class', 'product-name');
  newProductNameDiv.appendChild(newProductNameSpan);

  return newProductNameDiv
}

function createCostDiv(){
  //creating new span
  let newPrice = newItemPriceInput.value || 8;
  newPrice = `$${newPrice}.00`;
  let newCostSpan = document.createElement('span');
  newCostSpan.innerText = newPrice;

  //creating new wrapper div
  let newCostDiv = document.createElement('div');
  newCostDiv.setAttribute('class', 'cost-per-unit');
  newCostDiv.appendChild(newCostSpan);

  return newCostDiv
}

function createTotalCostDiv(){
  let newPriceSpan = document.createElement('span');
  newPriceSpan.innerText = '$0';

  let newTotalCostDiv = document.createElement('div');
  newTotalCostDiv.setAttribute('class', 'total-price');

  newTotalCostDiv.appendChild(newPriceSpan);

  return newTotalCostDiv
}

function createNewItem(){
  
  let newRow = document.createElement('div');
  newRow.setAttribute('class', 'product-wrapper');
  newRow.appendChild(createProductDiv());
  newRow.appendChild(createCostDiv());
  newRow.appendChild(createQuantityInput());
  newRow.appendChild(createTotalCostDiv());
  newRow.appendChild(createDeleteButton());

  container.insertBefore(newRow, inputsRow)
  attachListenersToDeleteButtons();
}

function attachListenersToDeleteButtons() {
  for(let i = 0; i<deleteBtns.length ; i++){
  deleteBtns[i].addEventListener('click', deleteItem);
  }
}

  var createItemButton = document.getElementById('new-item-create');
  //this will select a div with a span inside, so I'll  use .innerText to change that later
  //this will select all the total prices per product, to iterate through it later
  const totalPerProduct = document.getElementsByClassName('total-price');
  //select all delete buttons so we can iterate thru them later
  const deleteBtns = document.getElementsByClassName('btn-delete');
  //same thing here, all the quantitys per each product
  const quantityPerProduct = document.getElementsByName('units');
  //select all prices per unit so I can use this info for total price later
  const costPerUnit = document.getElementsByClassName('cost-per-unit');
  const newItemNameInput = document.getElementById('add-product-input');
  const newItemPriceInput = document.getElementById('add-price-input');

  //there would only be one calculate price button so I select it specifically
  const successBtn = document.getElementsByClassName('btn-success')[0];
  const grandTotal = document.getElementsByClassName('grand-total')[0];
  const createBtn = document.getElementsByClassName('create-btn')[0];
  const container = document.getElementsByClassName('container')[0];
  const inputsRow = document.getElementById('create');

  
  successBtn.addEventListener('click', getTotalPrice)
  createBtn.addEventListener('click', createNewItem);
  attachListenersToDeleteButtons();
  

  


