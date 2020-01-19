var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

var $del = document.querySelector('.rm button');

var elem = document.querySelectorAll('.rm button');

/* for (i = 0; i < elem.length; ++i) {

  elem[i].addEventListener('click', function() {



    // Do something amazing

  });

}

 */

$calc.addEventListener('click', function(){

  calcAll();
})

function updateSubtot($product) {
  // Iteration 1.1
  let priceunit = $cart.querySelector('.pu span').innerHTML;
  let quant = $cart.querySelector('.qty input').value;
  
  let subtot = priceunit * quant;
  
  let subtotval = subtot;
   
  $cart.querySelector('.subtot span').innerHTML = subtotval;
  var $cart = document.querySelector('#cart tbody');
  
}

function calcAll() {

 
  var $cart = document.querySelector('#cart tbody');
  let quant = 0;
  let priceunit = 0;
  let subtot = 0;
  let total = 0;
let elementproduct = $cart.getElementsByClassName('product');

for (let index = 0; index < elementproduct.length; index++) {
  quant = elementproduct[index].querySelector('.qty input').value
  priceunit = elementproduct[index].querySelector('.pu span').innerHTML
subtot = elementproduct[index].querySelector('.subtot span').innerHTML = quant * priceunit;
total += subtot ;
}

document.querySelector('h2 span').innerHTML = total;


}






function rm(){
//el boton de eliminar
let btn = document.getElementsByClassName('btn btn-delete')
//aqui pongo para borrar con padre
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
      e.currentTarget.parentNode.parentNode.remove();

    }, false);
  }
  
}
let btn2 = document.getElementsByClassName('btn btn-delete')
//aqui pongo para borrar con padre

    btn2 = addEventListener('click', function(e) {
      //e.currentTarget.parentNode.parentNode.remove();
     
       rm()
        

    }, false);

var btn = document.getElementById('create')
//aqui pongo para borrar con padre

    btn.addEventListener('click', function(e) {
      //e.currentTarget.parentNode.parentNode.remove();
     
        add();
        

    }, false);


function add(){


  prodname =document.querySelector('.new td input').value;
  prodprice =document.querySelector('.new td .price').value;
  quan =document.querySelector('.new td .cua').value;
  subtot =document.querySelector('.new .subtot').innerHTML;
  var para = document.createElement("tr"); 
  para.className ="product"              // Create a <p> element
  para.innerHTML = `
  <td class="name">
    <span>${prodname}</span>
  </td>

  <td class="pu">
    $<span>${prodprice}</span>
  </td>

  <td class="qty">
    <label>
      <input type="number" value=${quan} min="0">
    </label>
  </td>

  <td class="subtot">
    $<span>${subtot}</span>
  </td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
`;             
  $cart.appendChild(para);       
}

