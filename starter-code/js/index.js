var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
// ---------------------------------------
let $prod = document.querySelector('.product');
let createBtn = document.querySelector('#create')

function updateSubtot({target}) {
  // Iteration 1.1
  let price = parseFloat(target.parentNode.parentNode.parentNode.querySelector(".pu span").innerText)
  let subTot = isNaN(parseInt(target.value)) ? 0 : price*parseInt(target.value)
  target.parentNode.parentNode.parentNode.querySelector(".subtot span").innerText = subTot
  return subTot;
}
function calcAll() {
  // Iteration 1.2
  let total = document.querySelectorAll(".subtot span");
  let sum = 0
  total.forEach(el => {
    sum += parseFloat(el.innerText)   
  })
  document.querySelector('h2 span').innerText = sum;
  return sum;
}

//Add product
$cart.addEventListener('keyup',updateSubtot)
function create({target}){
  let product = target.parentNode.parentNode.querySelector('input[type="text"]')
  let price = target.parentNode.parentNode.querySelector('input[type="number"]')
  if(product.value!=='' && price.value!=='') {
    const rowItem = $prod.cloneNode(true)
    rowItem.querySelector('.name span').innerText = product.value
    rowItem.querySelector('.pu span').innerHTML = price.value 
    rowItem.querySelector('.qty input').innerHTML = 0 
    $cart.append(rowItem)
    product.value = ''
    price.value   = ''
  }

}

$calc.onclick = calcAll;
createBtn.addEventListener('click', create)

$cart.addEventListener('click', e => {
  if(e.target.classList.contains('btn-delete')){
      e.target.parentNode.parentNode.remove();
  }
})
