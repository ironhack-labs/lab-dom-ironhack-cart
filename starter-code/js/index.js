function createNewItemRow(name, price) {
  let text, span, label, input;
  let product = document.createElement("div");
  product.setAttribute("class", "product");

  //name of the product
  let productName = document.createElement("div");
  productName.setAttribute("class", "product-name");

  span = document.createElement("span");
  span.setAttribute("class", "span-name");
  text = document.createTextNode(name);
  span.appendChild(text);

  productName.appendChild(span);
  product.appendChild(productName);

  //product price
  let productPrice = document.createElement("div");
  productPrice.setAttribute("class", "product-price");

  span = document.createElement("span");
  span.setAttribute("class", "span-price");
  text = document.createTextNode("$" + price);
  span.appendChild(text);

  productPrice.appendChild(span);
  product.appendChild(productPrice);

  //product quantity
  let productQuantity = document.createElement("div");
  productQuantity.setAttribute("class", "product-quantity");

  label = document.createElement("label");
  text = document.createTextNode("Quantity: ");
  label.appendChild(text);

  input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("class", "units");
  input.setAttribute("value", "0");

  //update product total price
  input.addEventListener("change", function(e) {
    let product = e.target.parentNode.parentNode;
    let span = product.getElementsByClassName("total-product-price")[0];
    let price = product.getElementsByClassName("span-price");
    let quantity = product.getElementsByClassName("units");
    span.innerHTML = "$" + price[0].innerHTML.split("$")[1] * quantity[0].value;
  });

  productQuantity.appendChild(label);
  productQuantity.appendChild(input);
  product.appendChild(productQuantity);

  //total-product-price
  let totalProductPrice = document.createElement("div");
  totalProductPrice.setAttribute("class", "total-product-price");

  span = document.createElement("span");
  span.setAttribute("class", "span-total-product-price");
  text = document.createTextNode("$0.00");
  span.appendChild(text);

  totalProductPrice.appendChild(span);
  product.appendChild(totalProductPrice);
  //delete button
  let productDelete = document.createElement("div");
  productDelete.setAttribute("class", "product-delete");

  let btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn btn-delete");
  text = document.createTextNode("Delete");
  btnDelete.appendChild(text);
  btnDelete.addEventListener("click", function(e) {
    e.target.parentNode.parentNode.remove();
  });

  productDelete.appendChild(btnDelete);
  product.appendChild(productDelete);
  let productsContent = document.getElementById("products-content");
  productsContent.appendChild(product);
}

function createNewItem() {
  let name = document.getElementById("name-add").value;
  let price = document.getElementById("price-add").value;
  if (name.length === 0 || price.length === 0) {
    alert("Voce precisa botar o nome e o preco!");
  } else {
    createNewItemRow(name, price);
  }
}

function calculateTotalPrice() {
  let total = 0;
  let price = document.getElementsByClassName("span-price");
  let quantity = document.getElementsByClassName("units");
  for (let count = 0; count < price.length; count++) {
    total += price[count].innerHTML.split("$")[1] * quantity[count].value;
  }
  alert("Total Price: $" + total);
}

window.onload = function() {
  let bodyTag = document.getElementsByTagName("body")[0];
  let text, input;

  //title
  let h2Tag = document.createElement("h2");
  text = document.createTextNode("Ironhack Merchandising shop");
  h2Tag.appendChild(text);
  bodyTag.appendChild(h2Tag);

  //total prices button
  let calcPricesContent = document.createElement("div");
  calcPricesContent.setAttribute("id", "calc-prices-content");
  bodyTag.appendChild(calcPricesContent);

  let btnSuccess = document.createElement("button");
  btnSuccess.setAttribute("class", "btn btn-success");
  btnSuccess.setAttribute("onclick", "calculateTotalPrice()");
  text = document.createTextNode("Calculate Prices");
  btnSuccess.appendChild(text);
  calcPricesContent.appendChild(btnSuccess);

  //products
  let productsContent = document.createElement("div");
  productsContent.setAttribute("id", "products-content");
  bodyTag.insertBefore(productsContent, calcPricesContent);

  //add button
  let productsAddContent = document.createElement("div");
  productsAddContent.setAttribute("id", "products-add-content");

  let productsInputAddName = document.createElement("div");
  productsInputAddName.setAttribute("id", "products-input-add-name");

  label = document.createElement("label");
  label.setAttribute("id", "label-name");
  text = document.createTextNode("Name: ");
  label.appendChild(text);
  productsInputAddName.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "name-add");
  productsInputAddName.appendChild(input);

  let productsInputAddPrice = document.createElement("div");
  productsInputAddPrice.setAttribute("id", "products-input-add-price");
  label = document.createElement("label");
  label.setAttribute("id", "label-price");
  text = document.createTextNode("Price: ");
  label.appendChild(text);
  productsInputAddPrice.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("id", "price-add");
  productsInputAddPrice.appendChild(input);

  let productsButtonAdd = document.createElement("div");

  let btnAdd = document.createElement("button");
  btnAdd.setAttribute("class", "btn btn-add");
  btnAdd.setAttribute("onclick", "createNewItem()");
  text = document.createTextNode("Create");
  btnAdd.appendChild(text);
  productsButtonAdd.appendChild(btnAdd);

  productsAddContent.appendChild(productsInputAddName);
  productsAddContent.appendChild(productsInputAddPrice);
  productsAddContent.appendChild(productsButtonAdd);
  bodyTag.insertBefore(productsAddContent, calcPricesContent);
};
