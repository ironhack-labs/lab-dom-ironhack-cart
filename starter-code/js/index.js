var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');



function updateSubtot($product) {
    // Iteration 1.1

    $product.querySelector(".subtot span").innerHTML =
        $product.querySelector(".pu span").innerHTML *
        $product.querySelector(".qty input").value;

    //console.log("subtotal: " + $product.querySelector(".subtot span").innerHTML);
    return Number($product.querySelector(".subtot span").innerHTML);

}


function calcAll() {
    // Iteration 1.2
    let cartRows = document.querySelectorAll(".product");
    let grandtotal = 0;
    for (i = 0; i < cartRows.length; i++) {
        //console.log("Row: " + cartRows[i]);
        grandtotal += updateSubtot(cartRows[i]);
    }
    //console.log("grandtotal: " + grandtotal);

    document.querySelector("h2 span").innerHTML = grandtotal;
}
$calc.onclick = calcAll;
setupDeleteButtons();
setupCreateButton();

function setupDeleteButtons() {
    let cartRows = $cart.querySelectorAll(".product");
    let delBtn = null;
    for (i = 0; i < cartRows.length; i++) {
        delBtn = cartRows[i].querySelector(".btn.btn-delete")

        delBtn.onclick = function(e) {
            let prod = e.currentTarget.parentNode.parentNode; //.removeChild(cartRows);
            prod.parentNode.removeChild(prod);
            //prod.remove(); alternative method to directly address the tobedeleted Object

        };


    }
}

function setupCreateButton() {
    let btn = document.getElementById("create");
    console.log(btn);
    btn.onclick = function(e) {
        let inputsParams = e.currentTarget.parentNode.parentNode.getElementsByTagName("input");
        console.log(inputsParams[0].value, inputsParams[1].value);

        let insertNewProd = ` <tr class="product">
        <td class="name">
            <span>${inputsParams[0].value}</span>
        </td>

        <td class="pu">
            $<span>${inputsParams[1].value}</span>
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
    </tr>`

        e.currentTarget.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("tbody")[0].innerHTML += insertNewProd;
        setupDeleteButtons(); //to recreate the delete Button event handlers after   insert
    }

}