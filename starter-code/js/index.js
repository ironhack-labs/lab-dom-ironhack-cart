window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  /*Una vez hacemos click en el boton delete, nos borra la div entera
  para hacerla desaparecer, eso lo conseguimos borrando el padre de
  button*/

  for(var i = 0; i<buttonDelete.length ; i++){
     buttonDelete[i].onclick = function() {
       this.parentNode.remove();
     };
   }

/*hacemos una funcion donde nos guarda el valor resultante de los parametros
que le pasamos (price,qty y totalprice) mediante las clases.
guardamos en una nuevo array el resultado y creamos un bucle
para recorrer el array*/

  function getTotalPrice(){
    var priceItem = document.getElementsByClassName('price');
    var quantityItem = document.getElementsByClassName('qty');
    var totalPriceItem = document.getElementsByClassName ('totalprice');
    var result;
    for (var i = 0; i < priceItem.length; i++){
      result = priceItem[i].innerHTML * quantityItem[i].value;
      totalPriceItem[i].innerHTML = result;
    }
    changeTotalPriceItem();
  }

  /*Cambiar el precio total, por el nuevo precio (dos multiplicaciones + el resultante
de estas dos)*/

  function changeTotalPriceItem () {
  var newTotalPrice = document.getElementsByClassName("totalprice");
  var sum = 0;
  for (var j = 0; j < newTotalPrice.length; j++) {
    sum += Number(newTotalPrice[j].innerHTML);
  }
  document.getElementById("resultFinal").innerHTML = sum;
}
var copiedDiv = document.querySelector(".itemdiv");
var bodyItem = document.getElementsByClassName("items");


function createNewItem() {
  var newItemDiv = copiedDiv.cloneNode(true);
  newDiv.querySelector(".nameItem").innerHTML = document.getElementById("newName").value;
  newDiv.querySelector(".price").innerHTML = document.getElementById("newPrice").value;
  newDiv.querySelector(".btn-delete").onclick = function() {
    this.parentNode.remove();
  };
  bodyItem.appendChild(newItemDiv);
}
};
