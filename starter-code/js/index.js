var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');


// my code
// function updateSubtot(product) {
//   price = document.querySelector("#cart > tbody > tr > td.pu > span").innerHTML;
//   quantity = document.querySelector("#cart > tbody > tr > td.qty > label > input[type=number]").value;
//   total = price * quantity;
//   document.querySelector("#cart > tbody > tr > td.subtot > span").innerHTML = total;
// }

// function calcAll() {
//   updateSubtot();
// }

// instructor code
function updateSubtot(product) {
  let priceProduct = product.querySelector(".pu span").innerText;
  let quantity = product.querySelector(".qty input").value;
  let sub = priceProduct * quantity;
  // subTotal.textContent = Number(priceProduct.textContent) * Number(quantity.value)

  return sub;

}

// really bad way to do iteration 2
// function calcAll() {
//   // Iteration 1.2
//   let product = document.querySelector("#cart > tbody > tr");
//   let product2 = document.querySelector("#cart > tbody > tr:nth-child(2)");
//   let sub = document.querySelector("#cart > tbody > tr > td.subtot > span");
//   let sub2 = document.querySelector("#cart > tbody > tr:nth-child(2) > td.subtot > span");
//   let justText = document.querySelector("#cart > tbody > tr > td.subtot > span").innerHTML;
//   sub.innerText = updateSubtot(product);
//   let justText2 = document.querySelector("#cart > tbody > tr:nth-child(2) > td.subtot > span").innerHTML;
//   sub2.innerText = updateSubtot(product2);
// }

function calcAll() {
  // Iteration 1.2 basic - code gets redone for iteration 2
  // let product = document.querySelector("#cart > tbody > tr");
  // let sub = document.querySelector("#cart > tbody > tr > td.subtot > span"); 
  // let justText = document.querySelector("#cart > tbody > tr > td.subtot > span").innerHTML
  // sub.innerText = updateSubtot(product);

  //iteration 2 revamp

  const allProducts = document.querySelectorAll("tr.product");
  let totalPrice = 0;
  allProducts.forEach(row => {
    // alternate format for selecting elements:
    // let price = row.children[1].children[0].innerText;
    let price = row.querySelector('.pu span').innerText;
    let qty = row.querySelector('.qty input').value;
    let total = price * qty;
    totalPrice += total;
    row.querySelector('.subtot span').innerText = total;
  });

  let count = 0;
  document.querySelector("body > h2 > span").innerText = totalPrice;
}
  // iteration 4
   let deleteButtons = document.querySelectorAll('.rm button');
   deleteButtons.forEach(del => del.addEventListener('click', deleteRow));

   function deleteRow(e) {
     e.currentTarget.parentElement.parentElement.remove();
   }
   
  // iteration 5
  

  const createButtons = document.querySelectorAll('#create');
  createButtons.forEach(crea => crea.addEventListener('click', createRow))
  function createRow(e) {
    let newRow = document.querySelector('tbody');
    let createName = document.querySelector('.new input').value;
    let createPrice = document.querySelector('.new td:nth-child(2) input').valueAsNumber.toFixed(2);
    newRow.innerHTML += `<tr class="product">
    <td class="name">
      <span>${createName}</span>
    </td>

    <td class="pu">$<span>${createPrice}</span></td>

    <td class="qty">
      <label>
        <input type="number" value="0" min="0" />
      </label>
    </td>

    <td class="subtot">$<span>0</span></td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  </tr>`
  let deleteButtons = document.querySelectorAll('.rm button');
  deleteButtons.forEach(del => del.addEventListener('click', deleteRow));

  function deleteRow(e) {
    e.currentTarget.parentElement.parentElement.remove();
  }

  }

  $calc.onclick = calcAll;
