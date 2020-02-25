var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var product = document.querySelector('.product');
var $create = document.getElementById("create");

function updateSubtot($product) {
	let unitPrice = $product.querySelector('.pu span').innerText;
	let quantity = $product.querySelector('input').value;
	let subTotal = parseFloat(unitPrice) * parseFloat(quantity);
	$product.querySelector(".subtot span").innerText = subTotal;
	return subTotal
  }

  function calcAll() {
	let total = 0;
	let arrayProducts = document.querySelectorAll(".product");
	for (let i = 0; i < arrayProducts.length; i++) {
	  let subTotal = updateSubtot(arrayProducts[i]);
	  total += subTotal;
	}
	let totalElement = document.querySelector("h2 > span");
	totalElement.innerHTML = `${total}`;
  }

  $calc.onclick = calcAll;
 