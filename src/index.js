// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  //... your code goes here

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = price.innerHTML * quantity.value;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.getElementsByClassName('product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // ITERATION 3
  //... your code goes here
  const products = document.getElementsByClassName("product");
  const productsArray = [...products];
  let totalPrice = 0;

  productsArray.forEach((element) => {
    updateSubtotal(element);
    const subtotal = element.querySelector(".subtotal span");
    totalPrice += Number(subtotal.innerHTML);
  });

  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = totalPrice;




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
  const name = document.querySelector('.newName').value;
  const price = document.querySelector(".newPrice").value;

  console.log(name);
  console.log(price);

  const tbody = document.querySelector('tbody');
  console.log(tbody);
  const copyNewLine = document.querySelector('.product');

  const setNewLine = copyNewLine.cloneNode(true);

  let test1 = setNewLine.querySelector(".name span");// = name;
  let test2 = setNewLine.querySelector('.price');//= `$<span>${price}</span>`;
  test1.innerHTML = `${name}`;
  test2.innerHTML = `$<span>${price}</span>`;
  console.log(test1, test2);


  tbody.appendChild(setNewLine);

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const creatBtn = document.getElementById('create');
  creatBtn.addEventListener('click', createProduct);
});
