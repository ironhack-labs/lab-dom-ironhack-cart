
let productsArray = [];
()=> {
  productsArray.push()
}
// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const $price= document.querySelector('.price span').innerText;
  const $quantity= document.querySelector(".quantity input").value;
  let $subTotal= document.querySelector('.subtotal span');
  let subTotl= $price * $quantity;
  $subTotal.innerText=Number(subTotl);
  console.log($subTotal);
  
  
  // console.log('Calculating subtotal, yey!');
  // this.price = document.querySelector('.price span');
  // this.quantity = document.querySelector('.quantity input');
  // this.subtotal = Number(this.price.innerHTML)*this.quantity.value;
  // this.$subtotal = document.querySelector('.subtotal span');
  // this.$subtotal.innerHTML = this.subtotal;
  // console.log(this.subtotal);
  // return this.$subtotal;

  //... your code goes here
}

function calculateAll() {
  for(i=0; i<productsArray.length;i++) {
    const productt = document.querySelector
  }

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
