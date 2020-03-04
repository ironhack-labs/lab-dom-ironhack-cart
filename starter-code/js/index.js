// ITERATION 1

function updateSubtotal($product) {
 
  
  
  for(let i = 0 ; i < $product.length;i++){

      let price = Number(       $product[i].querySelector('.price').innerText.replace('$','')    )

      let quantity = Number(    $product[i].querySelector('.quantity').children.item(0).value    )
      let subtotal = $product[i].querySelector('.subtotal').lastChild
      subtotal.innerText= price * quantity
  }

}


function calculateAll() {
  
    let products = document.getElementsByClassName('product')
   updateSubtotal(products)

// ITERATION 2
const total = document.getElementById("total-value").lastChild;

total.innerText=getTotal()
  }
  


  /////////////////////////////////////////////////////////////////
  window.addEventListener('load', () => {
    const $calculateTrigger = document.getElementById('calculate');
  
    $calculateTrigger.addEventListener('click', calculateAll);
    
  });
//////////////////////////////////////////////////
// ITERATION 4  YA FUNCIONA BN

function productRemoveListener() {
  // crea array de botones que remueven
  // creamos for que pasa por todo el array
  // queremos que al hacer click se remueva el row de la tabla
  //crear un evento ligado al click que borre el boton
  // CREAMOS DOBLE PARENT PARA QUE SE ELIMINE TODA LA FILA 
  // ponemos la funcion calculateAll para q recalcule todo

  let removeItem = document.getElementsByClassName("btn-remove") 

  for (i =0, j=removeItem.length; i < j; i++) {
    let btn = removeItem[i] 

    
    btn.addEventListener("click", function(event) { 
      let btnClickRemove = event.target;

      btnClickRemove.parentElement.parentElement.remove();  
      calculateAll() 
          
        })}

}

productRemoveListener()


////////////////////////////////////////////////////////////
// ITERATION 5  /////////////////////////////////////////

let container = document.getElementById("cart")


/// no entendi como esta creando el producto, lo revisare con calma mas tarde 

  function addItem() {

    const price = input.value;
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.innerText = "Create Product";
    button.onclick = RemoveItem;
    div.innerHTML = `
    <div class="item">
      <div>name</div>
      <div class="price">${price}</div>
    </div>
      `;
    div.appendChild(button);
    container.appendChild(div);
    total.innerText = `MXN $  ${getTotal()}.00`;
  }
  
  btn.onclick = addItem();







//generar dos inputs uno con nombre y otro con precio 
  
 

function getTotal() {
  const priceAllItems = [...document.getElementsByClassName("subtotal")];
  const total = priceAllItems.reduce(
    (acc, item) => (acc += parseInt(item.lastChild.innerText)),
    0
  );
  return total;
}
   
