var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $new = document.querySelector('tfoot .new')
var $create = document.getElementById('create');

function updateSubtot($product) {

    let subTotal = parseFloat($product.children[1].getElementsByTagName('span')[0].innerHTML) * parseInt($product.children[2].getElementsByTagName('input')[0].value)
    $product.children[3].getElementsByTagName('span')[0].innerHTML = subTotal;
    return subTotal;

}

function calcAll() {
    // Iteration 1.2
    let sum = 0;
    for (let i = 0; i < $cart.children.length; i++)
        sum += updateSubtot($cart.children[i]);
    document.querySelector('h2 > span').innerHTML = sum;

}
$calc.onclick = calcAll;


let deleteBtns = document.querySelectorAll(".btn-delete");
for (let i = 0; i < deleteBtns.length; i++)
    deleteBtns[i].onclick = deleteBtnFunction;

function deleteBtnFunction(e) {
    let deleteBtn = e.target.parentElement.parentElement;
    $cart.removeChild(deleteBtn);

}

function createRow() {

    //row
    let trNode = document.createElement('tr');
    trNode.className = "product";

    //name
    let nameNew = $new.children[0].getElementsByTagName('input')[0].value;
    let puNew = parseFloat($new.children[1].getElementsByTagName('input')[0].value).toFixed(2);

    let spanText = document.createTextNode(nameNew);
    let spanNode = document.createElement('span');
    spanNode.appendChild(spanText);
    let tdNode = document.createElement('td');
    tdNode.className = 'name';
    tdNode.appendChild(spanNode);
    trNode.appendChild(tdNode);

    //pu
    let spanPuText = document.createTextNode(puNew);
    let spanPuNode = document.createElement('span');
    spanPuNode.appendChild(spanPuText);
    let singPuText = document.createTextNode('$');
    let tdPuNode = document.createElement('td');
    tdPuNode.className = 'pu';
    tdPuNode.appendChild(singPuText);
    tdPuNode.appendChild(spanPuNode);
    trNode.appendChild(tdPuNode);

    //qty
    let inputQty = document.createElement('input');
    inputQty.setAttribute("type", "number");
    inputQty.setAttribute("value", 0);
    inputQty.setAttribute("min", 0);
    let labelQty = document.createElement("label");
    labelQty.appendChild(inputQty);
    let tdQty = document.createElement('td');
    tdQty.className = "qty";
    tdQty.appendChild(labelQty);
    trNode.appendChild(tdQty);

    //subtot
    let spanSubtotText = document.createTextNode("0");
    let spanSubtot = document.createElement('span');
    spanSubtot.appendChild(spanSubtotText);
    let singSubtot = document.createTextNode('$');
    let tdSubtot = document.createElement('td');
    tdSubtot.className = 'subtot';
    tdSubtot.appendChild(singSubtot);
    tdSubtot.appendChild(spanSubtot);
    trNode.appendChild(tdSubtot);

    //rm
    let btn = document.createElement("button");
    btn.className = "btn btn-delete ";
    btn.addEventListener("click", deleteBtnFunction, false);
    let btnText = document.createTextNode("Delete");
    btn.appendChild(btnText);
    let tdRm = document.createElement('td');
    tdRm.appendChild(btn);
    trNode.appendChild(tdRm);

    $cart.appendChild(trNode);
    $new.children[0].getElementsByTagName('input')[0].value = "";
    $new.children[1].getElementsByTagName('input')[0].value = "";

}
$create.onclick = createRow;