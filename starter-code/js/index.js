let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  // NOTE : $product is ONE element (in this case a "tr" element !! )
  let price = Number($product.querySelector('.pu').querySelector('span').innerText)
  //console.log(price) 

  //preparing for looping
  // let price = Number($product.querySelectorAll('.pu')[i].querySelector('span').innerText)

  let quantity = Number($product.querySelector('.qty').querySelector('input').value)
  //console.log(quantity)

  //preparing for looping
  // let quantity = Number($product.querySelectorAll('.qty')[i].querySelector('input').value)

  let subTot = Number($product.querySelector('.subtot').querySelector('span').innerText = price * quantity)
  //console.log(subTot) 

  //subTot = price * quantity
  //console.log(price * quantity)
  return subTot
}

function calcAll() {
  // Iteration 1.2
  let updateSingleSubTot = updateSubtot()
  console.log(updateSingleSubTot)

  // updateSingleSubTot.innerText
  // document.createElement('h1')
  // headingNew.innerText = "let some text flow"
  // document.body.appendChild(headingNew)
  // let testCreate = "Hi there!"
  // document.body.createElement(testCreate)
}
$calc.onclick = calcAll;