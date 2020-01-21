var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  //const selectProduct = $product.childNodes;
  //console.log(selectProduct);
  const priceOfProduct = parseInt(document.querySelector(".pu>span").textContent);
  console.log("The price of the product is " + priceOfProduct);
  
  const quantityOfProducts = parseInt(document.querySelector(".qty>label>input").value);
  console.log("The quantity of the products selectioned are " +quantityOfProducts);
  
  const subTotalOfProduct = document.querySelector(".subtot>span");
  //console.log(subTotalOfProduct)
  const sum = priceOfProduct*quantityOfProducts;
  console.log("The sub-total is " + sum);
  subTotalOfProduct.innerHTML = `${sum}`;
  return subTotalOfProduct;
}

//updateSubtot($cart)

function calcAll() {
  // Iteration 1.2
  /*
  const takeProducts = $cart.getElementsByClassName(".product");
  console.log(takeProducts)
  takeProducts.forEach(element => {
    let selectProduct = document.getElementsByClassName(".name").textcontent;
    console.log(selectProduct)
    //updateSubtot($cart)
  });
  */
updateSubtot($cart)
}
$calc.onclick = calcAll;