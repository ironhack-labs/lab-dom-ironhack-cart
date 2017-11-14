/*
element.innerHTML = "I'm a cat";
element.style.border = "2px green solid";
otherElement.className = cName;
HTMLCollection
var mice = document.getElementsByClassName('mouse');
var divs = document.getElementsByTagName('div');
*/

window.onload = function(){
  console.log("evento onload window");

  var btnTotalPrice = document.getElementById("calculate-total-price");
  var createItemButton = document.getElementById("newProductBtn");
  var deleteButtons = document.getElementsByClassName('btn-delete');
  btnTotalPrice.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i<deleteButtons.length; i++) {
    console.log("asignado evento onclick al botón delete n: " + i);
    deleteButtons[i].onclick = deleteItem;
  }
}

/*
//
//
//
*/
function getTotalPrice() {
  console.log("función getTotalPrice llamada con el evento onclick");
  unitPrices = document.getElementsByClassName("product-cost");
  units = document.getElementsByClassName("units");
  subtotals = document.getElementsByClassName("product-total");
  console.log("total de artículos listados: " + unitPrices.length);
  total = 0;

  for (i=0; i<unitPrices.length; i++){
    console.log("precio artículo: " + parseFloat(unitPrices[i].innerHTML));
    console.log("unidades artículo: " + units[i].value);
    subtotal = parseFloat(unitPrices[i].innerHTML)*units[i].value;
    console.log("subtotal artículo: " + subtotal);
    subtotals[i].innerHTML = subtotal;
    total += subtotal;
  }

  document.getElementById("total-price").innerHTML = total;
}

/*
//
//
//
*/
function deleteItem() {
  console.log("FUNCTION deleteItem");
  fatherProduct = this.parentElement.parentElement;
  if (fatherProduct) {
    fatherProduct.innerHTML="";
    getTotalPrice()
  }
}


/*
//
//
//
*/
function createNewItem() {
  console.log("FUNCTION createNewItem");
  newName = document.getElementById("newProductText").value;
  newPrice = parseFloat(document.getElementById("newProductPrice").value);
  
  if (newName && newPrice >= 0) {
    console.log(newName);
    console.log(newPrice);
  /*Creamos la section del nuevo producto y lo insertamos */
    newProduct = document.createElement('section');
    newProduct.classList.add("product", "flex", "justified", "marg-bot");
        /*Creamos el div del nombre y lo insertamos */
        divName = document.createElement('div');
        divName.classList.add("product-name", "width-L");
            spanName = document.createTextNode(newName);
            divName.appendChild(spanName);
        newProduct.appendChild(divName);
        /*Creamos el div del precio y lo insertamos */
        divPrice = document.createElement('div');
        divPrice.classList.add("width-S");
            dollar = document.createTextNode("$");
            divPrice.appendChild(dollar);
            spanPrice = document.createElement('span');
            spanPrice.classList.add("product-cost");
            nodePrice = document.createTextNode(newPrice);
            spanPrice.appendChild(nodePrice);
            divPrice.appendChild(spanPrice);
        newProduct.appendChild(divPrice);
        /*Creamos el div de la cantidad y lo insertamos */
        divQty = document.createElement('div');
        divQty.classList.add("product-units", "width-S");
            labelQty = document.createElement('label');
            labelQty.appendChild(document.createTextNode("QTY"));
            divQty.appendChild(labelQty);
            inputQty = document.createElement('input');
            inputQty.setAttribute('class', "units");
            inputQty.setAttribute('class',  "width-F");
            inputQty.setAttribute('type', 'number');
            inputQty.setAttribute('min', '0');
            inputQty.setAttribute('value', '0');
            divQty.appendChild(inputQty);
        newProduct.appendChild(divQty);

    
    document.getElementById("product-list").appendChild(newProduct);
  }
  else{
    alert("Enter a valid name and price for the new product!!");
  }
}
