var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

//let button =  document.getElementById('calc')
//  button.addEventListener('click', event => {
//    updateSubtot()
//  });

function updateSubtot($product) {
  // Iteration 1.1
  let price = document.getElementsByClassName('pu')
      for (x=0; x < price.length ; x++){
        //console.log(price[x])
        let OnlyPrice = price[x].getElementsByTagName('span');
        for (y=0; y < OnlyPrice.length; y++){
          //console.log(OnlyPrice[y])
          let subTotal = document.getElementsByClassName('subtot');
           console.log(subTotal[0].innerHTML)
            for (i=0; i < subTotal.length; i++){
              subTotal[i].innerHTML = "$" + $product.value * Number(OnlyPrice[y].innerHTML);
              //console.log(subTotal[i])
            }
        }
      }
      //let qty = document.getElementsByClassName('qty');
}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;

let button =  document.getElementById('create')
  button.addEventListener('click', event => {  
    const defaultProd = ["", "", 0, "$0", "Delete"];
    let tr = document.createElement('tr')
    //let tablas = document.getElementById('');
    let table = document.getElementById('cart');

    for (i=0; i < defaultProd.length; i++) {
      let td = document.createElement('td');
      switch (i){
      case 0:
        td.innerHTML= document.getElementById('pname').value;
        tr.appendChild(td);
        break;
      case 1:
        td.innerHTML= document.getElementById('punit').value;
        tr.appendChild(td);
        break;
      case 2:
          td.innerHTML= 1
          tr.appendChild(td);
          break;
      case 3:
          td.innerHTML= "$0"
          tr.appendChild(td);
          break;
      case 4:
          td.innerHTML= "Delete"
          tr.appendChild(td);
          break;
      }
    }
    table.appendChild(tr);
    //tablas.appendChild(table)
});