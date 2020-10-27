// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const quantity =  product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");
  const price = product.querySelector(".price span").innerHTML;
  return subtotal.textContent = parseInt(price) * parseInt(quantity);
}

function calculateAll() {
  // ITERATION 2

  const products = document.querySelectorAll(".product");
  let sum = 0;
  products.forEach(function(product) {
    sum += updateSubtotal(product);
  });

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.textContent = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  (event.currentTarget).parentNode.parentNode.parentNode.removeChild(event.currentTarget.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  let product = document.createElement("tr");
  const name = document.querySelector(".create-product td input").value;
  const price = document.querySelector(`.create-product td input[type=number]`).value;
 /* let numb = true;
  for(let i = 0; i < price.length; i++) {
    if ((price[i] < `0` || price[i] > '9') && price[i] != '.') {
      numb = false;
      console.log(numb);
    }
  }
  if (numb)
    {*/
    const tbody = document.querySelector('tbody');
    product.setAttribute('class', "product");
    product.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
    tbody.appendChild(product); 
  //}  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(function(btn) {
    btn.addEventListener('click', removeProduct);
  });
  const createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener('click', createProduct);
});
