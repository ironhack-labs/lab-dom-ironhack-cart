const calculateTotalPrice = form => {
  const totalProductPricesInputs = [
    ...form.querySelectorAll(".product__total-price")
  ];

  let totalProductPrices = totalProductPricesInputs.map(currentPrice =>
    priceWithoutDollar(currentPrice.textContent)
  );
  let totalPrice = totalProductPrices.reduce(
    (prevPrice, currentPrice) => prevPrice + currentPrice
  );

  form.querySelector(".total-price").textContent = `${+totalPrice}$`;
};

const createDOMElement = (type, classList, attributes, textContent) => {
  const newDOMElement = document.createElement(type);

  if (classList !== undefined)
    classList.map(className => newDOMElement.classList.add(className));

  if (attributes !== undefined)
    attributes.map(attribute =>
      newDOMElement.setAttribute(attribute[0], attribute[1])
    );

  if (textContent !== undefined) newDOMElement.textContent = textContent;

  return newDOMElement;
};

const addNewProduct = product => {
  console.log(product);

  const lastProductId =
    document.querySelectorAll(".products > div").length > 0
      ? document.querySelector(
          '.products > div:last-child .product__quantity input[type="number"]'
        ).id
      : "product-0";

  const lastProductIdNumber =
    +lastProductId.substr(
      lastProductId.lastIndexOf("-") + 1,
      lastProductId.length
    ) + 1;

  const productDiv = createDOMElement("div", ["product"]);
  const firstChildDiv = createDOMElement("div");
  const secondChildDiv = createDOMElement("div");
  const thirdChildDiv = createDOMElement("div", ["product__quantity"]);
  const fourthChildDiv = createDOMElement("div");
  const fifthChildDiv = createDOMElement("div");
  const newProductName = createDOMElement(
    "span",
    ["product__name"],
    undefined,
    product.name
  );
  const newProductPrice = createDOMElement(
    "span",
    ["product__individual-price"],
    undefined,
    `${product.price.toFixed(2)}$`
  );
  const productQuantityLabel = createDOMElement(
    "label",
    undefined,
    [["for", `product-${lastProductIdNumber}`]],
    "Quantity"
  );
  const productQuantityInput = createDOMElement("input", undefined, [
    ["type", "number"],
    ["id", `product-${lastProductIdNumber}`],
    ["placeholder", "0"]
  ]);
  const productTotalPriceSpan = createDOMElement(
    "span",
    ["product__total-price"],
    undefined,
    "0$"
  );
  const productDeleteButton = createDOMElement(
    "button",
    ["button", "button--delete-product", "product__delete-button"],
    undefined,
    "Delete"
  );
  const deleteIcon = createDOMElement("i", ["fas", "fa-trash-alt"]);

  productDiv.appendChild(firstChildDiv);
  productDiv.appendChild(secondChildDiv);
  productDiv.appendChild(thirdChildDiv);
  productDiv.appendChild(fourthChildDiv);
  productDiv.appendChild(fifthChildDiv);

  firstChildDiv.appendChild(newProductName);

  secondChildDiv.appendChild(newProductPrice);

  thirdChildDiv.appendChild(productQuantityLabel);
  thirdChildDiv.appendChild(productQuantityInput);

  fourthChildDiv.appendChild(productTotalPriceSpan);

  fifthChildDiv.appendChild(productDeleteButton);

  productDeleteButton.prepend(deleteIcon);

  productQuantityInput.addEventListener("focusout", calculateProductPrice);

  productDiv.classList.add("product--adding-new-product");

  setTimeout(() => {
    productDiv.classList.add("slideIn");

    setTimeout(() => {
      productDiv.classList.remove("product--adding-new-product", "slideIn");
    }, 400);
  }, 200);

  document.querySelector(".products").appendChild(productDiv);
};

const deleteAllProducts = productsContainer => {
  [...productsContainer.querySelectorAll(".product")].map(
    (currentProduct, idx) => {
      // setTimeout( () => { // To delete each one of the products one by one
      //   deleteProduct(currentProduct)
      // }, 200 * idx)

      deleteProduct(currentProduct);
    }
  );
};

const deleteProduct = product => {
  let productTotalPrice = product.querySelector(".product__total-price")
    .textContent; // Price with dollar
    
  productTotalPrice = priceWithoutDollar(productTotalPrice);

  updateTotalPrice(document.forms[0], -productTotalPrice);

  product.classList.add("slideOut");

  setTimeout(() => {
    product.remove();
  }, 500);
};

const priceWithoutDollar = price => +price.substring(0, price.indexOf("$"));

const updateTotalPrice = (form, amount) => {
  let totalPrice = form.querySelector(".total-price").textContent; // Price with dollar

  totalPrice = priceWithoutDollar(totalPrice);
  totalPrice += amount;

  form.querySelector(".total-price").textContent = `${totalPrice.toFixed(2)} $`;
};

const calculateProductPrice = e => {
  let inputQuantityInput = e.target;

  let inputQuantityInputValue = inputQuantityInput.value;
  let individualProductPrice = inputQuantityInput.parentElement.parentElement.querySelector(
    ".product__individual-price"
  ).textContent;

  individualProductPrice = priceWithoutDollar(individualProductPrice);

  let individualProductTotalPrice =
    inputQuantityInputValue * individualProductPrice;

  inputQuantityInput.parentElement.parentElement.querySelector(
    ".product__total-price"
  ).textContent = `${individualProductTotalPrice}$`;

  calculateTotalPrice(document.forms[0]);
};

const setQuantityInputs = () => [
  ...document.forms[0].querySelectorAll('.products input[type="number"]')
];

const handleAddProductButton = () => {
  const newProduct = {
    name: document.getElementById("new-product-name").value,
    price: +document.getElementById("new-product-price").value
  };

  addNewProduct(newProduct);
};

const init = () => {
  const form = document.forms[0];

  const quantityInputs = setQuantityInputs();

  const emptyListButton = document.querySelector(".button--empty-cart");

  emptyListButton.addEventListener("click", e =>
    deleteAllProducts(document.querySelector(".products"))
  );

  quantityInputs.map(inputQuantity => {
    inputQuantity.addEventListener("focusout", calculateProductPrice);
  });

  form.addEventListener("click", e => {
    const elementClicked = e.target;

    if (elementClicked.tagName !== "LABEL") e.preventDefault();

    if (elementClicked.classList.contains("product__delete-button")) {
      deleteProduct(elementClicked.parentElement.parentElement);
    } else if (elementClicked.classList.contains("button--new-product")) {
      handleAddProductButton();

      document.getElementById("new-product-name").value = "";
      document.getElementById("new-product-price").value = "";
    }
  });
};

init();
