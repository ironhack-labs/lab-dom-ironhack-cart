var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
//var pa = document.querySelector('.pa input').innerText;
function updateSubtot() {
 // Iteration 1.1
 let sub = 0 ;
//  if (sub === 0){
  var pu = document.querySelector('.pu span').innerText;
 let preU = Number(pu);
 var qty = document.querySelector('input[value]').value;
 let qtyV = Number(qty);
  sub = preU * qtyV;
  document.querySelector('.subtot').innerHTML = sub
  // console.log('if')

// } 
// else {
//   var pu = document.querySelector('input[value]').value;
//   let preU = Number(pu);
//   var qty = document.querySelector('input[value]').value;
//   let qtyV = Number(qty);
//   sub = preU * qtyV;
//   document.querySelector('.subtoT').innerHTML = sub
//   console.log('else')

//  }
console.log(sub)
 
calcAll()
}
function calcAll() {
 // Iteration 1.2
 var $tfoot = document.querySelector('tfoot')
 const trNew = document.createElement('tr')
 trNew.setAttribute('class', 'new')
 $tfoot.appendChild(trNew)
 const td1 = document.createElement('td')
 trNew.appendChild(td1)
 const td2 = document.createElement('td')
 td2.setAttribute('class', 'pu')
 trNew.appendChild(td2)
 const td3 = document.createElement('td')
 td3.setAttribute('class', 'qty')
 trNew.appendChild(td3)
 const td4 = document.createElement('td')
 td4.setAttribute('class', 'subtot')
 trNew.appendChild(td4)
 const td5 = document.createElement('td')
 trNew.appendChild(td5)
 const input1 = document.createElement('input')
 input1.setAttribute('type', 'text')
 input1.setAttribute('min', '0')
 td1.appendChild(input1)
 const input2 = document.createElement('input')
 input2.setAttribute('type', 'number')
 input2.setAttribute('min', "0")
 td2.appendChild(input2)
 const input3 = document.createElement('input')
 input3.setAttribute('type', 'number')
 input3.setAttribute('min', '0')
 td3.appendChild(input3)
 const span1 = document.createElement('span')
 span1.innerText = 0
 td4.appendChild(span1)
 const button = document.createElement('button')
 button.innerText = 'Create'
 button.setAttribute('id', 'create')
 button.setAttribute('class', 'btn')
 td5.appendChild(button)
 }
//updateSubtot($product)
$calc.addEventListener('click', updateSubtot)