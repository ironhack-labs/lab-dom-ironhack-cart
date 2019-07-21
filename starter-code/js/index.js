
//ITERATION 3: Calculating the total price for the product
// var total = quantity + price
// var quanitity = document.getElementsByClassName("quanitityInput")
function getTotalPrice() {
  //first get the item container, start with the first item [0]
  var productItems = document.getElementsByClassName('product-items')[0]
  //then get all the different elements selected:
  var productRow = productItems.getElementsByClassName('product-row')
  var total = 0
  //loop over it 
  for (var i = 0; i < productRow.length; i++) {
    //define a var that takes the position of the chosen item
    var newProductRow = productRow[i]
    //get price and quantity of the row
    var priceElement = newProductRow.getElementsByClassName("setPrice")[0]
    var quantitiyElement = newProductRow.getElementsByClassName("quanitityInput")[0]
    console.log(priceElement)
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quanitity = quantitiyElement.value
    //start at 0 ^line 49
    console.log(price)
    //we want a total + a new value if product is added
    var total = (price * quanitity) + total
  }
  //we start at the priceTag of the products, we want just one [0] and it should set value to toal 
  //?DO I have to choose [0] because the method says "getElements", plural
  document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total
}

//Iteration4 Delete 

// Select the parent that contains all of the product wrapper divs
// Use the function removeChild we saw in DOM Manipulators
// 💡 Use e.currentTarget to access the "Delete" button that was just clicked and select the parent node of an HTML element with parentNode.

// function deleteItem(e) {
//define all items position that are deleted
var newProductDeleted = newProductDeleted[i]
// Select all the "Delete" buttons
var allDeleted = newProductDeleted.getElementsByClassName("btn-delete")[0]
// For each button, assign a click event that will:
// Select the wrapper div that contains all the HTML for the product that should be deleted


// }

// function getPriceByProduct(itemNode) {

// }

// function updatePriceByProduct(productPrice, index) {

// }



// function createQuantityInput() {

// }

// function createDeleteButton() {

// }

// function createQuantityNode() {

// }

// function createItemNode(dataType, itemData) {

// }

// function createNewItemRow(itemName, itemUnitPrice) {

// }

// function createNewItem() {

// }

window.onload = function () {
  let element = document.getElementsByClassName("quanitityInput")[0]
  element.value = "0";
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
