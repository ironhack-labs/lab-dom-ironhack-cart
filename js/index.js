// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const result = Number(price * quantity);

  let subtotal = product.querySelector('.subtotal span').innerText = result;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2 & 3
  let productRow = document.getElementsByClassName("product")
  let totalValue = (document.querySelector('#total-value span'));
  let finalresult= 0;
  
  for (let i = 0; i < productRow.length; i++){
    finalresult += (updateSubtotal(productRow[i]));
  }

  return totalValue.innerText = finalresult;
}

// ITERATION 4
function removeProduct(event) {

  const rowToRemove = event.currentTarget.parentNode.parentNode;
  rowToRemove.parentNode.removeChild(rowToRemove);

  calculateAll();
}

// ITERATION 5
function createProduct() {
 
  const newProductName = document.getElementById("new-product-name").value;
  const newProductPrice = document.getElementById("new-product-price").value;
  
  let newProduct = document.createElement('tr')
  newProduct.className = "product";
  newProduct.innerHTML =`
              <td class="name">
              <span>${newProductName}</span>
              </td>
              <td class="price">$<span>${newProductPrice}</span></td>
              <td class="quantity">
                <input type="number" value="0" min="0" placeholder="Quantity"/>
              </td>
              <td class="subtotal">$<span>0</span></td>
              <td class="action">
                <button class="btn btn-remove">Remove</button>`;

  let productsParent = document.querySelector('tbody');
  productsParent.appendChild(newProduct)

  const removeBotton = newProduct.getElementsByClassName("btn-remove");
  for(let i = 0; i < removeBotton.length; i++){
    removeBotton[i].addEventListener('click', removeProduct);
  };
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBotton = document.getElementsByClassName("btn-remove");
  for(let i = 0; i < removeBotton.length; i++){
    removeBotton[i].addEventListener('click', removeProduct);
  };

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct );

});