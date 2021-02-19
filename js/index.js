// ITERATION 1

function updateSubtotal(product) {
  //console.log("toto",product.price)
  console.log('Calculating subtotal, yey!');

  let price = 0;
  let quantity = 0;
  price = product.querySelector('.price span') 
  quantity = product.querySelector('.quantity input')


  let priceValue = price.textContent
  let qtyValue = quantity.value


  let result = priceValue * qtyValue;
  let subTot = product.querySelector('.subtotal span')

  subTot.innerHTML = `${result}`;


  return result;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  //const singleProduct2 = document.querySelector('.product2');
  //updateSubtotal(singleProduct2);
  // ITERATION 2
  //... your code goes here

  let allProducts = document.querySelectorAll('.product');
  //allProducts = [...allProducts]
  console.log(allProducts);
  
  let subtot = 0;
  allProducts.forEach(element => {
    
    subtot += updateSubtotal(element)
   console.log(subtot)
  });

  //document.querySelector("#total-value span").innerHTML =subtot
  var antoine = document.querySelector("#total-value span")
  antoine.innerHTML = subtot

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  console.log(event)
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log('The parent in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove()
  
  //... your code goes here
}
// ITERATION 5
function createProduct() {
  //... your code goes here


  let tbodyhtml = document.querySelector("tbody")
  tbodyhtml.innerHTML += '<tr class="product"><td class="name"><span>Ironhack Rubber Duck</span></td><td class="price">$<span>25.00</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span id="subtot">0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td></tr>'

  let redbuttons = document.querySelectorAll(".btn-remove")
  console.log(redbuttons)

  redbuttons.forEach(element => {
    element.addEventListener("click", removeProduct)
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let redbuttons = document.querySelectorAll(".btn-remove")
  console.log(redbuttons)

  redbuttons.forEach(element => {
    element.addEventListener("click", removeProduct)
  })



  document.querySelector("#create").onclick = createProduct
});
