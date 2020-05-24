// ITERATION 1
class Cart {
    constructor() {
        this.products = [
            [new Product('Ironhack Rubber Duck', 25.00), 0]
        ]
        this.total = 0
    }

    addProducts(product) {
        if (!this.findProductByName(product.name)) {
            this.products.push([product, 0])
        } else {
            this.updateProduct(product.name)
            this.updateProduct(product.price)
        }
        this.printProducts()
    }
    findProductByName(name) {
        let productFound = ''
        this.products.forEach(product => {
            if (product[0].name === name) {
                product[1]++
                    productFound = true
            } else {
                productFound = false
            }
        })
        return productFound
    }
    updateProduct(value) {
        this.products.forEach(product => {
            if (product[0].name === value) {
                product[1]++
            }
            if (product[0].price !== value) {
                product[0].price = value
            }
        })
    }
    removeProducts(product) {
        // TODO: find on this.products and delete this position on array
        this.printProducts()
    }

    changeQuantity(product, quantity) {
        //  Find product modify quantity and modify subtotalr poduct on view
        this.calcTotal()
    }
    calcTotal() {
        // TODO: refresh total sum all (product quantity * product price)

    }
    setAttrs(element, attrs) {
        for (let key in attrs) {
            element.setAttribute(key, attrs[key]);
        }
        return element
    }
    subTotalProduct(price, quantity) {
        return price * quantity
    }
    printProducts() {
        const tableBody = document.querySelector('#cart tbody')
        tableBody.innerHTML = ''
        this.products.forEach(product => {
            const quantityAttrs = { 'type': 'number', 'value': 0, 'min': 0, 'placeholder': 'Quantity' }
            const tr = document.createElement('tr')
            tr.className = 'product'
            tr.appendChild(document.createElement('td')).className = 'name'
            tr.querySelector('.name').appendChild(document.createElement('span')).innerText = product[0].name
            tr.appendChild(document.createElement('td')).className = 'price'
            tr.querySelector('.price').innerText = '$'
            tr.querySelector('.price').appendChild(document.createElement('span')).innerText = Number(product[0].price).toFixed(2)
            tr.appendChild(document.createElement('td')).className = 'quantity'
            tr.querySelector('.quantity').appendChild(this.setAttrs(document.createElement('input'), quantityAttrs))
            tr.querySelector('.quantity input').setAttribute('value', product[1])
            tr.appendChild(document.createElement('td')).className = 'subtotal'
            tr.querySelector('.subtotal').innerText = '$'
            tr.querySelector('.subtotal').appendChild(document.createElement('span')).innerText = this.subTotalProduct(Number(product[0].price).toFixed(2), product[1])
            tr.appendChild(document.createElement('td')).className = 'action'
            tr.querySelector('.action').appendChild(document.createElement('button')).className = 'btn btn-remove'
            tr.querySelector('.action button').innerText = 'Remove'
            tableBody.appendChild(tr)
        });

    }
    printTotal() {
        document.querySelector('#total-value span').innerText = this.total
    }
}


class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}
const theCart = new Cart
theCart.printProducts()
theCart.printTotal()

// function updateSubtotal(product) {
//     // console.log('Calculating subtotal, yey!')

//     //... your code goes here
// }

// function calculateAll() {
//     // code in the following two lines is added just for testing purposes.
//     // it runs when only iteration 1 is completed. at later point, it can be removed.
//     const singleProduct = document.querySelector('.product')
//     updateSubtotal(singleProduct)

//     // end of test

//     // ITERATION 2
//     //... your code goes here

//     // ITERATION 3
//     //... your code goes here
// }

// ITERATION 4

// function removeProduct(event) {
//     const target = event.currentTarget
//         //... your code goes here
// }

// ITERATION 5


window.addEventListener('load', () => {
    const newProductBtn = document.getElementById('create')

    newProductBtn.addEventListener('click', () => {
        const name = document.querySelector('.create-product input[type=text]').value
        const price = document.querySelector('.create-product input[type=number]').value
        if (!name) {
            throw new Error('¡Need name, please!')
        }
        theCart.addProducts(new Product(name, price))
        theCart.printProducts()
    })
})