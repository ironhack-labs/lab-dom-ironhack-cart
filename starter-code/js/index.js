let element = document.querySelectorAll("tbody > tr")
let pu = document.querySelectorAll(".pu > span");
let qty = document.querySelectorAll(".qty > label > input");
let subtot = document.querySelectorAll(".subtot > span");
let calc = document.getElementById('calc');
let total = 0;
let subtotalList = [];

function updateSubtot($product) {
    total = 0;s
    subtotalList = [];
    for(let i=0; i<$product.length; i++){
        subtotal = pu[i].innerHTML * qty[i].value;
        subtot[i].innerHTML = subtotal;
        subtotalList.push(subtotal);
    }
}

function calcAll() {
    for(let i=0; i<subtotalList.length; i++){
        total += subtotalList[i];
    }
    document.getElementById("totalResult").innerHTML = total;
}

calc.onclick = function(btn){
    btn.preventDefault();
    updateSubtot(element);
    calcAll();
}