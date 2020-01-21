var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  //const selectProduct = $product.childNodes;
  //console.log(selectProduct);
  const priceOfProduct = parseInt(document.querySelector(".pu>span").textContent);
  console.log("The price of the product is " + priceOfProduct)
  
  const quantityOfProducts = parseInt(document.querySelector(".qty>label>input").value);
  console.log("The quantity of the products selectioned are " +quantityOfProducts)
  
  const subTotalOfProduct = document.querySelector(".subtot>span")
  //console.log(subTotalOfProduct)
  const sum = priceOfProduct*quantityOfProducts
  console.log("The sub-total is " + sum)
  subTotalOfProduct.innerHTML = `${sum}`
}

updateSubtot($cart)

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;