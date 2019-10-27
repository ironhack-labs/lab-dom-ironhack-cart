window.onload = function() {
  let $calc = document.getElementById("calc");
  var $tBody = document.getElementById("tBody");
  var $nuevoProducto = document.getElementById("create");

  function updateSubtot($producto) {
    // Primero calculamos el precio del producto y luego la cantidad
    let precio = Number($producto.querySelector(".pu span").innerHTML);
    let cantidad = Number($producto.querySelector(".qty label input").value);
    // Multiplicamos precio por cantidad para tener el sub-total de cada producto
    let subTotal = Math.round(precio * cantidad * 100) / 100;

    // Incrustamos el sub-total en cada producto dentro del html
    $producto.querySelector(".subtot").innerHTML = subTotal + "€";

    return subTotal;
  }

  function calcAll() {
    let $cart = document.querySelectorAll("#cart tbody tr");
    console.log($cart);
    let precioTotal = 0;

    // Vamos recorriendo todos los productos y vamos sumandolos a precioTotal
    $cart.forEach(function(elem) {
      let subTot = updateSubtot(elem);
      precioTotal += subTot;
    });

    // Incrustamos el precioTotal dentro del html
    document.querySelector("h2 span").innerHTML = precioTotal;
  }

  function eliminarProducto(click) {
    if (click.target.classList.contains("btn-delete"))
      click.target.parentElement.parentElement.remove();
    calcAll();
  }

  function añadirProducto() {
    // Creamos las variables de nombre y precio para añadirla en los nuevos productos
    let nombreProducto = document.querySelector(".nuevoProducto td input").value;
    var precio = Number(document.querySelector(".nuevoProducto .nuevoPrecio input").value);

    // Aquí se crea la estructuta de los nuevos productos
    nuevoProducto = document.createElement("tr");
    nuevoProducto.className = "producto";
    document.querySelector("#cart tbody").appendChild(nuevoProducto);
    nuevoProducto.innerHTML = `
      <td class="name">
        <span>${nombreProducto}</span>
      </td>
      <td class="pu">
        <span>${precio}.00</span>€
      </td>
      <td class="qty">
        <label>
          <input type="number" value="0" min="0">
        </label>
      </td>
      <td class="subtot"><span>0</span>€</td>
      <td class="rm">
        <button class="btn btn-delete">Eliminar</button>
      </td> 
      `;
  }

  $calc.addEventListener("click", calcAll, false);
  $tBody.addEventListener("click", eliminarProducto, false);
  $nuevoProducto.addEventListener("click", añadirProducto, false);

};
