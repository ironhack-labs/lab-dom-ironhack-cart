var setId = 0;

function deleteRow(e) {
  console.log(e);
  var deleteRow = document.getElementById(e);
  deleteRow.remove();
  getTotalPrice();

}

function updatePriceByProduct(productId) {

  //change totalPrice
  console.log(productId);
  var childrenProduct = document.getElementById(productId).children
  var priceString = childrenProduct.item(1).children.item(0).innerHTML;
  var price = parseInt(priceString, 10);
  console.log(price);

  var quantityString = childrenProduct.item(2).children.item(1).value;
  var quantity = parseInt(quantityString, 10);
  console.log(quantity);

  var totalPrice = childrenProduct.item(3).children.item(0)

  totalPrice.innerHTML = price * quantity + document.getElementById("currency").value;
}

function getTotalPrice() {

  var products = document.getElementsByClassName("product"); //HTML Collection
  var productsArr = Array.prototype.slice.call(products);
  if (productsArr.length == 0) {
    result = 0;

  } else {
    var totalPrice = [];
    productsArr.forEach(element => totalPrice.push(parseInt(element.children.item(3).children.item(0).innerHTML, 10)));

    console.log(totalPrice);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(totalPrice.reduce(reducer));

    var result = totalPrice.reduce(reducer)
  }

  document.getElementById("total-price").innerHTML = result + document.getElementById("currency").value;
}



function createNewItemRow(itemName, itemUnitPrice) {

  var setIdOld = setId;
  var parentContainer = document.getElementById("container");
  var productDiv = createNewItem("div", "class", "product");

  productDiv.setAttribute("id", "product-" + setId);
  parentContainer.appendChild(productDiv);


  var divCounter = 0;
  while (divCounter < 5) {

    var divInProduct = createNewItem("div", "", "");
    productDiv.appendChild(divInProduct);
    divCounter++;
  }

  // we make HTML collection from all elements with class="product". We need last child from collection.


  var LastProductChild = document.getElementsByClassName("product").item(document.getElementsByClassName("product").length - 1);

  var childrenLastproductChild = LastProductChild.children;

  console.log(childrenLastproductChild instanceof HTMLCollection);

  console.log(LastProductChild);
  console.log(childrenLastproductChild);


  var i = 0;
  while (i < 5) {
    switch (i) {
      case 0:
        var elementInDiv = createNewItem("span", "class", "name");
        elementInDiv.appendChild(document.createTextNode(itemName));
        break;
      case 1:
        var elementInDiv = createNewItem("span", "class", "price");
        elementInDiv.appendChild(document.createTextNode(itemUnitPrice + document.getElementById("currency").value));
        break;
      case 2:
        var elementInDiv1 = createNewItem("span", "", "");
        var elementInDiv = createNewItem("input", "class", "quantity");
        elementInDiv1.appendChild(document.createTextNode("QTY:"));
        elementInDiv.addEventListener("input", function () {
          updatePriceByProduct("product-" + setIdOld)
        });
        elementInDiv.setAttribute("type", "number");
        elementInDiv.setAttribute("min", 1);
        break;
      case 3:
        var elementInDiv = createNewItem("span", "class", "total-price");
        break;
      case 4:
        var elementInDiv = createNewItem("button", "class", "delete");
        elementInDiv.appendChild(document.createTextNode("Delete"));
        elementInDiv.setAttribute("type", "button");
        elementInDiv.classList.add("btn", "btn-delete");
        elementInDiv.addEventListener("click", function () {
          deleteRow("product-" + setIdOld);
        });
        break;
    }

    if (i == 2) {

      childrenLastproductChild.item(i).appendChild(elementInDiv1);

    }
    childrenLastproductChild.item(i).appendChild(elementInDiv);

    i++;

  }
  setId++;

}



//it will create HTML elements on page

function createNewItem(name, attribute, attributeValue) {


  var elementName = document.createElement(name);
  if (attribute != "") {
    elementName.setAttribute(attribute, attributeValue);
  }


  return elementName;
}

//loading page and all elements on it

window.onload = function () {



  document.getElementById("create-product").addEventListener("click", function () {

    createNewItemRow(document.getElementById("name-product-to-create").value, document.getElementById("price-product-to-create").value);
  });


  document.getElementById("calc-price").addEventListener("click", getTotalPrice);
}