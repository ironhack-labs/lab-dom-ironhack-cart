
// ITERATION 1

function updateSubtotal($product) {
const price = parseInt($product.querySelector(".price").innerText.slice(1));  
console.log(price)
//const quantity = parseInt($product.querySelector(".quantity input").getAttribute("value"));
const quantity = parseInt($product.getElementsByTagName('input')[0].value);
console.log(quantity); //=> ""

 $product.querySelector(".subtotal span").innerText =`${price*quantity}`
 console.log( $product.querySelector(".subtotal span").innerText)
 return price*quantity;
}

function calculateAll() {
  // ITERATION 2
  let totalPrice=0;
  const $products= document.querySelectorAll(".product");
  console.log($products)
  for (let i=0; i<$products.length;i++){
    totalPrice += updateSubtotal($products[i]);
  }
    document.querySelector("#total-value span").innerText=totalPrice;
  /*     </table>
    <p class="calculate-total">
      <button id="calculate" class="btn btn-success">Calculate Prices</button>
    </p>
    <h2 id="total-value">Total: $<span>0</span></h2>
    <script type="text/javascript" src="./js/index.js"></script>
  </body>
</html>
 */

  // ITERATION 3
  
  
// const $singleProduct = document.querySelector('.product');
// updateSubtotal($singleProduct);
// End of test
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}
