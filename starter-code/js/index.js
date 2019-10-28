var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');


//const prices = document.getElementsByClassName("pu")
//
//const arrayPu = [...prices];
//const price = arrayPu[0].children[0];
//
const subT = document.getElementsByClassName("subTot");
const arraySubTot = [...subT]
const prod = document.getElementsByClassName("product");



// console.log(num)





function updateSubtot($product) {

  let price = $product.querySelector(".pu");
  let quantity = $product.querySelector(".qty");
  let sub = price * quantity;

  //arraySubTot.append(sub)
  //arraySubTot.push(sub)

  sub = subT.innerHTML;


}


console.log(prod);

const arrayTot = [...prod]


function calcAll() {
  arrayTot.forEach(function updateSubtot($product) => {
    return sub;
  });

  console.log(prod)
  updateSubtot(prod)
}
$calc.onclick = calcAll;