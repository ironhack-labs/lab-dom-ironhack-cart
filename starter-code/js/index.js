

function totalPriceProducts () {
  var totalProductsCombined = 0;
  for (var i = 0; i < document.getElementsByClassName("totalprice").length ; i++) {
  document.getElementsByClassName("totalprice")[i].innerHTML =
   document.getElementsByClassName("cost")[i].textContent * document.getElementsByClassName("input")[i].value;
  totalProductsCombined += parseInt(document.getElementsByClassName("totalprice")[i].textContent);
}
 document.getElementById("sum").innerHTML = "$" + totalProductsCombined;
}

function deleteItems(event) {
event.currentTarget.parentElement.parentNode.remove();
totalPriceProducts ();
}


var containerDiv = document.getElementById("container");
var containerProducts = document.getElementById("products");

function creates () {
var newNameProduct = document.getElementsByClassName("newName")[0].value;
var newPriceProduct = document.getElementsByClassName("newPrice")[0].value;

var divProductNew = document.createElement("div");
divProductNew.className = "newProduct";
containerProducts.appendChild(divProductNew);

var divProduct = document.createElement("div");
divProduct.className = "productname";
divProductNew.appendChild(divProduct);
var spanProduct = document.createElement("span");
spanProduct.className = "productNameSpan";
divProduct.appendChild(spanProduct);
spanProduct.innerHTML = newNameProduct;

var divNewCostUnit = document.createElement("div");
divNewCostUnit.className = "costunit";
divProductNew.appendChild(divNewCostUnit);
var spanCost = document.createElement("span");
spanCost.className = "cost";
divNewCostUnit.appendChild(spanCost);
spanCost.innerHTML = newPriceProduct;

var divNewQuantity = document.createElement("div");
divNewQuantity.className = "quantity";
divProductNew.appendChild(divNewQuantity);
var labelQty = document.createElement("label");
labelQty.className = "QTYS";
divNewQuantity.appendChild(labelQty);
labelQty.innerText = "QTY";
var inputQ = document.createElement("input");
inputQ.className = "input";
divNewQuantity.appendChild(inputQ);

var divNewTotalPrice = document.createElement("div");
divNewTotalPrice.className = "totalprice2";
divProductNew.appendChild(divNewTotalPrice);
var newTotalPrice = document.createElement("span");
newTotalPrice.innerText = "0.00";
newTotalPrice.className = "totalprice";
divNewTotalPrice.appendChild(newTotalPrice);

var newDeleteButton = document.createElement("div");
newDeleteButton.className = "buttond";
divProductNew.appendChild(newDeleteButton);
var newButton = document.createElement("button");
newButton.className = "btnDelete";
newButton.textContent = "Delete";
newButton.setAttribute("onclick","deleteItems(event)");
newDeleteButton.appendChild(newButton);

}
