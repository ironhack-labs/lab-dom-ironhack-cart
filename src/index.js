// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const result = price * quantity;

  product.querySelector(".subtotal span").innerHTML = result;

  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  [...document.getElementsByClassName("product")].forEach(element => {
    total += updateSubtotal(element);
  });

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const product = document.querySelector(".product").cloneNode(true);
  const tbody = document.querySelector("tbody");
  const productName = document.querySelector("#productName input");
  const productPrice = document.querySelector("#productPrice input");

  if (productName.value === "") {
    productName.style.borderColor = "red";
    return;
  }
  
  tbody.appendChild(product);
  product.querySelector(".name span").innerHTML = productName.value;
  product.querySelector(".price span").innerHTML = productPrice.value;
  product.querySelector(".btn-remove").addEventListener("click", removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  [...document.querySelectorAll(".btn-remove")].forEach(element => {
    element.addEventListener("click", removeProduct);
  })

  document.getElementById("create").addEventListener("click", createProduct);
});
