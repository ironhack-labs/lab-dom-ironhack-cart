var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
// var total = document.querySelector("body > h2 > span")
var create = document.getElementById('create')

function updateSubtot(product) {
  let priceProduct = product.querySelector(".pu span")
  let quantity = product.querySelector(".qty input")
  let sub = priceProduct.innerText * quantity.value
  return sub
}

function calcAll() {

  let allProducts = document.querySelectorAll('.product')
  console.log(allProducts)
  let t = [...allProducts].reduce((total, product) => {
    let sub = product.querySelector("td.subtot > span")
    let subTotal = updateSubtot(product) //100, 50, 5
    sub.innerText = subTotal 
    total += subTotal; //100, 150, 155
    return total 
  }, 0);
  console.log(t, '-=-=-=-=-=-= 155')
  document.querySelector("body > h2 > span").innerText = t
  
  //console.log(updateSubtot(product))
}
function callCreate() {
let nameOProduct = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]")
let priceOProduct = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]")

let html = 
        `<tr class="product">
          <td class="name">
            <span>${nameOProduct.value}</span>
          </td>

          <td class="pu">$<span>${priceOProduct.value}</span></td>

          <td class="qty">
            <label>
              <input type="number" value="0" min="0" />
            </label>
          </td>

          <td class="subtot">$<span>0</span></td>

          <td class="rm">
            <button class="btn btn-delete">Delete</button>
          </td>
        </tr>
      `

        $cart.insertAdjacentHTML('beforeend', html)
}
// for (i = 0; i <=)
$calc.onclick = calcAll;


create.onclick = callCreate;
console.log(document.getElementsByClassName('product'))

document.addEventListener('click', e => {
  if( e.target.className.includes('btn-delete')) {
    e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
  }
});

