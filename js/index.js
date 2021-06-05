// ITERATION 1


function formatNumbers(num) {
  if (num < 10) { return num }
  else { return num.toFixed(2) }
};

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerHTML
  let quantity = product.querySelector(".quantity input").value
  let subTotalElement = product.querySelector(".subtotal span");
  let subTotalProduct = price * quantity;
  subTotalElement.innerHTML = formatNumbers(subTotalProduct);

  return subTotalProduct;


  // Apparently 6 * 10.95 = 65.69999999? 
}


// ITERATION 3
//... your code goes here

function calculateAll() {

  const productArr = document.querySelectorAll(".product");
  let totalSum = 0;
  for (let i = 0; i < productArr.length; i++) {
    totalSum += updateSubtotal(productArr[i])
  }
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = formatNumbers(totalSum);



}



// ITERATION 4

function removeProduct(event) {
  let parent = document.querySelector("#cart tbody")
  const target = event.currentTarget;
  let td = target.parentNode;
  let tr = td.parentNode;
  parent.removeChild(tr);
  calculateAll();
}

// ITERATION 5

// Hint: Clone Node 

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName("btn btn-remove")
  for (let i = 0; i < removeBtns.length; i++) { removeBtns[i].addEventListener("click", removeProduct) }


  //... your code goes here
});
