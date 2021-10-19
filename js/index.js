// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");
  const price = parseFloat(priceElement.innerText);
  const quantity = quantityElement.valueAsNumber;
  const subTotal = price * quantity;
  const subTotalElement = product.querySelector(".subtotal span");
  subTotalElement.innerText = subTotal;
  return subTotal;
}
  

function calculateAll() {
  //update subtotals of all products
  const cartRows = document.getElementsByClassName("product");
  let totalValue = 0;
  console.log(totalValue)
  for(let value of cartRows){
   totalValue += updateSubtotal(value)
 }
 document.querySelector("#total-value span").innerHTML = totalValue;
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const bodynode = document.getElementsByTagName("body")
  const nameOfProductInput = document.getElementById("product-name")
  const priceOfProductInput = document.getElementById("product-price")
  const productName = nameOfProductInput.value;
  const productPrice = parseFloat(priceOfProductInput.value)
  console.log(productName,productPrice)
  const newProductRow = document.createElement("tr");
  newProductRow.setAttribute("class", "product")
  newProductRow.innerHTML = `<td class="name">
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
tablebody.appendChild(newProductRow)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName("btn btn-remove")
  for(let value of removeButtons){
    value.addEventListener('click',removeProduct)
  }
  const createProducts = document.getElementById("create")
  createProducts.addEventListener('click', createProduct)
});