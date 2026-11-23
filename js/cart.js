
// ===================== GlowMatch Shopping Cart =====================

const CART_KEY = "glowCart";

// Get saved cart
function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Save cart
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
// Clear all products from cart
function clearCart() {
    if (getCart().length === 0) return;

    let confirmDelete = confirm("Are you sure you want to remove all products?");

    if (confirmDelete) {
        saveCart([]);
        renderCart();
    }
}

// Get all products from all categories
function getAllProducts() {
    return Object.values(products).flat();
}

// Format prices in EGP
function formatPrice(price) {
    return Number(price).toLocaleString("en-US") + " EGP";
}

// Display cart products and offers
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    if (!cartItemsContainer) return;

    const cart = getCart();
    const allProducts = getAllProducts();

    let subtotal = 0;
    let cartHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="bi bi-bag-heart"></i>
                <h3>Your shopping bag is empty</h3>
                <p>Looks like you haven't added anything yet.</p>
                <a href="index.html" class="shop-now-btn">
                    Start Shopping
                </a>
            </div>
        `;

        updateCartSummary(0);
        updateCartCount();
        return;
    }

    cart.forEach(item => {
        const quantity = Number(item.quantity) || 1;
        let itemTotal = 0;

        // ===================== Offer Item =====================
        if (item.type === "offer") {
            itemTotal = item.price * quantity;
            subtotal += itemTotal;

            const offerProductsHTML = item.products.map(product => `
                <div class="offer-product">
                    <img src="${product.img}" alt="${product.name}">
                    <span>${product.name}</span>
                </div>
            `).join("");

            cartHTML += `
                <div class="cart-item offer-cart-item">

                    <div class="cart-item-details">
                        <span class="cart-category">SPECIAL OFFER</span>

                        <h5>${item.name}</h5>

                        <p class="cart-unit-price">
                            ${formatPrice(item.price)}
                        </p>

                        <div class="offer-products">
                            <p class="offer-includes">
                                <i class="bi bi-gift"></i>
                                Products included in this offer:
                            </p>

                            ${offerProductsHTML}
                        </div>

                        <div class="cart-item-actions">
                            <div class="quantity-control">
                                <button
                                    class="quantity-btn"
                                    data-action="decrease"
                                    data-id="${item.id}"
                                >−</button>

                                <span>${quantity}</span>

                                <button
                                    class="quantity-btn"
                                    data-action="increase"
                                    data-id="${item.id}"
                                >+</button>
                            </div>

                            <button
                                class="remove-btn"
                                data-action="remove"
                                data-id="${item.id}"
                            >
                                <i class="bi bi-trash3"></i>
                                Remove
                            </button>
                        </div>
                    </div>

                    <div class="cart-item-total">
                        ${formatPrice(itemTotal)}
                    </div>

                </div>
            `;

            return;
        }

        // ===================== Normal Product =====================
        const product = allProducts.find(p => p.id === item.id);

        if (!product) return;

        itemTotal = product.price * quantity;
        subtotal += itemTotal;

        cartHTML += `
            <div class="cart-item">

                <img
                    src="${product.img}"
                    alt="${product.name}"
                    class="cart-product-img"
                >

                <div class="cart-item-details">
                    <span class="cart-category">
                        ${product.id.split("-")[0]}
                    </span>

                    <h5>${product.name}</h5>

                    <p class="cart-unit-price">
                        ${formatPrice(product.price)}
                    </p>

                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button
                                class="quantity-btn"
                                data-action="decrease"
                                data-id="${product.id}"
                            >−</button>

                            <span>${quantity}</span>

                            <button
                                class="quantity-btn"
                                data-action="increase"
                                data-id="${product.id}"
                            >+</button>
                        </div>

                        <button
                            class="remove-btn"
                            data-action="remove"
                            data-id="${product.id}"
                        >
                            <i class="bi bi-trash3"></i>
                            Remove
                        </button>
                    </div>
                </div>

                <div class="cart-item-total">
                    ${formatPrice(itemTotal)}
                </div>

            </div>
        `;
    });

    cartItemsContainer.innerHTML = cartHTML;

    updateCartSummary(subtotal);
    updateCartCount();
}

// Update order summary
function updateCartSummary(subtotal) {
    document.getElementById("subtotal").textContent =
        formatPrice(subtotal);

    document.getElementById("shipping").textContent = "At checkout";

    document.getElementById("total").textContent =
        formatPrice(subtotal);
}

// Handle quantity and remove buttons
document.addEventListener("click", function(event) {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    const action = button.dataset.action;
    const itemId = button.dataset.id;

    let cart = getCart();
    const item = cart.find(p => p.id === itemId);

    if (action === "increase" && item) {
        item.quantity++;
    }

    else if (action === "decrease" && item) {
        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(p => p.id !== itemId);
        }
    }

    else if (action === "remove") {
        cart = cart.filter(p => p.id !== itemId);
    }

    saveCart(cart);
    renderCart();
});

// Checkout
document.querySelector(".checkout-btn")?.addEventListener("click", function(event) {
    if (getCart().length === 0) {
        event.preventDefault();
        alert("Your shopping cart is empty!");
    }
});

// Display cart when page loads
renderCart();
