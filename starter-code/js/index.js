let $calc = document.getElementById('calc');
let $cart = document.querySelector('#cart tbody');

function updateSubtot($product) {
  let unitPrice = parseInt($product.querySelector(".pu span").innerHTML);
  let quantity = parseInt($product.querySelector(".qty input").value);
  let subTotal = unitPrice * quantity;
  return subTotal;
}

function calcAll() {
  let productList = $cart.querySelectorAll(".product");
  let totalPrice = 0;
  for (i = 0; i< productList.length; i++){
    let subTotal = productList[i].querySelector(".subtot span");
    subTotal.innerHTML = updateSubtot(productList[i]);
    totalPrice = totalPrice + updateSubtot(productList[i])
  }
  document.querySelector("#total span").innerHTML = totalPrice;
}

let calcButton = document.querySelector("#calc.btn.btn-success")
calcButton.addEventListener("click", calcAll)

let deleteButtons = $cart.querySelectorAll('.rm .btn-delete');
for (let button of deleteButtons) {
  button.addEventListener("click", deleteProduct);
}

function deleteProduct (event){
  let deletepushedButton = event.target;
  let productToRemove = deletepushedButton.closest(".product")
  $cart.removeChild(productToRemove);
  calcAll ()
}

let createButton = document.getElementById("create")
createButton.addEventListener("click", createProduct)

function createProduct (){
  let descriptionInput = document.querySelector(".new input.productName");
  let priceInput = document.querySelector(".new input.unitPrice");
  let newProduct = document.createElement('tr')
  newProduct.className = "product";
  newProduct.innerHTML = `<td class="name"><span>${descriptionInput.value}</span></td>
  <td class="pu">$<span class="test">${priceInput.value}</span></td>
  <td class="qty"><label><input class="unit" type="number" value="0" min="0" /></label></td>
  <td class="subtot">$<span>0</span></td>
  <td class="rm"><button class="btn btn-delete">Delete</button></td>`

  $cart.appendChild(newProduct);

  descriptionInput.value = "";
  priceInput.value = "";

  let newDeleteButton = newProduct.querySelector('.rm .btn-delete');
  newDeleteButton.addEventListener("click", deleteProduct)
}
