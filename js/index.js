// ITERATION 1
// Crear una funcion para obtener el texto y valor del subtotal.


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

// ve al span de la etiqueta clase y aloja el texto en priceValue
  const price = product.querySelector('.price span')
  let priceValue = price.innerHTML
  console.log(priceValue)

// ve al input de la etiqueta quantity y aloja el valor en inputValue
  const quantity = product.querySelector('.quantity input')
  let inputValue = quantity.value
  console.log(inputValue)

//multiplica el priceValue y el inputValue en subTotal
  let subTotal = priceValue * inputValue
  console.log(subTotal)

//pon en subTotalInput el texto del span de la classe subtotal que tomará como valor el subtotal
  let subTotalInput = product.querySelector('.subtotal span')
  subTotalInput.innerHTML = subTotal

  return subTotal

}



// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// end of test

// ITERATION 2
function calculateAll() {

  const allProducts = document.querySelectorAll('.product')
  console.log(allProducts)

  allProducts.forEach(element => {
    let sum = 0
    return sum = updateSubtotal(element)
    console.log(allProducts)
  });


  // ITERATION 3
  const total = document.querySelectorAll('.subtotal span')
  let totalArr = []
  let totalVal = 0
  
  for (let i = 0; i < total.length; i++) {
    totalArr.push(total[i].innerText)
  }
  
  for (let j = 0; j < totalArr.length; j++) {
    totalVal += parseInt(totalArr[j])
  }

  let finalTotal = document.querySelector("#total-value span")
  finalTotal.innerText = totalVal

}














// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  document.addEventListener('btn-remove', click)
  
  console.log(removeProduct(click))
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
