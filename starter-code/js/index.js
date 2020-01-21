var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var btn = document.getElementById("calc");

function updateSubtot($product) {
  // Iteration 1.1
  var priceElement = $product.querySelector(".pu span");
  var quantityElement = $product.querySelector(".qty label input");
  var price = Number(priceElement.innerHTML);
  var quantity = Number(quantityElement.value);

  var subTotal = price * quantity;

  return subTotal;
}



btn.addEventListener("click", function () {
  var productsArr = document.querySelectorAll('.product');
  sum = 0;
  
    productsArr.forEach(function (productElement) {
      var subTotalPrice = updateSubtot(productElement);
      var subTotalElement = productElement.querySelector(".subtot span");
      subTotalElement.innerHTML = subTotalPrice;
      sum += subTotalPrice;
    })

  var total = document.querySelector("h2 span")
  total.innerHTML = Number(sum);
});


var delBtn = document.querySelectorAll(".btn-delete")
var dButtons = [...delBtn];

function deleteButton (deleteBtn) {
  deleteBtn.addEventListener("click", function (e) {
    var button = e.currentTarget;
    var productDelete = button.parentNode.parentNode;
    var tableBody = document.querySelector("tbody");
    tableBody.removeChild(productDelete)
  })
}
dButtons.forEach(element =>deleteButton(element));

$calc.onclick = calcAll;

function createRow () {
const newRow = document.querySelector('.new');
const productName = document.querySelector('input[type=text').value
const price = Number(newRow.querySelector('input[type=number]').value);

const newRowToHTML = 
`<tr class="product">
        <td class="name">
          <span>${productName}</span>
        </td>
        <td class="pu">
          $<span>${price.toFixed(2)}</span>
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
          <button class="btn-delete">Delete</button>
        </td>
      </tr>`

      const tbody = document.querySelector('tbody');

      tbody.innerHTML = tbody.innerHTML + newRowToHTML;

      newRow.querySelector('input[type=text]').value = ""
      newRow.querySelector('[input[type=number]').value = ""

}
