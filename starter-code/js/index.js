// var newProduct = new Product();
var $cart = document.querySelector('#cart tbody');
var calcBtn = document.getElementById('calc');
var delBtn = document.querySelectorAll('btn-delete')

function updateSubtot(product) {
  // Iteration 1.1
    let unitPrice = product.querySelector(".pu span").textContent;
    let quantity = product.querySelector(".qty input").value;
    let subTotal = (unitPrice * quantity);

    product.querySelector(".subtot span").textContent = `${subTotal.toFixed(2)}`;
    return subTotal;
}

// function addProduct(product) {
//   $cart.
// }

function deleteProd(e) {
  // console.log(e.currentTarget) // currentTarget / target should work, just check
  let parent = e.target.parentElement.parentElement;
  // console.log(parent);
  parent.remove();
  // calcAll();
}

function calcAll() {
  var products = document.querySelectorAll("tr.product")

  // Iteration 1.2
  let total = 0;
  products.forEach(product => {
    let subTotal = updateSubtot(product)
    total += subTotal;  
  });

  document.getElementById("totalPrice").textContent = `${total.toFixed(2)}`;
}


calcBtn.onclick = calcAll;

$cart.querySelectorAll(".btn-delete").forEach(eachDel => {
  eachDel.onclick = deleteProd;
})