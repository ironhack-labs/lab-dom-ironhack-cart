// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = product.querySelector('.subtotal span');
  let subTotalPrice = price * quantity
  subTotal.innerHTML = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  const allProducts = document.querySelectorAll('.product');

  let totalSum = 0;


  allProducts.forEach((element) => {
      totalSum += updateSubtotal(element);
  });

  let myArray = [1,2,3];
  let totalSum2 = 0;

  let PageTotalSum = document.querySelector('#total-value span');
  PageTotalSum.innerHTML = totalSum;
}


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const child = event.currentTarget.parentNode.parentNode;
  const parent = child.parentNode;
  parent.removeChild(child);

}

function createProduct(target) {

  const ProductName = document.getElementById('ProductName').value;
  const ProductPrice = document.getElementById('ProductPrice').value;

  const ProductList = document.getElementById('ProductList');

  const ProductTemplate = document.querySelector('.product');

  let newNode = ProductTemplate.cloneNode(true);

  newNode.getElementsByTagName('span')[0].innerHTML = ProductName;
  newNode.getElementsByTagName('span')[1].innerHTML  = ProductPrice;

  document.querySelector('.product').parentNode.appendChild(newNode);

  document.getElementById('ProductName').value = "";
  document.getElementById('ProductPrice').value = 0;
  calculateAll();
}

window.addEventListener('load', () => {
  // Calculate prices event handler
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // remove button event handler
  const AllRemoveBtn = document.getElementsByClassName('btn-remove');

  for (let btn of AllRemoveBtn)
  {
    btn.addEventListener('click', removeProduct);
  }

  // create Product button event handler
  const CreateProductBtn = document.getElementById('create');
  CreateProductBtn.addEventListener('click', createProduct);
});
