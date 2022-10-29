// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector(`.price span`).innerHTML);
  const quantity = parseFloat(product.querySelector(`.quantity input`).value);
  const subtotal = product.querySelector(`.subtotal span`);

  subtotal.innerHTML = price * quantity;
  return price * quantity;

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
  // agarrar todos los elementos con la clase product
  //iterar sobre ese arr y sacarles su subtotal con updateSubtotal()
  //guardar es en una variable total
  //updatear elemnto total

  const allProducts = document.getElementsByClassName(`product`);
  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    total += updateSubtotal(allProducts[i]);
  }

  const totalLabel = document.querySelector(`#total-value span`);
  console.log('total', totalLabel);
  totalLabel.innerHTML = total;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log(typeof target)
  console.log(target);
  const parentTarget = document.parentNode
  console.log(parentTarget);
  // let node = document.getElementById('nested');
  // if (node.parentNode) {
  //   node.parentNode.removeChild(node);
  // }

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  console.log("Creacion de producto exitoso");
  

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName(`btn-remove`);
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener(`click`, removeProduct);
  }

  const createP = document.getElementById(`create`);
  createP.addEventListener(`click`, createProduct)


  //... your code goes here
});
