// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  console.log("We are printing price :", price);
  const quantity = product.querySelector('.quantity input');
  console.log("We are printing quantity :", quantity);

  let priceValue = price.innerText;
  console.log("Print price", priceValue);
  let quantityValue = quantity.value;
  console.log("Print quantity", quantityValue);

  let subtotal = priceValue * quantityValue;
  console.log("Subtotal", subtotal);

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;

  
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
 
 
  const product = document.getElementsByClassName("product");
  // console.log("here is what prints product:", product[0])
  // console.log("here is subtotal for 1st product", updateSubtotal(product[0]))
  // console.log("here is subtotal for 2nd product", updateSubtotal(product[1]))
  let total = 0;
  ///////////////////////////
  for (let i = 0; i <product.length; i++){
    console.log("Here it is each subtotal", updateSubtotal(product[i]));
    total += updateSubtotal(product[i]);
    console.log("the total is =", total);
  }
  /////////////////////////// WHY NOT WORKING???
  // product.forEach(oneproduct => {
  //   total += updateSubtotal(oneproduct);
  // });


  console.log("This is the total value",document.querySelector('#total-value span').innerText);
  document.querySelector('#total-value span').innerText = total;
  console.log("this is the total:",total)
  return total;
  // product.forEach(element => {
  //   console.log("Here is the element", element);

  // })
  
  // product.forEach(element => {
  //   console.log(updateSubtotal(element));
  // });
  // let total;
  // products.forEach(product => {
  //   total = updateSubtotal(product);
  // })

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  console.log("At least entered in removeProduct");
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
  const removeButton = document.querySelectorAll('.btn-remove');
  console.log("What's inside the remove button", removeButton)
  removeButton.forEach(button => {
    console.log("THis is one of each buttons", button)
    button.addEventListener('click', console.log("clickingremove"));
  }

  );
  // calculatePricesBtn.addEventListener('click', calculateAll);
});
