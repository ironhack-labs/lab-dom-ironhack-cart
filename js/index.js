// ITERATION 1


  function updateSubtotal(product) {
    console.log("here I am")
    console.log(product);
    
    //console.log(document.querySelectorAll('.price span'))
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;

    let subtotal = price * quantity

    product.querySelector(".subtotal span").innerHTML = subtotal

    return subtotal;
    // ... your code goes here
  }




  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelectorAll('.product')[0];
  // const singleProduct = document.querySelector('.product');
  
  // updateSubtotal(singleProduct);

  // const secondProduct = document.querySelectorAll('.product')[1];
  // updateSubtotal(secondProduct);
  
  function calculateAll() {
    let sum = 0
    let listOfAllProducts = document.querySelectorAll(".product")
    for (let index = 0; index < listOfAllProducts.length; index++) {
      const product = listOfAllProducts[index];
      updateSubtotal(product);
      let subtotalText = product.querySelector(".subtotal span").innerText
      console.log(subtotalText)
      console.log(Number(subtotalText))
      sum += Number(subtotalText)
      console.log(sum)
      document.querySelector("#total-value span").innerText = sum
    }
  //const quantity = product.querySelector(".quantity input").value 
  // end of test

  // ITERATION 2
  //... your code goes here
  
  // ITERATION 3
  //... your code goes here
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
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
