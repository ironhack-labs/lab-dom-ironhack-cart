

let productPriceString = document.getElementsByClassName('product')[0].innerText;
let productPriceNumber = parseFloat(productPriceString.substring(1));
let calcButton = document.getElementById('calc-prices-button');

calcButton.onclick = function(){
	let input = document.getElementsByTagName('input')[0].value;
  let total = productPriceNumber * input;
  let totalPricePerProduct = document.getElementsByClassName('total-per-product')[0];
  totalPricePerProduct.innerText = `$ ${total}.00`;
  return totalPricePerProduct;
};

function calcPrices (product, index){

}




  
