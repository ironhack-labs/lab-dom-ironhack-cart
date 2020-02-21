var $calc = document.getElementById('calc');
let $cart = document.querySelector('#cart tbody');

let prodList = document.querySelectorAll('.product');function updateSubtot ($product) {
    let unitPrice = parseInt($product.getElementsByClassName('test')[0].innerHTML);
    let quantity = parseInt($product.getElementsByClassName("unit")[0].value);
    return unitPrice * quantity;
  };
  
function calcAll (){
  let totalPrice = 0;
  for (i = 0; i < prodList.length; i++){
    prodList[i].getElementsByClassName('subtot')[0].innerHTML = updateSubtot(
      prodList[i]
      );
      totalPrice += parseInt(updateSubtot(prodList[i]));
  }
    document.querySelector("#total span").innerHTML = totalPrice;
  }

  $calc.onclick = calcAll;


