// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const listProduct = [...document.getElementsByClassName("product")];
  listProduct.forEach(updateSubtotal);
    

  // ITERATION 3
  //... your code goes here
  const sumSubtotal = [...document.querySelectorAll('.product .subtotal span')]
    .map((price) => Number(price.textContent))
    .reduce((acc, curValue) => acc += curValue);
  const cellTotal = document.querySelector('#total-value span');
  cellTotal.innerHTML = sumSubtotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  document.querySelector('tbody').removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("create product");
  //Récupérer le nom et le prix du produit saisi par l'utilisateur
  let newProductName = document.querySelector('tfoot tr td input').value;
  let newProductPriceTemp = document.querySelector('tfoot tr td').nextElementSibling; 
  let newProductPrice = newProductPriceTemp.querySelector('input').value;
  // Dupliquer la première ligne
  const newLine = document.querySelector('tbody .product').cloneNode(true);
  // Ajouter la nouvelle ligne au tableau
  document.querySelector('tbody').appendChild(newLine);
  // Importer les données récupérer dans la nouvelle ligne + mise à 0 quantité et sous-total
  newLine.querySelector('.name span').textContent = newProductName;
  newLine.querySelector('.price span').innerHTML = newProductPrice;
  newLine.querySelector('.quantity input').value = 0;
  newLine.querySelector('.subtotal span').innerHTML = 0;
  //Réinitialiser la ligne Create product
  document.querySelector('tfoot tr td input').value ="";
  newProductPriceTemp.querySelector('input').value ="";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const buttonsRemove = [...document.querySelectorAll('#cart .btn-remove')];
  buttonsRemove.forEach(function(button) {
    button.addEventListener('click', removeProduct);
  });
  const createBtn = document.querySelector('tfoot .btn');
  createBtn.addEventListener('click', createProduct);
    //... your code goes here
});
