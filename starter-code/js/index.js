function deleteItem(e) {
  let productsContainer = document.querySelector('.title')
  let product = e.currentTarget.parentElement.parentElement

  productsContainer.removeChild(product)
  getTotalPrice()
}

function getTotalPrice() {
  getPriceByProduct()
  let productsTotalPrices = [...(document.querySelectorAll(".total-price"))]
  let numbersPrices = productsTotalPrices.map(n => {
    return parseFloat(n.innerText.replace(/[^\d.]/g, ''))
  })

  let sum = numbersPrices.reduce((n, acc) => n + acc, 0)

  document.querySelector(".total-price-calc h2").innerText = `Total Price: ` + `$` + `${sum}.00`
}

function updatePriceByProduct(productPrice, index) {

}
//iterate and for each of them calculate the price
function getPriceByProduct() {
  let products = document.querySelectorAll(".product")
  let productsArray = [...products]

  productsArray.map(node => {
    let stringValue = node.querySelector(".cost-per-unit > span").innerText.substring(1) // arr[i].price.toFixed(2));
    let cost = parseInt(stringValue).toFixed(2)
    let quantity = node.querySelector("#quantity").value
    node.querySelector(".total-price").innerText = (`$` + `${cost * quantity}.00`)
  })

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

}

function copyAddProduct(name, unitPrice) {
  let firstProduct = document.getElementsByClassName('product')[0];
  let newProduct = firstProduct.cloneNode(true);
  document.getElementsByClassName('title')[0].appendChild(newProduct);
  newProduct.querySelector(".product-name > span").innerText = name
  newProduct.querySelector(".cost-per-unit > span").innerText = `$` + unitPrice + `.00`
  let deleteButton = newProduct.querySelector(".btn-delete")
  deleteButton.onclick = deleteItem

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calculate-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = [...document.getElementsByClassName('btn-delete')]

  calculatePriceButton.onclick = getTotalPrice
  // calculatePriceButton.onclick = ;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

  copyAddProduct("IronShirt", "15")

  copyAddProduct("IronCup", "10")

  copyAddProduct("IronSticker", "1")

  copyAddProduct("IronAxe", "100")

};

//