function deleteItem(e) {
  //my products are in <div><div>
  //my delete button is in <div><div><div>
  //I want to remove the products divs from my button divs
  var productContainer = e.currentTarget.parentElement
  var deleteContainer = e.currentTarget.parentElement.parentElement
  deleteContainer.removeChild(productContainer)
}
// each products price:  let itemPrice = document.getElementsByClassName("setPrice")[0].innerText returns 25.00, [1] 15.00
// each products quantity let productQuantity
function getPriceByProduct(itemNode) {
  let productQuantity = parseFloat(itemNode.getElementsByClassName("quanitityInput")[0].value)
  let itemPrice = parseFloat(itemNode.getElementsByClassName("setPrice")[0].innerHTML)
  return itemPrice * productQuantity
}
//if quantity is changed > loop over, want to have each input ?how to add do <div total price>
function updatePriceByProduct() {
  var newQuantity = document.getElementsByClassName("totalPrice")
  for (var i = 0; i < newQuantity.length; i++) {
    var input = newQuantity[i]
    input.addEventListener("change") //
  }

  //Calculating the total price of all products
  function getTotalPrice() {
    // product-row > items 
    let items = document.getElementsByClassName("product-row")
    var total = 0
    for (let i = 0; i < items.length; i++) {
      let newItem = items[i]
      let totalPrice = getPriceByProduct(newItem)
      newItem.getElementsByClassName("totalPrice")[0].innerHTML = totalPrice
      total = totalPrice + total
    }
    document.getElementById("cart-total-price").innerHTML = total
  }



  function createQuantityInput() {

  }

  function createDeleteButton() {

  }

  function createQuantityNode() {

  }

  function createItemNode(dataType, itemData) {

  }

  function createNewItemRow(itemName, itemUnitPrice) {

  }

  function createNewItem() {
    //clone the product-row, input new procudt, appendChild
  }

  window.onload = function () {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem();

    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].onclick = deleteItem;
    }
  };
