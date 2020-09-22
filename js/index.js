// ITERATION 1

function updateSubtotal(product) {
  console.log(`Calculating subtotal, yey!`);

  const price = product.querySelector(`.price span`);
  const quantity = product.querySelector(`.quantity input`);

  const subtotal = product.querySelector(`.subtotal span`);

  subtotal.innerHTML = quantity.value * price.innerText;
  return value = subtotal.innerHTML


  
}


// ITERATION 2

function calculateAll() {
 const allProducts = document.getElementsByClassName(`product`);
  let total = 0
  for (let i=0; i<allProducts.length; i++){
    updateSubtotal(allProducts[i])
    total = Number(total) + Number(updateSubtotal(allProducts[i]))
  }

 // ITERATION 3

 const totalSum = document.querySelector(`#total-value span`)
 totalSum.innerText = total


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let removeBtn = document.querySelectorAll('.btn btn-remove')

   removeBtn.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            console.log('Delete clicked')
            let myItem = event.target.parentNode
            myItem.parentNode.removeChild(myItem)
        })
    })
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
