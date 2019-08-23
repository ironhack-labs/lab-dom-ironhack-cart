function deleteItem(e) {
  let currentProduct = e.currentTarget.parentNode.parentNode;
  let parent = currentProduct.parentNode;
  parent.removeChild(currentProduct);

  // let tr = [...document.querySelectorAll(".product")];
  // tr[e].innerHTML = "";
  // getTotalPrice();
}

function getTotalPrice() {
  let finalPrice = updatePriceByProduct();

  let totalPrice = 0;
  for (let i = 0; i < finalPrice.length; i++) {
    console.log(finalPrice[i].innerText);
    totalPrice += Number(finalPrice[i].innerText.slice(1));
  }

  document.querySelector(
    ".total-price"
  ).innerText = `Total Price: $${totalPrice}.00`;
}

function updatePriceByProduct() {
  let costLis = [...document.querySelectorAll(".item-cost")].map(
    el => el.innerHTML
  );
  // const sum = [...document.querySelectorAll(".sum-cost")];
  let sum = [...document.querySelectorAll(".sum-cost")];
  let inputLis = [...document.querySelectorAll(".input-qty")].map(
    el => el.value
  );
  console.log(inputLis);
  for (let i = 0; i < sum.length; i++) {
    console.log(costLis[i].slice(1), inputLis[i]);
    sum[i].innerText = `$${Number(costLis[i].slice(1)) * inputLis[i]}.00`;
  }
  // console.log(sum[0]);
  return sum;
}

function createNewItem() {
  let productName = document.querySelector(".enter-product-name").value;
  let productPrice = document.querySelector(".enter-product-price").value;

  let newString = `<tr class="product">
  <td>${productName}</td>
  <td class="item-cost">$${productPrice}</td>

  <td class="search-box">
    QTY <input type="number" class="input-qty" />
  </td>

  <td class="sum-cost">$0.00</td>
  <td><Button class="btn-delete">Delete</Button></td>
</tr>`;

  let newTr = document.createElement("tr");
  newTr.innerHTML = newString;
  let refTbody = document.getElementsByTagName("tbody");
  refTbody[0].appendChild(newTr);

  let deleteButton = document.getElementsByClassName("btn-delete");
  console.log(deleteButton.length);
  deleteButton[deleteButton.length - 1].onclick = deleteItem;
}

window.onload = function() {
  // console.log(sum);

  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
