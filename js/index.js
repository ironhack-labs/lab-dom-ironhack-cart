// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value
  
  const subtotal = price * quantity

  product.querySelector(".subtotal span").innerHTML = subtotal

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  const multiProducts = document.querySelectorAll('.product');
  result = document.querySelector("#total-value")
  let total = 0
  // ITERATION 2
  //... your code goes here
  for (let i = 0; i<multiProducts.length; i++){
    total += updateSubtotal(multiProducts[i])
  }

  // ITERATION 3
  //... your code goes here
  result.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createProduct = document.querySelector("create-product")
  const nameNewProduct = document.querySelector('tr> td:nth-child(1)>input').value
  
  const priceNewProduct = document.querySelector('tr> td:nth-child(2)> input').value

  const newElement = `        <tr class="product">
  <td class="name">
    <span>${nameNewProduct}</span>
  </td>
  <td class="price">$<span>${priceNewProduct}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`

const table = document.querySelector("tbody")
const row = table.insertRow()
row.classList.add('product')
row.innerHTML = newElement
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createBtn = document.getElementById("create")
  createBtn.addEventListener("click",createProduct)
});
