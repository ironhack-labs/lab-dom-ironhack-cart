var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var allProducts = document.querySelectorAll(".product");
var deleteButtons = document.querySelectorAll(".btn-delete");
var create = document.getElementById("create");

function updateSubtot(e, productElement) {
  e.preventDefault()

  var totalSum = 0;
  productElement.forEach(function(product) {
    //Get price per unit value
    var price = product.querySelector(".pu span");
    price = price.innerHTML;

    //Get quantity value
    var quantity = product.querySelector(".qty input");
    quantity = quantity.value;

    //Calculate subtotal price
    var subtotal = (price * quantity).toFixed(2);

    //Modify the HTML subtotal
    var subtotalPrice = product.querySelector(".subtot span");
    subtotalPrice.innerHTML = subtotal;

    //Update totalSum
    totalSum += Number(subtotal);
  })
  return totalSum;
}

function calcAll() {
  // Iteration 1.2
  $calc.addEventListener('click', function(e){
    var totalSum = updateSubtot(e, allProducts);

    //Get the total price
    var total = document.getElementsByClassName("total")[0];
    var totalPrice = total.getElementsByTagName("span")[0];

    //Modify the total in HTML
    totalPrice.innerHTML = totalSum;
  });
}


//Add event listener on each delete button, which deletes the prod.
deleteButtons.forEach(e => {
  e.addEventListener("click", deleteProduct);
});

function deleteProduct(productToDelete) {
  const rowProduct = productToDelete.currentTarget.parentNode.parentNode;
  const tBody = rowProduct.parentNode;
  tBody.removeChild(rowProduct);
  calcAll();
}

function createRow() {
  create.addEventListener("click", function(e) {
    e.preventDefault();

    var productName = document.getElementById("productName").value;
    var price = document.getElementById("productPrice").value;

    var newRow = document.createElement("tr");
    newRow.className = "product";
    newRow.innerHTML =
      `<td class="name">
          <span>${productName}</span>
        </td>

        <td class="pu">
          $<span>${price}</span>
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
        </td>`;
    var tBody = document.querySelector("tbody");
    tBody.appendChild(newRow);

    var deleteButton = newRow.querySelector(".btn-delete");
    deleteProduct(deleteButton);

    productName.value = "";
    price.value = "";
  });
}

create.onclick = createRow();

$calc.onclick = calcAll();
