let tbody = document.querySelector("tbody")
let elements = document.querySelectorAll("tbody > tr");
let pu = document.querySelectorAll(".pu > span");
let qty = document.querySelectorAll(".qty > label > input");
let subtot = document.querySelectorAll(".subtot > span");
let del_button = document.querySelectorAll(".btn-delete");
let calc = document.getElementById('calc');
let create = document.getElementById('create');
let inputText = document.getElementById("inputText");
let inputNumber = document.getElementById("inputNumber");
let total = 0;
let subtotal = 0;
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


create.onclick = function(btn){

    btn.preventDefault();
    
    let element = document.createElement('tr');
    tbody.appendChild(element);
    element.classList.add("product");
    
    let element2 = document.createElement('td');
    element.appendChild(element2);
    element2.classList.add("name");
        let element21 = document.createElement('span');
        element2.appendChild(element21);
        element21.innerHTML = inputText.value;
    
    let element3 = document.createElement('td');
    element.appendChild(element3);
    element3.classList.add("pu");
    element3.innerHTML = "$";
        let element31 = document.createElement('span');
        element3.appendChild(element31);
        element31.innerHTML = inputNumber.value;
    
    let element4 = document.createElement('td');
    element.appendChild(element4);
    element4.classList.add("qty")
        let element41 = document.createElement('label');
        element4.appendChild(element41);
            let element411 = document.createElement('input');
            element41.appendChild(element411);
            element411.setAttribute("type", "number");
            element411.setAttribute("value", "0");
            element411.setAttribute("min", "0");
    
    let element5 = document.createElement('td');
    element.appendChild(element5);
    element5.classList.add("subtot")
    element5.innerHTML = "$";
        let element51 = document.createElement('span');
        element5.appendChild(element51);
        element51.innerHTML = "0";
    
    let element6 = document.createElement('td');
    element.appendChild(element6);
    element6.classList.add("rm");
        let element61 = document.createElement('button');
        element6.appendChild(element61);
        element61.setAttribute("class", "btn btn-delete");
        element61.innerHTML = "Delete";

    inputText.value = "";
    inputNumber.value = "";

    tbody = document.querySelector("tbody")
    elements = document.querySelectorAll("tbody > tr");
    pu = document.querySelectorAll(".pu > span");
    qty = document.querySelectorAll(".qty > label > input");
    subtot = document.querySelectorAll(".subtot > span");
    del_button = document.querySelectorAll(".btn-delete");
    calc = document.getElementById('calc');
    create = document.getElementById('create');
    inputText = document.getElementById("inputText");
    inputNumber = document.getElementById("inputNumber");

}