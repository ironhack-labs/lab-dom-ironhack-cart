// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let multi = price * quantity

  product.querySelector('.subtotal span').innerHTML = multi


  console.log(multi)

}

function calculateAll() {

  const productArr = document.querySelectorAll('.product')

  console.log(productArr)

  // Actualiamos el DOM
  productArr.forEach(elm => updateSubtotal(elm))

  // Buscar de nuevo el price de los elemento y sumarlos

  let total = 0;
  // POR CADA uno de los subtatles, sumamos a total y luego devolvemos total

  console.log(productArr);

  productArr.forEach(element => {
    const value = element.querySelector('.subtotal span').innerHTML;

    total = parseInt(value) + total
  })

  document.querySelector('#total-value span').innerHTML = total





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
