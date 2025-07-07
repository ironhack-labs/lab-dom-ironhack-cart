// ITERATION 1

function updateSubtotal(product) {
	const price = product.querySelector(".price span");
	const quantity = product.querySelector(".quantity input");

	const priceValue = parseFloat(price.innerText);
	const quantityValue = parseInt(quantity.value);

	console.log(priceValue, quantityValue);

	const total = priceValue * quantityValue;

	const subtotal = product.querySelector(".subtotal span"); // seleccionamos el span dentro de la clase subtotal
	subtotal.innerText = total; // actualizamos el subtotal con el total calculado
	console.log("Calculating subtotal, yey!");
	return total;
}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
	const allProducts = document.getElementsByClassName("product");
	let total = 0;

	for (let product of allProducts) {
		total += updateSubtotal(product);
	}

	const totalValueElem = document.querySelector("#total-value span");
	totalValueElem.innerText = total;
	console.log("Total:", total);
}

// ITERATION 4

function removeProduct(event) {
	const target = event.currentTarget;
	const productRow = target.closest(".product"); // parent más cercano con la clase .product
	productRow.remove(); // elimina la fila del producto
	console.log("The target in remove is:", target);
	calculateAll(); // recalcula el total después de eliminar el producto
}

// ITERATION 5

function createProduct() {
	const inputName = document.querySelector(
		".create-product input[type='text']"
	);
	const inputPrice = document.querySelector(
		".create-product input[type='number']"
	);

	const nameValue = inputName.value.trim(); // quitamos espacios
	const priceValue = parseFloat(parseFloat(inputPrice.value).toFixed(2)); // dos decimales
	console.log(nameValue, priceValue);

	if (!nameValue || isNaN(priceValue) || priceValue < 0) {
		alert("Check input values!");
		return;
	}

	const tbody = document.querySelector("#cart tbody"); // atacamos al tbody y al id cart (no obligatorio pero porque no tenemos mas tbody)
	const newRow = document.createElement("tr");
	newRow.classList.add("product"); // le añadimos product al tr creado
	// inyectamos el HTML dentro del tr creado. Puesta cantidad = 1 por defecto al crear un producto nuevo
	newRow.innerHTML = `
    <td class="name">
        <span>${nameValue}</span>
        </td>
        <td class="price">$<span>${priceValue}</span></td>
        <td class="quantity">
        <input type="number" value="1" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
        <button class="btn btn-remove">Remove</button>
        </td>
`;

	tbody.appendChild(newRow); // añadimos el tr al tbody
	newRow
		.querySelector(".btn-remove")
		.addEventListener("click", removeProduct); // añadimos el evento al botón de eliminar

	inputName.value = ""; // limpiamos el input de nombre
	inputPrice.value = 0; // limpiamos el input de precio
}

window.addEventListener("load", () => {
	const calculatePricesBtn = document.getElementById("calculate");
	calculatePricesBtn.addEventListener("click", calculateAll);

	const removeButtons = document.querySelectorAll(".btn-remove");
	removeButtons.forEach((button) => {
		button.addEventListener("click", removeProduct);
	});

	const createButton = document.getElementById("create");
	createButton.addEventListener("click", createProduct);
});
