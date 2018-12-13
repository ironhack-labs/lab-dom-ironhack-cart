

// let productPriceString = document.getElementsByClassName('product')[0].innerText;
// let productPriceNumber = parseFloat(productPriceString.substring(1));
// let calcButton = document.getElementById('calc-prices-button');

// calcButton.onclick = function(){
// 	let input = document.getElementsByTagName('input')[0].value;
//   let total = productPriceNumber * input;
//   let totalPricePerProduct = document.getElementsByClassName('total-per-product')[0];
//   totalPricePerProduct.innerText = `$ ${total}.00`;
//   return totalPricePerProduct;
// };



let calcButton = document.getElementById('calc-prices-button');

function quantity (item){
  let input = item.getElementsByTagName('input')[0].value;
  return input;
}

function getPrice (item){
  let totalPricePerProduct = item.getElementsByClassName('total-per-product')[0];
  totalPricePerProduct.innerText = `$ ${total}.00`;
  return totalPricePerProduct;
}

let items = document.getElementsByClassName('item');

calcButton.onclick = function(item){
  // let totalPricePerProduct = item[i].getElementsByClassName('total-per-product')[0];
  for (var i = 0; i > item.length; i++){
    quantity(item[i]);
    getPrice(item[i]);

  }
  return totalPricePerProduct;
};


  
