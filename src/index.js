// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = Number(product.querySelector('.price span').innerText);

  const quantity = Number(product.querySelector('.quantity input').value);

  const totalProduct = price * quantity;

  const subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = totalProduct

  return totalProduct;




  //... your code goes here
}

function calculateAll() {
  let total = 0
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');

  allProducts.forEach((product) => {

    total += updateSubtotal(product);

  });

  // ITERATION 3
  document.querySelector('#total-value span').textContent = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.closest('.product');
  productRow.remove();
}

// ITERATION 5

function createProduct(event) {
  const productName = document.querySelector('.create-product input[type="text"]');
  const price = document.querySelector('.create-product input[type="number"]');
  const produtsContainer= document.querySelector('tbody');

  //template
  const template = document.createElement('template');
  template.innerHTML =
    `<tr class="product">
          <td class="name">
            <span>${productName.value}</span>
          </td>
          <td class="price">$<span>${price.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
    </tr>`
    const newContent = template.content.cloneNode(true);

    const removeButton = newContent.querySelector('.btn-remove');
    removeButton.addEventListener('click', removeProduct);
    
    produtsContainer.append(newContent)
    
    productName.value =""
    price.vale =""


  console.log(event.target)
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteProductBtns = document.querySelectorAll('.btn-remove');
  deleteProductBtns.forEach((button) => button.addEventListener('click', removeProduct));
});

const addProductBtn = document.getElementById('create');
addProductBtn.addEventListener('click', createProduct)