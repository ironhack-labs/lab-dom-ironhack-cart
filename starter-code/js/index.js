let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');
console.log(calc)
// Iteration 1.1

let product = document.getElementsByClassName("product")

function updateSubtot(row) {
  console.log(row)
  let quantity1 = row.getElementsByTagName("input")[0].value
  let quantity = row.getElementsByClassName("pu")[0].getElementsByTagName('span')[0].innerHTML
  console.log(quantity1 * quantity)
  console.log(quantity, quantity1)
  return quantity1 * quantity
}


updateSubtot(product[0]);

// let subtotal = subt.getElementsByClassName("subtot")[0].value


function calcAll() {

  let productCopy = [...product]

  productCopy.forEach(element => {
    updateSubtot(element)
  });


}

// Iteration 1.2

calc.onclick = calcAll