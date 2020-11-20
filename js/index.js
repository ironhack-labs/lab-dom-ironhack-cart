// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  // console.log("updateSubtotal price", price);
  const qty = product.querySelector('.quantity input').value;
  // console.log("updateSubtotal qty", qty);

  let subtotal = Number(price)*Number(qty);
  // console.log("update subtotal subtotal", subtotal);
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  console.log("calculate all");
  // const arrSubtotals = document.querySelectorAll('tbody .product');

  const arrProducts = [...document.getElementsByClassName('product')];
  
  const collector = [];
  arrProducts.map((arr) => {
    let nb = updateSubtotal(arr);
    collector.push(nb);
  })

  const total = collector.reduce((accu, currentValue) => accu + currentValue);

  let parent = document.getElementById('total-value');
  parent.querySelector('span').innerText = total;


  // ITERATION 3
  //... your code goes here



}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);

    //... your code goes here
    const child = target.closest('tr');
    const parent = target.closest('tbody');
    parent.removeChild(child);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("create product is clicked");

  let newInput = document.querySelector('.create-product input').value;
  let newPriceBefore = document.querySelector('.create-product td').nextElementSibling.querySelector('input').value;
  let newPrice = Number(newPriceBefore).toFixed(2);
  
  console.log("newInput and price", newInput, newPrice);

  const addedNewProduct = document.querySelector('.product').cloneNode(true);
  document.querySelector('tbody').appendChild(addedNewProduct);

  const addedInput = document.querySelector('.product:last-child').firstElementChild.firstElementChild;
  addedInput.textContent = newInput;
  const addedPrice = document.querySelector('.product:last-child').childNodes[3].firstElementChild;
  addedPrice.innerText = newPrice;
  

  // const parent = document.querySelector('tbody');

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove'); 
  removeBtns.forEach(btn => btn.onclick = removeProduct);

  const addBtn = document.getElementById('create');
  addBtn.onclick = createProduct;
});
