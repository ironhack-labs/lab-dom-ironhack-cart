// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector(`.subtotal span`);
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  const sum = [...allProducts].reduce((sum, row) => sum + updateSubtotal(row), 0)
  console.log(sum)
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value > span').innerText= sum
}

// ITERATION 4

//function removeProduct(event) {
 // const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const removeProduceButton=document.getElementsByClassName('btn btn-remove')for(let i=0; i< removeProduceButton.length;i++){
    const button = removeProduceButton[i];button.addEventListener('click',function(event){
      conts buttonClicked = event 
    })
  }
//}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
