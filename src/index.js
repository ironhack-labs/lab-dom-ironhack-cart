// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = Number(product.querySelector('.price span').innerHTML);
  let quantity = Number(product.querySelector('.quantity input[type="number"]').value);
  const finalPrice = price * quantity;
  let subtotalSpan = product.querySelector('.subtotal span');
  subtotalSpan.innerHTML = finalPrice.toFixed(2);
  return finalPrice;

}

function calculateAll() {
 
  totalProd = document.getElementsByClassName("product");
  totalArr = [...totalProd]
  console.log(totalArr)

  let allTotal = 0;
  for (let i = 0; i < totalArr.length; i++){
     allTotal += updateSubtotal(totalArr[i])
  }
  
  finalTotal = document.getElementById("total-value").querySelector("span");
  
  finalTotal.innerHTML = allTotal.toFixed(2);
  console.log(finalTotal);
  

}

// ITERATION 4

function removeProduct(event) {

const target = event.currentTarget;
const product = document.getElementsByClassName("product");
let tbody = document.getElementsByTagName("tbody")
tbody[0].removeChild(product[0]);

  
  console.log('The target in remove is:', target);

  
}

// ITERATION 5

function createProduct() {



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButtons = document.getElementsByClassName("btn btn-remove");
  let removeArr = [...removeButtons];
  for(let i = 0; i < removeArr.length; i++){
    removeArr[i].addEventListener('click',removeProduct)
  }
  
  const createButton = document.getElementById("create")
  createButton.addEventListener('click',createProduct)
});