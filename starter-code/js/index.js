var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $total = document.querySelector("h2 span");
var $subTot = document.querySelectorAll(".product span.subTot");
var $subQua = document.querySelectorAll(".product input");
var $subPri = document.querySelectorAll(".product .pu span");
var deleteBtn = document.querySelectorAll("button.btn.btn-delete");
var row = document.querySelectorAll(".product")
var body = document.querySelector("tbody")
var createBtn = document.getElementById("create")
var subInputs = document.querySelectorAll("tfoot input")
var a, b


function updateSubtot() {
  var total = 0
  for (i = 0; i < $subTot.length; i++) {
    $subTot[i].textContent = parseFloat($subQua[i].value) * parseFloat($subPri[i].textContent)
    total += parseFloat($subTot[i].textContent)
    $total.textContent = total
  };
}

// function calcAll() {
$calc.addEventListener('click', function () {
  updateSubtot()
})

deleteBtn.forEach((btn, i) => {
  btn.onclick =
    function (e) {
      $subQua[i].value = 0

      updateSubtot()
      deleteBtn[i].parentElement.parentElement.remove()
    }

})

createBtn.addEventListener('click', function () {
  create()
})

function create() {
  if (subInputs[0].value && subInputs[1].value) {
    a = subInputs[0].value
    b = subInputs[1].value
    body.innerHTML += `        <tr class="product">
  <td class="name">
    <span>${a}</span>
  </td>
  
  <td class="pu">
    $<span>${b}</span>
  </td>
  
  <td class="qty">
    <label>
      <input type="number" class="quantityVal" value="0" min="0">
    </label>
  </td>
  
  <td>
    $<span class="subTot">0</span>
  </td>
  
  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
  </tr>`} else { alert("You have to fill title and price") }
  subInputs[0].value = "New product"
  subInputs[1].value = 0
  $subTot = document.querySelectorAll(".product span.subTot");
  $subQua = document.querySelectorAll(".product input");
  $subPri = document.querySelectorAll(".product .pu span");
  row = document.querySelectorAll(".product")
  deleteBtn = document.querySelectorAll("button.btn.btn-delete");

  deleteBtn.forEach((btn, i) => {
    btn.onclick =
      function (e) {
        $subQua[i].value = 0

        updateSubtot()
        deleteBtn[i].parentElement.parentElement.remove()
      }
  })

}

// addEventListener('click', function () {

//   deleteRow()
// })

function deleteRow(e, i) {
  // console.log("delete")
  // deleteBtn.parentElement.parentElement.remove();

}

// button.onclick = () => button.parentElement.remove()
// function delete() {

// };
//   // Iteration 1.2
// }
