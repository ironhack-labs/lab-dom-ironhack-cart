// ITERATION 1

function updateSubtotal(product) {
 console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value
  
  let subtotals = price * quantity
  const subtotal = product.querySelector('.subtotal span')
        subtotal.textContent=subtotals 
  return subtotals
   
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // end of test


  
  // ITERATION 2
  const cartPruduct = document.querySelectorAll('.product')
  let totals = 0
  for (let i = 0; i < cartPruduct.length; i++){
    updateSubtotal(cartPruduct[i]);
    totals = totals + Number(cartPruduct[i].querySelector('.subtotal span').textContent)
  }

  let total = document.querySelector('#total-value span')
 
        total.textContent=totals
  // ITERATION 3
 

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  let selecionlineaborrar = target.parentNode.parentNode
  selecionlineaborrar.parentNode.removeChild(selecionlineaborrar)
  calculateAll()

  //... your code goes here
 
}


// ITERATION 5

function createProduct() {
  //... your code goes here
  // the last on action is so dificult
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let arryReBtn = document.getElementsByClassName('btn btn-remove')
  for (let i = 0; i < arryReBtn.length; i++) {
    const removeBtn = arryReBtn[i]
    removeBtn.addEventListener('click', removeProduct);
  }
  
    const addProductBtn = document.getElementById('create');
     addProductBtn.addEventListener('click', createProduct);
  
});


