// ITERATION 1

function updateSubtotal(product) {
  //me conecto a los valores que necesito (por la clase y seguido el hijo (.price span, .quantity input)) y extraigo valores especificos con innerHTML y uso value cuando hay mas de un valor dentro del elemento

  //QUERYSELECTOR CUANDO QUIERO SACAR UN ELEMENTO, QUERYSELECTORALL CUANDO QUIERO SACAR MAS DE UN ELEMENTO
  //obtengo los elementos de las clases
  let price = document.querySelectorAll('.price span');
  let quantity = document.querySelectorAll('.quantity input');
  let subtotales= document.querySelectorAll(".subtotal span");
  //a continuación extraigo los valores especificos y miro que este accediendo a todas las propiedades, con innerHTML y value

  //meto a cada subtotal el valor de price*quantiti de ese elemento
  subtotales.forEach((subtotal, i) =>{
    subtotal.innerText = price[i].innerHTML * quantity[i].value
    subtotal.innerText = Number(subtotal.innerText).toFixed(2);
  });
  return subtotales;
}
updateSubtotal();
function calculateAll() {
  // ITERATION 2
  //extraigo todos los elementos product y los meto a la variable
  const singleProduct = document.querySelectorAll('.product');

  //cojo el array lo recorro y le actualizo el precio del subtotal, con la funcion hecha anteriormente
  singleProduct.forEach(product => {
    updateSubtotal(product);
  });

  // ITERATION 3
  // AGAFAR ELS VALORS DE SUBTOTAL, SUMARLOS Y MOSTRAR EL TOTAL
  let subtotales= document.querySelectorAll(".subtotal span");
  // en el total no le pongo el innerHTML porque necesito almacenar el sitio en el que tengo el dato junto al dato, y dspues en el total.innerText ahi sustituyo el dato por el numero que quiero en este caso suma
  let total = document.querySelector('#total-value span');
  let suma = 0;
  // console.log(total);
  subtotales.forEach((subtotal) =>{
    //tengo que pasar los subtotales a numero para que pueda sumarlos 
    suma += Number(subtotal.innerHTML);
    total.innerText = suma.toFixed(2);
  });
  return total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;

  // Encuentra el producto contenedor más cercano al botón clicado
  const singleProduct = target.closest('.product');

// con eliminar producto lo elimino todo, porque los demas elementos que quiero borrar son hijos de product y si elimino el padre lo elimino todo.
  singleProduct.remove();
  calculateAll();
}


// ITERATION 5

function createProduct() {
  // 1º Creamos un elemento de tipo tr
  // 2º Creamos dentro de dicho elemento, el HTML que queremos inyectar
  // 3º Inyectamos el elemento tr creado en el tbody.
  //para acceder al input le deberia de crear una class o id
  let nameP = document.getElementById("nombreC");
  let precioP = document.getElementById("precioC");
  let tabla = document.querySelector("#cart tbody");

  // Agrega un HTML para cada fila
  //pongo value porque es una info que viene de un input
  //PORQUE NO ME APARECE EL PRODUCTO EN EL INSPECCIONAR DENTRO DE LA TABLA?
  tabla.innerHTML += `
    <tr class="product">
      <td class="name">
        <span>${nameP.value}</span>
      </td>
      <td class="price">$<span>${Number(precioP.value)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`;

    nameP.value = "";
    nameP.placeholder="Product Name";
    precioP.value = "";

    //para que me funcione el evento, me posiciono hasta el ultimo boton creado (removed.length-1) y le añado el evento
    const removed = document.getElementsByClassName('btn btn-remove');
    for (let i = 0; i < removed.length; i++) {
    removed[i].addEventListener('click', removeProduct);
    }
}

//ESTOS EVENTOS SE CREARAN UNA VEZ SE CARGUE LA PAGINA(por eso el 'load'), por eso cuando creo un nuevo producto no funcionan
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //evento de crear nuevos productos
  const createProducto = document.getElementById('create');
  createProducto.addEventListener('click', createProduct);

  //añado un evento cada vez que se pulse el boton remove
  const removed = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removed.length; i++) {
  removed[i].addEventListener('click', removeProduct);
  }
});
