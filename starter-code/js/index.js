
var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot(product) {
var prix = product.querySelector(".pu span");
var quantity = product.querySelector(".qty label input");
var sousTot = product.querySelector(".subtot span");

var calcul = Number(prix.innerText)*quantity.value;
sousTot.innerHTML=`${calcul}`;
return calcul;
}


function calcAll(product) {
  var totalOfProducts = document.getElementById("totalText");
  var produits = document.querySelectorAll(".product");
  var total=0;
   produits.forEach(produit => {
    total += updateSubtot(produit);
  });
  totalOfProducts.innerHTML=`${total}`;
}
function deleteShite() {
document.querySelectorAll(".btn-delete").forEach(button => {
     button.onclick = function(e) {
      debugger
     var a = e.target.parentNode.parentNode;
     a.parentNode.removeChild(a);
     } 
   });
  
  }
deleteShite();

function createProduit(){
  const buttonSupp = document.querySelectorAll(".btn-success");
  const lastRow = document.querySelector("tbody tr:last-child");
  var inputNewProduct = document.querySelector("tfoot input");
  var inputNewPrice = document.querySelector("tfoot input:last-child");
  console.log(lastRow);
  buttonSupp.forEach((button) => {
    console.log(button);
    //Discolisum
    var createProduct = () => {
      lastRow.innerHTML=`<tr class="product">
      <td class="name">
        <span>${inputNewProduct.value}</span>
      </td>
  
      <td class="pu">
        $<span id="price">${inputNewPrice.value}</span>
      </td>
  
      <td class="qty">
        <label>
          <input type="number" value="0" min="0" id="quantityInput">
        </label>
      </td>
  
      <td class="subtot">
        $<span>0</span>
      </td>
  
      <td class="rm">
        <button class="btn btn-delete" i="buttonSupp">Delete</button>
      </td>`
    }
    button.onclick = createProduct
  });
}
createProduit();
// Assign a click event to the create button that will: - get the data from the inputs, - 
// create a new product row with the data from the inputs. 
// The structure of the new product should be the same as in Iteration #1.

// ⚠️ Make sure that the new product you added has the same behavior than the other products:

// You should be able to calculate the product's total price.
// That product's price should be included in the total price of the entire Shopping Cart.
// You should be able to delete the product.


$calc.onclick = updateSubtot;
$calc.onclick = calcAll;
