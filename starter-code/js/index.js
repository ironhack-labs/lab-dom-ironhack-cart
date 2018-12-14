
let calcButton = document.getElementById('calc-prices-button');

calcButton.onclick = function(){
  let totalPrice = document.querySelector('#total-price>h2>span');
  totalPrice.innerText = `$ ${getfinalProductPrice()}.00`;
  return totalPrice;
};


function getPrice (product){
  let productPriceString = product.querySelector('.product>span').innerText;
  let productPriceNumber = parseFloat(productPriceString.substring(1));
  let input = product.querySelector('.quantity').value;
  return productPriceNumber * input;
}

function updateTotalByProduct (product){
  let totalPricePerProduct = product.querySelector('.total-per-product');
  totalPricePerProduct.innerText = getPrice(product); 
  return totalPricePerProduct;     
}


function getfinalProductPrice() {
  let products = document.querySelector('.shopping-elements').children;
  let total = 0; 
  for (let i = 0; i < products.length; i++) { 
    total += parseFloat(updateTotalByProduct(products[i]).innerText); 
    }
    console.log(total);
    return total;
}


