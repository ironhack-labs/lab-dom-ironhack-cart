// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceContent = price.innerHTML;
  const quantityContent = quantity.value;

  let finalProduct = priceContent * quantityContent;

  const subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = `${finalProduct}`;

  return finalProduct;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');

  let subTotal;
  let total = 0;

  for(let i of products){
    subTotal = updateSubtotal(i);
    total += subTotal;
  }

  // ITERATION 3
  //... your code goes here
  const totalProducts = document.querySelector('h2 span');

  totalProducts.innerHTML = `${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

    const buttonParent = target.parentNode;
    const tableRow = buttonParent.parentNode;
    const tbodyTable = tableRow.parentNode;
  
    tbodyTable.removeChild(tableRow);
  
    calculateAll();
  };
  


// ITERATION 5

function createProduct() {
  //... your code goes here
  const name = document.querySelector('.create-product input[type="text"]');
  const price = document.querySelector('.create-product input[type="number"]');
  const tBody = document.querySelector('tbody');

  const getName = name.value;
  const getPrice = price.value;

  // console.log(getName);
  // console.log(getPrice);

  const newElement = document.createElement('tr');
  newElement.classList.add('product');
  newElement.innerHTML = `
    <td class="name">
      <span>${getName}</span>
    </td>
    <td class="price">$<span>${getPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

    tBody.after(newElement);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const button = document.getElementById('create');
  button.addEventListener("click", createProduct);
  
  const removeBtn = document.querySelectorAll('.btn');
  
  removeBtn.forEach((removeButton) => {
    removeButton.addEventListener('click', removeProduct);
  });

});
