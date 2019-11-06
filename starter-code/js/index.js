var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

let button =  document.getElementById('calc')
  button.addEventListener('click', event => {
      let price = document.getElementsByClassName('pu')
      for (x=0; x < price.length ; x++){
        console.log(price[x])
        let OnlyPrice = price[x].getElementsByTagName('span');
        for (y=0; y < OnlyPrice.length; y++){
          let subTotal = document.getElementsByTagName('subtot');
            for (i=0; i < subTotal.length; i++){
              subTotal[i].innerHTML = "$" + $product.value * Number(onlyPrice[y].innerHTML)
              console.log(subTotal[i])
            }
        }
      }
  });

function updateSubtot($product) {
  // Iteration 1.1
  

}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;

