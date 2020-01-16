var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

function updateSubtot($product) {
  // Iteration 1.1
  var price = Number($product.querySelector(".pu span").textContent);
  console.log(price);
  var subTotal = price * $product.querySelector(".qty input").value;
  console.log(subTotal);
  $product.querySelector(".subtot span").textContent = subTotal;
  return subTotal;
}

function calcAll() {
  var productsList = document.getElementsByClassName("product");
  console.log(productsList);
  var totalPrice = 0;
  for (let i = 0; i < productsList.length; i++) {
    console.log(productsList[i]);
    updateSubtot(productsList[i]);
    totalPrice += updateSubtot(productsList[i]);
  }
  console.log(totalPrice);
  document.getElementById("total").textContent = totalPrice;
  // Iteration 1.2
}

$calc.onclick = calcAll;


var createBtn = document.getElementById("create");
console.log(createBtn);
var name = document.querySelector("#name");
var pu = document.querySelector("#price");


createBtn.onclick = function() {
  console.log("yoooo");
  
  document.querySelector(
    "tbody"
  ).innerHTML += `<tr class="product"><td class="name">
  <span>${name.value}</span>
</td>

<td class="pu">
  $<span>${pu.value}</span>
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
</td>
</tr>`;
listenDeleteBtns()
};

function listenDeleteBtns() {
  var deleteBtns = document.querySelectorAll(".btn-delete");
console.log(deleteBtns);
deleteBtns.forEach(function(deleteBtn) {
  deleteBtn.onclick = function(e) {
    console.log("hey");
    return e.currentTarget.parentElement.parentElement.remove();
  };
});
}

listenDeleteBtns()