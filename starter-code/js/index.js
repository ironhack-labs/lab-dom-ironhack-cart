var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $create = document.getElementById('create');
let $delete = document.getElementsByClassName('btn-delete');


function updateSubtot($product) {
  // Iteration 1.1
  let pu = parseFloat($product.querySelector('.pu span').innerText)
  let qty = $product.querySelector('input').value
  return $product.childNodes[7].innerText = `$${pu*qty}`
}

function delProd() {
  let $productList = $cart.getElementsByClassName('product')
  let arr = Array.from($productList)
  console.log(arr)
  arr.forEach(element =>
    {
      element.getElementsByClassName('btn-delete')[0].onclick = function()
      {
        $cart.removeChild(element)
      };
    })
}

delProd()

function addProd() {
  let $new = document.querySelectorAll('tr.new td input');
  let $productList = document.getElementsByClassName('product');
  let addRow = $productList[0].cloneNode(true)
  let stopName = true
  let stopNum = true
  if($new[0].value !='')
  {
    addRow.querySelector('.name span').innerText = $new[0].value
    stopName = false
  }
  if($new[1].value !=0)
  {
    addRow.querySelector('.pu span').innerText = $new[1].value
    stopNum = false
  }
  if((!stopName)&&(!stopNum))
  {
    $cart.innerHTML += `<tr class="product">${addRow.innerHTML}</tr>`
    $new[0].value = ''
    $new[1].value = ''
    delProd()
  }
  else console.log('Yo enter smth')
  console.log($delete)
  console.log(Array.from($cart.getElementsByClassName('product')))
}

function calcAll() {
  // Iteration 1.2
  let $productList = document.getElementsByClassName('product');
  let total = 0
  productList = Array.from($productList)
  productList.forEach(element => {
    updateSubtot(element)
    total += parseFloat(element.querySelector('.subtot').innerText.replace('$',''))
  })
  document.querySelector('h2 span').innerText = total
}
$calc.onclick = calcAll;
$create.onclick = addProd;
// arrOfDel = Array.from($cart.getElementsByClassName('btn-delete'))
// arrOfDel.forEach( element =>
//   {
//     element.onclick = delProd
//   })
