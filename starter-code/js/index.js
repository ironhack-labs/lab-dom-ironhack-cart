// ITERATION 1

function updateSubtotal($product) {

  let productPrice = $product.querySelector(".price span").innerHTML  // precio del producto
  console.log(productPrice)

  let productQuantity = $product.querySelector(".quantity input").value // cantidad del producto
  console.log(productQuantity)

  let subtotal = productPrice * productQuantity // precio total del producto

  console.log(productPrice * productQuantity)

  $product.querySelector(".subtotal span").innerHTML = subtotal

  return subtotal

}

function calculateAll() {

  // elm = function(elm) -> esto es una funcion anonima

  const products = document.querySelectorAll('.product') // la variable guarda cada producto del array 

  let totalPrice = 0 // variable para conseguir el precio total  

  products.forEach(elm => { // recorre/itinera el array de productos 
    totalPrice += updateSubtotal(elm) // en cada vuelta suma el subtotal de cada producto | += suma la cantidad que ya tienes lo que va a continuación del +=
  })

  document.querySelector("#total-value>span").innerHTML = totalPrice // acceder al número del total

}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

let removeButtons = document.querySelectorAll(".btn-remove") // dentro de una función?

function productRemoveListener(event) {

  let pToBeRemoved = event.currentTarget.parentNode  // ?????????????
  removeChild(pToBeRemoved.parentNode)

  for (let i = 0; i < removeButtons.length; i++) {    // obtener objeto del nodo
    removeButtons[i].onclick = productRemoveListener
  }



}

// ITERATION 5

function createProduct(event) {
  // ...
}
