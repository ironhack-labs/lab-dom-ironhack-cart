var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $qty = document.querySelector('.qty');
var $pro = document.querySelector('.name');
var $subtot = document.querySelector('.subtot span');
var $prix = document.querySelector('#prix').innerText;
var $valuee = document.querySelector('#value');
var input = document.querySelector('input');


function updateSubtot($product) {

    let price = Number($product.querySelector(".pu span").innerText);
    let quantity = Number($product.querySelector('.qty input').value);
    let calcul = price*quantity;
    let subtotal = $product.querySelector(".subtot span")
    subtotal.innerHTML = `${calcul}`;
    return calcul;
};

function calcAll() {

  var product = document.querySelectorAll(".product");
  var toto = document.querySelector('h2 span');
  var total = 0;
  product.forEach(prod => { total += updateSubtot(prod);
    toto.innerHTML = total;
    console.log(toto);
  })}


  function deleteButton() {
    var buttons = document.querySelectorAll(".btn-delete");
    var tr = document.querySelectorAll(".product");

    buttons.forEach(button => { button.onclick = function(e) {
    var tbody = document.querySelector('tbody');
    var a = e.target.parentNode.parentNode;
    a.parentNode.removeChild(a);
    }});}
    
  
        function createNewProduct() {
      var buttonCreate = document.querySelector("#create");
      let newProduct = document.createElement("tr");
      document.querySelector("tbody").appendChild(newProduct);
      newProduct.className = "product";
      newProduct.innerHTML = `<td class="name">
      <span> ${document.querySelector(".FUCK").value} </span>
    </td>

    <td class="pu">
      $<span id="prix">${document.querySelector(".IRON").value}</span>
    </td>

    <td class="qty">
      <label>
        <input type="number" value="0" min="0" id="valuee">
      </label>
    </td>

    <td class="subtot">
      $<span>0</span>
    </td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>`
      var deleteBtn = newProduct.querySelector(".btn-delete");

      deleteBtn.onclick = function(e) {
      var tbody = document.querySelector('tbody');
      var a = e.target.parentNode.parentNode;
      a.parentNode.removeChild(a);
      };

      }
  
    
      var buttonCreate = document.querySelector("#create");
      buttonCreate.onclick = createNewProduct;



deleteButton();
$calc.onclick = calcAll;