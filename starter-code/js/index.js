
//https: developer.mozilla.org/es/docs/Web/API/GlobalEventHandlers/onload

window.onload = function() {
  function deleteItem(element) {
    element.currentTarget.parentNode.parentNode.remove();
    getTotalPrice() // actualizar el precio si borramos filas
    
  }

  // function getPriceByProduct(itemNode) {}

  // function updatePriceByProduct(productPrice, index) {}

  // function createQuantityInput() {}

  // function createDeleteButton() {}

  // function createQuantityNode() {}

  // function createItemNode(dataType, itemData) {}

  // function createNewItemRow(itemName, itemUnitPrice) {}

  function createNewItem() {
    //https://developer.mozilla.org/es/docs/Web/API/Node/cloneNode
    let item = document.querySelectorAll(".item")[0].cloneNode(true); // clonamos el nodo enero, copiando todos sus atributos y valores
    document.querySelectorAll(".flex-items")[0].appendChild(item); // agregar una fila nueva con el boton create
    let name = document.querySelectorAll("#product-name")[0].value; //obtener la string del producto y la guardamos en una variable
    let price = document.querySelectorAll("#price-unit")[0].value; // obtener el número del precio unitario y la guardamos en una variable
    
    item.querySelector(".name").innerHTML = name; //nombre
    item.querySelector(".price").innerHTML = price; // precio unitario
    item.querySelector(".btn-delete").onclick = function() {
      this.parentNode.parentNode.remove(); // borrar los archivos creados con el botón create
    }
  }

  function getTotalPrice() {
    let allPrices = document.querySelectorAll(".price").length;
    let price = 0;
    let quantity = 0;
    let total = 0;

    for (let i = 0; i < allPrices; i++) {
      price = document.querySelectorAll(".price")[i].innerHTML;
      quantity = document.querySelectorAll(".quantity")[i].value;

      let rowPrice = price * quantity;
      document.querySelectorAll(".total")[i].innerHTML = rowPrice; 
      
      total += price * quantity; // total final
      
    }

    document.querySelector("#total-price").style.display = "block"; // para que aparezca total price es pantalla
    document.querySelector("#total-price").innerHTML = `<h1>Total Price: ${total}$</h1>`;
  }

  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("create-button");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
   createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
