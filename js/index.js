// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  product.querySelector(".subtotal span").textContent =
    Number(price) * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //1st row : ITERATION 1
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // // ITERATION 2

  // const singleProduct = document.getElementsByClassName('product');
  // for (let i =0; i<singleProduct.length; i++){
  //   updateSubtotal(singleProduct[i])
  // }
  //   // ITERATION 3
  // const singleProduct = document.getElementsByClassName('product');
  // let sum=0;
  // for (let i =0; i<singleProduct.length; i++){
  //   updateSubtotal(singleProduct[i])
  //   sum+=updateSubtotal(singleProduct[i]);
  //   document.getElementsById('vt').textContent=String(sum);
  //   return sum;
  // }
  let singleProduct = document.getElementsByClassName("product");
  let sum = 0;
  //console.log(singleProduct[0]);
  for (let i = 0; i < singleProduct.length; i++) {
    updateSubtotal(singleProduct[i]);
    sum += Number(singleProduct[i].querySelector(".subtotal span").textContent);
    //updateSubtotal(singleProduct[i]);
    console.log(sum);
  }
  document.getElementById("total").textContent = `${sum}`;
  return sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
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
