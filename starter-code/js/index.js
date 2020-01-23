var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');


 

function updateSubtot($product) {
  // Iteration 1.1

let priceUnitary = $product.querySelector('.pu > span').innerHTML;
let quantity = $product.querySelector('.qty > label > input').value;
let subTotalModfyer = $product.querySelector('.subtot > span');
let subTot = priceUnitary * quantity;
subTotalModfyer.textContent = subTot;

return subTot;
}

function calcAll() {
  // Iteration 1.2
  let priceAll = 0;
    document.querySelectorAll('.product').forEach( product => {
        priceAll += updateSubtot(product)
    });
    document.querySelector('h2 > span').innerText = priceAll;
}

$calc.onclick = calcAll;

//iteracion 4 asjhdkasdbkdsjhfbsdhjfnfajkdsjkfadsnfjklads
