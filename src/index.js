// ITERATION 1

function updateSubtotal(product) {
  console.log(product);
  const price = product.querySelector(".price span");
  console.log(price);
  const quantity = product.querySelector(".quantity input");
  console.log(quantity);
  const priceValue = Number(price.innerText);
  const quantityValue = Number(quantity.value);
  const subtotal = priceValue * quantityValue;
  console.log(subtotal);
  const subtotalHtml = product.querySelector(".subtotal span");
  subtotalHtml.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
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


  }

  // ITERATION 3


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  console.log("Subtotal: " + subtotal);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
