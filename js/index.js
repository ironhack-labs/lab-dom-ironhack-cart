// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElm = product.querySelector(".price span");
  const quantityElm = product.querySelector(".quantity input");
  const priceV = parseFloat(priceElm.innerText);
  const quantityV = quantityElm.value;
  const subtotalV = priceV * quantityV; 
  const subtotalElm = product.querySelector(".subtotal span");
  subtotalElm.innerHTML = subtotalV;
  return subtotalV
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const productsElm = document.querySelectorAll(".product");
  let total = 0;
  const totalH2 = document.querySelector("#total-value span")

  productsElm.forEach( product => {
    total += updateSubtotal(product);
    totalH2.innerHTML = total;
    console.log(total)
    console.log(totalH2)
  })
  // ITERATION 3
  //... your code goes here
  return total
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
const newProdName = document.querySelector('input [type=text]').value;
const newPrice = document.querySelector('input [type = number]').value;

const newProduct = document.createElement('tr');

const newProductParent = document.querySelector('tbody');
newProductParent.appendChild(newProduct);
newProduct.className = 'product';


console.log(newProduct.innerHTML)



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll(".action");
  removeButtons.forEach((removeBtn) => {
    removeBtn.addEventListener('click', removeProduct);

  const addProduct = document.getElementById("create");
  addProduct.addEventListener("click", createProduct)
  
})

  
});

console.log(document.querySelectorAll(".action .btn-remove"))