let succesButton = document.getElementsByClassName('btn-success')[0]

succesButton.onclick = () => {
    let products = document.getElementsByClassName('product')
    let bigTotalPrice = 0
    for (let i = 0; i < products.length; i++) {
        let price = document.getElementsByClassName('price')[i].innerHTML
        let qty = document.getElementsByClassName('quantity')[i].value
        let totalPrice = price * qty
        let child = document.getElementsByClassName('total-price')[i]
        bigTotalPrice += totalPrice
        child.innerHTML = totalPrice
        child.parentNode.appendChild(child)
    }
    let child = document.getElementById('big-total-price')
    child.innerHTML = bigTotalPrice
    child.parentNode.appendChild(child)
}

let createButton = document.getElementsByClassName('btn-create')[0]
let deleteButtons = document.getElementsByClassName('btn-delete')

const deleteProduct = e => {
    let child = e.currentTarget.parentNode
    child.parentNode.removeChild(child)
}

createButton.onclick = () => {
    let inputs = document.getElementsByClassName('create-input')
    let newProduct = document.createElement('div')
    let newName = document.createElement('span')
    let newPrice = document.createElement('span')
    let newLabel = document.createElement('label')
    let newQuantity = document.createElement('input')
    let newTotalPrice = document.createElement('span')
    let newDiv = document.createElement('div')
    let newButton = document.createElement('button')
    newProduct.className = 'flexbox product'
    newPrice.className = 'price'
    newQuantity.className = 'quantity'
    newTotalPrice.className = 'total-price'
    newButton.className = 'btn btn-delete'
    newName.innerHTML = inputs[0].value
    newPrice.innerHTML = inputs[1].value
    newLabel.innerHTML = 'QTY'
    newTotalPrice.innerHTML = '0.00'
    newButton.innerHTML = 'Delete'
    document.getElementById('all-products').appendChild(newProduct)
    newProduct.appendChild(newName)
    newProduct.appendChild(newPrice)
    newProduct.appendChild(newLabel)
    newProduct.appendChild(newQuantity)
    newProduct.appendChild(newDiv)
    newDiv.appendChild(newTotalPrice)
    newProduct.appendChild(newButton)
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = e => {
            deleteProduct(e)
        }
    }
}
