// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceDOM = product.querySelector(".price span");
  console.log(priceDOM.innerText)

  const quantityDOM = product.querySelector(".quantity input");
  console.log(quantityDOM.value)

  const subtotal = (priceDOM.innerText) * (quantityDOM.value)
  console.log(subtotal)

  const subtotalDOM = product.querySelector(".subtotal span");

  subtotalDOM.innerText = subtotal
   
  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const allProduct = document.querySelectorAll(".product")
  let totalDOM = 0;

  allProduct.forEach(eachProduct => {
    totalDOM  += updateSubtotal(eachProduct) 
    
  });

  
  // ITERATION 3
  const totalProdDOM = document.querySelector("#total-value span");

  totalProdDOM.innerText = totalDOM

  


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //target.parentNode.removeChild();
  
   //let parentDOM = target.parentNode
   //parentDOM.remove()

  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((eachBtnDOM) => {
    eachBtnDOM.addEventListener("click", removeProduct )
})
});
