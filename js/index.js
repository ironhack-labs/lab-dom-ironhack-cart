// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  

  console.log(price);
  console.log(quantity);
  

  let subTotal = price*quantity
  
  console.log(subTotal);

  let finalSubTotal = product.querySelector('.subtotal span');

  finalSubTotal.innerHTML = subTotal
  console.log(subTotal)

  return (finalSubTotal.innerHTML = subTotal)
  //... your code goes here
}


  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  function calculateAll() {
      const productos = document.getElementsByClassName("product");/// giati???
      console.log(productos);

      var total = 0;

      for (let i = 0; i < productos.length; i++) {
      updateSubtotal(productos[i]);
      total += updateSubtotal(productos[i]);

      
    }
    let totalisimo = document.querySelector('#total-value span');
    console.log(total);
    totalisimo.innerHTML = total;
    
    
  }

  
  

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
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
