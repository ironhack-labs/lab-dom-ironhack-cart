// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let innerPrice = price.textContent;
  const quantity = product.querySelector('.quantity input');
  let innerQuantity = quantity.value;
  let calc = innerPrice * innerQuantity;
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = calc;
  return calc;
};

function calculateAll() {

  // ITERATION 2
  console.log("Hello, I am the start of Interation 2!")
  let arrayProducts = document.querySelectorAll(".product")
  console.log(arrayProducts);
  let sum = 0;
  for (let i = 0; i < arrayProducts.length; i++) {
    sum += updateSubtotal(arrayProducts[i]);
  };

  // ITERATION 3

  let total = document.querySelector('#total-value span');
  total.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  /* ------------------------------- */

/*const row = target.parentNode.parentNode
  const parent = row.parentNode
  parent.removeChild(row);
  calculateAll();

  target.tbody.removeChild(target.tr) */
 /*  target.parentNode */

  /* ------------------------------- */

  let targetParent = target.parentNode; // tr
  let targetGrandparent = target.targetParent; // tbody

  targetGrandparent.removeChild(targetParent);
  targetParent.remove();
}

/* targetParent.removeChild(targetChild); */

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const arrRemoveProductsBtn = document.querySelectorAll(".btn btn-remove");
  for (let i = 0; i < arrRemoveProductsBtn.length; i++ ) {
    arrRemoveProductsBtn[i].addEventListener('click', removeProduct);
  }
  
});

