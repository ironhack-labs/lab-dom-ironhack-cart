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

    newProduct = document.createElement('section');
    newProduct.classList.add("product", "flex", "justified", "marg-bot");

        divName = document.createElement('div');
        divName.classList.add("product-name", "width-L");
            spanName = document.createTextNode(newName);
            divName.appendChild(spanName);
        newProduct.appendChild(divName);

        divPrice = document.createElement('div');
        divPrice.classList.add("width-S");
            dollar = document.createTextNode("$");
            divPrice.appendChild(dollar);
              spanPrice = document.createTextNode(newPrice);
              dollar.appendChild(spanPrice);
        newProduct.appendChild(divPrice);

    
    document.getElementById("product-list").appendChild(newProduct);
  }
  else{
    alert("Enter a valid name and price for the new product!!");
  }
}
