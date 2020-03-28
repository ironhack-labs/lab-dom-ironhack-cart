// ITERATION 1


function updateSubtotal($product) {
  //console.log($product)
  let elementPrice = $product.querySelector('.price span').textContent;
  let price = parseInt(elementPrice)
  let elementQuantity = $product.getElementsByTagName('input')[0].value;
  let quantity = parseInt(elementQuantity)
  let elementSubTotal = $product.querySelector('.subtotal span');
  let subTotal = (price * quantity);
  let subTotalText = subTotal.toString();
  elementSubTotal.innerHTML = subTotalText;
  return subTotal
}

let totalValue = document.querySelector('#total-value span').textContent;
console.log(totalValue)

function calculateAll() {
  const chooseProduct = document.querySelectorAll('.product');
  let elementTotalValue = document.querySelector('#total-value span');
  let totalValue = 0
  chooseProduct.forEach(elm => {
    totalValue += updateSubtotal(elm)
    console.log(totalValue)
  })
  let totalText = totalValue.toString();
  elementTotalValue.innerHTML = totalText;
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate')

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}
