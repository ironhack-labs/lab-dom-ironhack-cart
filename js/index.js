// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let subTotal = quantity.value*price.innerHTML
  product.querySelector(".subtotal span").innerHTML = subTotal
  return subTotal
  //... your code goes here
}
function calculateAll() {
  const products = document.getElementsByClassName("product")
  const productsArray = [...products]
  let soma = 0
  for (let i = 0; i<productsArray.length; i++){
    updateSubtotal(productsArray[i])
    soma += updateSubtotal(productsArray[i])
  }
  document.querySelector("#total-value span").innerText = soma;
  return soma;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove()
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const products = document.querySelectorAll(".create-product input");
  const productsArray = [...products]
  const productName = productsArray[0].value
  const productPrice = productsArray[1].value
  
  let newProduct = document.createElement("tr")
  newProduct.classList.add("product")
  newProduct.innerHTML = `<td class="name">
  <span>${productName}</span>
</td>
<td class="price">$<span>${productPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

  document.querySelector("tbody").append(newProduct)
  const button = document.getElementsByClassName("btn-remove")
  newProduct.addEventListener("click", () => {
    newProduct.remove()
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removing = document.getElementsByClassName("btn-remove")
  const removingArray = [...removing]
  removingArray.forEach((remove) => {
    remove.addEventListener("click", removeProduct)

  })
  const createNew = document.getElementById("create")
  createNew.addEventListener("click", createProduct)
  //... your code goes here
});
