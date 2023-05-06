// ITERATION 1

function updateSubtotal(product) {
 console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span').textContent = quantity * price;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  // ITERATION 2
  let totalProducts = 0;
  products.forEach(element => {
    totalProducts += updateSubtotal(element);
  });
  // ITERATION 3
  document.querySelector('#total-value span').textContent = totalProducts;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let nodoRow = target.parentNode.parentNode;
  let tbody = nodoRow.parentNode;
  tbody.removeChild(nodoRow);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const products = document.querySelector('tbody');
  const newProduct = document.querySelector('.create-product');
  let nameProduct = newProduct.querySelector('.in1').value;
  let priceProduct = newProduct.querySelector('.in2').value;

    const itemHtml = `
      <tr class="product">
        <td class="name">
          <span>${nameProduct}</span>
        </td>
        <td class="price">$<span>${priceProduct}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity"/>
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td> 
      </tr>
    `;
  products.innerHTML += itemHtml;  
  nameProduct = newProduct.querySelector('.in1').value = "";
  priceProduct = newProduct.querySelector('.in2').value = 0;
}


window.addEventListener('load', 'click', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProducts = document.getElementsByClassName('btn-remove');
  for(let i = 0; i < removeProducts.length; i++){
    removeProducts[i].addEventListener('click', removeProduct);
  }

  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);

  //... your code goes here
});
