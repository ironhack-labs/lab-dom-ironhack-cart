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
            this.updateProduct(product.name, product.price)
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
    updateProduct(name, price, quantity) {
        this.products.forEach(product => {
            if (product[0].name === name) {
                if (price.length !== 0 && product[0].price !== price) {
                    product[0].price = price
                }
                quantity ? product[1] = quantity : product[1]++
            }
        })
    }
    removeProducts(name) {
        this.products.forEach(product => {
            if (product[0].name === name) {
                // TODO: Delete this product
                console.log('Remove')
                this.printProducts()
            }
        })
    }

    changeQuantity(product, quantity) {
        //  Find product modify quantity and modify subtotal product on view
        // this.updateProduct(product.name, product.price, quantity)
        // this.printTotal()
        // this.printProducts()
    }
    calcTotal() {
        // TODO: refresh total sum all (product quantity * product price)
    }
    createElements(tag, attrs, children, actions) {
        const element = document.createElement(tag)
        if (tag) {
            if (attrs) {
                Object.entries(attrs).forEach(values =>
                    element.setAttribute(values[0], values[1])
                )
            }
        }
        if (children) {
            children.forEach(child => element.appendChild(child))
        }

        return element
    }
    subTotalProduct(price, quantity) {
        return Number(price * quantity)
    }
    printProducts() {
        const tableBody = document.querySelector('#cart tbody')
        tableBody.innerHTML = ''
        this.products.forEach(product => {
            const tr = this.createElements('tr', { class: 'product' })
            const contentName = this.createElements('span', undefined, [document.createTextNode(product[0].name)])
            const tdName = this.createElements('td', { class: 'name' }, [contentName])
            tr.appendChild(tdName)
            const contentPrice = this.createElements('span', undefined, [document.createTextNode(Number(product[0].price).toFixed(2))])
            const tdPrice = this.createElements('td', { class: 'price' }, [document.createTextNode('$'), contentPrice])
            tr.appendChild(tdPrice)
            const contentQuantity = this.createElements('input', { type: 'number', value: Number(product[1]), min: 0 })
            contentQuantity.addEventListener('click', () => {
                this.removeProducts(product[0].name)
            })
            const tdQuantity = this.createElements('td', { class: 'quantity' }, [contentQuantity])
            tr.appendChild(tdQuantity)
            const contentSubtotal = this.createElements('span', undefined, [document.createTextNode(this.subTotalProduct(Number(product[0].price).toFixed(2), product[1]))])
            const tdSubtotal = this.createElements('td', { class: 'subtotal' }, [document.createTextNode('$'), contentSubtotal])
            tr.appendChild(tdSubtotal)
            const contentAction = this.createElements('button', { class: 'btn btn-remove' }, [document.createTextNode('Remove')])
            contentAction.addEventListener('click', () => {
                this.removeProducts(product[0].name)
            })
            const tdAction = this.createElements('td', { class: 'action' }, [contentAction])
            tr.appendChild(tdAction)
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
    const calculateBtn = document.getElementById('calculate')

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