let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');


function updateSubtot(product) {
  let pu = product.querySelector(".pu span").innerText;
  let input = product.querySelector(".inputPrice").value
  let subtotal = pu * input
  product.querySelector(".subtot span").innerText = subtotal
  return subtotal
}

function calcAll() {
let total = 0
  for (let i = 0; i < document.querySelectorAll(".product").length; i++) {
    let subtot = updateSubtot(document.querySelectorAll(".product")[i])
    total += subtot
  }
  document.querySelector("#total span").innerText = total
}
calc.onclick = calcAll;


// delete row

let deleteButton0 = document.getElementsByTagName("button")[0]
let deleteButton1 = document.getElementsByTagName("button")[1]

let singleProduct = document.querySelector(".product")
let allProducts = document.querySelector("tbody")

let onClickHandler = function(e) {
  console.log("button works")
  let buttonRow = e.currentTarget.parentNode.parentNode
  buttonRow.remove()
}

deleteButton0.onclick = onClickHandler
deleteButton1.onclick = onClickHandler

// new product
let newProduct = document.querySelector(".new")
let addSection = document.querySelector("tfoot")

let createButton = document.querySelector("#create")

let newProdHandler = function() {

  let inputText = newProduct.querySelectorAll("input")[0]
  let inputPriceUnit = newProduct.querySelectorAll("input")[1]
  let newPr = singleProduct.cloneNode(true)

  newPr.querySelector(".name span").innerText = inputText.value
  newPr.querySelector(".pu span").innerText = inputPriceUnit.value  
  allProducts.appendChild(newPr)
  let deleteButton2 = newPr.getElementsByTagName("button")[0]
  deleteButton2.onclick = onClickHandler
}

createButton.onclick = newProdHandler
