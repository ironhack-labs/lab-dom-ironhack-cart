// ITERATION 1

function updateSubtotal(productRow) {
  //console.log('Calculating subtotal, yey!');

  
  //GET REFERENCE TO ELEMENT IN THE DOM:

  const priceElm = productRow.querySelector(".price span"); // to do: search inside "product" row, instead of "document"
  const quantityElm= productRow.querySelector(".quantity input");
  const subTotalElm = productRow.querySelector(".subtotal span");

  //CALCULATE:
  
  
  const price = parseFloat(priceElm.innerText)
  
  const quantity = parseFloat(quantityElm.value)

  const subtotal = price * quantity;

  //UPDATE DOM:

  subTotalElm.innerHTML = subtotal;

  return subtotal;


}
// ITERATION 2
function calculateAll() {

  let totalPrice = 0;
  
  
  // step1: get all products

  const productList= document.querySelectorAll(".product");

  //step2 :Iterate through the list of products and call UpdateSubtotal()
  
  productList.forEach(function(element) {
    const subTotalForthisProduct = updateSubtotal(element);

    totalPrice = totalPrice + subTotalForthisProduct;    
  });
  console.log(totalPrice)


  // ITERATION 3

  const totalElm = document.querySelector("#total-value span");
  totalElm.innerHTML = totalPrice

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
