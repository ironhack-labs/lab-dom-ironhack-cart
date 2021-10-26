// ITERATION 1

function updateSubtotal(product) {
    console.log("Calculating subtotal, yey!")

    //... your code goes here
    const price = product.querySelector(".price span")
    const quantity = product.querySelector("input[type='number']")

    const subtotal = product.querySelector(".subtotal span")

    return (subtotal.innerText = parseFloat(price.innerText) * quantity.value)
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // const singleProduct = document.querySelector(".product")
    // updateSubtotal(singleProduct)
    // end of test

    // ITERATION 2
    //... your code goes here
    const allProducts = document.querySelectorAll(".product")

    let total = 0

    for (product of allProducts) {
        total += updateSubtotal(product)
    }

    document.querySelector("#total-value span").innerText = total
}

// ITERATION 4

// Add onclick on all buttons
const removeButton = document.querySelectorAll(".btn-remove")

for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].setAttribute("onclick", "removeProduct(this)")
}

function removeProduct(e) {
    const parent = e.parentNode.parentNode
    parent.remove()
    calculateAll()
}

// ITERATION 5

function createProduct() {
    //... your code goes here
    const newName = document.querySelector(".create-product input[type='text']").value
    const newPrice = document.querySelector(".create-product input[type='number']").value

    let table = document.querySelector("#cart tbody")

    let newItem = document.createElement("tr")
    newItem.innerHTML = `<tr class="product">
                    <td class="name">
                        <span>${newName}</span>
                    </td>
                    <td class="price">$<span>${newPrice}</span></td>
                    <td class="quantity">
                        <input type="number" value="0" min="0" placeholder="Quantity" />
                    </td>
                    <td class="subtotal">$<span>0</span></td>
                    <td class="action">
                        <button class="btn btn-remove" onclick="removeProduct(this)">Remove</button>
                    </td>
                </tr>`
    newItem.classList.add("product")

    table.appendChild(newItem)
}

window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementById("calculate")
    calculatePricesBtn.addEventListener("click", calculateAll)

    //... your code goes here
    document.querySelector("#create").addEventListener("click", createProduct)
})
