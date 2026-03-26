// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');

  const priceNumber = Number(price.innerText);
  const quantityNumber = Number(quantity.value);


  const subtotalPrice = priceNumber * quantityNumber;


  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = subtotalPrice;

  return subtotalPrice;

}

function calculateAll() {
  /* code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2

  const products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }


  // ITERATION 3

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  const totalValue = document.querySelector('#total-value span');

  totalValue.innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const row = target.parentNode.parentNode;
  row.remove()

  calculateAll();

}

const allRemoveButtons = document.querySelectorAll(".btn.btn-remove");
allRemoveButtons.forEach((button) => {
  button.addEventListener("click", removeProduct);
});





// ITERATION 5

function createProduct() {
  //... your code goes here

  // seleccionar valores de inputs 

  const inputs = document.querySelectorAll('.create-product input');

  const name = inputs[0].value;
  const price = inputs[1].value;

  // crear nuevo tr

  const newRow = document.createElement("tr");
  newRow.classList.add("product");

  // colocar valores de inputs dentro del nuevo tr

  newRow.innerHTML = `
    <td class="name"><span>${name}</span></td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  // colocar el tr en el tbody 

  const tbody = document.querySelector("#cart tbody");
  tbody.appendChild(newRow);

  // configurar el nuevo botón remove 

  const removeBtn = newRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  // limpiar inputs de tr create-product

  inputs[0].value = "";
  inputs[1].value = 0;
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // darle la funcionalidad al botón 

  const footButton = document.getElementById("create");

  footButton.addEventListener("click", createProduct);

});



