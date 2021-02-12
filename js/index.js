// ITERATION 1

const price = document.querySelectorAll(".price > span");
const quantity = document.querySelectorAll(".quantity > input");
const subTotal = document.querySelectorAll(".subtotal > span");
const total = document.querySelector("#total-value span");


//console.log(price);
//console.log(quantity)
//console.log(subTotal[0].innerHTML);
console.log(total)

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  //const price = document.querySelector(".price span");
  //const quantity = document.querySelector(".quantity input");
  //const subTotal = document.querySelector(".subtotal span");
  const price = document.querySelectorAll(".price > span");
  const quantity = document.querySelectorAll(".quantity > input");
  const subTotal = document.querySelectorAll(".subtotal > span");
  const total = document.querySelector("#total-value span");

  //const subTotalAll = subTotal.forEach(function(el){
    
    for (let i = 0; i < subTotal.length; i++){
      subTotal[i].innerHTML = price[i].innerHTML*quantity[i].value
      //console.log(typeof subTotal[i].innerHTML)  
    }
  //})

let totalPrice = 0; // OH MY GOOOOD IT TOOK ME SOOOOO LONG TO FIGURE THIS OUT to avoid 50 + 15 = 5015!!!!!!!!!!!!!!! ODEOIFEH  IZEH IFHZIEO FZOFH OHEO HZE!!! A zdzadKJ OELDE DEDZ!!! EZDZEDze!!! I can die in PEACE NOW!
  for (let i = 0; i < subTotal.length; i++){
    totalPrice += Number(subTotal[i].innerHTML)
    console.log(totalPrice)
    total.innerHTML=totalPrice;
    //console.log(typeof parseInt(total.innerHTML))
  }
  
  return parseInt(total.innerHTML);
      

  // let subtotalValue = price.innerHTML * quantity.value

  // subTotal.innerHTML = `${subtotalValue}`

}

function calculateAll() {
  console.log('Calculating All, yey!');
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  updateSubtotal(products);


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
