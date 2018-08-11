function deleteItem(e) {
  var body = document.getElementsByTagName('body')[0],
    currentParent = e.path[2];
    body.removeChild(currentParent);
    return getTotalPrice();
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}
function getTotalPrice() {
  //console.log('ya jala');
  var precios = document.getElementsByClassName("precios");
  var cantidades = document.getElementsByClassName("cantidades");
  var subtotales = document.getElementsByClassName("subtotales");
  var total = document.getElementById("total");

  var todosLosPrecios = [];
  var todasLasCantidades = [];
  var todosLosSubtotales = [];
  var totalFinal = 0;

  for(var i = 0; i < precios.length; i++) {
    //                    convierte a float   ->    elimina espacios   ->   elimina signo '$'
    todosLosPrecios.push(parseFloat(precios[i].textContent.replace(/\s/g, '').substr(1)));
    if(cantidades[i].value == '') {
      cantidades[i].value = 0;
    }
    todasLasCantidades.push(parseFloat(cantidades[i].value));
    todosLosSubtotales.push(todosLosPrecios[i] * todasLasCantidades[i]);
    subtotales[i].innerText = `$${todosLosSubtotales[i].toFixed(2)}`;
    totalFinal += todosLosSubtotales[i];
  }
  return total.innerText =  `$${parseFloat(totalFinal.toFixed(2))}`;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
