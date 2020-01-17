// var newProduct = new Product();
var $cart = document.querySelector('#cart tbody');
var calcBtn = document.getElementById('calc');
var createBtn = document.getElementById('create')
var delBtn = document.querySelectorAll('btn-delete')

function updateSubtot(product) {
  // Iteration 1.1
    let unitPrice = product.querySelector(".pu span").textContent;
    let quantity = product.querySelector(".qty input").value;
    let subTotal = (unitPrice * quantity);

    product.querySelector(".subtot span").textContent = `${subTotal.toFixed(2)}`;
    return subTotal;
}

function addProd() {
  var inputName = document.querySelector("#newProd").value;
  var inputPrice = document.querySelector("#newPrice").value;
  var newTr = document.createElement('tr');
  newTr.className = "product";
  newTr.innerHTML = `
    <td class="name">
      <span>${inputName}</span>
    </td>

    <td class="pu">
      $<span>${inputPrice}</span>
    </td>

    <td class="qty">
      <label>
        <input type="number" value="0" min="0">
      </label>
    </td>

    <td class="subtot">
      $<span>0</span>
    </td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>`
  
  $cart.appendChild(newTr);
  newTr.querySelector(".btn-delete").onclick = deleteProd;
}

function deleteProd(e) {
  // console.log(e.currentTarget) // currentTarget / target should work, just check
  let targetRow = e.target.parentElement.parentElement;
  // console.log(targetRow);
  targetRow.remove();
  // calcAll(); // calculates without pressing the calculate price
}

function calcAll() {
  var products = document.querySelectorAll("tr.product");

  // Iteration 1.2
  let total = 0;
  products.forEach(product => {
    let subTotal = updateSubtot(product)
    total += subTotal;  
  });

  document.getElementById("totalPrice").textContent = `${total.toFixed(2)}`;
}


calcBtn.onclick = calcAll;

$cart.querySelectorAll(".btn-delete").forEach(eachDel => {
    eachDel.onclick = deleteProd;
  })

createBtn.onclick = addProd;