function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerText
  console.log(price)
  const quantity = product.querySelector(".quantity input").value
  console.log(quantity)
  let sum = price * quantity
  console.log(sum)
  let subtotal = product.querySelector(".subtotal span")
  console.log(subtotal)
  subtotal.innerText = sum
  console.log(subtotal)
  return sum
}

function calculateAll() {
  const productsHTML = document.getElementsByClassName("product")
  const products = [...productsHTML]
  let sum = 0
  products.forEach(product => { sum += updateSubtotal(product)})
  const total = document.querySelector("#total-value span")
  total.innerText = sum
  return sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll(".create-product input")
  const name = inputs[0].value
  const unitPrice = inputs[1].value
  const product = document.createElement("tr")
  product.className = "product"
  product.innerHTML = `<td class="name">
                        <span>${name}</span>
                      </td>
                      <td class="price">$<span>${unitPrice}</span></td>
                      <td class="quantity">
                        <input type="number" value="0" min="0" placeholder="Quantity" />
                      </td>
                      <td class="subtotal">$<span>0</span></td>
                      <td class="action">
                        <button class="btn btn-remove">Remove</button>
                      </td>`
  document.querySelector("tbody").appendChild(product)
  product.querySelector(".btn-remove").addEventListener('click', removeProduct);

  return product
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.getElementsByClassName("btn-remove");
  for(let i = 0; i < removeProductBtns.length; i++){
    removeProductBtns[i].addEventListener('click', removeProduct);
  }

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});
