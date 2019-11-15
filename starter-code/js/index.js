// var cart_container
// var cart_contents;
// var in_precio;
// var in_nombre;
// var precio_total;
// var btn_precio;
// var btn_agrega;
var cart_container = document.getElementById("cart-container");
var cart_contents = document.getElementById("cart-contents");
var in_precio = document.getElementById("in-precio");
var in_nombre = document.getElementById("in-nombre");
var precio_total = document.getElementById("tot-pric-value");
var btn_precio = document.getElementById("calc-button");
var btn_agrega = document.getElementById("add-button");

window.onload = () => {
  console.log("E");
  var cart_container = document.getElementById("cart-container");
  var cart_contents = document.getElementById("cart-contents");
  var in_precio = document.getElementById("in-precio");
  var in_nombre = document.getElementById("in-nombre");
  var precio_total = document.getElementById("tot-pric-value");
  var btn_precio = document.getElementById("calc-button");
  var btn_agrega = document.getElementById("add-button");

  btn_precio.onclick = () => {
    let res = 0;

    let items = cart_container.querySelectorAll("div.cart-item");
    for (const item of items) {
      subtotal = item.lastChild.previousSibling.innerText;
      console.log(subtotal);
      subtotal = subtotal.substr(1, subtotal.length);
      subtotal = Number(subtotal);
      if (Number.isNaN(subtotal)) continue;
      res += subtotal;
      console.log(res);
    }
    precio_total.innerText = "$ " + res;

    //console.log(items, items[0].lastChild.previousSibling.innerText);
  };

  btn_agrega.onclick = () => {
    let precio = in_precio.value;
    let nombre = in_nombre.value;
    if (nombre === "" || precio === "") {
      console.log("Not a valid item");
      in_precio.value = "";
      in_nombre.value = "";
      return;
    }
    precio = Number(precio);

    console.log(precio, nombre, Number.isNaN(precio));
    if (Number.isNaN(precio)) {
      console.log("Not a valid price");
      in_precio.value = "";
      in_nombre.value = "";
      return;
    }

    let elements = cart_container.getElementsByTagName("div");
    let numelements = elements.length;
    if (numelements > 9) {
      console.log("too many");
    }
    if (numelements.length < 1) {
      console.log("too few");
    }
    //newItem(nombre, precio);
    cart_container.appendChild(newItem(nombre, precio));
  };
};

function newItem(nombre, precio) {
  let item = document.createElement("div");
  //item.className=
  item.setAttribute("class", "cart-item flex");
  //item.setAttribute("class", "flex");
  let staticName = document.createElement("span");

  staticName.appendChild(document.createTextNode(nombre));
  item.appendChild(staticName);
  let staticPrice = document.createElement("span");
  staticPrice.appendChild(document.createTextNode("$" + precio));
  item.appendChild(staticPrice);
  let qty = document.createElement("div");
  qty.setAttribute("class", "qty");
  let qtystatic = document.createElement("span");
  qtystatic.appendChild(document.createTextNode("QTY:"));
  qty.appendChild(qtystatic);
  let qtydynamic = document.createElement("input");
  qtydynamic.setAttribute("type", "text");

  qtydynamic.oninput = e => {
    //cart_container.nextSibling
    let qty = e.target.parentElement;
    let unit_price = qty.previousSibling.innerText;
    unit_price = unit_price.substr(1, unit_price.length);
    unit_price = Number(unit_price);
    let subtotal = qty.nextSibling;
    let num_items = e.target.value;
    console.log(unit_price, num_items);
    if (num_items === "") return;
    num_items = Number(num_items);
    if (Number.isNaN(num_items)) return;
    console.log(num_items);
    if (!Number.isInteger(num_items)) return;
    if (num_items < 0) return;
    qty.nextSibling.innerText = "$" + num_items * unit_price;
    subtotal = subtotal.substr(1, subtotal.length);
  };
  qty.appendChild(qtydynamic);
  item.appendChild(qty);
  let price = document.createElement("span");
  price.appendChild(document.createTextNode("$0"));
  item.appendChild(price);
  let del_btn = document.createElement("button");
  del_btn.appendChild(document.createTextNode("Borrar"));
  del_btn.onclick = e => {
    console.log(e.target.parentElement.getAttribute("value"));
    let value = e.target.parentElement.value;
    console.log(cart_container.childNodes.item(value));
    cart_container.removeChild(cart_container.childNodes.item(value));
  };
  item.appendChild(del_btn);
  item.setAttribute("value", cart_container.childNodes.length.toString());
  console.log(item);
  return item;
}
