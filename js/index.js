// ITERATION 1

function updateSubtotal(product) {
  //                                                   V could add span instead but...
  let price = parseFloat(product.querySelector('.price').textContent.substring(1));
  console.log (`the price is ${price}`)
  let quantity = parseFloat(product.querySelector('.quantity > input ').value);
  console.log(`the quan is ${quantity}`)
  let subTot = price * quantity;
  console.log(`the sub is ${subTot}`)
  product.querySelector('.subtotal > span').innerText = subTot;
  return subTot;
}


function calculateAll() {
  
  // ITERATION 2 and 3
  
  let products = document.querySelectorAll(".product");
  console.log(products);
  fullPrice = 0;
  
  for (let product of products){
    fullPrice += updateSubtotal(product);
  }
  
  console.log(`full price = ${fullPrice}`)
  
  document.querySelector('#total-value > span').innerText = fullPrice;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  console.log("remove");
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


// const removeBtns = document.querySelectorAll('.btn-remove');

// for removeBtn of removeBtns {
//     removeBtn.addEventListener('click', removeProduct);
// }


