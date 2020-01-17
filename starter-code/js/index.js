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
  var inputName = document.getElementById("newProd").value; // either getElementById and
  var inputPrice = document.querySelector("#newPrice").value; // querySelector works
  
  // To add a new row... A new <tr> has to be created to contain the <td>&nodes
  // (innerHTML) below. This is to not affect the already existing events tied to the HTML.
  var newTr = document.createElement('tr');
  
  newTr.className = "product"; // adds a class name to new element to match the classes of already existing TRs
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
  
  $cart.appendChild(newTr); // adds the new row at the end of $cart
  newTr.querySelector(".btn-delete").onclick = deleteProd; // new event has to be called for the newly added products
}

function deleteProd(e) {
  // console.log(e.currentTarget) // currentTarget / target should work, just check
  let targetRow = e.target.parentElement.parentElement;
  targetRow.remove();
  // calcAll(); // to calculate without pressing the calculate price
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
  }) // this event only applies to already-existing products

createBtn.onclick = addProd;