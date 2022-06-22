// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceNum = +price.innerText;

  const quantity = product.querySelector('.quantity input');
  const quantityNum = +quantity.value;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = priceNum * quantityNum;

  return priceNum * quantityNum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");
  const allProductsArr = [...allProducts]; 
  let sum = 0;
  allProductsArr.forEach( product => { 
    sum += updateSubtotal(product);
  });

  // ITERATION 3

  const total = document.querySelector('#total-value span');
  total.innerText = sum;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  const productParent = product.parentNode;

  productParent.removeChild(product);

}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(".create-product .product-name");

  const productPrice = document.querySelector(".create-product .product-price");
  

  const table = document.querySelector("#cart tbody");
  const product = `<tr class="product">
  <td class="name">
    <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`;

  table.innerHTML += product;

  const allRemoveButtons = document.getElementsByClassName("btn-remove");
  const allRemoveButtonsArr = [...allRemoveButtons]; 

  allRemoveButtonsArr.forEach( removeButton => { 
    removeButton.addEventListener('click', removeProduct);
  });

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveButtons = document.getElementsByClassName("btn-remove");
  const allRemoveButtonsArr = [...allRemoveButtons]; 

  allRemoveButtonsArr.forEach( removeButton => { 
    removeButton.addEventListener('click', removeProduct);
  });

  const createProductButton = document.getElementById("create");
  createProductButton.addEventListener('click', createProduct);
});
