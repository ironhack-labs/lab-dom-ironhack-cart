var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
// ---------------------------------------
let $prod = document.querySelector('.product');


// let inputListener = document.querySelector(".qty input")

function updateSubtot({target}) {
  // Iteration 1.1
  let price = parseFloat($prod.querySelector(".pu span").innerText)
  let subTot = isNaN(parseInt(target.value)) ? 0 : price*parseInt(target.value)
  target.parentNode.parentNode.parentNode.querySelector(".subtot span").innerText = subTot
  return subTot;
}
function calcAll() {
  // Iteration 1.2
  let total = document.querySelectorAll(".subtot span");
  let sum = 0
  total.forEach(el => {
    sum += parseFloat(el.innerText)   
  })
  document.querySelector('h2 span').innerText = sum;
  return sum;
}




function remove(e){
  // $cart.removeChild(target.parentNode.parentNode.remove())
  let node = e.currentTarget;
  node.parentNode.parentNode.remove()
}

$calc.onclick = calcAll;

//Add product

const addProduct = (e) => {
  const row = $prod.cloneNode(true)
  $cart.append($prod.cloneNode(true))
  
}



// inputListener.addEventListener('keyup', updateSubtot)
$cart.addEventListener('keyup',updateSubtot)



deleteButtons = document.querySelectorAll('.btn-delete')

// for(let i=0; i<=deleteButtons.length;i++){
//   deleteButtons[i].addEventListener('click',remove)
// }


function create({target}){
    let product = document.querySelector('input[type="text"]')
    let {value} = product.innerText
    product.value = ''
    let price = document.querySelector('input[type="number"]')


}


let createBtn = document.querySelector('tfoot')

createBtn.addEventListener('click', create)