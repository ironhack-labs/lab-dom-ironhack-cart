//------------------------------------------------//
// -- Remove buttons
//------------------------------------------------//

function deleteItem(e) {
  // deleteTarget (2 higher: product-wrapper) + parent of deleteTarget (3 higher: wrapper)
  // e.currentTarget takes the current element of the click event listener (e)
  var deleteTarget = e.currentTarget.parentNode.parentNode;
  var parent = e.currentTarget.parentNode.parentNode.parentNode;
  // remove child (product-wrapper)
  parent.removeChild(deleteTarget);
  // recalculate order price after deleting an item
  getTotalPrice();
};

 //------------------------------------------------//
// -- Get total price button
//------------------------------------------------//

function getTotalPrice() {
  var orderTotal = 0;
  for (i = 0; i < document.getElementsByClassName("product-wrapper").length; i++) {
    // retreive the value 25 with innerHTML (instead of <span>25</span>)
    var productCost = document.getElementsByClassName("product-cost")[i].innerHTML;
    // input form has no innerHTML but a value
    var productQuantity = document.getElementsByClassName("product-quantity")[i].value;
    // calc total price
    var totalPrice = productCost * productQuantity;
    // change price
    var total = document.getElementsByClassName("product-total")[i];
    total.innerHTML = totalPrice;
    orderTotal += totalPrice;
  };
  document.getElementById("order-total").innerHTML = orderTotal;
};

//------------------------------------------------//
// -- Create new item
//------------------------------------------------//
 
function createNewItem() {
  // retrieve values from input fields
  var prodName = document.getElementById("input-product-name").value;
  var prodCost = document.getElementById("input-product-cost").value;

  // error handling
  if (prodName.length == 0) { return alert("No productname provided"); };
  if (prodCost.length == 0) { return alert("No price provided"); };

  // create product row div with class product-wrapper
  var divEle = document.createElement("div");
  divEle.setAttribute("class", "product-wrapper");

  // creating input for div with the provided input (the innerHTML)
  var input = "<div><span class='product-name'>" + prodName + "</span></div>";
  input += "<div>€ <span class='product-cost'>" + prodCost + "</span></div>";
  input += '<div><label class="quantity" for="quantity">QTY</label><input class="product-quantity" type="number" value="1" /></div>';
  input += '<div>€ <span class="product-total">0</span></div>';
  input += '<div><button class="btn btn-delete">Delete</button></div>';

  // push new row of the product behind previous one, but above create button.
  divEle.innerHTML = input;
  var wrapperParent = document.getElementById('product-overview');
  wrapperParent.appendChild(divEle);

  // adding delete event listener to all delete buttons
  deleteListener();

  // resetting values
  document.getElementById("input-product-name").value = '';
  document.getElementById("input-product-cost").value = null;
};

//------------------------------------------------//
// -- Event listeners
//------------------------------------------------//

function deleteListener() {
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    // deleteButtons[i].onclick = deleteItem; // option 1, but unclear it is a callback function
    deleteButtons[i].addEventListener("click", deleteItem); // (different, more clear, way of writing the same)
  };
};

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  deleteListener();
};

