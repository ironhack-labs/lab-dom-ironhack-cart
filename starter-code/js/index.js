var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
const $newProductButton = document.getElementById("create");
const $tabla = document.querySelector("tbody");

function updateSubtot($product) {
  // Iteration 1.1
  const precio=parseInt($product.querySelector(".pu> span").textContent);
  const cantidad=parseInt($product.querySelector(".qty>label input").value);
  const subtotal=Number(precio*cantidad).toFixed(2)
  $product.querySelector(".subtot>span").innerText=subtotal;
  return subtotal;

}

function calcAll() {
  // Iteration 1.2
  let totalp=0;
  const etq=document.querySelector("h2> span");
  const total=document.querySelectorAll(".product");
  total.forEach(elemet=>{
    totalp+=parseInt(updateSubtot(elemet));
   })
   etq.innerText=Number(totalp).toFixed(2);

}

function deleteCart(){
  const $ButtonsD = document.querySelectorAll(".btn-delete");
  for(let i=0;i<$ButtonsD.length;i++){
    $ButtonsD[i].addEventListener('click', (e) => {
      $tabla.removeChild($ref=e.target.parentNode.parentNode);
      calcAll();
    })
  }
}

function newTabla() {
  const $newNombre = document.querySelector("#Nombre");
  const $newPrecio = document.querySelector("#Precio");
  const $newEl = document.createElement("tr")
  $newEl.className = "product";  
  $newEl.innerHTML = 
  ` <td class="name">
      <span>${$newNombre.value}</span>
    </td>
    <td class="pu">
      $<span>${Number($newPrecio.value).toFixed(2)}</span>
    </td>
    <td class="qty">
      <label>
        <input id ="quantity" type="number" value="0" min="0">
      </label>
    </td>
    <td class="subtot">
      $<span>0</span>
    </td>
    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>`
  $tabla.appendChild($newEl);
  deleteCart();
  $newNombre.value = "";
  $newPrecio.value = "";
}



$calc.onclick = calcAll;
$newProductButton.onclick = newTabla;
deleteCart()