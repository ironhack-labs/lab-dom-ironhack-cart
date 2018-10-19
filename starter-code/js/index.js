function initVariables() {

  // default quantity : 0
  document.querySelectorAll(".product input").forEach(x=>{
    x.innerHTML = 0;
  })

  // unitary prices have two digits :
  document.querySelectorAll(".product price-one-unit").forEach(x=>{
    x.innerHTML = Number(x.innerHTML).toFixed(2);
  })

    // unitary prices have two digits :
  document.querySelectorAll(".total-price-div span").forEach(x=>{
    x.innerHTML = Number(x.innerHTML).toFixed(2);
  })


}

function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove()

}

function getTotalPrice() {

  var bigTotal = 0;

  // 1. Select product divs
  var productDivs = document.querySelectorAll(".products .product");

  // 2. For each product div
  productDivs.forEach(function(productDiv){

    // 3. get unitary price
    var unitaryPrice = Number(productDiv.querySelector(".price-one-unit").innerHTML);

    // 4. get quantity
    var quantity = Number(productDiv.querySelector("input").value);

    // 5. calculate the total price
    var totalPrice = (unitaryPrice * quantity).toFixed(2);

    // 6. assign total price to total-price span
    productDiv.querySelector(".total-price").innerHTML = totalPrice;

    // 7. update big total
    bigTotal += Number(totalPrice);

  });

  // 8. render big total
  document.querySelector(".total-price-div span").innerHTML = Number(bigTotal).toFixed(2);

}

function createDeleteButton(){
  // <span><button class="btn btn-delete">Delete</button></span>

  var out = document.createElement('span');

  var button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("btn-delete");
  button.innerHTML = "Delete";
  button.onclick = deleteItem;
  out.appendChild(button);

  return out
}

function createQuantityNode(){

  // <span>
  //   <label class="quantity">QTY</label>
  //   <input class='qty-input' type="number" step="1" placeholder="0">
  // </span>

  var out = document.createElement("span");

  //label
  var label = document.createElement("label");
  label.classList.add("quantity");
  label.innerHTML = "QTY";
  out.appendChild(label);

  // input
  var input = document.createElement("input");
  input.classList.add('qty-input');
  input.setAttribute("type", "number");
  input.setAttribute('step', '1');
  input.setAttribute('placeholder', "0");
  out.appendChild(input);

  return out
}


function createProductNameSpan(itemName){
  // <span class="product-name">IronShirt</span>

  var out = document.createElement('span');
  out.classList.add("product-name");
  out.innerHTML = itemName;
  return out
}

function createUnitaryPriceSpan(itemUnitPrice){
  // <span class="price-one-unit money">25.00</span>
  var out = document.createElement("span");
  out.classList.add("price-one-unit");
  out.classList.add("money");
  out.innerHTML = Number(itemUnitPrice).toFixed(2);
  return out;
}

function createTotalPriceSpan(){

  //<span class="total-price money">0.00</span>
  var out = document.createElement("span");
  out.classList.add("money");
  out.classList.add("total-price");
  out.innerHTML = Number(0).toFixed(2);
  return out;
}


function createNewItemRow(itemName, itemUnitPrice){

    // create the item row
  var row = document.createElement("div");
  row.classList.add("product");

  // create spans
  var  productNameSpan =  createProductNameSpan(itemName);
  row.appendChild(productNameSpan)

  var unitaryPriceSpan = createUnitaryPriceSpan(itemUnitPrice);
  row.appendChild(unitaryPriceSpan);

  var quantityInputSpan = createQuantityNode();
  row.appendChild(quantityInputSpan);

  var totalPrice = createTotalPriceSpan();
  row.appendChild(totalPrice);

  var deleteButton = createDeleteButton();
  row.appendChild(deleteButton);

  return row;

}

function createNewItem(e){


  // 1. get itemName and
  var inputDiv = e.currentTarget.parentNode.parentNode;
  var itemName = inputDiv.querySelector("input[class='product-name']").value;
  var itemUnitPrice = inputDiv.querySelector("input[class='price-one-unit']").value;

  // 2. create new Item row
  var newProduct = createNewItemRow(itemName, itemUnitPrice);

  // 3. put the new element on the dom
  document.querySelector(".products").appendChild(newProduct);

  // 4. reinitialize the inputs
  inputDiv.querySelector("input[class='product-name']").value = "";
  inputDiv.querySelector("input[class='price-one-unit']").value = "";
}

window.onload = function(){

  // initialize variables
  initVariables();

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
