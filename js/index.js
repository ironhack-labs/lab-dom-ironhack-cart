// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  //console.log(price.innerHTML);
  const quantity = product.querySelector(".quantity input");
  //console.log(quantity.value);
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = price.innerHTML * quantity.value;
  return Number(subtotal.innerHTML);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2

  const multiProduct = document.querySelectorAll(".product");
  //console.log(multiProduct);
  let sum = 0;
  for (i = 0; i < multiProduct.length; i++) {
    sum += updateSubtotal(multiProduct[i]);
  }

  // ITERATION 3

  const total = document.querySelector("#total-value span");
  return (total.innerHTML = sum);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  const father = target.children;
  const children = father[0].innerHTML;
  target.remove();

  console.log("The target in remove is:", children);
}

// ITERATION 5

function createProduct() {
  //console.log("añadido")
  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");

  const myInput = document.querySelectorAll(".create-product td input");
  //console.log(myInput);
  newProduct.innerHTML = `<td class="name">
  <span>${myInput[0].value}</span>
</td>
<td class="price">$<span>${myInput[1].value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  const products = document.querySelector("tbody");
  console.log(products);
  products.append(newProduct);

  const button = newProduct.querySelector(".btn-remove");
  console.log(button);
  button.addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  //console.log(calculatePricesBtn)
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButton = document.querySelectorAll(".btn-remove");
  //console.log(removeButton);
  removeButton.forEach((element) =>
    element.addEventListener("click", removeProduct)
  );

  const addProduct = document.getElementById("create");
  addProduct.addEventListener("click", createProduct);
});
