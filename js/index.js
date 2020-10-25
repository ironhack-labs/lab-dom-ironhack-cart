
// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('#quantity').value;
  let subTotal = product.querySelector('.subtotal span');
  price = price.innerHTML
  let productPrice = price * quantity;
  subTotal.innerHTML = productPrice;
  return productPrice;


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelectorAll('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 && 3
  let totalValue = 0;
  let multipleProducts = document.querySelectorAll('.product');
  multipleProducts.forEach( elm => {
    updateSubtotal(elm);
    totalValue += updateSubtotal(elm);
  })

  let totalValueChanger = document.querySelector('#total-value span')
  totalValueChanger.innerHTML = totalValue;

}

// ITERATION 4

function removeProduct(event) {
  let target = event.currentTarget;
  console.log('The target being removed is:', target);
  let productRemoving = target.parentNode.parentNode;
  document.querySelector('#total-value span').innerHTML -= productRemoving.querySelector('.subtotal span').innerHTML
  productRemoving.parentNode.removeChild(productRemoving)
  console.log(target)

}

// ITERATION 5
function createProduct(event) {
  let target = event.currentTarget;
  console.log('The target being added is:', target);
  let productAdding = target.parentNode.parentNode;
  let newProdName, newProdPrice;
  productAdding.querySelectorAll('input').forEach(input => {
    if (input.type === "text") {
      newProdName = input.value;
    } else if (input.type === "number") {
      newProdPrice = input.value;
    }
  })
  let productCopy = document.querySelector('.product').cloneNode(true)
  productCopy.querySelector('.name span').innerHTML = newProdName;
  productCopy.querySelector('.price span').innerHTML = newProdPrice;
  document.querySelector('tbody').appendChild(productCopy)
  updateSubtotal(productCopy)
  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(elm => {
    elm.onclick = evt => {
      removeProduct(evt)
    }
  })


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createBtn = document.querySelector('#create')
  createBtn.onclick = elm => {
    createProduct(elm)
  }
  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(elm => {
    elm.onclick = evt => {
      removeProduct(evt)
    }
  })
})