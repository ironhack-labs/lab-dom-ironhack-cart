var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
let $create = document.getElementById("create");

// Iteration 1.1  Sproduct== tr.product

function updateSubtot($product) {
  //PRECIO
  const unitaryPriceStr = $product.querySelector(".pu span").innerText;
  const unitaryPrice = parseFloat(unitaryPriceStr);
  // console.log(unitaryPrice)

  //CANTIDAD
  const quantity = $product.querySelector(".qty");
  const quantityValue = parseFloat(quantity.querySelector("input").value);
  // console.log(quantityValue)

  //MULTIPLICACION
  const subtotal = unitaryPrice * quantityValue;
  // console.log(result)
  console.log(subtotal);
  $product.querySelector(".subtot span").innerHTML = subtotal;
  return subtotal;
}

// Iteration 1.2 & 3

function calcAll() {
  const allProducts = document.querySelectorAll(".product");
  let total = 0;

  allProducts.forEach(elm => {
    let subtotal = updateSubtot(elm);

    total += subtotal;
  });
  console.log(total);
  document.querySelector("h2 span").innerHTML = total;
}

$calc.onclick = calcAll;

// Iteration 4

function deleteProduct(botones) {
  botones.parentNode.parentNode.remove();
  //.parentNode.remove());
}
eliminate = document.querySelectorAll(".btn-delete");
eliminate.forEach(elm => {
  elm.onclick = e => deleteProduct(e.currentTarget);
});

// Iteration 5

$create.onclick = createProduct;

function createProduct() {
  const inputs = document.querySelector(".new").getElementsByTagName("input");
  //const productInputs = inputs.getElementsByTagName("input");

  console.log(inputs);

  const productName = inputs[0].value;
  const productPrice = inputs[1].value;

  console.log(productName);
  console.log(productPrice);

  crearFila(productName, productPrice);
  // let fila = document.createElement("tr.product");
  // let celdaNombre = document.createElement("td.name");
  // let celdaPrecio = document.createElement("td.pu");
  // let celdaCantidad = document.createElement("td.qty");
  // let celdaSubtotal = document.createElement("td.subtot");
  // let celdaDelete = document.createElement("td.rm");

  document.querySelector(".tbody").appendChild = newProduct;
}

function crearFila(nombre, precio) {
  let fila = document.createElement("tr.product");
  let celdaNombre = document
    .createElement("td")
    .setAttribute("class", "name")
    .createElement("span")
    .createTextNode(nombre);
  let celdaPrecio = document
    .createElement("td")
    .setAttribute("class", "pu")
    .createElement("span")
    .createTextNode(precio);
  let celdaCantidad = document
    .createElement("td")
    .setAttribute("class", "qty")
    .createElement("label")
    .createElement("input")
    .setAttribute(type, "number")
    .setAttribute(value, 0)
    .setAttribute(min, 0);

  let celdaSubtotal = document
    .createElement("td")
    .setAttribute("class", "subtot")
    .createElement("span")
    .createTextNode(0);
  let celdaDelete = document
    .createElement("td")
    .setAttribute("class", "btn btn-delete")
    .createElement("button")
    .createTextNode("Delete");

  resultado = fila.appendChild(
    celdaNombre,
    celdaPrecio,
    celdaCantidad,
    celdaSubtotal,
    celdaDelete
  );
}
