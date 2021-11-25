// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');
  let subtotalValue = Number(price.textContent) * quantity.value;
  subtotal.textContent = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  let productsInCart = document.getElementsByClassName("product");
  let cartTotal = document.querySelector("#total-value span");
  let cartTotalVal = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    updateSubtotal(productsInCart[i]);
    cartTotalVal += Number(productsInCart[i].querySelector('.subtotal span').textContent)
  }
  cartTotal.textContent = cartTotalVal;
 
}

// ITERATION 4

document.getElementById("create").addEventListener('click', createProduct);
  
  function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    let row = target.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  




function createProduct() {
  let newProductPosition = document.querySelector("#cart tbody");
  let newProduct = document.createElement("tr");
  newProduct.className = "product";
  newProduct.innerHTML = `<td class="name">
  <span>${document.querySelector(".create-product td input").value}</span>
</td>
<td class="price">$<span>${document.querySelector(".create-product td:nth-child(2) input").value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
  `
  newProductPosition.appendChild(newProduct);
  newProduct.querySelector(".btn.btn-remove").addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
   
  let removeButtons = document.getElementsByClassName("btn btn-remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
