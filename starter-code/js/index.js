var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

// let priceHTML = document.querySelectorAll('.pu span')
// let unitsHTML = document.querySelectorAll('.qty input')


//console.log(arrSubTot)

// let productsTr = document.querySelectorAll(".product")[0]

//console.log(productsTr)
//console.log(productsTr[0])
//console.log(productsTr.querySelector(".qty input").value)



//console.log(productsArray)




function updateSubtot($product) {
  // Iteration 1.1
  let productPrice = $product.querySelector(".pu span").innerText

  let productQuantity = $product.querySelector(".qty input").value

  let productSubtotal = productPrice * productQuantity

  $product.querySelector('.subtot span').innerText = productSubtotal



}


function calcAll() {
  // Iteration 1.2
  let totalOrder = 0

  let arrAllProducts = document.querySelectorAll(".product")


  arrAllProducts.forEach((elm) => updateSubtot(elm))

  arrAllProducts.forEach((elm) => totalOrder += parseFloat(elm.querySelector('.subtot span').innerText))



  document.querySelector('h2 span').innerText = totalOrder

}

calcAll()
$calc.onclick = calcAll;