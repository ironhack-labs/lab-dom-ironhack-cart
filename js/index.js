// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;

  const quantity = product.querySelector('.quantity input').value;
  
  console.log(price)
  console.log(quantity)

  const subtotal = price * quantity;
  //console.log(subtotal)

  product.querySelector('.subtotal span').innerText = subtotal
  console.log(subtotal)
  return subtotal;


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = Array.from(document.getElementsByClassName('product'))
  console.log(allProducts)


  let sum = 0;
  allProducts.forEach(product => {
    sum = sum + updateSubtotal(product)
  });

  console.log('sum: ' + sum)
  
  


  // ITERATION 3
  //... your code goes here

  document.querySelector('#total-value span').innerText = sum
  
}



// ITERATION 4

function removeProduct(event) {
  console.log("Here")
  const target = event.currentTarget;
  console.log('The target in remove is:', target);


  //this is to search for the parent
  let rowParent = target.closest('tr');
  console.log(rowParent)

  // this is to remove the row
  rowParent.remove();
  
}

// ITERATION 5

function createProduct() {
  
  const nameOfNewProduct = document.querySelector('.newProductName input').value;
  console.log(nameOfNewProduct)
  
  const priceOfNewProduct = document.querySelector('.newProductPrice input').value;
  console.log(priceOfNewProduct)
  //console.log('I am here')

  const table = document.querySelector('.table')
  console.log(table)



  let rowHtml = '<tr class="product">'
  rowHtml += `<td>${nameOfNewProduct}</td>`
  rowHtml += `<td class="price">$<span>${priceOfNewProduct}</span></td>`
  rowHtml += `<td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>`
  rowHtml += `<td class="subtotal">$<span>0</span></td>`
  rowHtml += `<td class="action"><button class="btn btn-remove">Remove</button></td>`
  rowHtml += "</tr>"



  console.log(rowHtml)
  table.innerHTML += rowHtml

  setRemoveListeners();

}

function setRemoveListeners() {
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  setRemoveListeners();
});
