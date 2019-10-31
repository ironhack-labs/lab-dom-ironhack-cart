var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

var $del = document.querySelector('.rm button')


function updateSubtot($product) {
  // Iteration 1.1
  let price = document.querySelectorAll('.pu span')
  let quant = document.querySelectorAll('input[value]')
  let subTotal = document.querySelectorAll('.subtot span')
  let suma = 0;
    for(let i = 0; i<price.length;i++){
      let nV = 0;
      nV = Number(price[i].innerText) * Number(quant[i].value)
      subTotal[i].innerHTML = `${nV}`
      suma += nV
    }

  document.querySelector('h2 span').innerHTML = `${suma}`
    
}

function calcAll() {
  // Iteration 1.2
  document.querySelector('.btn.btn-success').onclick = function(){
    updateSubtot();
  }
}

const btnD = document.querySelectorAll('.rm button');
      btnD.forEach(element => {
        element.addEventListener('click', (event)=>{
        const child = element.parentNode.parentNode.parentNode
        child.removeChild(element.parentNode.parentNode)
        calcAll();
        const btnD = document.querySelectorAll('.rm button');
      } );
});


function delBtn(){
  
}

$calc.onclick = calcAll;
//deleteButton.onclick = delBtn;