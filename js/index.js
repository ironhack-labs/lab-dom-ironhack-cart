// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = price.innerText * quantity.value
  return value = subtotal.innerHTML
}

function calculateAll() {
 
  let myProducts = document.querySelectorAll('.product')
  myProducts.forEach((product) =>{
      updateSubtotal(product)
    })

  const totalPrice = document.querySelector("#total-value span");
  const sub = document.querySelectorAll(".subtotal span")
  let sumTotal = 0

  sub.forEach((product)=>{
      // console.log(product.innerText)
      sumTotal = Number(product.innerText) + sumTotal
      })
   totalPrice.innerHTML = sumTotal
  //  console.log(sumTotal)

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
  const allRemoveButtons = document.querySelectorAll(".btn btn-remove")
  myProducts.forEach(()=>{
      allRemoveButtons.addEventListener('click', removeProduct)
  })
  //... your code goes here
});
