// ITERATION 1
function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').innerHTML;
    let quantity = product.querySelector('.quantity input').value;
    let subTotalPrice = price * quantity;

    console.log("subtotalprice =", subTotalPrice);
    product.querySelector('.subtotal span').innerHTML = subTotalPrice;
    return subTotalPrice;

    //... your code goes here
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    //const singleProduct = document.querySelector('.product');
    //updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2
    //... your code goes here
    let trList = document.querySelectorAll(".product");
    var totalPrice = 0;

    trList.forEach((tr) => {
        console.log("tr : ", tr);
        totalPrice += updateSubtotal(tr);
    });


    // ITERATION 3
    //... your code goes here
    document.querySelector("#total-value span").innerHTML = totalPrice;
    console.log("toto");
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
    target.parentElement.parentElement.outerHTML = "";

    calculateAll();
}

// ITERATION 5

function createProduct() {
    //... your code goes here
    console.log("toto");
    let pdtName = document.querySelector(".create-product .name input").value;
    let pdtPrice = document.querySelector(".create-product .price input").value;

    const tr = document.createElement("tr");
    tr.classList.add("product")
    tr.innerHTML += `<td class="name">
                      <span>${pdtName}</span>
                    </td>
                    <td class="price">$<span>${pdtPrice}</span></td>
                    <td class="quantity">
                      <input type="number" value="0" min="0" placeholder="Quantity" />
                    </td>
                    <td class="subtotal">$<span>0</span></td>
                    <td class="action">
                      <button class="btn btn-remove">Remove</button>
                    </td>`;
    document.querySelector("#cart tbody").appendChild(tr);
    //tr.querySelector(".btn remove").onclick = removeProduct;

    const removePriceBtn = document.querySelectorAll(".btn-remove");
    removePriceBtn.forEach((btn) => btn.onclick = removeProduct);

}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
    const removePriceBtn = document.querySelectorAll(".btn-remove");
    removePriceBtn.forEach((btn) => btn.onclick = removeProduct);

    const createBtn = document.getElementById("create");
    createBtn.onclick = createProduct;
});