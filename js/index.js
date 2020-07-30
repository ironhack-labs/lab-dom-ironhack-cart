// ITERATION 1

function updateSubtotal(product) {
  let priceElement = product.querySelector('.price span');
  let quantityElement = product.getElementsByTagName('input')[0];

  let price = priceElement.innerHTML;
  let quantity = quantityElement.value;

  let subtotalPrice = price * quantity;

  // console.log(price);
  // console.log(quantity);
  // console.log(subtotalPrice);

  let subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotalPrice;

  return subtotalPrice;

  // console.log(subtotalElement);

  //... your code goes here
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let listOfProductsElement = [...document.getElementsByClassName("product")];
  // console.log(listOfProductsElement);
  // let priceElement;
  // let quantityElement;
  // let price;
  // let quantity;
  // let subtotalPrice;
  // let subtotalElement;
  let totalPrice = 0;
  let pricePosition;
  let buttons;


  for (let i = 0; i < listOfProductsElement.length; i++) {
    updateSubtotal(listOfProductsElement[i]);
    totalPrice += updateSubtotal(listOfProductsElement[i]);
    pricePosition = document.querySelector('#total-value span');

    // priceElement = document.querySelectorAll('.price span')[i];
    // quantityElement = document.getElementsByTagName('input')[i];
    // price = priceElement.innerHTML;
    // quantity = quantityElement.value;
  
    // subtotalPrice = price * quantity;
  
    // // console.log(price);
    // // console.log(quantity);
    // // console.log(subtotalPrice);
  
    // subtotalElement = document.querySelectorAll('.subtotal span')[i];
    // subtotalElement.innerHTML = subtotalPrice;

  }


  // ITERATION 3
  //... your code goes here
  pricePosition.innerHTML = totalPrice;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let targetParent = target.parentNode.parentNode;
  targetParent.parentNode.removeChild(targetParent);
  calculateAll();
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const newProduct = document.querySelector('[placeholder="Product Name"');
  const newValue = document.querySelector('[placeholder="Product Price"]');
  const placeToCreateProduct = document.querySelector('tbody');
  const newListItem = `
  <tr class="product">
  <td class="name">
    <span>${newProduct.value}</span>
  </td>
  <td class="price">$<span>${newValue.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
  `;

  calculateAll();

  placeToCreateProduct.innerHTML += newListItem;

  const ButtonToRemove = placeToCreateProduct.querySelector('.btn-remove');
  ButtonToRemove.addEventListener('click', removeProduct);

  newProduct.value = '';
  newValue.value = 0;

}

window.addEventListener('load', () => {
  //Calcular o preço total dos produtos

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remover produtos

  // buttonsToBeRemoved = document.querySelectorAll('.btn-remove');
  // buttonsToBeRemoved.forEach(button => {
  //   button.addEventListener('click', removeProduct);
  // });

  //Adicionar produtos

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);

  //... your code goes here
});
