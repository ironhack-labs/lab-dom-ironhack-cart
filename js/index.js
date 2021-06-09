// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector('price span');
  const priceValue = priceElement.innerText;

  const quantityElement = product.querySelector(.'quantity selector');
  const quantityValue = quantityElement.value;

  const subTotalValue = priceValue * quantityValue;
  const subTotalElement = product.querySelector(.'subtotal span');

  subTotalElement.innerText = subTotalValue;

  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  
  const allProducts = document.getElementsByClassName('product');

  const allProductsArr = [...allProducts];

  let total = 0;

  allProductsArr.forEach((product) =>{
    total += updateSubtotal;
  });

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  target.parentElement.parentElement.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputList = document.querySelectorAll('.create-product input');

  const nameElementValue = inputList[0];
  const priceElementValue = inputList[1];

  console.log(nameElementValue + "" + priceElementValue);

  let newRow = docume.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = <td class = "name">;
  <span> ${nameElementValue}</span>
  </td>
  <td class = "price">$<span>${priceElementValue}</span></td>
  <td class = "quantity">
      <input type = "number" value = "0" min = "0" placeholder="Quantity"/>
  </td>
  <td class= "subtotal">$<span>0</span></td>
  <td class = "action" >
      <button class="btn btn-remove">Remove</button>
  </td>;

  const tabbleElement = document.querySelector('tbody');
  console.log(tabbleElement);
  tabbleElement.appendChild(newRow);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtns = document.querySelectorAll('.action button');
  const allRemoveBtnsArr = [...allRemoveBtns];

  allRemoveBtnsArr.forEach((buttons) => {
    button.addEventListener('click', removeProduct);
  })
});

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
