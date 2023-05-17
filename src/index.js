// ITERATION 1

function updateSubtotal(product) {
  console.log(product);
  const price = product.querySelector(".price span");
  console.log(price);
  const quantity = product.querySelector(".quantity input");
  console.log(quantity);
 
  const priceValue = Number(price.innerText);
  const quantityValue = Number(quantity.value);
  
  const subtotal = priceValue * quantityValue
  console.log(subtotal)
  
  const subtotalHtml = product.querySelector('.subtotal span')
  subtotalHtml.innerText = subtotal
  
  product.querySelector('.subtotal soan').innerHTML=subtotal;
  return subtotal;
}



  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  function calculateAll() {
    const products = document.getElementsByClassName('product');
      let total = 0;
    
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const subtotal = updateSubtotal(product);
        total += subtotal;
      };
    
    const totalElement = document.querySelector('#total-value span').innerHTML = total;
    }
/* Option 2

const priceElement = document.getElementById("price")
  //const priceElement = document.getElementById("price")

  const productsPizza = document.getElementsByClassName("product");//we get every PRODUCT class from HTML, named pizza for my clarity :-)
  const ProductsPiArray = [...productsPizza];//we turn it into an array so that we can iterate within it.

  ProductsPiArray.forEach((eachElement) => {
    updateSubtotal(eachElement);
  }); //this loop calls updateSubtotal while passing every element as a value, thus, no matter how many new rows we create, we will pass all items we buy.

    //now we need to add all the subtotals and display them in TOTAL after clicking CALCULATE PRICES
     const calcTotal = document.getElementsByClassName("calculateTotal");
      calcTotal += 
     console.log(calcTotal)
     */ 


  // ITERATION 3
  const totalElement = document.querySelector('#total-value span').innerHTML;

  
 
  // ITERATION 4

    function removeProduct(event) {
      const target = event.currentTarget;
      const product = target.parentNode.parentNode;
      const tableBody = document.querySelector('#cart tbody');
      tableBody.removeChild(product);
      calculateAll();
    }
    
    const removeButtons = document.getElementsByClassName('btn-remove');
    for (let i = 0; i < removeButtons.length; i++) {
      const button = removeButtons[i];
      button.addEventListener('click', removeProduct);
    }


  // ITERATION 5

  function createProduct() {
  const productNameInput=document.querySelector('.create-product td input[type="text"]');
  const productPriceInput=document.querySelector('.create-product td input[type="number"]');

  const productName = productNameInput.value;
  const productPrice = Number(productPriceInput.value);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  
});
