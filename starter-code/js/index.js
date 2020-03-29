// ITERATION 1

function updateSubtotal($product) {
  
	let productPrice = $product.querySelector(".price span").innerHTML
	let productQty = $product.querySelector(".quantity input").value
	
	$product.querySelector(".subtotal span").innerHTML = productPrice * productQty		
}

function calculateAll() {

	// ITERATION 2
  
	let products = document.querySelectorAll("#cart .product")

	products.forEach(element => {
		updateSubtotal(element)
	});
	
	// ITERATION 3
  
	let subtotals = document.querySelectorAll("#cart .product .subtotal span")

	let totalQty = 0;

	// Me hubiera gustado calcularlo mediante un reduce, pero me daba error en la consola
	subtotals.forEach(element => {
		totalQty += Number(element.innerHTML)
	});
	
	document.querySelector("#total-value span").innerHTML = totalQty

	
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});




// ITERATION 4

let $removeBtns = document.querySelectorAll(".btn.btn-remove")
$removeBtns.forEach(element => {
	element.addEventListener('click', productRemoveListener)
});

// Curioseando un poco el objeto "event" en la consola, he encontrado que
// una forma mas eficiente de acceder varios niveles por encima del element
// seria path[3] en lugar de event.target.parentElement.parentElement.parentElement

function productRemoveListener(event) {
  
	event.path[3].removeChild(event.path[2])
}

// ITERATION 5


let $createProductBtn = document.querySelector("#create")
$createProductBtn.addEventListener('click', createProduct)

function createProduct(event) {
 
	let $createProductRow = event.path[2]
	let $productName = $createProductRow.querySelector("td input[placeholder='Product Name']")
	let $productPrice = $createProductRow.querySelector("td input[placeholder='Product Price']")

	
	//En caso de que existan rows de product, podemos hacer un cloneNode.
	//En caso contrario (por ejemplo, porque el usuario ha borrado TODOS los productos ANTES de crear un nuevo producto), habria que crear una row de cero
	if (document.querySelector(".product") !== null) {
		
		let productRow = document.querySelector(".product")
		let newProductRow = productRow.cloneNode(true)
		
		newProductRow.querySelector(".name span").innerHTML = $productName.value
		newProductRow.querySelector(".price span").innerHTML = $productPrice.value
		newProductRow.querySelector(".quantity input").setAttribute("value", "0")
		newProductRow.querySelector(".subtotal span").innerHTML = 0

		newProductRow.querySelector(".action button").addEventListener('click', productRemoveListener)

		document.querySelector("tbody").appendChild(newProductRow)

		
	} else {
			
		let tr = document.createElement("tr")
		tr.className = "product"
	
		let tdName = document.createElement("td")
		tdName.className = "name"
	
		let spanName = document.createElement("span")
		spanName.innerHTML = $productName.value
	
	
	
		let tdPrice = document.createElement("td")
		tdPrice.className = "price"
	
		let spanPrice = document.createElement("span")
		spanPrice.innerHTML = $productPrice.value
	
	
	
		let tdQty = document.createElement("td")
		tdQty.className = "quantity"
	
		let inputQty = document.createElement("input")
		inputQty.setAttribute("type", "number")
		inputQty.setAttribute("value", "0")
		inputQty.setAttribute("min", "0")
		inputQty.setAttribute("placeholder", "Quantity")
	
	
	
		let tdSubtotal = document.createElement("td")
		tdSubtotal.className = "subtotal"
		tdSubtotal.innerHTML = "$"
	
		let spanSubtotal = document.createElement("span")
		spanSubtotal.innerHTML = "0"
	
		let tdAction = document.createElement("td")
		tdAction.className = "action"
	
		let buttonRemove = document.createElement("button")
		buttonRemove.classList.add("btn", "btn-remove")
		buttonRemove.innerHTML = "Remove"
		buttonRemove.addEventListener('click', productRemoveListener)
	
		tr.appendChild(tdName).appendChild(spanName)
		tr.appendChild(tdPrice).appendChild(spanPrice)
		tr.appendChild(tdQty).appendChild(inputQty)
		tr.appendChild(tdSubtotal).appendChild(spanSubtotal)
		tr.appendChild(tdAction).appendChild(buttonRemove)
		
		document.querySelector("tbody").appendChild(tr)

	}
	
	
	let inputValues = $createProductRow.querySelectorAll("input")
	inputValues.forEach(element => {
		element.value = ""
	});
	
	
}

