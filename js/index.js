// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');

  const quantityParent = product.querySelector('.quantity');
  const quantityChildValue = quantityParent.firstElementChild.value;

  const subtotal = product.querySelector('.subtotal span');

  let priceSubtotal = price.innerText * quantityChildValue;
  return (subtotal.innerText = priceSubtotal);
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  //ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  const allProductsArray = [...allProducts];
  let allProductsSum = 0;
  allProductsArray.forEach((product) => {
    allProductsSum += updateSubtotal(product);
  });

  // ITERATION 3

  //This took me forever. Why does the below return an HTMLCollection with a length of 1?
  //const totalSpan = totalElement.getElementsByTagName('span')

  //For classes much easier :)  product.querySelector('.price span')

  const totalElement = document.getElementById('total-value');
  const totalSpan = totalElement.getElementsByTagName('span')[0];

  //This also had me confused. Why does:
  // const totalSpan = totalElement.getElementsByTagName('span')[0].innerText
  //Correctly select the span inner text, but then
  // totalSpan = allProductsSum
  //will not correctly adjust total on the page? Meaning, it has to be written so:
  totalSpan.innerText = allProductsSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
//no idea!
  const shoppingCart = document.getElementById('cart');
  const oneProduct = shoppingCart.getElementsByClassName('product');
  const td = oneProduct.getElementsByClassName('action');

  td.getParent.removeChild(target);

  // if (target) {
  //    oneProduct.parentNode.removeChild(oneProduct);
  // }

  // target.shoppingCart.removeChild(oneProduct);

  //cart -> "product" -> "action" -> 'btn-remove"
  //  removeChild(child);
}

// element.style.display = "none";

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  const removeBtnArray = [...removeBtn];

  removeBtnArray.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});
