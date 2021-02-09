// ITERATION 1

function updateSubtotal(product) {
   const price = product.querySelector('.price span').innerText;
   const quantity = product.querySelector('.quantity input').value;

   //const subtotal = Number (price) * Number(quantity)
   const subtotal = +price * +quantity // o sina de + converte a string em número

   const subtotalElement = product.querySelector('.subtotal span');

   subtotalElement.innerText = subtotal;

   return subtotal
}

function calculateAll() {
  // ITERATION 2
  let sumPrices = 0;
  const products = document.querySelectorAll('.product')
  products.forEach(product => {
    sumPrices += updateSubtotal(product)
  });

  const totalElementsPrices = document.querySelector('#total-value span')
  totalElementsPrices.innerText = sumPrices  
}
  
  // ITERATION 3
  //... your code goes here

// ITERATION 4

function removeProduct(event) {
  const productRemove = event.target.parentNode.parentNode;
  const trBody = productRemove.parentNode;

  trBody.removeChild(productRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {

  const productNameElemnt = document.getElementById('newName');
  const productPriceElement = document.getElementById('newPrice');

  if (productNameElemnt.value == '' && productPriceElement.value == 0) {
    alert('You must inform a valid product!');
  } 
  else if (productNameElemnt.value == '') {
    alert('You must inform a valid product name!')
  }
  else if (productPriceElement.value == 0) {
    alert('You must inform a valid price')
  }
  else {

  const productsContainer = document.querySelector('tbody');

  const newProduct = `
    <tr class="product">
      <td class="name">
        <span>${productNameElemnt.value}</span>
        </td>
      <td class="price">$<span>${productPriceElement.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
      <button class="btn btn-remove">Remove</button>
      </td>
    </tr>  
  `;
  productsContainer.innerHTML += newProduct;

const removeButtons = productsContainer.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
  button.onclick = removeProduct;
});

  productNameElemnt.value = '';
  productPriceElement.value = 0;
}
}

/// EVENTO QUE É ACINONADO QUANDO A PAGINA HTML CARREGA ////
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.onclick = calculateAll;

  const creatButton = document.getElementById('create');
  creatButton.onclick = createProduct;


});
