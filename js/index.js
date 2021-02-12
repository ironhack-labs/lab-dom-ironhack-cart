// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let renderedValue = quantity.value;
  let inputPrice = price.innerText
  // console.log(renderedValue)
  // console.log(inputPrice)
  let calcSubTotalPrice = inputPrice * renderedValue
  // console.log(calcSubTotalPrice)
  subTotal = product.querySelector(".subtotal span");
  // console.log(subTotal)
  return subTotal.innerHTML = calcSubTotalPrice
}

function calculateAll() {

  // ITERATION 2
  let products = [...document.getElementsByClassName("product")]
  // console.log(products)
  // products.forEach(product => updateSubtotal(product))
  const subTotalEachProd = products.forEach((product) =>
    updateSubtotal(product)
  )

  
  // ITERATION 3
  //... your code goes here
  let productOneSubTotal = document.querySelector(".subtotal span")
  let productTwoSubTotal = document.querySelector(".product:nth-child(2) .subtotal span");
  let total = document.querySelector("#total-value span")
  // console.log(productOneSubTotal, productTwoSubTotal)
  let totalFinal = productOneSubTotal + productTwoSubTotal
  // console.log(totalFinal) ==> ça ne marche pas :-(
    total.innerHTML = totalFinal 
    //ça me donne un truc trop bizarre, bref, l'itération n'est pas terminée :-(


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
