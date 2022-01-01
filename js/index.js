// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;


  const subTotal = Number((price * quantity).toFixed(2));
  const unSubtotal = product.querySelector('.subtotal span');
  unSubtotal.innerHTML = subTotal;
  
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelector('.product');
  
  // end of test
let total = 0;
  // ITERATION 2
  //... your code goes here
  for (let product of products) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.closest('.product').remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createRow = document.querySelector(".create-product");
  const NewProductNameInput = createRow.querySelector(".input");
  const newProductNameValue = new ProductNameInput.value;
  const newProductPriceInput = createRow.querySelector(".input[type='number']");
  const newProductValue = Number (newProductPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement("tr");
  newTableRow.className = "product";
  newTableRow.innerHTML = `
    <td class="name">
      <span>${newProductNameValue}</span>
    </td>
    <td class="price">$<span>${newProductValue}</span></td>
    <td class="quantity">
   <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
   <button class="btn btn-remove">Remove</button>
  </td>
  `;


const parent = document.querySelector("#cart tbody");
parent.appendChild(newTableRow);

const removeBtn = newTableRow.querySelector(".btn-remove");
removeBtn.addEventListener("click", removeProduct);

newProductNameInput.value = "";
newProductPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementById('btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }
  const createBtn = document.getElementById('create');
  if(createBtn){
    createBtn.addEventListener('click', createProduct);
  }
});
