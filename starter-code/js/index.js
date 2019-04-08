
//function to delete the product rows
function deleteItem(e) {
  e.currentTarget.parentNode.parentNode.remove(e.currentTarget.parentNode.parentNode)
  getTotalPrice();
}


// loop through the rows and multiplying price * quantity
function getTotalPrice() {
  let productRow = document.getElementsByClassName("productRow");
  let totalPrice = document.getElementsByClassName('totalPrice')[0];
  totalPrice.innerHTML = 0.00;

  for (let i = 0; i < productRow.length; i++) {
    let rows = productRow[i]
    let qtyTotal = rows.getElementsByClassName('qtyTotal')[0];
    let productPrice = rows.getElementsByClassName("productPrice")[0].innerHTML;
    console.log(rows, productPrice)
    let quantity = rows.getElementsByClassName("qty")[0].value;
    let subTotal = Number(productPrice) * Number(quantity);
    let total = subTotal + Number(totalPrice.innerHTML)

    qtyTotal.innerHTML = subTotal.toFixed(2)
    totalPrice.innerHTML = total.toFixed(2)
  }
}




function AddProductRow() {
  let nextId = 1;
  nextId = nextId + 1;

  let div1 = document.createElement('div');
  let itemName = document.getElementById('name-input').value
  let itemPrice = document.getElementById('price-input').value

  div1.innerHTML = document.getElementById('divRowTemplate').innerHTML;

  div1.setAttribute("id", "divRow" + nextId + "");
  div1.setAttribute("class", "row productRow");
  div1.querySelector(".productHead").innerText = itemName;
  div1.querySelector(".productPrice").innerText = itemPrice;

  document.getElementById('productRows2').appendChild(div1);
  updateDeleteButtons();
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

  updateDeleteButtons()

}
