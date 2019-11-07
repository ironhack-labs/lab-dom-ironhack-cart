let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let unitPrice = $product.querySelector(".pu span").innerHTML;
  unitPrice = Number(unitPrice);

  let quantity = $product.querySelector(".qty input").value;
  quantity = Number(quantity);

  let subtotal = unitPrice * quantity;

  let subtotEle = $product.querySelector(".subtot span");
  subtotEle.innerHTML = subtotal;

  return subtotal;
}

function calcAll() {
  // Iteration 1.2

  let productsCollection = $cart.getElementsByClassName("product");
  let $product;
  let sumSubtotal = 0;

  for (let i = 0; i < productsCollection.length; i++) {
    $product = productsCollection[i];
    sumSubtotal += updateSubtot($product);
  }

  let totalEle = document.querySelector("h2 span");
  totalEle.innerHTML = sumSubtotal;
}

$calc.onclick = calcAll;

let btnCollection = $cart.getElementsByClassName("btn-delete");

for (let i = 0; i < btnCollection.length; i++){
  btnCollection[i].onclick = function(e){
    let row;
    row = e.currentTarget.parentElement.parentElement;
    $cart.removeChild(row);
  }
}

let btnCreate = document.getElementById("create");

btnCreate.onclick = function(){
  let row = document.querySelector("#cart tfoot .new")
  let inputs = row.getElementsByTagName("input");
  let name = inputs[0];
  let price = inputs[1];

  if (name.value != "" && price.value != ""){
    let newRow = document.createElement("tr");
    newRow.setAttribute("class", "product");
  
    let htmlRow = `
        <td class="name">
            <span></span>
          </td>
      
          <td class="pu">
            $<span></span>
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
    
    newRow.innerHTML = htmlRow;
  
    newName = newRow.querySelector(".name span");
    newName.innerHTML = name.value;

    newPrice = newRow.querySelector(".pu span")
    newPrice.innerHTML = price.value;

    $cart.appendChild(newRow);
    name.value = "";
    price.value = "";
  }
}