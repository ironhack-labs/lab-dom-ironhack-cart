// ITERATION 1

function updateSubtotal(product) {

    //... your code goes here

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let subTotal = parseFloat(price)*parseFloat(quantity);
  product.querySelector(".subtotal span").innerHTML = subTotal;
  return subTotal;



}

function calculateAll() {
 

  const products = [...document.querySelectorAll(".product")];
  let total = 0;

  products.forEach(function(singleProduct){
    let subTotalProduct = updateSubtotal(singleProduct);
    total +=  subTotalProduct;
  });

 
  // ITERATION 2
  //this is the previous step
  

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productToBeRemoved = target.closest("tr");
  const cartTableBody = document.querySelector("#cart tbody");
  cartTableBody.removeChild(productToBeRemoved);
  // //... your code goes here

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = [...document.querySelectorAll(".btn-remove")];
  
  removeBtns.forEach(eachBtn=>{eachBtn.addEventListener("click",removeProduct)});

  //... your code goes here
});
