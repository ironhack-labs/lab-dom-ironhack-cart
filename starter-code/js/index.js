//New cart item
$(".submitNew").click(function(e) {
  let productName = $("#newProduct input")[0].value;
  let productPrice = $("#newProduct input")[1].value;
  let cartDiv = `<div class="cartItem">
  <span>${productName}</span>
  <span>$<span class="itemPrice">${productPrice}</span></span>
  <div>
    <label>QTY</label>
    <input
      type="number"
      onchange="getPriceByProduct()"
      value="0"
      name="quantity"
      class="itemQuantity"
    />
    <span class="itemsPrice">0.00</span>
  </div>
  <button type="button" class="btn-delete" onclick="">
  Delete
</button>
</div>`;
  $(".cart").append(cartDiv);
});

//Deletes cart item
$(".cart").on("click", ".btn-delete", function(e) {
  e.currentTarget.parentNode.remove();
});

//Calculate item price
function getPriceByProduct() {
  let cartQuantity = document.querySelectorAll(".cartItem");
  for (let i = 0; i < cartQuantity.length; i++) {
    let currentQuantity = parseInt(
      document.querySelectorAll(".itemQuantity")[i].value
    );
    let currentItemPrice = document.querySelectorAll(".itemPrice")[i].innerHTML;
    document.querySelectorAll(".itemsPrice")[i].innerHTML =
      currentQuantity * currentItemPrice;
  }
}

//Calculate total price
function getTotalPrice() {
  let quantities = document.querySelectorAll(".itemsPrice");
  let cartPrice = document.querySelector(".totalPrice");
  let cartTotal = 0;
  for (let i = 0; i < quantities.length; i++) {
    cartTotal += parseInt(quantities[i].innerHTML);
  }
  cartPrice.innerHTML = "$" + cartTotal;
}
