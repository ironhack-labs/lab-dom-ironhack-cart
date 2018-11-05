function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  //var price = document.getElementById("IronBubble-head_price")
  //var qty = document.getElementById("cantidad")
  //var total_prod = document.getElementById("total_producto")
  //console.log("El precio es "+price.innerHTML.split("$")[1]*1)
  //console.log("La cantidad es "+qty.value)
  //price = price.innerHTML.split("$")[1]
  //qty = qty.value
  var arr_product_prices = document.getElementsByClassName("product_price")
  var arr_product_qty = document.getElementsByClassName("quantity")
  var arr_product_total = document.getElementsByClassName("total_producto")
  var total = document.getElementById("total_carrito")
  var total_carrito = 0
  for (var i=0;i<arr_product_total.length;i++){
    var total_producto = arr_product_prices[i].innerHTML.split("$")[1]*arr_product_qty[i].value
    arr_product_total[i].innerHTML = "$"+total_producto
    total_carrito +=total_producto
  }
  total.innerHTML = "Total price $" +total_carrito
  //console.log(arr_product_prices)
  //console.log(arr_product_qty)
  //console.log(price*qty*1)
  //total_prod.innerHTML = "$"+(price*qty)
}

function deleteItem(ele){
  ele.currentTarget.parentNode.parentNode.parentNode.parentNode.removeChild(ele.currentTarget.parentNode.parentNode.parentNode)
}

function agregaProducto(){
  var producto = document.createElement("DIV")
  var flex = document.createElement("DIV")
  var div_span_name = document.createElement("DIV")
  var div_span_price = document.createElement("DIV")
  var div_span_input = document.createElement("DIV")
  var div_span_total = document.createElement("DIV")
  var div_del_btn = document.createElement("DIV")
  var button = document.createElement("BUTTON")
  var span_total = document.createElement("SPAN")
  var span_input = document.createElement("SPAN")
  var span_name = document.createElement("SPAN")
  var span_price = document.createElement("SPAN")
  var btn_text = document.createTextNode("Delete")
  var total_text = document.createTextNode("$0")
  var name_text = document.createTextNode(document.getElementById("new_product_name").value)
  var price_text = document.createTextNode("$"+document.getElementById("new_product_price").value)
  var input_text = document.createTextNode("QTY")
  var input_name = document.createElement("LABEL")
  var input_box = document.createElement("INPUT")


  input_box.setAttribute("class", "quantity")
  input_box.setAttribute("type","number")

  producto.setAttribute("class", "product")
  flex.setAttribute("class","flex")
  button.setAttribute("class","btn-delete")
  button.setAttribute("onclick","deleteItem(event)")

  span_total.setAttribute("class","total_producto")
  span_price.setAttribute("class","product_price")

  span_name.appendChild(name_text)
  span_price.appendChild(price_text)
  span_input.appendChild(div_span_input)
  span_total.appendChild(total_text)
  button.appendChild(btn_text)
  div_del_btn.appendChild(button)
  div_span_name.appendChild(span_name)
  div_span_price.appendChild(span_price)
  div_span_input.appendChild(input_name)
  div_span_input.appendChild(input_text)
  div_span_input.appendChild(input_box)
  div_span_total.appendChild(span_total)
  
  flex.appendChild(div_span_name)
  flex.appendChild(div_span_price)
  flex.appendChild(div_span_input)
  flex.appendChild(div_span_total)
  flex.appendChild(div_del_btn)

 
  



  producto.appendChild(flex)

  //node.createElement()
  var body = document.getElementsByTagName("body")
  console.log(body)
  body[0].insertBefore(producto,document.getElementById("new_product"))

  document.getElementById("new_product_name").innerHTML = ""
  document.getElementById("new_product_price").innerHTML = ""
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

function createNewItem(){

}

window.onload = function(){

  /*
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice();
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem();
  }
  */
}
