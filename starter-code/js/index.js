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
let allProducts = document.querySelector("tbody")
let singleProduct = document.querySelector(".product")

let deleteButton0 = document.getElementsByTagName("button")[0]
let deleteButton1 = document.getElementsByTagName("button")[1]



let onClickHandler = function(e) {
  console.log("button works")
  e.currentTarget = allProducts.deleteRow(e)
}

deleteButton0.onclick = onClickHandler
deleteButton1.onclick = onClickHandler


// new product
let newProduct = document.querySelector(".new")
let addSection = document.querySelector("tfoot")

let createButton = document.querySelector("#create")

let newProdHandler = function() {
  console.log("create that stuff")

  let inputText = newProduct.querySelectorAll("input")[0].value
  let inputPriceUnit = newProduct.querySelectorAll("input")[1].value
  let newPr = singleProduct.cloneNode(true)

  newPr.querySelector(".name span").innerText = inputText
  newPr.querySelector(".pu span").innerText = inputPriceUnit


  allProducts.appendChild(newPr)
}

createButton.onclick = newProdHandler
