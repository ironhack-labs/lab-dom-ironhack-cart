const attributes = {
    name: {
      element: [
        {
          tag: 'span'
        }
      ]
    },
    price: {
      element: [{
        tag: 'span'
      }]
    },
    quantity: {
      element: [
        {
          tag: 'input',
          characteristics: {
            type: 'number',
            min: 0,
            placeholder: 'Quantity'
          }
        }
      ]
    },
    subtotal: {
      element: [
        {
          tag: 'span'
        }
      ]
    },
    action: {
      element: [
        {
          tag: 'button',
          characteristics: {
            class: 'btn btn-remove'
          }
        }
      ]
    }
  }