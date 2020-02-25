var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var product = document.querySelector('.product');
var $create = document.getElementById("create");

function updateSubtot($product) {
	let unitPrice = $product.querySelector('.pu span').innerText; //coge unidad de precio
	let quantity = $product.querySelector('input').value; // coge cantidad
	let subTotal = parseFloat(unitPrice) * parseFloat(quantity); //multiplica 
	$product.querySelector(".subtot span").innerText = subTotal; //Escribe el subtotal
	return subTotal
  }

  function calcAll() {
	let total = 0;
	let arrayProducts = document.querySelectorAll(".product"); //Crea Array de Productos
	for (let i = 0; i < arrayProducts.length; i++) { //Recorre Array
	  let subTotal = updateSubtot(arrayProducts[i]);
	  total += subTotal; //Suma productos
	}
	let totalElement = document.querySelector("h2 > span");
	totalElement.innerHTML = `${total}`; //Escribe el total
  }

  function deleteElement() {
	let allDeleteButtons = document.querySelectorAll(".btn-delete"); //Coge el boton de delete
	for (let i = 0; i < allDeleteButtons.length; i++) {
	  allDeleteButtons[i].onclick = function() {
		let tdParentElement = allDeleteButtons[i].parentElement.parentElement; //Coge el TD
		let bodyParentElement = tdParentElement.parentElement; //Crea el elemento padre
		bodyParentElement.removeChild(tdParentElement); //Elimina los hijos del padre
	  };
	}
  }
  
  function createElement() {
	let nameProduct = document.querySelector(".new").getElementsByTagName("input")[0]; // Crea variable del nombre del nuevo producto
  	let precioProduct = document.querySelector(".new").getElementsByTagName("input")[1]; // Crea variable del precio del nuevo producto
	//Crea el molde del nuevo objeto
	let newElement = `<tr class="product"> 
	  <td class="name">
	  <span>${nameProduct.value}</span>
	  </td>
	  <td class="pu">
	  $<span>${precioProduct.value}</span>
	  </td>
	  <td class="qty">
	  <label><input type="number" value="0" min="0" />
	  </label></td>
	  <td class="subtot">$<span>0</span>
	  </td>
	  <td class="rm">
	  <button class="btn btn-delete">Delete
	  </button>
	  </td>
	  </tr>`;
	if (nameProduct.value == "") { //IF para que no deje añadir productos sin nombre ni precio
		alert ("No has puesto nombre!");
	} else if (precioProduct.value == "") {
		alert ("No has puesto precio!");
	} else {
	nameProduct.value = "";
	precioProduct.value = "";
	
	let element = document.createElement("template"); // NI PUTA IDEA, algo de plantilla pero no entiendo muy bien
	element.innerHTML = newElement;
	$cart.appendChild(element.content.childNodes[0]);
	deleteElement();
	}
  }
 
  
  $calc.onclick = calcAll;
  $create.onclick = createElement;