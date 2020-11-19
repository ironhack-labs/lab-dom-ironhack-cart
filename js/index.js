// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = (Number(price.textContent) * quantity.value).toString();

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  console.log(products.length, " -- length");
  products.forEach(product => {
    updateSubtotal(product)
  })

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  const allSubtotal = document.querySelectorAll(".subtotal span");
  let sum = 0;
  allSubtotal.forEach(each => sum += Number(each.textContent));
  total.textContent = sum.toString();

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  (target.parentNode.parentNode).remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const table = document.querySelector("#cart tbody");

  //get information from the last column
  const nameNewProduct = document.querySelector('.create-product input[type="text"]');
  const unitPriceNewProduct = document.querySelector('.create-product input[type="number"]');
  //create element
  const row = document.createElement("tr");
  row.setAttribute("class", "product");
  row.innerHTML += `<td class="name"><span>${nameNewProduct.value}</span> </td>`;
  row.innerHTML += ` <td class="price">$<span>${unitPriceNewProduct.value}</span></td>`;
  row.innerHTML += `<td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>`;
  row.innerHTML += ` <td class="subtotal">$<span>0</span></td>`;
  row.innerHTML += `<td class="action"><button class="btn btn-remove">Remove</button></td>`

  //show new a product
  a = table.appendChild(row);

  //addEventListener cho new button
  a.querySelector("button").addEventListener("click", removeProduct);

  //delete input fields in last form
  nameNewProduct.value = '';
  unitPriceNewProduct.value = '';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //remove a product
  const allRemoveBtn = document.querySelectorAll(".btn-remove");
  allRemoveBtn.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  })

  //add a new product
  const addBtn = document.getElementById("create");
  addBtn.addEventListener('click', createProduct);

});

