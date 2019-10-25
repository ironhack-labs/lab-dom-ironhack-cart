let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');

let priceClass = document.getElementsByClassName('priceClass')

// for(let i = 0; i < prueba.length; i++){
//   console.log((prueba[i].innerHTML)*2)
// }

// let quantityClass = document.getElementsByClassName('quantityClass')

// for (let i = 0; i < prueba.length; i++) {
//   console.log((prueba[i].innerHTML) * 2)
// }

// console.log(prueba)


let pUObject = document.getElementById('price').innerHTML;
console.log(pUObject)

let quantityObject = document.getElementById('quantity').value;
console.log(quantityObject)

function print(result) {
  document.getElementById('sub').innerHTML = result
}

calc.onclick = function () {
  let input = document.getElementById('quantity').value
  let result = input * pUObject;
  console.log(result)
  print(result)
}
console.log(calc.onclick)


// let button = document.getElementById('qtyButton').innerHTML;
// button.onclick = function() {
//   let input = document.getElementsByTagName('input')[0]
//   console.log(input.value)
// }


// let button = document.getElementById("send-btn");

// button.onclick = function () {
//   let input = document.getElementsByTagName('input')[0]
//   console.log(input.value)
// }





// let quantityObject = document.getElementsByClassName('qty')



// function updateSubtot($product) {

// let subTotal = document.getElementById('sub').value
// subTotal.innerHTML = result
// }

  // h1.innerHTML = "Soy un h1 antes del h2"

//  for (i=0; i< quantity.length; i++)
//  let quantity = getElementsByClassName('qty');
//  let priceUnit = getElementsByClassName('pu');




//   // Iteration 1.1

// }

// function calcAll() {
//   // Iteration 1.2
// }
// $calc.onclick = calcAll;