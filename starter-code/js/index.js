var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById('create');
autoUpdateSubtotal();
getDelButtons();

// Automatic Updating of subtotal per items ** EXTRA **//
function autoUpdateSubtotal() {
  document.querySelectorAll("tbody input[type=number]").forEach(input =>{
    input.onchange = function(e){
      let subtotal = 0;
      let price = Number(e.target.parentNode.parentNode.parentNode.querySelector('.pu span').innerText)
      subtotal = price * this.value;
      e.target.parentNode.parentNode.parentNode.querySelector(".subtot span").innerHTML = subtotal;
    }
  })
}

// Iteration 1

function updateSubtot(product) {  
  let priceProduct = product.querySelector(".pu span").innerText;
  let quantity = product.querySelector(".qty input").value;
  let sub = priceProduct * quantity;
  return sub;
}

function calcAll() {
  const allProducts = document.querySelectorAll("tr.product");
  allProducts.forEach(row => {
    let price = row.children[1].children[0].innerHTML; //Done with Children
    let qty = row.querySelector(".qty input").value; //Done with querySelector
    row.querySelector(".subtot span").innerHTML = price * qty;  //Didn't have to declare the variable before use
  });
        let total = 0;
        document.querySelectorAll(".subtot span").forEach(subtotal => {total += Number(subtotal.innerText);});
        document.querySelector("body > h2 > span").innerHTML = total;
}
$calc.onclick = calcAll;

function getDelButtons() {
  let deleteBtnCollection = document.getElementsByClassName("btn btn-delete");
  for (let i = 0; i < deleteBtnCollection.length; i++) {
    deleteBtnCollection[i].onclick = removeProduct;
  }
}

function removeProduct(event) {
  event.currentTarget.parentElement.parentElement.remove();
  calcAll();
} 

function createNew() {
  
  let newItem = document.querySelector("tbody");
  let newName = document.querySelector(".new input").value;
  let newPrice = Number(document.querySelector(".new td:nth-child(2) input").valueAsNumber.toFixed(2));
  newItem.innerHTML += `<tr class="product">
                              <td class="name">
                                <span>${newName}</span>
                              </td>

                              <td class="pu">
                                $<span>${newPrice}</span>
                              </td>

                              <td class="qty">
                                <label>
                                  <input type="number" value="0" min="0" />
                                </label>
                              </td>

                              <td class="subtot">
                                $<span>0</span>
                              </td>

                              <td class="rm">
                                <button class="btn btn-delete">Delete</button>
                              </td>
                            </tr>`;
  autoUpdateSubtotal();
  getDelButtons();
}

$create.onclick = createNew;