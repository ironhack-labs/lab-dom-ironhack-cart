// ITERATION 1

function updateSubtotal(product) {
console.log('Calculating subtotal, yey!');
const price = product.querySelector(`.price span`).innerHTML;

const quantity = product.querySelector(`.quantity input`).value;

const subtotal = product.querySelector(`.subtotal span`)

const total = Number(price).toFixed(2) * Number(quantity)

subtotal.innerHTML = total;

return total
}

  // ITERATION 2

function calculateAll(product) {
  const elementProduct = document.getElementsByClassName(`product`)
  let totalTotal = 0;
  for (const elem of elementProduct){
    totalTotal = totalTotal + updateSubtotal(elem) 
}

  // ITERATION 3
  const grandTotal = document.querySelector(`#total-value span`).innerHTML;
  
  const collection = document.querySelectorAll(`.product`);

  let totalArr = Array.from(collection)

  totalArr = totalArr.reduce(function (acc,product) { 
    return acc += updateSubtotal(product)}, 0);

  grandTotal = Number(totalArr).toFixed(2);

  return grandTotal;
  }
  
  

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);       
  
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const mainProductsTable = document.querySelector(`tbody`);
  const newProductName = document.querySelector(`input[placeholder= "Product Name"]`);
  const newProductPrice = document.querySelector(`input[placeholder="Product Price"]`);

  //console.log({mainProductsTable, newProductName, newProductPrice});

  const newProductItem = document.createElement(`tr`);
  newProductItem.innerHTML = `
  <tr class="product">
          <td class="name">
            <span>${newProductName.value}</span>
          </td>
          <td class="price">$<span>${newProductPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  `;

  newProductItem.setAttribute('class, product');
  mainProductsTable.appendChild(newProductItem);

  newProductItem.querySelector(`.btn-remove`).addEventListener(`click`, removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll(`.btn-remove`);
  removeButton.forEach(button => {
    button.addEventListener(`click`, removeProduct)
  });

  const createButton = document.getElementById(`create`);
  createButton.addEventListener(`click`, createProduct);
});
