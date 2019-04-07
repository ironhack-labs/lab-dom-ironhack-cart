
//function to delete the product rows
function deleteItem(e) {

  e.currentTarget.parentNode.parentNode.remove(e.currentTarget.parentNode.parentNode)
  getTotalPrice();
}


// loop through the rows and multiplying price * quantity
function getTotalPrice() {
  let productRow = document.getElementsByClassName("productRow");
  let totalPrice = document.getElementsByClassName('totalPrice')[0];
  totalPrice.innerHTML = 0;

  for (let i = 0; i < productRow.length; i++) {
    let rows = productRow[i]
    let qtyTotal = rows.getElementsByClassName('qtyTotal')[0];
    let productPrice = rows.getElementsByClassName("productPrice")[0];
    let quantity = rows.getElementsByClassName("qty")[0];

    qtyTotal.innerHTML = Number(Number(productPrice.innerHTML) * Number(quantity.value));
    totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(qtyTotal.innerHTML);
  }
}


/* Still need to create a function to add new items to include to the cart.
On the HTML, I will create two inputs for a product name and product price..

*/

function createNewItem() {


}



//Activate the delete button
function updateDeleteButtons() {
  let deleteButtons = document.getElementsByClassName('btn-delete');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}


//Activate functions
window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;
  updateDeleteButtons()
  // for (var i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
  // };
}
