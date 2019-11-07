var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let price = document.getElementsByClassName('pu');
  for (x=0; x< price.length; x++){
  	let onlyPrice = price[x].getElementsByTagName('span');
  	for(y=0; y < price.length; y++){
  		let subTotal = document.getElementsByClassName('subtot');
  		for (i=0; i < subTotal.length; i++){
  			subTotal[i].innerHTML = '$' + $product.value * onlyPrice[y].innerHTML;
  		}
  	}
  }

  let qty = document.getElementsByClassName('qty');
}

function calcAll() {
  // Iteration 1.2
	let subtot = document.getElementsByClassName('subtot');
	let h2 = document.getElementsByTagName('h2');
	let total = 0 ;
	let aux= ''
	for (k = 0; k < subtot.length; k++){
		aux= subtot[k].innerHTML;
		aux = aux.split('$');
		aux = aux[1];
		total = total + Number(aux);
	}

	for (h = 0 ; h < h2.length; h++){
		h2[h].innerHTML = 'Total $' + total;
	}
}
$calc.onclick = calcAll;