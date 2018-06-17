function deleteItem(e) {
e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct() {
  var total = document.getElementsByClassName('total-price-span'); //Pecio total del producto
  var coste = document.getElementsByClassName('cost-span'); //Coste por unidad
  var valor = document.getElementsByClassName('units-number'); //Numero de unidades
  for (i = 0; i < valor.length; i++) {
    if(parseInt(valor[i].value)>0){
      total[i].innerHTML= (parseInt(coste[i].innerHTML) * parseInt(valor[i].value))+".00";
    }
    else{
      total[i].innerHTML="0.00"
    }
  }
}

function updatePriceByProduct() {
  var newPrice= document.getElementsByClassName("new-price")[0];
  var div = document.createElement("div")
  div.setAttribute("class","cost");
  var coste = document.createElement("span")
  coste.setAttribute("class","cost-span")
  div.appendChild(coste);
  var texto=document.createTextNode(newPrice.value+".00");
  coste.appendChild(texto);
  return div;
}

function getTotalPrice() {
  //4
  var totalByUnits = document.getElementsByClassName('total-price-span');
  var newTotal = document.getElementById("total-price"); 
  var finalPrice=0;
  for (i = 0; i < totalByUnits.length; i++) {
    var precio = parseInt(totalByUnits[i].innerHTML);
    finalPrice+= precio;
  }
    if (finalPrice > 0) {
      newTotal.innerHTML = finalPrice + ".00"
    }
    else{
    newTotal.innerHTML = 0.00;
    }
}


function createQuantityInput() {
  var div = document.createElement("div")
  div.setAttribute("class","units-number-div");
  var qty = document.createElement("span")
  div.appendChild(qty);
  var qtyText=document.createTextNode("QTY");
  var newInput = document.createElement("input")
  newInput.setAttribute("class","units-number");
  newInput.setAttribute("type","number");
  newInput.setAttribute("placeholder","0");
  newInput.setAttribute("onchange","getPriceByProduct()");
  qty.appendChild(qtyText);
  div.appendChild(newInput);
  return div;
}

function createDeleteButton() {
  var div = document.createElement("div")
  div.setAttribute("class","delete-button");
  var btn = document.createElement("button")
  btn.setAttribute("class","btn-delete");
  btn.setAttribute("type","delete");
  btn.setAttribute("value","submit");
  btn.addEventListener("click",deleteItem);
  div.appendChild(btn);
  var texto=document.createTextNode("Delete");
  btn.appendChild(texto);
  return div;
}

function createPriceNode() {
  var div = document.createElement("div")
  div.setAttribute("class","total-price");
  var span = document.createElement("span")
  span.setAttribute("class","total-price-span");
  div.appendChild(span);
  var texto=document.createTextNode("0.00");
  span.appendChild(texto);
  return div;
}

function createItemNode() {
  var nuevoNombre= document.getElementsByClassName("new-name")[0];
  var div = document.createElement("div")
  div.setAttribute("class","name");
  var nombre = document.createElement("span")
  div.appendChild(nombre);
  var texto=document.createTextNode(nuevoNombre.value);
  nombre.appendChild(texto);
  return div;
}

function createNewItemRow() {
}

function createNewItem() {
  var container = document.getElementsByClassName("container");
  var div = document.createElement("div")
  div.setAttribute("class","wrapper");
  div.appendChild(createItemNode());
  div.appendChild(updatePriceByProduct());
  div.appendChild(createQuantityInput());
  div.appendChild(createPriceNode());
  div.appendChild(createDeleteButton());
  container[0].appendChild(div);
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('btn-calc');
  var createItemButton = document.getElementById('btn-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};