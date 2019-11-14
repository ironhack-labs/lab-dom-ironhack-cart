var cart = document.querySelectorAll('#cart tbody');
var calc = document.getElementById('calc');

function updateSubtot(product) {
  // Iteration 1.1
  let subTotalsArr = [];

  for ( let i = 0; i < product.length; i++ ) {
    let price = Number(product[i].querySelector('.pu').innerText);
    let qty = product[i].querySelector('.qty input').value;
    let subTotal = product[i].querySelector('.subtot');
    let result = price * qty;

    subTotal.innerText = result;
    subTotalsArr.push(result);
  }

  return subTotalsArr;  
}

function calcAll() {
  // Iteration 1.2
  let subTotals = updateSubtot(cart);
  let total = subTotals.reduce( ( acc, cur) => acc + cur );

  document.querySelector('h2 span').innerText = total;
}

calc.onclick = calcAll;