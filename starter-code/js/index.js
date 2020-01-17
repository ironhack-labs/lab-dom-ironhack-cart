var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = document.querySelector(`.pu span`).innerHTML;
  let quantityProduct = document.querySelector(`.qty label input`).value;
  let subTotal =priceUnit*quantityProduct;
  
  return document.querySelector(`.subtot span`).innerHTML = subTotal;



}

function calcAll() {
  let totalSum=0;
  let allItems =document.querySelectorAll( `.product`);
    allItems.forEach((product) => {
    totalSum +=updateSubtot(product);
    
  })
  return document.querySelector(`h2 span`).innerHTML =totalSum; 

}



  // Iteration 1.2



$calc.onclick = calcAll;

/*
let table = document.querySelector('.table')
table.childNodes.forEach(row => updateSubtot(row))*/