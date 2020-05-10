// ITERATION 1



function updateSubtotal(product) {
  
  let price =product.querySelectorAll(".price span")[0].innerHTML;
let  quantity = product.querySelectorAll(".quantity input")[0].value;
let subtotal = product.querySelectorAll(".subtotal span")[0];

subtotal.innerHTML=quantity*price;  //... your code goes here



}

function updateSubtotal1(product2){

  let price1 =product2.querySelectorAll(".price span")[0].innerHTML;

let  quantity1 = product2.querySelectorAll(".quantity input")[0].value;
let subtotal1 = product2.querySelectorAll(".subtotal span")[0];
subtotal1.innerHTML=quantity1*price1;

  
}



function calculateAll() {

  //let quantity = document.querySelector(".product");

 /* let prod = document.querySelector(".product").length;
let amt = 0;
  for (let i = 0; i<prod;i++){

    var second = document.querySelectorAll('.product')[i];

amt = amt +updateSubtotal(prod);
    
  }
//document.querySelectorAll('h2 span')[0].innerHTML =total;


*/


  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');

  const secondProduct = document.querySelector('.product2');
  updateSubtotal(singleProduct);
updateSubtotal1(secondProduct);

let subtotal = document.querySelectorAll(".subtotal span")[0];
let subtotal1= document.querySelectorAll(".subtotal span")[1];


document.querySelector("#total-value span").innerHTML = parseFloat(subtotal.innerHTML+subtotal1.innerHTML);
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
