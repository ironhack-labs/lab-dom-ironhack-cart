window.onload = function(){

  let calculatePriceButton = document.getElementById('btn-calculate');
  let createItemButton = document.querySelector('.newRow button');
  let deleteButtons = document.getElementsByClassName('btn-delete');
  console.log(createItemButton);

  // assigning events to DOM elements
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  deleteButtons.onclick = startDelete();


function startDelete(){
  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

// this function deletes rows when invoked. 
function deleteItem(e){
 /*  "e" is an object inherited in every event we create
  selects the parent then the parent of the previous parent
  using dot notation  */
  e.currentTarget.parentElement.parentElement.remove();

}

function calculateTotalPrice(){
  
  // variable totalPrice stats at 0
  let totalPrice = 0;
  let rows = document.getElementsByClassName('row');
  for(let i = 0; i <rows.length; i++){

    let updatePrice = parseFloat(document.querySelector(`.row:nth-child(${i+1}) .product-total > span`).innerHTML.replace(/\$|,/g, ''));
    // updates totalPrice as we iterate through the for loop
    totalPrice += updatePrice;
  }
  console.log("total price for all products is: ", totalPrice);

  let finalprice = document.querySelector(`h2 span`);
  // add the text to the final price
  finalprice.innerHTML = "$" + totalPrice;
  return;

}

// updates a product's price after calculating price * quantity
function updatePriceByProduct(productPrice, index){

    let updatePrice = document.querySelector(`.row:nth-child(${index}) .product-total > span`);
    updatePrice.innerHTML = "$" + productPrice;

    return;

}

// calculates a products total price 
function getTotalPrice() {

  let rows = document.getElementsByClassName('row');
  for(let i = 0; i < rows.length; i++){

    let priceOfProduct = document.querySelector(`.row:nth-child(${i+1}) .product-price > span`).innerHTML.replace(/\$|,/g, '');
    let quantityInput = document.querySelector(`.row:nth-child(${i+1}) .product-quantity > input`).value;

    let total = parseFloat(priceOfProduct * quantityInput);
    updatePriceByProduct(total, i+1);
  }

  calculateTotalPrice();

}

function DeleteButton(){
  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

// creates a div then appends div to our bigContainer div
function createNewItemRow(itemName, itemUnitPrice){
  console.log("createNewItemRow() invoked!!!")
  let newRowDiv = document.createElement(`div`);
  newRowDiv.className = `row`;

  newRowDiv.innerHTML =
      `
      <div class="product-name">
        <span>
          ${itemName}
        </span>
      </div>

      <div class="product-price">
        <span>$${itemUnitPrice}</span>
      </div>

      <div class="product-quantity">
        <label>QTY</label>
        <input type="number">
      </div>

      <div class="product-total">
        <span>$0.00</span>
      </div>

      <div>
        <button class="btn btn-delete">Delete</button>
      </div>
     `;
     
     let container = document.getElementById(`bigContainer`);
     container.appendChild(newRowDiv); 
}

function createNewItem(){
  // first select the create new row items after user input
  let userProductName = document.querySelector(`.newRow input`).value;
  let userPrice = document.querySelector(`.newRow > .product-price > input`).value;
  createNewItemRow(userProductName, userPrice);
  startDelete();
  return;
}


}

