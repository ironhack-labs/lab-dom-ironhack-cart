var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');



//let firstProductElement = document.getElementsByClassName('product')[0];



//1. capture quantity
//2.multiply quantity by price unit
//3.display it in subtotal




// let priceunit1 = document.getElementsByClassName("pu")[0].innerHTML
// let quantity1 = document.getElementsByClassName("quantity")[0].value


function updateSubtot(product) {
  console.log(product)

let sum = 0

 let price = product.querySelector('.pu span').innerText
 let input = product.querySelector('.quantity').value
 sum = price * input

product.querySelector(".subtot span").innerText = sum

//  let sum = price * input 

console.log(price)
  // Iteration 1.1



}

function calcAll() {
  let product = document.getElementsByClassName("product")[0]

  updateSubtot(product)
  // Iteration 1.2
}
calc.onclick = calcAll;





// function number (price){
//   return price
// }

// function total(){
//   let newNumber = 2+2

//   return  number(newNumber) * 20
// }