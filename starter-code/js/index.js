const products = document.getElementById("products").children;
const creator = document.getElementById("creator");
const calculator = document.getElementById("calculator");
document.getElementsByTagName;
console.log(products);
console.log(creator);
console.log(calculator);

function deleteItem(e) {
  let div_of_product_to_delete = e.target.parentElement.parentElement;
  div_of_product_to_delete.parentElement.removeChild(div_of_product_to_delete);
  // we get the parent of what we want to delete because removechild has to be called on its parent
}

function getPriceByProduct(itemNode) {
  let price_extract = Number(
    itemNode
      .getElementsByClassName("product-cost")[0]
      .getElementsByTagName("span")[0]
      .textContent.replace("$", "")
  );
  return price_extract;
}

document.querySelector(".product-calculated-cost span");

function updatePriceByProduct(productPrice, index) {
  let qty_of_product = products[index].querySelector(".product-quantity input")
    .value;
  console.log(qty_of_product);
  products[index].querySelector(
    ".product-calculated-cost span"
  ).innerHTML = `$ ${productPrice * qty_of_product}`;
}

function getTotalPrice() {
  for (let i = 0; i < products.length; i++) {
    let price_of_product = getPriceByProduct(products[i]);
    console.log(price_of_product);
    updatePriceByProduct(price_of_product, i);
  }
  let total_calculated_price = 0;
  for (let i = 0; i < products.length; i++) {
    total_calculated_price += Number(
      products[i]
        .querySelector(".product-calculated-cost span")
        .textContent.replace("$", "")
    );
  }
  document.querySelector(
    "#final-price-calculation span"
  ).innerHTML = `Total Price: $${total_calculated_price}`;
}

function createQuantityInput() {
  let qty_div = document.createElement("div");
  qty_div.classList.add("product-quantity");
  qty_div.innerHTML =
    '<label for="" class="qty">QTY</label>' +
    '<input type="number" placeholder="0" />';
  return qty_div;
}

function createDeleteButton() {
  let delete_div = document.createElement("div");
  delete_div.classList.add("product-delete");
  delete_div.innerHTML = '<button class="btn btn-delete">Delete</button>';
  return delete_div;
}

function createCalculatedPrice() {
  let calculated_div = document.createElement("div");
  calculated_div.classList.add("product-calculated-cost");
  calculated_div.innerHTML = "<span>$0.00</span>";
  return calculated_div;
}

function createPrice(price) {
  let price_div = document.createElement("div");
  price_div.classList.add("product-cost");
  price_div.innerHTML = `<span class="unit-price">$ ${price}</span>`;
  return price_div;
}

function createName(name) {
  let name_div = document.createElement("div");
  name_div.classList.add("product-name");
  name_div.innerHTML = `<span>${name}</span>`;
  return name_div;
}

/* function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {} */

function createNewItem() {
  let newItemName = document.getElementById("new-item-name").value;
  let newItemPrice = document.getElementById("new-item-price").value;
  console.log(newItemPrice);
  // createPrice(newItemPrice)
  // createName(newItemName)
  let product_div = document.createElement("div");
  product_div.classList.add("product");
  product_div.appendChild(createName(newItemName));
  product_div.appendChild(createPrice(newItemPrice));
  product_div.appendChild(createQuantityInput());
  product_div.appendChild(createCalculatedPrice());
  product_div.appendChild(createDeleteButton());
  document.getElementById("products").appendChild(product_div);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

/* 
Once you have the HTML and CSS ready, use JavaScript and functions of the document object to retrieve the data you need to calculate the total price for that product. Change the value of the element in the DOM that displays the total price:

- Create a click event for the Calculate Prices button
- This event will execute a function that:
    Retrieves the unit price of the product
    Retrieves the quantity of items desired
    Calculates the total price based on this data
    Updates the total price in the DOM 
    
*/
