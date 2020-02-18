let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  // NOTE : $product is ONE element (in this case a "tr" element !! )
  let price = Number($product.querySelector('.pu').querySelector('span').innerText)
  console.log(price) 

  let quantity = Number($product.querySelector('.qty').querySelector('input').value)
  console.log(quantity)

  let subTot = Number($product.querySelector('.subtot').querySelector('span').innerText)
  console.log(subTot) 

  subTot = price * quantity
  console.log(price * quantity)
  return subTot

  // let subTot = Number(document.innerText)
}

function calcAll() {
  let headingNew = document.createElement('h1')
  headingNew.innerText = "let some text flow"
  document.body.appendChild(headingNew)

  // Iteration 1.2
  // let testCreate = "Hi there!"
  // document.body.createElement(testCreate)
}
$calc.onclick = calcAll;