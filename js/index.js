const removeBtn = document.getElementsByClassName("btn-remove");
// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector("input");
  const subtotal = product.querySelector(".subtotal span");
  let calculation = Number(price.innerText) * Number(quantity.value);

  subtotal.innerHTML = calculation;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");
  products.forEach(function (product) {
    updateSubtotal(product);
  });

  // ITERATION 3
  const subtotal = document.querySelectorAll(".subtotal span");
  const totalCart = document.querySelector("#total-value span");
  let total = 0;

  subtotal.forEach(function (subtotal) {
    total += Number(subtotal.textContent);
  });
  totalCart.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productTable = document.querySelector("#productTable");
  console.log(target.parentElement);
  productTable.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //add a new row with the new product info
  const newName = document.getElementById("new-product-name");
  const newPrice = document.getElementById("new-product-price");
  const productTable = document.querySelector("#productTable");

  if (newName.value === "" || newPrice.value === "0") {
    throw new Error("Don't forget to give all the new product information.");
  } else {
    productTable.innerHTML += `<tr class="product">
    <td class="name">
      <span>${newName.value}</span>
    </td>
    <td class="price">$<span>${newPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`;
  }

  //when the new product row is added, clear the input fields
  newName.value = "";
  newPrice.value = "0";

  // const newName = document.getElementById("new-product-name");
  // const newPrice = document.getElementById("new-product-price");
  // const productTable = document.querySelector("#productTable");
  // let tr = document.createElement("tr");

  // if (newName.value === "" || newPrice.value === "0") {
  //   throw new Error("Don't forget to give all the new product information.");
  // } else {
  //   productTable.appendChild(tr);
  // }

  // productTable.lastChild.className = "product";

  // let newProduct = `<td class="name">
  //     <span>${newName.value}</span>
  //   </td>
  //   <td class="price">$<span>${newPrice.value}</span></td>
  //   <td class="quantity">
  //     <input type="number" value="0" min="0" placeholder="Quantity" />
  //   </td>
  //   <td class="subtotal">$<span>0</span></td>
  //   <td class="action">
  //     <button class="btn btn-remove">Remove</button>
  //   </td>`;

  // productTable.lastChild.innerHTML = newProduct;

  listenRemove(removeBtn);
  
  //when the new product row is added, clear the input fields
  newName.value = "";
  newPrice.value = "0";
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
});

function listenRemove(removeBtn) {
  for (let i = 0; i < removeBtn.length; i++) {
      removeBtn[i].addEventListener("click", removeProduct);
    };
  console.log("hello");
};

listenRemove(removeBtn);


window.addEventListener("load", () => {
  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
