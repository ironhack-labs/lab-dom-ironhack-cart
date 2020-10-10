// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerHTML*1;
  const quantity = product.querySelector(".quantity input").value*1;
  return product.querySelector(".subtotal span").innerHTML = price*quantity;
};

function calculateAll() {
  // ITERATION 2
  const productArray = document.getElementsByClassName("product");
  document.querySelector("#total-value span").innerHTML = 0
  for (i=0; i<productArray.length; i++){
  // ITERATION 3
    document.querySelector("#total-value span").innerHTML = document.querySelector("#total-value span").innerHTML*1 + updateSubtotal(productArray[i])
  };

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
  target.closest("tbody").removeChild(target.closest(".product"))
  calculateAll()
}

// ITERATION 5

const sampleTag = document.querySelector(".product").cloneNode(true);

function createProduct() {
  const creatorRow = event.currentTarget.parentNode.parentNode.getElementsByTagName("td");
  const tagToCreate = sampleTag.cloneNode(true);
  // Add the Event Listener in the remove button
  tagToCreate.querySelector(".btn-remove").addEventListener(`click`, removeProduct);
  tagToCreate.querySelector(".name span").innerHTML = creatorRow[0].querySelector("input").value;
  creatorRow[0].querySelector("input").value = "";
  tagToCreate.querySelector(".price span").innerHTML = creatorRow[1].querySelector("input").value;
  creatorRow[1].querySelector("input").value = 0;
  document.getElementsByTagName("tbody")[0].appendChild(tagToCreate);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.getElementsByClassName("btn-remove");
  for (const item of removeProductBtn){
    item.addEventListener(`click`, removeProduct);
  }
  const createProdBtn = document.querySelector(".create-product .btn");
  createProdBtn.addEventListener(`click`, createProduct)

  //... your code goes here
});
