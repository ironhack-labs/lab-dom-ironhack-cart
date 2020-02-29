// ITERATION 1
let total = 0;

function updateSubtotal($products) {
  for (let $product of $products) {
    const price = $product.getElementsByClassName("price")[0].innerText.split("$")[1];
    const quantity = $product.querySelector('.quantity').querySelector('input').value;
    const subtotal = parseFloat(price) * parseFloat(quantity);
    total += subtotal;
    $product.querySelector(".subtotal").querySelector("span").innerText = subtotal.toFixed(2);
  }

  // for (let i = 0; i < products.length; i++) {
  //   const price = products[i].querySelector(".price").innerText.split("$")[1];
  //   const quantity = products[i].querySelector('.quantity').querySelector('input').value;
  //   const subtotal = parseFloat(price) * parseFloat(quantity);
  //   products[i].querySelector(".subtotal").querySelector("span").innerText = subtotal.toFixed(2);
  // }

  // products.forEach(function(row) {
  //   const price = row.getElementsByClassName("price")[0].innerText.split("$")[1];
  //   const quantity = row.querySelector('.quantity').querySelector('input').value;
  //   const subtotal = parseFloat(price) * parseFloat(quantity);
  //   row.querySelector(".subtotal").querySelector("span").innerText = subtotal.toFixed(2);
  // });
}

//ITERATION 2
function calculateAll() {
  total = 0; //start the sum again to avoid the total ++
  const $products = document.querySelectorAll('.product');
  console.log($products)
  updateSubtotal($products);
  calculateTotal();
}

// ITERATION 3
function calculateTotal() {
  document.getElementById("total-value").querySelector("span").innerText = total;
}

window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate");

  $calculateTrigger.addEventListener("click", calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
 
}

// ITERATION 5

function createProduct(event) {
  // ...
}
