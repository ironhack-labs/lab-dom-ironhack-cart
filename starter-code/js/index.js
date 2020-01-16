let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
let $create=document.getElementById('create');
let sumTotal;



function updateSubtot($product) {
  // Iteration 1.1

let $pu = $product.querySelector('.pu').innerText;
let	$qty = $product.querySelector('.qty input').value;
let	$subtot = $product.querySelector('.subtot');
	//$calc = document.querySelector('#calc')
	
  numPu=Number($pu.split('$')[1])
    numQty=Number($qty)


 let   result = (numPu*numQty)
    
    $subtot.innerHTML=`$<span>${result}</span>`

sumTotal=Number(sumTotal) + result;



//return result;


}

function  addProduct(){
 
  const productName=document.querySelector('#id1').value
  const productPrice=document.querySelector('#id2').value
  const $newTr=document.createElement('tr')

  const newProduct=`
        <td class="name">
          <span>${productName}</span>
        </td>
    
        <td class="pu">
          $<span>${Number(productPrice).toFixed(2)}</span>
        </td>
    
        <td class="qty">
          <label>
            <input type="number" value="0" min="0">
          </label>
        </td>
    
        <td class="subtot">
          $<span>0</span>
        </td>
    
        <td class="rm">
          <button class="btn btn-delete">Delete</button>
        </td>
  `;
$newTr.className='product'
$newTr.innerHTML=newProduct
$cart.appendChild($newTr)




}

function calcAll() {
  sumTotal=0;
  document.querySelectorAll('.product').forEach($product=>{updateSubtot($product)})
  //updateSubtot(document.querySelector('.product'));

  let $h2Total = document.querySelector('#id-h2');
  $h2Total.innerHTML=`Total: $<span>${sumTotal.toFixed(2)}</span>`
  //console.log(products);
  
  
  
  /*

	let $h2Total = document.querySelector('#id-h2');
	let sumTotal=0;
		for(let i=0;i<products.length;i++){
			sumTotal+=updateSubtot(products[i])
		}


$h2Total.innerHTML=`$<span>${updateSubtot()}</span>`

*/
  // Iteration 1.2
}

$calc.onclick = calcAll;
$create.onclick = addProduct;



