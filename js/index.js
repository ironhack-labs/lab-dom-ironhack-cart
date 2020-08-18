// ITERATION 1

function updateSubtotal(product) {
	let unitPrice = +product.querySelector(".price span").innerText
	let quantity = +product.querySelector(".quantity input").value
	let subtotal = product.querySelector(".subtotal span")

	console.log(subtotal)

	return (subtotal.innerHTML = unitPrice * quantity)

	//console.log("|Unit Price: " + unitPrice + " | Quantity: " + quantity + " | Subtotal: " + subtotal)
	//console.log("Calculating subtotal, yey!")

	//... your code goes here
}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
	const singleProduct = document.querySelector(".product")
	updateSubtotal(singleProduct)
	// end of test

	// ITERATION 2
	//... your code goes here
	const allProduct = document.querySelectorAll(".product")
	let total = 0
	for (let i = 0; i < allProduct.length; i++) {
		const element = allProduct[i]
		total += updateSubtotal(element)
	}

	// ITERATION 3
	//... your code goes here
	let totalVal = document.querySelector("#total-value span")
	totalVal.innerText = total
}

// ITERATION 4

function removeProduct(event) {
	const target = event.currentTarget
	target.parentNode.parentNode.remove()
	console.log(target.parentNode.parentNode)
	console.log("The target in remove is:", target)
	//... your code goes here
}

// ITERATION 5

function createProduct() {
	//... your code goes here
	let name = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]")
	let unitPrice = document.querySelector(
		"#cart > tfoot > tr > td:nth-child(2) > input[type=number]"
	)
	const table = document.querySelector("#cart tbody")
	console.log(name + " " + unitPrice)

	let newProduct = table.querySelector("tr").cloneNode(true)
	newProduct.querySelector(".name span").innerText = name.value
	newProduct.querySelector(".price span").innerText = unitPrice.value
	console.log(newProduct)

	console.log("Click", newProduct)
	table.appendChild(newProduct)
	unitPrice.value = 0
	name.value = ""

	addEventListenerToRemoveButton()
}

function addEventListenerToRemoveButton() {
	const removeBTNs = document.querySelectorAll(".btn-remove")
	for (const removeBTN of removeBTNs) {
		removeBTN.addEventListener("click", removeProduct)
	}
}

window.addEventListener("load", () => {
	const calculatePricesBtn = document.getElementById("calculate")
	calculatePricesBtn.addEventListener("click", calculateAll)

	//... your code goes here
	addEventListenerToRemoveButton()

	const addBTN = document.querySelector("#create")
	addBTN.addEventListener("click", createProduct)
})
