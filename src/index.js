// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
    console.log('Calculating subtotal, yey!');

    let button = document.getElementById("calculate");
  button.onclick = function(){
    window.alert('Calculate prices clicked');
  };

    const price = product.querySelector('.price span');   
    const quantity = product.getElementsByTagName('input')[0];   
    const subTotal = product.querySelector('.subtotal span');    
    let subTotalCount = price.innerHTML*quantity.value;    
    subTotal.innerHTML = `${subTotalCount}`;
  }


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName("product");
  let total = 0;
  for(let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    const subTotal = allProducts[i].querySelector('.subtotal span');
    total += parseInt(subTotal.innerHTML); }
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
  //... your code goes here
}
  const removeElement = document.getElementsByClassName("btn-remove");

  for (let j = 0; j < removeElement.length; j++) {
    removeElement[j];
    removeElement[j].addEventListener('click', removeProduct);
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
