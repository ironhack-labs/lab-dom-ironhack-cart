// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = price * quantity;

  return product.querySelector('.subtotal span').innerHTML = subtotal;



  //... your code goes here
}
function calculateAll() {
  const total = document.querySelectorAll('.product');
  let totalGeneral = 0;
  for (let i = 0; i < total.length; i++){
    totalGeneral += updateSubtotal(total[i]);
  }
  document.querySelector('#total-value span').innerHTML = totalGeneral;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let primerParent = target.parentNode;
  let parentFinal = primerParent.parentNode;
  let removeOneProduct = parentFinal.parentNode.removeChild(parentFinal);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let nameProduct = document.querySelector(".create-product input:first-child");
  let namePrice = document.querySelector(
    ".create-product td:nth-child(2) input"
  );

  let basicRow = document.querySelector("tbody tr");
  let table = document.querySelector("tbody");

  const newRow = basicRow.cloneNode(true);
  table.appendChild(newRow);

  newRow.querySelector(".name span").innerHTML = nameProduct.value;
  newRow.querySelector(".price span").innerHTML = namePrice.value;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }
  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});
//... your code goes here