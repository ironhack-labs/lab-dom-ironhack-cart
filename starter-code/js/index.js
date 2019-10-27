let tbody = document.querySelector("tbody")
let elements = document.querySelectorAll("tbody > tr");
let pu = document.querySelectorAll(".pu > span");
let qty = document.querySelectorAll(".qty > label > input");
let subtot = document.querySelectorAll(".subtot > span");
let del_button = document.querySelectorAll(".btn-delete");
let calc = document.getElementById('calc');
let total = 0;
let subtotalList = [];

console.log(subtot[0].innerHTML);

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
            tbody.removeChild(elements[i]);  
            elements = document.querySelectorAll("tbody > tr");
            pu = document.querySelectorAll(".pu > span");
            qty = document.querySelectorAll(".qty > label > input");
            subtot = document.querySelectorAll(".subtot > span");
            del_button = document.querySelectorAll(".btn-delete");
            total = 0;
            let listForSubtotal = []
            for(let j=0; j<subtot.length; j++){
                number = parseInt(subtot[j].innerHTML);
                listForSubtotal.push(number);
            }
            subtotalList = listForSubtotal;
            calcAll();
        }
    }
}

calc.onclick = function(btn){
    btn.preventDefault();
    updateSubtot(elements);
    calcAll();
}

del_button.onmouseover = delete_element();