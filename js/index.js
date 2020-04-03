// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector(".price span").innerText);
  let quantity = Number(product.querySelector(".quantity input").value);
  let total = price * quantity;
  product.querySelector(".subtotal span").innerText = String(total)
  console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  const everyProduct = document.getElementsByClassName('product')
  for (let i =0;i<everyProduct.length;i++){
    updateSubtotal(everyProduct[i])
  }

  const everySubtotal = document.querySelectorAll('.subtotal span')
  let totalPrice=0
  for (let i=0;i<everySubtotal.length;i++){
    totalPrice+=Number(everySubtotal[i].innerText)
  }
  document.getElementById("total-value").innerHTML= `Total: $<span>${totalPrice}</span>`
}

// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode); // en gros je cible l'arrière grand père (target+3) et je lui demande d'éliminer sa descendance (target+2). Toujours se référer au seul point connu à savoir la target ici.
}

// ITERATION 5

function createProduct() {
  let newProductName = document.getElementById("input-new-product").value
  let newProductPrice = document.getElementById("input-new-price").value
  document.querySelector("#cart tbody").innerHTML+=` <tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll(".btn.btn-remove")
  removeButtons.forEach(function(removeButton){
  removeButton.addEventListener("click",removeProduct)  
  
  const addButton = document.getElementById("create");
  addButton.addEventListener("click",createProduct);

  })
  //... your code goes here
});
