// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector("input");
  const subtotal = product.querySelector(".subtotal span");
  var calculation = Number(price.innerText) * Number(quantity.value);
  subtotal.innerHTML = calculation;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll(".product");
  // end of test

  // ITERATION 2
  //... your code goes here
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here
  const subtotal = document.querySelectorAll(".subtotal span");
  const total = document.querySelector("#total-value span");
  var result = 0;
  for (let i = 0; i < subtotal.length; i++) {
    result += Number(subtotal[i].innerHTML);

  }
  total.innerHTML = result;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  let parentTarget = target.parentNode.parentNode;
  parentTarget.parentNode.removeChild(parentTarget);
  calculateAll();
}

// ITERATION 5


function createProduct() {
  //... your code goes here
  const prodName = document.getElementById("new-product-name");
  const cartBody = document.querySelector('#cart tbody');
  const price = document.getElementById("product-price");
  
  cartBody.innerHTML += `<tr class="product">
  <td class="name">
    <span>${prodName.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">remove</button>
  </td>
</tr>`
const removeBtn = document.querySelectorAll('.btn-remove');
    
removeBtn.forEach((button) => {
  button.addEventListener("click", removeProduct);
});


}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
    
  removeBtn.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);
  
});

  

