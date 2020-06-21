// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here

  let price = product.querySelector('.price span').innerHTML;
 
  let quantity = product.querySelector('.quantity input').value;

  let subtotal = product.querySelector('.subtotal span').innerHTML;

  let total = price * quantity

  product.querySelector('.subtotal span').innerHTML = total

  return total
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const Products = document.querySelectorAll('.product')
  let allProducts = []
  Products.forEach( e => {
    let x = updateSubtotal(e)
    allProducts.push(x)
  })
  let total = allProducts.reduce((a,b) => a + b, 0)
  document.querySelector('#total-value span').innerHTML = total
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const load = event.currentTarget;
  //... your code goes here
  if (!event.target.matches("button")) return
  let element = event.target.parentNode.parentNode
  element.parentNode.removeChild(element);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let nwname = document.querySelector(" td.new.prod > input").value;
 
  let nwprice = document.querySelector('td.new.pri input').value;

  if(nwname.length > 1 && nwprice > 1 ){ 
    let nwRow = ` <tr class="product">
    <td class="name">
      <span>${nwname}</span>
    </td>
    <td class="price">$<span>${nwprice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`
    document.querySelector("#cart > tbody").innerHTML += nwRow

    document.querySelector(" td.new.prod > input").value = " ";
 
    document.querySelector('td.new.pri input').value = 0;
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here


  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  const removeBtn = document.querySelector("tbody")
  removeBtn.addEventListener('click', removeProduct)

});

