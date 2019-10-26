//-----models
class Product {
  //product model
  constructor(name, price, id) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = 0;
    this.subtotal = 0;
  }
}

const cart = []; // stores the products inside the shopping cart

let id = 0; //recuerda la ultima id usada

//-----control

function addNewProduct(cart, name, price) {
  let product = new Product(name, price, id++);
  cart.push(product);
  paintNewRow(product);
}

function removeProduct(cart, id) {
  cart = cart.filter(product => product.id !== id);
  removeRow(id);
  updateTotal(cart);
}

function updateProductSubtotal(cart, productRow) {
  let product = cart.filter(
    product => product.id === parseInt(productRow.getAttribute("cartid"))
  )[0];
  product.quantity = parseInt(productRow.querySelector(".qty input").value);
  product.subtotal = product.quantity * product.price;
  updateRowValues(productRow, product);
  updateTotal(cart);
}

function updateTotal(cart) {
  if (cart.length <= 0) {
    showNewTotal("0");
  } else {
    let newTotal = cart.reduce((acc, cVal) => acc + cVal.subtotal, 0);
    showNewTotal(newTotal);
  }
}

//---------visual

function removeRow(id) {
  document.querySelector(`tr[cartid="${id}"]`).remove();
}

function paintNewRow(product) {
  let newRow = document.createElement("tr");
  newRow.setAttribute("class", "product");
  newRow.setAttribute("cartid", `${product.id}`);
  let domString = `<td class="name">
  <span>${product.name}</span>
  </td>
  <td class="pu">
  $<span>${product.price}</span>
  </td>
  <td class="qty">
  <label><input type="number" value="${product.quantity}" min="0"></label>
  </td>
  <td class="subtot">
  $<span>${product.subtotal}</span>
  </td>
  <td class="rm">
  <button class="btn btn-delete">Delete</button>
  </td>`;
  newRow.innerHTML = domString;
  document.querySelector("tbody").appendChild(newRow);
  setDeleteEvent(newRow.querySelector("td.rm>button"));
}

function showNewTotal(newTotal) {
  document.querySelector("h2>span").innerText = newTotal;
}

function updateRowValues(row, product) {
  row.querySelector(".subtot>span").innerText = product.subtotal;
}

//----event setup

//set create button
document.querySelector("#create").onclick = function(btn) {
  btn.preventDefault();
  addNewProduct(
    cart,
    document.querySelector("tr.new td>input[type=text]").value,
    parseFloat(document.querySelector("tr.new td>input[type=number]").value)
  );
};

//set delete button

function setDeleteEvent(elemDOM) {
  elemDOM.onclick = function(btn) {
    btn.preventDefault();
    removeProduct(
      cart,
      parseInt(elemDOM.parentNode.parentNode.getAttribute("cartid"))
    );
  };
}

document.getElementById("calc").onclick = function(btn) {
  btn.preventDefault();
  document.querySelectorAll(".product").forEach(productRow => {
    updateProductSubtotal(cart, productRow);
  });
};
