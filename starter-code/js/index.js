var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot(product) {
  // Iteration 1.1
  //console.log($product)
  //const selectProduct = $product.childNodes;
  //console.log(selectProduct);
  const priceOfProduct = parseInt(product.querySelector(".pu>span").textContent);
  console.log("The price of the product is " + priceOfProduct)
  
  const quantityOfProducts = parseInt(product.querySelector(".qty>label>input").value);
  console.log("The quantity of the products selectioned are " +quantityOfProducts)
  
  const subTotalOfProduct = product.querySelector(".subtot>span")
  //console.log(subTotalOfProduct)
  const sum = priceOfProduct*quantityOfProducts
  console.log("The sub-total is " + sum)
  subTotalOfProduct.innerHTML = `${sum}`
  return sum;
}

//updateSubtot($cart)

function calcAll() {
    const takeProducts = $cart.getElementsByClassName("product");
    //console.log(takeProducts)
    let totalPriceOfProducts = 0
    for (let i = 0; i<takeProducts.length; i++){
      totalPriceOfProducts += updateSubtot(takeProducts[i])
    }
    console.log(totalPriceOfProducts)
    const totalPrice = document.getElementsByTagName("h2")[0].lastElementChild;
    //console.log(totalPrice)
    totalPrice.innerHTML =`${totalPriceOfProducts}`
  /*
    takeProducts.forEach(element => {
      let selectProduct = document.getElementsByClassName("name").textcontent;
      console.log(selectProduct)
  });
  */
  //updateSubtot($cart)
}
$calc.onclick = calcAll;