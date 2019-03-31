let priceUnit = document.querySelectorAll(".unit_cost");
let quantityOrder = document.querySelectorAll(".input_quantity");
let total_price = document.querySelectorAll(".total_price");

var sum = 0;

//Calculation
function calculatePrice() {
  const arrayPrice = Array.from(priceUnit).map(element =>
    element.textContent.replace("$", "")
  ); // donc on transforme les node list en array
  const arrayQuantity = Array.from(quantityOrder).map(element => element.value);

  for (let i = 0; i < arrayPrice.length; i++) {
    let total = arrayPrice[i] * arrayQuantity[i];
    sum += total;
    total_price[i].textContent = `$${total}.00`;
  }
  console.log(sum);
  const total_sum = document.querySelector("#newtotal");
  total_sum.textContent = sum;
}

const butCalcPrice = document.querySelector("#total_button");
butCalcPrice.onclick = calculatePrice;

// Delete button

// function deleteItem() {
//   const deleteProduct = document.querySelectorAll(".btn-delete");
//   console.log("delete", this);
//   this.parentElement.remove();
// }
// deleteProduct.onclick = deleteItem();

const deleteProduct = document.querySelectorAll(".btn-delete");
deleteProduct.forEach(element => (element.onclick = deleteItem));

function deleteItem(evt) {
  const button = evt.target || evt.srcElement;
  button.parentElement.parentElement.remove();
}

function addItem() {
  // const inputText = document.querySelector(".product_name").value;
  // const inputPrice = document.querySelector(".unit_cost").value;
  // const products = document.querySelector(".product").value;
  const item = `
  <div class="product"> 
    <div id="product_1" class="product">
      <div class="product_name"><span>Product Name</span></div>
      <div class="unit_cost"><span>$7.00</span></div>
      <div class="quantity">
        <label for="quantity">QTY</label>

        <input class="input_quantity" type="number" min="0" />
      </div>
      <div class="total_price">$<span>0.00</span></div>
      <div class="delete_button, btn">
        <button class="btn-delete" type="button">Delete</button>
      </div>
    </div>

    
  `;
  document.querySelector(".product").insertAdjacentHTML("afterBegin", item);
}

const button = document.getElementById("new-button");
button.onclick = addItem;
