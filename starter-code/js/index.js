function deleteItem(e){
  
  var cajadiv = (e.currentTarget.parentNode).parentNode;
  var body = document.getElementsByTagName('body');
  body[0].removeChild(cajadiv);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var cantidad = document.getElementsByClassName('quantity');
  var costo = document.getElementsByClassName('cost');
  var t = document.getElementsByClassName('tot');
  var totall= 0;
  for(let i=0; i<cantidad.length; i++){
    var cos = costo[i].innerHTML;
    var total = (cantidad[i].value * cos).toFixed(2);
    t[i].innerHTML="$"+total;
    totall += parseFloat(total);
  }
  
  var resultado = document.getElementById("res");
  resultado.innerHTML="Total price: $"+ totall.toFixed(2);



}

function createQuantityInput(){
  var division = document.createElement('div');
  division.className = 'caja';
  var etiqueta = document.createElement('label');
  etiqueta.innerHTML = 'QTY';
  etiqueta.setAttribute('for','number');
  division.appendChild(etiqueta);
  var ventana = document.createElement('input');
  ventana.setAttribute('type','number');
  ventana.setAttribute('value','0');
  ventana.className = 'quantity';
  division.appendChild(ventana);
  return division

}

function createDeleteButton(){
  var division = document.createElement('div');
  division.className = 'caja';
  var boton =  document.createElement('button');
  boton.className = 'btn btn-delete'
  boton.innerHTML = 'Delete'
  division.appendChild(boton);
  return division


}

function createQuantityNode(){
  var division = document.createElement('div');
  division.className = 'caja';
  var cantidad =  document.createElement('span');
  cantidad.className = 'tot'
  cantidad.innerHTML = '$0.00'
  division.appendChild(cantidad);
  return division
}

function createItemNode(dataType, itemData){
  
}

function createNewItemRow(itemName, itemUnitPrice,parent){
  var division = document.createElement('div');
  var divisions = document.createElement('span');
  
  var text = document.createTextNode(itemName)
  divisions.appendChild(text)
  division.appendChild(divisions)
  division.className = "caja"
  parent.appendChild(division)
  
  var division = document.createElement('div');
  var divisions = document.createElement('span');
  divisions.className ='cost'
  var text = document.createTextNode(itemUnitPrice)
  divisions.appendChild(text)
  division.innerText = '$'
  division.appendChild(divisions)
  division.className = "caja"
  parent.appendChild(division)
}

function createNewItem(){
  var body = document.getElementsByTagName('body');
  var productoDivision = document.createElement('div');
  productoDivision.className = "producto"
  var producto= document.getElementById('productoNuevo')
  var precio = document.getElementById('precioNuevo')
  createNewItemRow(producto.value, precio.value,productoDivision)
  var ventana = createQuantityInput()
  var cantidad = createQuantityNode()
  var boton =createDeleteButton()
  productoDivision.appendChild(ventana)
  productoDivision.appendChild(cantidad)
  productoDivision.appendChild(boton)
  var hijo = document.getElementById('creacion')
  body[0].insertBefore(productoDivision,hijo)

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  calculatePriceButton.onclick = getTotalPrice;
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
   
  }
  createItemButton.onclick = createNewItem;
  

  
};
