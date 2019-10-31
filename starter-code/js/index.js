var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let products = document.querySelectorAll(".product");
let deleteBtn = document.querySelectorAll(".btn.btn-delete")
let createBtn = document.getElementById("create")

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = $product.querySelector(".pu span")
  let quantity = $product.querySelector(".qty input")
  let subTotal = $product.querySelector(".subtot span")
  priceUnit = Number(priceUnit.textContent)
  quantity = quantity.value
  return subTotal.innerText = priceUnit * quantity;
}

function calcAll() {
  // Iteration 1.2
  let total = 0;
  products = document.querySelectorAll(".product");
  products.forEach((element) => { total += updateSubtot(element)})
  document.querySelector("h2 span").innerText = total
}
$calc.onclick = calcAll;

function remove (event) {
  let node = event.currentTarget;
  node.parentNode.parentNode.remove()
  console.log(event.currentTarget)
}


function create() {
  let name = document.querySelector('input[type="text"]')
  let price = document.querySelectorAll('input[type="number"]')
  let lastPrice = price[price.length-1]
  console.log(price.value)
  let tr = document.createElement("tr");
  tr.classList.add("product")
  document.querySelector("tbody").append(tr)

  let td = document.createElement("td");
  td.classList.add("name")
  tr.append(td)

  let span = document.createElement("span")
  span.innerText = name.value
  td.append(span)

  let td2 = document.createElement("td");
  td2.classList.add("pu")
  tr.append(td2)

  td2.append("$")

  let span2 = document.createElement("span")
  span2.innerText = lastPrice.value
  td2.append(span2)

  let td3 = document.createElement("td")
  td3.classList.add("qty")
  tr.append(td3)

  let label = document.createElement("label")
  td3.append(label)

  let input = document.createElement("input")
  input.setAttribute("type","number")
  input.setAttribute("value","0")
  input.setAttribute("min","0")
  label.append(input)

  let td4 = document.createElement("td")
  td4.classList.add("subtot")
  tr.append(td4)

  td4.append("$")

  let span3 = document.createElement("span")
  span3.innerText = 0
  td4.append(span3)

  let td5 = document.createElement("td")
  td5.classList.add("rm")
  tr.append(td5)

  let button = document.createElement("button")
  button.classList.add("btn")
  button.classList.add("btn-delete")
  button.innerText = "Delete" 
  td5.append(button)

  products = document.querySelectorAll(".product");
  deleteBtn = document.querySelectorAll(".btn.btn-delete")
  for (let i = 0; i < deleteBtn.length ; i++){
    deleteBtn[i].addEventListener("click", remove)
  }
}

createBtn.onclick = create;