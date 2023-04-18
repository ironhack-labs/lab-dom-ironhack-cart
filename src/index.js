// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  
  let subtotalText = product.querySelector(".subtotal span")
  let subtotal = price * quantity;
  subtotalText.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
let allProducts = document.getElementsByClassName("product");
let sumTotal = 0
for (let i = 0; i < allProducts.length; i++){
  updateSubtotal(allProducts[i]);
  sumTotal += updateSubtotal(allProducts[i]);
}
let totalAll = document.querySelector("#total-value span");
totalAll.innerHTML= sumTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //dar target tabela
  let newProduct = document.getElementsByTagName("tbody")[0];

  //criar uma nova table row

  //ir buscar os valores que o user ecreveu nos inputs 

  //target nova table row .innerHTML

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let button = document.getElementById("calculate");
  button.onclick = function(){
    window.alert('Calculate prices clicked');
  };
});
