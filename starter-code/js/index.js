var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let price = $product.querySelectorAll(".pu span")[0].innerHTML;
  let quantity = $product.querySelectorAll(".qty label input")[0].value;
  let subtotal = $product.querySelectorAll(".subtot span")[0];
  subtotal.innerHTML = quantity * price;
  return quantity * price;
}

function calcAll() {
  let products = document.querySelectorAll(".product");
  let totalCart = 0;
  for (let i=0; i<products.length; i++) {
    let updatingProduct = document.querySelectorAll(".product")[i];
    updateSubtot(updatingProduct);
    let subtotals = updateSubtot(products[i])
    totalCart += subtotals;
  }

   document.querySelectorAll("#total")[0].innerHTML = totalCart;
}

document.querySelectorAll(".btn.btn-success")[0].addEventListener("click", calcAll);



function createNewRow() {

var price = document.querySelector(".priceinput").value
var name = document.querySelector(".nameinput").value  
var $tableRow = document.createElement("tr")

$tableRow.innerHTML = `
  <td class="name">
    <span>${name}</span>
  </td>

  <td class="pu">$<span>${price}</span></td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0" />
    </label>
  </td>

  <td class="subtot">$<span>0</span></td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
 `

 

var parentNode = document.querySelector("tbody");

parentNode.appendChild($tableRow)

$tableRow.setAttribute("class","product")
deleteRow()
calcAll()

// document.querySelector("".btn.btn-delete").addEventListener("click",)
}

document.querySelectorAll("#create")[0].addEventListener("click",createNewRow)


function deleteRow() {

let $deleteButtons = document.querySelectorAll(".btn.btn-delete");

for (let i=0; i<$deleteButtons.length;i++) {
  $deleteButtons[i].addEventListener("click",function(event){

  let toBeDeletedtr = event.currentTarget.closest("tr");
  let tbodyParent = event.currentTarget.closest("tbody");

  tbodyParent.removeChild(toBeDeletedtr);
  })
}
}