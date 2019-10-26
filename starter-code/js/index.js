// Whaaaaaaaaaaattttttttttarethiiiiiiiiisssss

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let subtotal = $product.querySelector(`.subtot>span`);
  let unitPrice = $product.querySelector(`.pu>span`);
  let quantity = $product.querySelector(`.qty input[type=number]`).value;
  subtotal.innerText=parseFloat(unitPrice.innerText)*quantity;
  return parseFloat(subtotal.innerText);
  }
  
  function calcAll() {
  let productList= document.querySelectorAll(`.product`);
  productList.forEach(updateSubtot);
  console.log(productList)
  }
  $calc.onclick = calcAll;  
  
  myButton.onclick = function(btn){
    btn.preventDefault();
    calcAll();
  }

  function calcAll() {
    let productList= document.querySelectorAll('.product');
    let totalPrice=0;
    for(let i=0; i<productList.length; i++){
    totalPrice+=updateSubtot(productList[i])
    }
    console.log(totalPrice)
    totalPrice=document.querySelector('h2 span').innerText = totalPrice;
    }

    // lo carga en la consola solo :(