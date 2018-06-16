
var precios=document.getElementsByClassName("precio")
var preciosTotales=document.getElementsByClassName("precio-total");
var cantidades=document.getElementsByClassName("cantidad");

function deleteItem(e){

  e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
  getTotalPrice();
}

function getPriceByProduct(itemNode){
  return(parseInt(itemNode.getElementById("price").getElementsByTagName("span")[0].innerHTML.substr(1)));

}

function updatePriceByProduct(productPrice, index){
  preciosTotales[index].innerText="$"+productPrice;
  
}

function getTotalPrice() {
  var productos=document.getElementsByClassName("total-price");
  //for(i=0;i<productos.length;i++)
  var precio=0;
  for(var i=0;i<productos.length;i++){
   if(cantidades[i].value!==""){
    productos[i].getElementsByTagName("span")[0].innerHTML="$"+parseInt(cantidades[i].value)*precios[i].innerText.substr(1);
     precio+=parseInt(productos[i].getElementsByTagName("span")[0].innerHTML.substr(1));
   }
    
  }
  document.getElementById("total").innerText="$"+precio;

}
function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(nombre,precio){
  var name=document.getElementById("name").value;
  var price=0;
  if(document.getElementById("price").value!=="")
    price=document.getElementById("price").value;
  if(name=="")
  return;
    
    var producto=document.createElement("div");
    producto.className="product";
    
    document.getElementById("products").appendChild(producto);
    var nameDiv=document.createElement("DIV");
    nameDiv.className="name";
    producto.appendChild(nameDiv);
    var nameSpan=document.createElement("span");
    nameSpan.innerText=name;
    nameDiv.appendChild(nameSpan)
    nameDiv.innerText=name;

    
    var priceDiv=document.createElement("div");
    priceDiv.className="price";
    var priceSpan=document.createElement("span");
    priceSpan.className="precio";
    priceDiv.appendChild(priceSpan);
    producto.appendChild(priceDiv);
    priceSpan.innerText="$"+price;
    

    var quantityDiv=document.createElement("div");
    quantityDiv.className="quantity";
    var labelVar=document.createElement("label");
    labelVar.innerText="QTY"
    var inputVar=document.createElement("input");
    inputVar.setAttribute("type","number");
    inputVar.className="cantidad";
    inputVar.value=1;
    /*inputVar.addEventListener("change",function(){
      getTotalPrice()
    });
    inputVar.addEventListener("keydown",function(event){
      if (event.key==="Enter")
      inputVar.blur();
    
    })*/
    quantityDiv.appendChild(labelVar);
    quantityDiv.appendChild(inputVar);
    producto.appendChild(quantityDiv);

    var priceTDiv=document.createElement("div");
    priceTDiv.className="total-price";
    var priceTSpan=document.createElement("span");
    priceTSpan.className="precio-total";
    priceTDiv.appendChild(priceTSpan);
    producto.appendChild(priceTDiv);
    priceTSpan.innerText="$"+price;
    
    var boton=document.createElement("button");
    boton.className="btn btn-delete";
    boton.innerText="Delete";
    boton.onclick=deleteItem;
    producto.appendChild(boton);

    document.getElementById("price").value="";
    document.getElementById("name").value="";
    getTotalPrice();
    

}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  document.getElementById("name").value="Producto 1"
  createNewItem()
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  /*var n=document.getElementById("name");
  var p=document.getElementById("price");
  n.addEventListener("keydown",function(event){
        if (event.key==="Enter")
        n.blur();
      
  })
  p.addEventListener("keydown",function(event){
    if (event.key==="Enter")
    p.blur();
  
  })*/
  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}



