// let totalPrice = document.getElementById("totalPrice");

$(".btn-delete").click(function(e) {
  console.log("you want to delete");
  console.log(e.currentTarget.parentNode);
  e.currentTarget.parentNode.remove();
});

$(".submitNew").click(function(e) {
  console.log("want to add");
  //console.log(e.currentTarget.parentNode);
  let productName = $("#newProduct input")[0].value;
  let productPrice = $("#newProduct input")[1].value;
  console.log(productName, productPrice);
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
  console.log(cartDiv);
  $(".cart").append(cartDiv);
});
// function deleteItem() {
//   console.log("You want to delete");
//   $(".cartItem");
//   console.log(e);
//   // for (let i = 0; i < deleteButtons.length; i++) {
//   //   console.log("deletebutton", i, e);

//   // }
// }
//What is an itemNode and how do I pass it in to the function to only get the
//elements with those tags INSIDE that "node"?

//event binding on dynamically created elements
$(".cart").on("click", ".btn-delete", function(e) {
  console.log("you want to delete");
  console.log(e.currentTarget.parentNode);
  e.currentTarget.parentNode.remove();
});

function getPriceByProduct(itemNode) {
  let cartQuantity = document.querySelectorAll(".cartItem");
  // console.log(cartQuantity);
  for (let i = 0; i < cartQuantity.length; i++) {
    // console.log(document.querySelectorAll(".itemQuantity")[i].value);
    let currentQuantity = parseInt(
      document.querySelectorAll(".itemQuantity")[i].value
    );
    let currentItemPrice = document.querySelectorAll(".itemPrice")[i].innerHTML;
    let itemsPrice = document.querySelectorAll(".itemsPrice").innerHTML;
    // console.log(currentQuantity);
    // console.log(currentItemPrice);
    // console.log(currentItemPrice * currentQuantity);
    // console.log(itemsPrice);
    document.querySelectorAll(".itemsPrice")[i].innerHTML =
      currentQuantity * currentItemPrice;
  }
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  // console.log("You want the total price");
  let quantities = document.querySelectorAll(".itemsPrice");
  let cartPrice = document.querySelector(".totalPrice");
  // console.log(cartPrice.innerHTML);
  let cartTotal = 0;
  for (let i = 0; i < quantities.length; i++) {
    // console.log("cart total", cartTotal);
    cartTotal += parseInt(quantities[i].innerHTML);
    // console.log(quantities[i].innerHTML);
  }
  cartPrice.innerHTML = "$" + cartTotal;
}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {
  let newItemPrice;
  let newItem;
  let cartDiv = `      <div class="cartItem">
  <span>IronShirt</span>
  <span>$<span class="itemPrice">15.00</span></span>
  <div>
    <label>QTY</label>
    <input
      type="number"
      onchange="getPriceByProduct()"
      value="0"
      name="quantity"
      class="itemQuantity"
    />
    <span>$<span class="itemsPrice">0.00</span></span>
  </div>
  <button type="button" class="btn-delete" onclick="">
    Delete
  </button>
</div>`;
}

// window.onload = function() {
//   var calculatePriceButton = document.getElementById("calc-prices-button");
//   var createItemButton = document.getElementById("new-item-create");
//   var deleteButtons = document.getElementsByClassName("btn-delete");

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for (var i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
