
var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var deletBtns = document.getElementsByClassName("btn btn-delete");
var products = document.querySelectorAll(".product");





  // Iteration 1.1
function updateSubtot() {

  var total = 0
  var subTotal = 0
 products.forEach((product) => {
   var qty = product.querySelector(".qty input");
   var pu = product.querySelector(".pu span");
   var subtot = product.querySelector(".subtot span")
   subTotal = qty.value * pu.innerHTML
   subtot.innerHTML = subTotal;
   total += subTotal;
   
   

 }
 ) ; return total
}



function calcAll() {
  var a = updateSubtot()
  document.querySelector(".total").textContent = a

  };




$calc.onclick = calcAll;
products.forEach(product => {
  product.querySelector(".btn.btn-delete").onclick = () => {
    product.innerHTML = '';
  }

}
  
  ) 



  // Add New Product
  var createBtn = document.getElementById("create");
  var newProduct = document.getElementById("newProduct")
  var newProductPrice = document.getElementById("newPrice");
  var tableau = document.getElementById("table")


function addNew(){
  tableau.innerHTML += `<tr class="product">
  <td class="name">
    <span>${newProduct.value}</span>
  </td>

  <td class="pu">
    $<span>${newProductPrice.value}</span>
  </td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0">
    </label>
  </td>

  <td class="subtot">
    $<span>0</span>
  </td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>`
    
}


  createBtn.onclick = addNew;




