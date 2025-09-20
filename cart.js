const cartItemsContainer = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('cart-item');

    div.innerHTML = `
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name} (x${item.quantity || 1})</span>
        <span class="cart-item-price">${(item.price * (item.quantity || 1))} EGP</span>
      </div>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    cartItemsContainer.appendChild(div);
    total += item.price * (item.quantity || 1);
  });

  totalPriceEl.textContent = total;
}

function removeFromCart(index){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}


displayCart();