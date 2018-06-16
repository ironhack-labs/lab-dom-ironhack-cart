function deleteItem(e){
  var btn = e.currentTarget;
  var contenedorBtn = btn.parentElement;
  var product = contenedorBtn.parentElement;
  var parent = product.parentElement;
      
  parent.removeChild(product);
}

function getTotalPrice() {
  var sumaTotal = 0;
  for (i=0; i<document.getElementsByClassName("input").length; i++){
  var input = document.getElementsByClassName("input")[i];
  var price = document.getElementsByClassName("precio")[i];
  var pPQuantity = document.getElementsByClassName("pPQuantity")[i];
  price = price.innerHTML;
  price = parseFloat(price);
  input = parseInt(input.value);
  total = price * input;
  sumaTotal += total;
  total = total.toFixed(2);
  pPQuantity.innerHTML = total;
  
  }
  var suma = document.getElementsByClassName("total")[0];
  sumaTotal = sumaTotal.toFixed(2);
  suma.innerHTML = sumaTotal;
}

function createNewItem(){
  var body = document.getElementById("containerProduct");
  var div = document.createElement("div");
  div.className = "container";
  body.appendChild(div);


  function Producto(){
    this.nombre = function(){
      var product = document.getElementById("product").value;
      var spanNombre = document.createElement("span");

      spanNombre.innerHTML = product;
      div.appendChild(spanNombre);
    }
    this.price = function(){
      var divSecond = document.createElement("div");
      divSecond;
      div.appendChild(divSecond);
      var price = document.getElementById("price").value;
      var spanVaro = document.createElement("span");
      var spanPrice = document.createElement("span");

      spanVaro.innerHTML = "$"
      spanPrice.innerHTML = price;
      spanPrice.className = "precio";
      divSecond.appendChild(spanVaro);
      divSecond.appendChild(spanPrice);
    }
    this.qty = function(){
      var divSecond = document.createElement("div");
      divSecond;
      div.appendChild(divSecond);

      var label = document.createElement("label");
      label.className = "quantity";
      label.innerHTML = "QTY";
      divSecond.appendChild(label);

      var input = document.createElement("input");
      input.className = "input";
      divSecond.appendChild(input);
    }
    this.subTotal = function(){
      var divSecond = document.createElement("div");
      divSecond;
      div.appendChild(divSecond);
      var spanVaro = document.createElement("span");
      var spanPrice = document.createElement("span");
      spanPrice.className = "pPQuantity";
      spanVaro.innerHTML = "$";
      spanPrice.innerHTML = "0.00";

      divSecond.appendChild(spanVaro);
      divSecond.appendChild(spanPrice);
    }
    this.btnDelete = function(){
      var divSecond = document.createElement("div");
      divSecond;
      div.appendChild(divSecond);

      var btnDel = document.createElement("button");
      btnDel.className = "btn-delete btn";
      btnDel.innerHTML = "Delete";
      divSecond.appendChild(btnDel);
    }
  }

  var newProduct = new Producto();
  newProduct.nombre();
  newProduct.price();
  newProduct.qty();
  newProduct.subTotal();
  newProduct.btnDelete();
  deleteButtons();

}
function deleteButtons(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');

  deleteButtons();
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
};
