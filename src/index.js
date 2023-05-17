// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  // price
  const price = product.querySelector('.price span')
  const priceValue = Number(price.innerText)
  // quantity
  const quantity = product.querySelector('.quantity input').value;
  //subtotal
  const subtotalRemove = priceValue * quantity;
  const subtotalId = product.querySelector('.subtotal span')
  subtotalId.innerHTML = subtotalRemove;
  return subtotalRemove;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & 3
  let realTotal = 0;
  const multiProduct = document.querySelectorAll('.product');
  multiProduct.forEach(function(element){
    updateSubtotal(element);
    realTotal += updateSubtotal(element)
  });
  const subtotalId = document.querySelector('#total-value span');
  subtotalId.innerHTML = realTotal;
  return realTotal;
};



// ITERATION 4

function removeProduct(event) {
  const daddy = event.parentNode.parentNode;
  daddy.remove();
  calculateAll();
  //... your code goes here
}
  


// ITERATION 5

function createProduct() {
  //... your code goes here

}




const removeBtnList = document.querySelectorAll('.btn-remove');
  removeBtnList.forEach((product,i) => {
  removeBtnList[i].addEventListener('click', () => { 
    removeProduct(product);
  });
});

const createBtn = document.querySelectorAll('#create');
  createBtn.forEach((product,i) => {
  createBtn[i].addEventListener('click', () => { 
    // removeProduct(product);
    console.log("phew...working")
  });
});


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
