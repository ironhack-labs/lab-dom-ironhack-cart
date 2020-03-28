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



function calculateAll() {
  const chooseProduct = document.querySelectorAll('.product');
  let elementTotalValue = document.querySelector('#total-value span');
  let totalValue = 0
  chooseProduct.forEach(elm => {
    totalValue += updateSubtotal(elm)
  })
  let totalText = totalValue.toString();
  elementTotalValue.innerHTML = totalText;
}


window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate')
  $calculateTrigger.addEventListener('click', calculateAll);
  let removeElemnts = document.querySelectorAll(".btn-remove");
  console.log(removeElemnts)
  removeElemnts.forEach(elm => {
    elm.addEventListener('click', productRemoveListener);
  })
});


// ITERATION 4

function productRemoveListener(event) {
  let node = event.currentTarget.parentNode.parentNode;
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

// ITERATION 5

function createProduct(event) {
  // ...
}
