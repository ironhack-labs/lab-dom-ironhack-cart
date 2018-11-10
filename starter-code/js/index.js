function deleteItem(e){ 
	var target = e.target || e.srcElement;
  	document.getElementsByTagName('body')[0].removeChild(target.parentNode);
  	getTotalPrice();
}

function getPriceByProduct(itemNode){
	let costo = Number(itemNode.getElementsByClassName("precio")[0].getElementsByTagName('span')[0].innerHTML.replace(/[^0-9.-]+/g,""));
	let cantidad = parseInt(itemNode.getElementsByClassName("cantidad")[0].getElementsByTagName('input')[0].value);
	return (cantidad>0?costo*cantidad:0);
}

function updatePriceByProduct(productPrice, index){
		document.getElementsByClassName("total")[index].getElementsByTagName('span')[0].innerHTML=("$"+productPrice.toFixed(2));
}

function getTotalPrice() {   
	let totalPrice=0;
	for(let p=0;p<document.getElementsByClassName("producto").length;p++){
		let productPrice = getPriceByProduct(document.getElementsByClassName("producto")[p]);
		totalPrice+=productPrice;
		updatePriceByProduct(productPrice,p)
	}
	document.getElementById('total-price').getElementsByTagName('h2')[0].getElementsByTagName('span')[0].innerHTML=("$"+totalPrice.toFixed(2));
}

function createQuantityInput(){
	let input = createItemNode("input","0");
	input.setAttribute("type", "text");
	input.setAttribute("maxlength", "10");
	input.setAttribute("value", "0");
	return input;
}

function createDeleteButton(){
	let btnDelete= createItemNode("button","Delete");
	btnDelete.setAttribute('class',"btn-delete btn");
	btnDelete.onclick = deleteItem;
	return btnDelete;
}

function createQuantityNode(){
	let qtyNode= createItemNode("div","");
	qtyNode.setAttribute('class','cantidad');
	let label = createItemNode("label","QTY");
	let input = createQuantityInput();
	qtyNode.appendChild(label);
	qtyNode.appendChild(input);
	return qtyNode;
}

function createItemNode(dataType, itemData){
	var nuevoItem = document.createElement(dataType);
	nuevoItem.innerHTML = itemData;
	return nuevoItem;
}

function createNewItemRow(itemName, itemUnitPrice){
	if(itemName.trim()==""){
		alert("Ingresa un nombre válido")
		return null;
	}else if(/\D/.test(itemUnitPrice) || itemUnitPrice<=0) { 
		alert("Ingresa un precio unitario válido")
		return null;
	}
	else{
		let producto= createItemNode("div","");
		producto.setAttribute('class','producto'); 
		 
		let nombre = createItemNode("div","");
		nombre.setAttribute('class','nombre');
		let nombreSpan= createItemNode("span",itemName);

		let precio = createItemNode("div","");
		precio.setAttribute('class','precio');
		let precioSpan = createItemNode("span","$"+parseInt(itemUnitPrice).toFixed(2))
		
		let total = createItemNode("div","");
		total.setAttribute('class','total');
		let totalSpan = createItemNode("span","$0.00")

		producto.appendChild(nombre);
		nombre.appendChild(nombreSpan);
		producto.appendChild(precio);
		precio.appendChild(precioSpan);
		producto.appendChild(createQuantityNode());
		total.appendChild(totalSpan);
		producto.appendChild(total);
		producto.appendChild(createDeleteButton());
		var parent=document.getElementsByTagName('body')[0];
	 	var firstChild = document.getElementsByClassName("producto-nuevo")[0];
	 	parent.insertBefore(producto, firstChild);
 	}
}

function createNewItem(){
	createNewItemRow(document.getElementById("nombre-producto").value,document.getElementById("precio-producto").value)	
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem; 
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
