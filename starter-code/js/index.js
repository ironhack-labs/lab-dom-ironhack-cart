var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
let product = document.querySelectorAll(".product");
var $del = document.querySelectorAll(".btn-delete");
let total = 0;
let multiplicacion = 0;
let create = document.getElementById("create");


////////////////////////////////////////////////////////////////

function updateSubtot($product) {
  // Iteration 1.1

  let price = $product.querySelector(".pu span").innerHTML;
  let quantity = $product.querySelector(".qty input").value;
  subtotal = price * quantity;
  let subtotalSlice = $product.querySelector(".subtot span");

  subtotalSlice.innerText = subtotal;

  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  let product = document.querySelectorAll(".product");
  total = 0;
  console.log(total);

  product.forEach(oneproduct => {
    let bla = updateSubtot(oneproduct);
    total += bla;
  });

  let totalSpace = document.querySelector("h2 span");
  totalSpace.innerText = total;
  console.log(total);
}

//function delete

function deleteRow() {
  $del.forEach((delet, i) => {
    delet.onclick = () => {
      document.querySelector("tbody").removeChild(product[i]);
    };
  });
}

//function create

function createRow() {
  let product = document.querySelectorAll(".new input");
  let name = product[0].value;
  let price = product[1].value;
  let position = document.querySelector("tbody");
  let newRow = document.createElement("tr");
  newRow.setAttribute("class", "product");

  let str = `
  <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="pu">
    $<span>${price}</span>
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
</tr>`;

  newRow.innerHTML = str;

  position.appendChild(newRow);

  newButton = newRow.querySelector(".btn-delete");

  newButton.onclick = () => {
    document.querySelector("tbody").removeChild(newRow);
  };
}

deleteRow();
$calc.onclick = calcAll;
create.onclick = createRow;