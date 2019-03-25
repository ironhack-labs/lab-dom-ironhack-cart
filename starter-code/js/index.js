// //Use at least 3 onclick events
// Use at least one getElementById
// Use at least one getElementsByTagName
// Use at least one getElementsByClassName

function deleteItem(e) {
  let padre = document.getElementById("creator");
  let hijo = e.currentTarget.parentNode.parentNode;

  padre.removeChild(hijo);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var lines = document.getElementsByClassName("price").length;
  //console.log(lines)
  var pProduct = 0;

  for (i = 0; i < lines; i++) {
    var itemUnitPrice = +document.getElementsByClassName("price")[i].innerHTML;
    var qtyItems = +document.getElementsByClassName("qty")[i].value;
    //var totalUnitPrice = +document.getElementsByClassName("total-price")[i].innerHTML;
    document.getElementsByClassName("total-price")[i].innerHTML =
      itemUnitPrice * qtyItems;
    var xPrice = +document.getElementsByClassName("total-price")[i].innerHTML;
    pProduct += xPrice;
  }
  document.querySelector(".masterPrice").innerHTML = pProduct;

  console.log(pProduct);
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  var text = document.getElementById("add-product-name").value;
  var priceCreate = +document.getElementById("add-product-price").value;
  var newChild = document.createElement("div");
  newChild.setAttribute("class", "row");
  newChild.innerHTML = `<div><span>${text}</span></div>
  <div>€ <span class="price">${priceCreate}</span></div>
  <div><label>Qty  </label><input class="qty" id="qty" type="number" placeholder="0"></div>
  <div>€ <span class="total-price">0</span> </div>
  <div><button class="btn btn-delete">
      Delete
    </button></div>`;
    newChild.querySelector(".btn-delete").onclick = deleteItem; 
  document.getElementById("creator").appendChild(newChild);

}


window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("add-product-btn");
  var deleteButtons = document.getElementsByClassName("btn-delete");


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

// window.onchange = function (params) {
//   var deleteButtons = document.getElementsByClassName("btn-delete");

//   for (var i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].onclick = deleteItem;
//   }
  
// }
