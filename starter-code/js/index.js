let element = document.querySelectorAll("tbody > tr")
let pu = document.querySelectorAll(".pu > span");
let qty = document.querySelectorAll(".qty > label > input");
let subtot = document.querySelectorAll(".subtot > span");
let del_button = document.querySelectorAll(".btn-delete");
let calc = document.getElementById('calc');
let total = 0;
let subtotalList = [];

function updateSubtot($product) {
    total = 0;
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

function delete_element() {
    for(let i=0; i<del_button.length; i++){
        del_button[i].onclick = function(btn){
            btn.preventDefault();
            alert("Hola mundo");
        }
    }
}

calc.onclick = function(btn){
    btn.preventDefault();
    updateSubtot(element);
    calcAll();
}

del_button.onmouseover = delete_element();