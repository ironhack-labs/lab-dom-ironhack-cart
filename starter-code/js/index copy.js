var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');



// accessing prices and units from HTML

let priceHTML = document.querySelectorAll('.pu span')
let unitsHTML = document.querySelectorAll('.qty input')

// creating arrays for storing and operations
let arrPrices = [];
let arrUnits = [];
let arrSubTot = [];

//updating arrays in float values from html

priceHTML.forEach(elm => arrPrices.push(parseFloat(elm.innerText)))
unitsHTML.forEach(elm => arrUnits.push(parseInt(elm.value)))

// updating subtotal by iterating over price array and multiplying by the price of the item of same id in units list.
arrPrices.forEach((elm, idx) => arrSubTot.push(elm * arrUnits[idx]))

//updating hmtl inputing HTML subtotal using the arrSubTotal element. 

arrPrices.forEach((elm, idx) => document.querySelectorAll('.subtot span')[idx].innerText = arrSubTot[idx])





//console.log(arrSubTot)

let productsArray = document.querySelectorAll(".product")

console.log(productsArray.pu)




function updateSubtot($product) {
  // Iteration 1.1
  let productPrice = parseFloat(document.querySelectorAll('.pu span')[0].innerText)
  let productUnit = parseInt(document.querySelectorAll('.qty input')[0].value)



}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;