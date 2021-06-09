// ITERATION 1
let sum = 0

    function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerHTML
    const quantity = product.querySelector('.quantity input').value
    const subtotal = product.querySelector('.subtotal span')
    subtotal.innerHTML = price * quantity
    const grandTotal = Number(subtotal.innerHTML)
    sum += grandTotal
    return sum
}

  function calculateAll() {
    const products = document.getElementsByClassName("product")
    const productsArray = [...products]
   
    for (let i = 0; i<productsArray.length; i++){
      updateSubtotal(productsArray[i])
    }
   
    let total = document.querySelector('#total-value span')
    total.innerHTML = sum;
    sum=0;
  }

  window.addEventListener('load', () => {

    const calculatePricesBtn = document.getElementById('calculate');
      calculatePricesBtn.addEventListener('click', calculateAll);
    
      let removeButtons = document.querySelectorAll('.btn-remove');
      for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', removeProduct);
      }
    
      let createButton = document.querySelector('#create');
    
      createButton.addEventListener('click', createProduct);
    
  
  });
 
      




  // ITERATION 5
  function createProduct() {
    //... your code goes here
  }
 



    
  


  //get all the remove buttons

  // transform them into an array ...nameOfTheVariable

  //loop thorugh them and add an event listner as 'calculateAll'



