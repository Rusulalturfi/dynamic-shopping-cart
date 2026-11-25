const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
addProductButton.addEventListener('click', function () {
  const productName = productNameInput.value.trim();
  const productPrice = parseFloat(productPriceInput.value);

  if (
    productName === '' ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
  ) {
    alert('Please enter a product name and a valid price.');
    return;
  }

  const item = document.createElement('li');
  item.className = 'cart-item';
  item.dataset.price = productPrice;

  const nameSpan = document.createElement('span');
  nameSpan.textContent = productName;

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `$${productPrice.toFixed(2)}`;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', removeItem);

  item.appendChild(nameSpan);
  item.appendChild(priceSpan);
  item.appendChild(removeButton);
  cart.appendChild(item);

  updateTotalPrice(productPrice);

  productNameInput.value = '';
  productPriceInput.value = '';
});