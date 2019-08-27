document.getElementById('shopping').onclick = function (e) {
  if (e.target.className.includes('btn-delete')) {
    e.target.parentNode.remove();
  }
}

function createNewItem() {
  console.log("In new item");
  let name = window.prompt("What is the name?");
  let price = window.prompt("What is the price?");

  let rowHtml =
    `<div class="row">
      <p class="col">${name}</p>
      <div class="col">
      <span>$</span>
      <p class="inline-block initialPrice">${price}</p>
      </div>
      <form class="col">
      <label class="inline-block" for="price">Quantity:</label>
      <input
      class="inline-block initialQuantity"
      type="text"
      name="price"
      placeholder="0"
      />
      </form>
      <div class="col">
      <span>$</span>
      <p class="inline-block individualTotal">0.00</p>
      </div>
      <button class="btn btn-danger btn-delete" >Delete</button>
      </div>`
  document.getElementById('shopping').innerHTML += rowHtml;
  init();
}

function getTotalPrice() {
  console.log("The total: ");
  let rows = document.getElementsByClassName('row');
  for (let r = 0; r < rows.length; r++) {

    let row = rows[r];
    console.log(row)

    let price = document.querySelector(`shopping > div:nth-child(${r + 1}).initialPrice`);
    console.log(price)
    let quantity = row.children[2].children[1]; (quantity)
    let subTotal = Number(price.innerHTML) * Number(quantity.value);
    console.log("Price: " + price);
    console.log("Quantity: " + quantity.value);
    console.log("The total is: " + subTotal);
  }
}

window.onload = init();

function init() {

  var calculatePriceButton = document.querySelector('calc-prices-button'); //ocument.getElementsByClassName('calc-prices-button');
  var createItemButton = document.querySelector("#new-item-create");
  // var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice();
  createItemButton.onclick = createNewItem();

}
