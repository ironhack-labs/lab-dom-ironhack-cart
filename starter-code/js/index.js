let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');

function updateSubtot($product) {
  let subtotality = $product.querySelector(".subtot > span");
  let precioProduct = $product.querySelector(".pu > span");
  let canti = $product.querySelector(".qty input[type = number]").value;
  subtotality.innerText = parseFloat(precioProduct.innerText) * canti;
  return subtotality.innerText; //devuelve string
}

function calcAll() {
  let listaProducts = document.querySelectorAll(".product");
  listaProducts.forEach(updateSubtot);
  console.log(listaProducts);
}

$calc.onclick = calcAll;

// function updateSum($subsum) {
// let sub = $subSum.querySelector(".subtot > spam");
// let sub1 = $subSum.querySelector(".subtot1 > apam");
// let sub2 = $subSum.querySelector("h1 > spam").value;
// sub2.innerText = parseFloat(sub.innerText) + parseFloat(sub1.innerText);
// return sub2.innerText;

// }
// function totalSum(){
// let totality = document.querySelector(".subtot + .subtot1");
// totality.forEach(updateSum);
// console.log(totality);
// }

/*let myButton = document.getElementsByClassName("btn btn-success");
button.onclick = function(btn){
  btn.preventDefault();
  updateSubtot(ironBubbleHead);
  return subtot > spam * subtot > spam;
 };
 */
//console.log(total);

//var columnas=e.querySelectorAll(".subtot > spam");
 
        
 
    // mostramos la suma total
    let filas=document.querySelectorAll("#cart tfoot tr td");
    filas[3].textContent=total.toFixed(2);


