// ITERATION 1

function updateSubtotal(product) {
  // debugger
  // console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity').firstElementChild.value;
  // console.log(price);
  // console.log(quantity);
  let subTotal = Number(price * quantity);
  // console.log(subTotal);
  let subTotalInHtml = product.querySelector(".subtotal span");
  // console.log(subTotalInHtml);
  subTotalInHtml.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // debugger
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const arrayProducts = document.querySelectorAll('.product');
  // ITERATION 3
  //... your code goes here /*  aqui recoremos el array de rows y lo sumamos por medio del subtotal */
  let total = 0;
  arrayProducts.forEach((eachRowElement) => {
    total += updateSubtotal(eachRowElement)
  })
  // console.log(total);
  console.log(typeof total);
  let totalInHtml = document.querySelector('#total-value span');
  // console.log(totalInHtml);
  totalInHtml.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
