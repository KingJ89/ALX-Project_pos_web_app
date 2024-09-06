document.addEventListener("DOMContentLoaded", function() {
    // Simulated product data (ideally this comes from your backend API)
    const products = [
        { id: 1, name: 'Apple', quantity: 50, price: 0.5 },
        { id: 2, name: 'Banana', quantity: 30, price: 0.3 },
        { id: 3, name: 'Orange', quantity: 20, price: 0.7 }
    ];

    const inventoryTable = document.getElementById('inventory-table');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    let cart = [];
    let totalPrice = 0;

    // Function to render product data in the table
    function renderProducts() {
        inventoryTable.innerHTML = ''; // Clear previous content
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td><button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button></td>
            `;
            inventoryTable.appendChild(row);
        });

        // Add event listeners to "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }

    // Function to add item to the cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);
        
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
    }

    // Function to update cart display and total price
    function updateCart() {
        cartItems.innerHTML = ''; // Clear cart display
        totalPrice = 0;

        cart.forEach(item => {
            totalPrice += item.price * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} x${item.quantity}</p>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            `;
            cartItems.appendChild(cartItem);
        });

        // Update total price
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;

        if (cart.length === 0) {
            cartItems.innerHTML = '<p>No items in cart yet.</p>';
        }
    }

    renderProducts();
});

