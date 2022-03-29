// 1. SELECCIÓN
const calculatePricesBtn = document.getElementById("calculatePricesBtn")
const multipleProducts = document.querySelectorAll(".product")
const result = document.querySelector("#result span")

// 2. MANIPULACIÓN

const calculateAll = () => {

	// ESTABLECER UN VALOR INICIAL CON 0
	let totalValue = 0
    

	// REALIZAR UN CICLO POR CADA FILA (POR CADA PRODUCTO)
	for(let i = 0; i < multipleProducts.length; i++){

		// SINÓNIMO
		// totalValue = totalValue + updateSubtotal(multipleProducts[i])
		totalValue += updateSubtotal(multipleProducts[i])

	}
    
	// PINTAR EL VALOR EN EL ÁREA DE TOTAL
	result.innerHTML = totalValue
   
}

const updateSubtotal = (singleProduct) => {

	// CAPTURAR EL PRECIO DE SINGLEPRODUCT
	const price = singleProduct.querySelector('.price span').innerHTML

	// CAPTURAR LA CANTIDAD DE SINGLEPRODUCT
	const quantity = singleProduct.querySelector('.quantity input').value

	// MULTIPLICAR EL PRECIO * CANTIDAD. ESE ES EL TOTAL
	const subtotal = price * quantity

	// PINTAR EL RESULTADO EN LA SECCIÓN DEL SUBTOTAL
	singleProduct.querySelector('.subtotal span').innerHTML = subtotal

	// RETORNAMOS EL VALOR
	return subtotal

}


window.addEventListener("load", () => {

	console.log("la página cargó")

	// LISTAR TODOS LOS EVENTOS DISPONIBLES DE LA APLICACIÓN
	calculatePricesBtn.addEventListener("click", () => {

		calculateAll()

	})

})                       