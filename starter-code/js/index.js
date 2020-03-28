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
}

let chooseProduct1 = document.querySelectorAll('.product')[1];
console.log(chooseProduct1)

function calculateAll() {
  const chooseProduct = document.querySelectorAll('.product');
  //console.log(chooseProduct)
  for (let i = 0; i < chooseProduct.length; i++) {
    const $singleProduct = document.querySelectorAll('.product')[i];
    updateSubtotal($singleProduct);
    console.log($singleProduct)
  }



  // chooseProduct.forEach(elm => {
  //   //console.log("Hola")
  //   updateSubtotal(chooseProduct[elm]);
  //   //console.log(chooseProduct[elm])
  // })
  // const $singleProduct = document.querySelectorAll('.product')[1];
  // updateSubtotal($singleProduct);
  // console.log($singleProduct)

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
