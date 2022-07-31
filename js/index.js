// ITERATION 1

function updateSubtotal(product) {
  // Steps 1 & 2
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  // Step 3
  const subtotal = Number(price * quantity);
  // Step 4
  const subtotalElement = product.querySelector('.subtotal span');
  // Step 5
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  const productList = document.querySelectorAll('.product');

  let total = 0;
  productList.forEach((singleProduct) => {
    total += updateSubtotal(singleProduct);
  });

  // ITERATION 3
 
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
 //mi forma
  let tbody = document.getElementById("tbody");
  let removedProduct = document.querySelector(".product");
  tbody.removeChild(removedProduct);

  //clase
  // const test = event.currentTarget;
  // console.log(event.currentTarget);
  // const removeChildVariable = test.parentNode.parentNode;
  // const parent = removeChildVariable.parentNode;
  // parent.removeChild(removeChildVariable);

  calculateAll();
}

// // ITERATION 5

function createProduct() {
 let newProduct = document.querySelector('#newProduct');
 let newPrice = document.querySelector('#newPrice');

 const addToTheList = document.getElementById('tbody');
 addToTheList.innerHTML += `
 <tr class="product">
        <td class="name">
          <span>${newProduct.value}</span>
        </td>
        <td class="price">$<span>${newPrice.value}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>
 `;

  //Clear the input fields
  newProduct.value = 'Product Name';
  newPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.querySelector('#calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeAProductBtn = document.querySelector('.btn-remove');
  removeAProductBtn.addEventListener('click', removeProduct);

  //clase
  // const removeBtn = document.querySelectorAll('.btn-remove');
  // removeBtn.forEach((standards) => (standards.onclick = removeProduct));

  const createAProductBtn = document.getElementById('create');
  createAProductBtn.addEventListener('click', createProduct);
});


