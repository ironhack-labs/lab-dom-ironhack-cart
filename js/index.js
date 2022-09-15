// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const unitPrice = parseFloat(product.querySelector(".price span").innerText);
  const isQuantiy = product.querySelector(".quantity input").valueAsNumber;
  let subtotalPrice =  unitPrice * isQuantiy;
  product.querySelector(".subtotal span").innerText = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  const allProductsCopy = [...allProducts];
  let totalPrice = 0;
  // ITERATION 3
  //... your code goes here
  allProductsCopy.forEach(element => {
    totalPrice += parseFloat(updateSubtotal(element));
  });
  document.getElementById("total-value").querySelector("span").innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  let nodeToRemove = target.parentNode.parentNode;
  nodeToRemove.remove();
  calculateAll();
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}
const removeProd = document.querySelectorAll('.product');
 
removeProd.forEach(element => {
  const btnRemove = element.querySelector('.btn-remove');
  //console.log(removeProd);
  btnRemove.addEventListener('click', (ev) => {
     removeProduct(ev);
   }); 
});
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
