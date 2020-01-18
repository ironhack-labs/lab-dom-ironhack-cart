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


$calc.onclick = calcAll;


//=========================== Deleting elemnt row




var parent = document.querySelector("tbody")
// CurrentTarget con todas las propiedades del elemento que ha invocado la función a raíz del evento


document.querySelectorAll('.btn-delete').forEach(elm => {
  elm.onclick = e => {
    parent.removeChild(elm.parentNode.parentNode)
    console.log(parent)
  }
})


//=================== Creating New Products
let $create = document.getElementById('create');

function createNewProduct() {



  let inputs = []

  document.querySelectorAll("tfoot input").forEach(elm => inputs.push(elm.value))

  let elmntToClone = document.querySelectorAll(".product")[0];

  let clnProduct = elmntToClone.cloneNode(true);

  clnProduct.querySelector(".name").innerText = inputs[0]

  clnProduct.querySelector(".pu span").innerText = inputs[1]

  parent.appendChild(clnProduct);

  parent = document.querySelector("tbody")


  document.querySelectorAll('.btn-delete').forEach(elm => {
    elm.onclick = e => {
      parent.removeChild(elm.parentNode.parentNode)
      console.log(parent)
    }
  })



}

$create.onclick = createNewProduct;


let test = 8

function testTest() {
  test = 10
}

testTest()

//console.log(test)

//console.log(document.querySelector("#create"))










//=========================== Deleting elemnt row

// let $remove = document.querySelectorAll(".btn-delete");

// function deleteRow() {
//   $remove = document.querySelectorAll(".btn-delete")

//   let parent = document.querySelector("tbody")



//   document.querySelectorAll('.btn-delete').forEach(elm => {
//     elm.onclick = e => parent.removeChild(elm.parentNode.parentNode)    // CurrentTarget con todas las propiedades del elemento que ha invocado la función a raíz del evento

//   })
// }

// $remove.forEach((elm) => elm.onclick = deleteRow)