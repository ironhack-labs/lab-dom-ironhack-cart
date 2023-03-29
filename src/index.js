// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  console.log(price);
  const quantity= product.querySelector(".quantity input").value;
  console.log(quantity);
  let subtotal= price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  return  subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  const multipleProducts = document.querySelectorAll(".product")
  let total = 0

  for (let index = 0; index < multipleProducts.length; index++) {
    const product = multipleProducts[index];
    total += updateSubtotal(product);
  }
  // console.log(total);
  document.querySelector("#total-value span").innerHTML = total
  return total;
}



  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentElement.parentElement.remove();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn btn-remove');
  
  for (let index = 0; index < removeButtons.length; index++) {
    const removeButton = removeButtons[index];
    removeButton.addEventListener("click", removeProduct);
  }


  

  //... your code goes here
});
