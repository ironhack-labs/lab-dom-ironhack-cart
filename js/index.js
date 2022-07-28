// ITERATION 1

function updateSubtotal(product) {
  // Steps 1 & 2
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  // Step 3
  const subtotal = Number(price * quantity);
  // Step 4
  const subtotalElement = product.querySelector('.subtotal span');
  // Step 5
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  const productList = document.querySelectorAll('.product');

  let total = 0;
  productList.forEach((singleProduct) => {
    total += updateSubtotal(singleProduct);
  });

  // ITERATION 3
 
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let tbody = document.getElementById("table-body");
  console.log(tbody);
  let removedProduct = document.querySelector(".product");
  console.log(removedProduct);
  tbody.removeChild(removedProduct);
}

// ITERATION 5



function createProduct() {
 let newRow = document.createElement("tr");
 newRow.setAttribute("class", "product");
 
 let productName = document.createElement("td");
 productName.setAttribute("class", "name");
 let productNameSpan = document.createElement("span");
 productNameSpan.innerHTML = QUE NARISES METO AQUI;
 productName.appendChild(productNameSpan);
 
 let productPrice = document.createElement("td");
 productPrice.setAttribute("class", "price");
 let productPriceSpan = document.createElement("span");
 productPriceSpan.innerHTML = QUE NARISES METO AQUI;
 productPrice.appendChild(productPriceSpan);


 let productQuantity = document.createElement("td");
 productQuantity.setAttribute("class", "quantity");
 let productSubtotal = document.createElement("td");
 productSubtotal.setAttribute("class", "subtotal");
 let productRemoveBtn = document.createElement("td");
 productRemoveBtn.setAttribute("class", "action");


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeAProductBtn = document.getElementById('remove');
  removeAProductBtn.addEventListener('click', removeProduct);

  const createAProductBtn = document.getElementById('create');
  createAProductBtn.addEventListener('click', createProduct);
});


