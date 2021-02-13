// ITERATION 1

function updateSubtotal(product) {
  //console.log("Calculating subtotal, yey!");
  //... your code goes here
  const price = product.querySelector(".price span"); //1st part
  //console.log("print", price);
  const quantity = product.querySelector(".quantity input"); //1st part
  //console.log("this is the value ",quantity)
  let priceValue = Number(price.innerHTML); //2nd part
  //console.log("check priceValue", priceValue);
  let quantityValue = quantity.value; //2nd part
  //console.log("check quantityValue", quantityValue);
  let subTotal = priceValue * quantityValue; // 3rd part
  //console.log("print subtotal", priceValue * quantityValue);
  const newSubtotal = product.querySelector(".subtotal span"); // 4th part
  //console.log("check this one", newSubtotal);

  newSubtotal.textContent = `${subTotal}`; //5th part
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  let products = document.getElementsByClassName("product");
  Array.from(products).forEach(function (items) {
    total += updateSubtotal(items);
  });
  //console.log("print", total);

  // ITERATION 3
  //... your code goes here
  const updatedTotal = document.querySelector("#total-value span");

  updatedTotal.textContent = `${total}`;
}

// ITERATION 4

function removeProduct(event) {
  console.log("do we try to remove product?");
  //event = click on a button
  const target = event.currentTarget; // target is a button
  //console.log("The target in remove is:", target);
  let producttoberemoved = target.parentNode.parentNode; //button is a td, td in the tr product
  producttoberemoved.parentNode.removeChild(producttoberemoved);
}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;
  let tempproduct = target.parentNode.parentNode;
  const name = tempproduct.querySelector('[placeholder="Product Name"]').value;
  const price = tempproduct.querySelector('[placeholder="Product Price"]')
    .value;
  //console.log("name :", name, "; price :", price);

  let table = tempproduct.parentNode.parentNode;
  let tbody = table.querySelector("tbody");

  let newproduct = `
        <tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input  type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;
  tbody.innerHTML += newproduct;
  tempproduct.querySelector('[placeholder="Product Name"]').value = "";
  tempproduct.querySelector('[placeholder="Product Price"]').value = "";
  btnRemovelistener();
}

function btnRemovelistener() {
  let btnRemove = document.getElementsByClassName("btn btn-remove");
  Array.from(btnRemove).forEach(function (button) {
    //console.log("print remove removelistener", count, btnRemove);
    button.addEventListener("click", removeProduct);
    //console.log("print removed", count, btnRemove);
  });
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  /*let btnRemove = document.getElementsByClassName("btn btn-remove");
  
  Array.from(btnRemove).forEach(function (button) {
   
    //console.log("print remove", count, btnRemove);
    button.addEventListener("click", removeProduct);
    //console.log("print removed", count, btnRemove);
  });*/
  btnRemovelistener();

  const createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);
});
