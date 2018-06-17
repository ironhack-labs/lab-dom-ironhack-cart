var precios=document.getElementsByClassName("precio")
var totalPrices = document.getElementsByClassName("price");
var quantities=document.getElementsByClassName("quantity")

function deleteItem(e){
  e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode)
}

function getPriceByProduct(itemNode){
  return parseFloat(itemNode.getElementsByClassName("product-unit-cost")[0].getElementsByTagName("span")[0].innerHTML.substr(1))
}

function updatePriceByProduct(productPrice, index){
  totalPrices[index].innerHTML = "$"+productPrice;
}

function getTotalPrice() {
  var prices = document.getElementsByClassName("total-cost");
  var total = 0;
  for(var i=0; i< prices.length; i++){
    prices[i].getElementsByTagName("span")[0].innerHTML="$"+parseInt(quantities[i].value)*precios[i].innerText.substr(1);
    total += parseFloat(prices[i].getElementsByTagName("span")[0].innerHTML.substr(1));
  }
  var element = document.createElement("H1");
  element.innerHTML = total;
  var parent = document.getElementsByClassName("total-price")[0];
  var totalPrice =parent.getElementsByTagName("span")[0];
  totalPrice.innerHTML = "$" + total;
}

function createQuantityInput(){

}

function createDeleteButton(){
  var boton=document.createElement("button");
  boton.className="btn btn-delete";
  boton.innerText="Delete";
  boton.onclick=deleteItem;
  return boton;
}

function createQuantityNode(){
  var quantityDiv=document.createElement("div");
    quantityDiv.className="product-units";
    var label=document.createElement("label");
    label.innerText="QTY"
    var input=document.createElement("input");
    input.setAttribute("type","number");
    input.className="quantity";
    input.value=1;
    input.addEventListener("change",function(){
      getTotalPrice()
    });
    input.addEventListener("keydown",function(event){
      if (event.key==="Enter")
      input.blur();
    
    })
    quantityDiv.appendChild(label);
    quantityDiv.appendChild(input);
    return quantityDiv;
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(name, price){
  var name=document.getElementById("new-product-name").value;
  var price=0;
  if(document.getElementById("new-product-price").value!=="")
    price=document.getElementById("new-product-price").value;
  if(name=="")
  return;
    
    var newProduct=document.createElement("div");
    newProduct.className="product";
    
    document.getElementById("products").appendChild(newProduct);
    var productNameDiv=document.createElement("DIV");
    productNameDiv.className="product-name";
    newProduct.appendChild(productNameDiv);
    
    var nameSpan=document.createElement("span");
    nameSpan.innerText=name;
    productNameDiv.appendChild(nameSpan)
    productNameDiv.innerText=name;

    
    var priceDiv=document.createElement("div");
    priceDiv.className="product-unit-cost";
    var priceSpan=document.createElement("span");
    priceSpan.className="precio";
    priceDiv.appendChild(priceSpan);
    newProduct.appendChild(priceDiv);
    priceSpan.innerText="$"+price;
    

    /*var quantityDiv=document.createElement("div");
    quantityDiv.className="product-units";
    var label=document.createElement("label");
    label.innerText="QTY"
    var input=document.createElement("input");
    input.setAttribute("type","number");
    input.className="quantity";
    input.value=1;
    input.addEventListener("change",function(){
      getTotalPrice()
    });
    input.addEventListener("keydown",function(event){
      if (event.key==="Enter")
      input.blur();
    
    })
    quantityDiv.appendChild(label);
    quantityDiv.appendChild(input);*/
    var quantityDiv = createQuantityNode()
    newProduct.appendChild(quantityDiv);

    var totalCostDiv=document.createElement("div");
    totalCostDiv.className="total-cost";
    var totalCostSpan=document.createElement("span");
    totalCostSpan.className="price";
    totalCostDiv.appendChild(totalCostSpan);
    newProduct.appendChild(totalCostDiv);
    totalCostSpan.innerText="$"+price;
    
    /*var boton=document.createElement("button");
    boton.className="btn btn-delete";
    boton.innerText="Delete";
    boton.onclick=deleteItem;*/
    var boton = createDeleteButton();
    newProduct.appendChild(boton);

    document.getElementById("new-product-name").value="";
    document.getElementById("new-product-price").value="";
    getTotalPrice();

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  document.getElementById("new-product-name").value="IronBubble"
  document.getElementById("new-product-price").value="25"
  createNewItem();
  document.getElementById("new-product-name").value="IronShirt"
  document.getElementById("new-product-price").value="15"
  createNewItem();
  //calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  
  var n=document.getElementById("new-product-name");
  var p=document.getElementById("new-product-price");
  n.addEventListener("keydown",function(event){
        if (event.key==="Enter")
        n.blur();
      
  })
  p.addEventListener("keydown",function(event){
    if (event.key==="Enter")
    p.blur();
  
  });
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
