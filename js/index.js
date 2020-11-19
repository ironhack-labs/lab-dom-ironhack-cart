// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  let subtotal = Number(price) * Number(quantity);
  product.querySelector(".subtotal span").textContent = subtotal;
  return subtotal
}

function calculateAll() {

// ITERATION 2/3 using forEach
  let allProducts = [... document.querySelectorAll(".product")];
  let totalPrice = 0;
  allProducts.forEach(function(product) {
    updateSubtotal(product);
    totalPrice += Number(product.querySelector(".subtotal span").textContent);
  })
  document.querySelector("#total-value span").textContent = totalPrice
}
//TAs: can you please let me know the shorter way to do this?

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parentNode = target.parentNode.parentNode;
  parentNode.remove();
  calculateAll();
}


// ITERATION 5
function createProduct() {
  let newProduct = document.getElementById("newProductName").value ;
  let newPrice = document.getElementById("newProductPrice").value ;

  const newProductLine = document.createElement("tr")

  newProductLine.classList.add("product")
  document.querySelector("tbody").appendChild(newProductLine);

  const tbodyLastChild = document.querySelector(".product:last-child")
  tbodyLastChild.innerHTML += `<td class="name"><span>${newProduct}</span></td>`
  tbodyLastChild.innerHTML += `<td class="price">$<span>${newPrice}</span></td>`
  tbodyLastChild.innerHTML += `<td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>`
  tbodyLastChild.innerHTML += `<td class="subtotal">$<span>0</span></td>`
  tbodyLastChild.innerHTML += `<td class="action"><button class="btn btn-remove">Remove</button></td>`

  document.getElementById("newProductName").value = 0 ;
  document.getElementById("newProductPrice").value = 0 ;
}
//To be simplified/broken up

  const tbodyLastChild = document.querySelector("product:last-child")
console.log(typeof document.querySelector(".product:last-child").innerHTML)


window.addEventListener('click', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = [... document.getElementsByClassName("btn btn-remove")];
  removeBtn.forEach( button => button.addEventListener('click', removeProduct));

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
