// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  // Getting the DOM elements we'll need
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  // Code below is me working through the problem

  // let pr = price.innerHTML;
  // let qu = quantity.value;
  // let su = subtotal.innerHTML;
  // console.log('pr: ', pr);
  // console.log('qu: ', qu);
  // console.log('su: ', su);
  // const sub = pr * qu;

  // Final product, doing what the function is supposed to do
  subtotal.innerHTML = price.innerHTML * quantity.value;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  // console.log(allProducts);
  let productsArr = [...allProducts];
  // console.log(productsArr[0]);
  productsArr.forEach(updateSubtotal);
  // ITERATION 3
  const total = document.querySelector('#total-value span');
  // console.log(total.innerHTML);
  let totalPrice = 0;
  for (let i = 0; i < productsArr.length; i++) {
    let prod = productsArr[i].querySelector('.subtotal span');
    totalPrice += +(prod.innerHTML);
  }
  total.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  // console.log('The target in remove is:', target);
  let deletedItem = target.parentNode.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // console.log('Creating product!');
  const newProductValues = document.querySelector('.create-product');
  const name = newProductValues.querySelector('input[type="text"]').value;
  // console.log('name: ', name);
  const price = newProductValues.querySelector('input[type="number"]').value;
  const html = `<tr class = "product">
    <td class = "name">
      <span>${name}</span>
    </td>
    <td class = "price">
      $<span>${price}</span>
    </td>
    <td class = "quantity">
      <input type = "number" value = "0" min = "0" placeholder = "Quantity" />
    </td>
    <td class = "subtotal">
      $<span>0</span>
    </td>
    <td class = "action">
      <button class = "btn btn-remove">Remove</button>
    </td>
  </tr>`;
  const newProduct = document.querySelector('tbody').insertAdjacentHTML('beforeend', html);

  newProductValues.querySelector('input[type="text"]').value = '';
  newProductValues.querySelector('input[type="number"]').value = 0;

  buttonCheck();
}

function buttonCheck() {
  const removeProductButtons = document.getElementsByClassName('btn-remove');
  let removeProductBtns = [...removeProductButtons];
  removeProductBtns.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  buttonCheck();
});
