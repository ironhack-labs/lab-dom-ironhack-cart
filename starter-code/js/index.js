var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

// Iteration 1.1
function updateSubtot($product) {
  
  // stores the value accessed via the elements > innerHTML pulls the value from the span element
  let productPrice = $product.querySelector(".pu span").innerHTML; 
  
  // stores the value of the qty entered. Uses .value bacause it's being typed in real time
  let productQuantity = $product.querySelector(".qty input").value; 
  
  // stores the value of the calculated amount of productPrice * productQuantity
  let subtotalUpdate = $product.querySelector(".subtot span");
  subtotalUpdate.innerHTML = productPrice * productQuantity;

  // returns the updated subtotal and convert concatenated string into number
  return Number(subtotalUpdate.innerHTML); 
}

// Iteration 1.2
function calcAll() { 
  let grandTotal = 0;

  // accessing the stored values in $cart (line 1), and pulls products from the tr
  let listOfProducts = $cart.querySelectorAll('.product'); 

  // loop through the line of products and update the subtotal
  for (let i = 0; i < listOfProducts.length; i++) { 
  
  // returns the amount of all subtotals and calculates the grandTotal
    grandTotal += updateSubtot(listOfProducts[i]);
  }
  // setting the calculated grandTotal into the Total innerHTML
  document.querySelector('h2 span').innerHTML = grandTotal;
}

$calc.onclick = calcAll;

// event is a global variable in JS
// parentNode is the parent element of target
function deleteProduct (target) {
  // uses the native removeChild function to delete the entire line based on the parameter being passed in
  $cart.removeChild(target.parentNode.parentNode);
}

function addProduct () {
  // each variable is accessing the value typed in
  // used [] to determine which value inside the td to access - number or text
  let typedNameElement = document.querySelector('.new input[type=text]');
  let typedName = typedNameElement.value; // stores the element in the variable

  let typedPriceElement = document.querySelector('.new input[type=number]');
  let typedPrice = typedPriceElement.value;
  
  // createElement is used to create a new HTML element via JS
  // () determine which element to create
  let newTr = document.createElement('tr');

  // sets the class of the new Tr
  newTr.classList.add('product');

  let newTdName = document.createElement('td');
  newTdName.classList.add('name');

  let newNameSpan = document.createElement('span');
  newNameSpan.innerHTML = typedName;

  // adds the span inside the Td
  newTdName.append(newNameSpan);

  // adds the Td inside the Tr
  newTr.append(newTdName);

  let newTdPrice = document.createElement('td');
  newTdPrice.classList.add('pu');

  let newPriceSpan = document.createElement('span');
  newPriceSpan.innerHTML = typedPrice;

  // add $ inside the Td
  newTdPrice.append('$');

  // adds the span inside the Td
  newTdPrice.append(newPriceSpan);

  // adds the Td inside the Tr
  newTr.append(newTdPrice);

  let newTdQty = document.createElement('td');
  newTdQty.classList.add('qty');

  let newQtyLabel = document.createElement('label');
  let newQtyInput = document.createElement('input');

  // defines input type of newQtyInput to be 'number' from HTML
  newQtyInput.type = 'number';

  // sets initial values to zero so no negative qtys can be used
  newQtyInput.value = 0;
  newQtyInput.min = 0;

  // adds the value entered in newQtyInput into the new newQtyLabel created above
  newQtyLabel.append(newQtyInput);

  // adds the label entered in Td
  newTdQty.append(newQtyLabel);

  // adds new newTdQty into the Tr
  newTr.append(newTdQty);

  let newTdSubtotal = document.createElement('td');
  newTdSubtotal.classList.add('subtot');

  let newSubtotalSpan = document.createElement('span');
  newSubtotalSpan.innerHTML = 0;

  // add $ inside the Td
  newTdSubtotal.append('$');

  // adds the span inside the Td
  newTdSubtotal.append(newSubtotalSpan);

  // adds the Td inside the Tr
  newTr.append(newTdSubtotal);

  let newTdDelete = document.createElement('td');
  newTdDelete.classList.add('rm');

  let newDeleteButton = document.createElement('button');

  // function to delete itself on click
  newDeleteButton.onclick = function () {
    deleteProduct(this);
  };

  newDeleteButton.classList.add('btn');
  newDeleteButton.classList.add('btn-delete');
  newDeleteButton.innerHTML = 'Delete';

  newTdDelete.append(newDeleteButton);
  newTr.append(newTdDelete);

  $cart.append(newTr);

  // clears the values of both fields once an item has been added
  typedNameElement.value = '';
  typedPriceElement.value = '';
  
  }