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

  const removeElemnts = document.querySelectorAll(".btn-remove");
  removeElemnts.forEach(elm => {
    elm.addEventListener('click', productRemoveListener);
  })

  const addNewProduct = document.getElementById('create')
  addNewProduct.addEventListener('click', createProduct);
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
  let newProduct = document.querySelector(".product")
  let clone = newProduct.cloneNode(true);
  document.querySelector("tbody").appendChild(clone);
  removeButton = clone.querySelector(".btn-remove");
  removeButton.addEventListener('click', productRemoveListener);

  let newProductName = document.querySelector('tfoot input').value
  let addProductName = document.querySelector('.name span');
  addProductName.innerHTML = newProductName;

  let newProductPrice = document.querySelectorAll('tfoot input')[1].value
  let addProductPrice = document.querySelector('.price span');
  addProductPrice.innerHTML = newProductPrice;

  let cleanNameContent = document.querySelectorAll('tfoot input')[0].value = "";
  let cleanPriceContent = document.querySelectorAll('tfoot input')[1].value = "";


}
