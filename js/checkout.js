
// ===================== GlowMatch Checkout =====================

const CART_KEY = "glowCart";

function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function getAllProducts() {
    return Object.values(products).flat();
}

function formatPrice(price) {
    return Number(price).toLocaleString("en-US") + " EGP";
}

// Shipping fees in EGP (Demo values)
const shippingFees = {
    "Egypt": 60,
    "Saudi Arabia": 250,
    "United Arab Emirates": 220,
    "Kuwait": 300,
    "Qatar": 280,
    "Jordan": 220
};

let currentSubtotal = 0;
let currentShipping = 0;

// ===================== Render Order =====================

function renderCheckout() {
    const cart = getCart();
    const allProducts = getAllProducts();
    const container = document.getElementById("checkout-items");

    if (cart.length === 0) {
        alert("Your shopping cart is empty!");
        window.location.href = "cart.html";
        return;
    }

    let html = "";
    currentSubtotal = 0;

    cart.forEach(item => {
        const product = allProducts.find(p => p.id === item.id);

        if (!product) return;

        const quantity = Number(item.quantity) || 1;
        const itemTotal = product.price * quantity;

        currentSubtotal += itemTotal;

        html += `
            <div class="checkout-product">
                <img src="${product.img}" alt="${product.name}">

                <div class="checkout-product-info">
                    <h6>${product.name}</h6>
                    <small>Quantity: ${quantity}</small>
                </div>

                <span class="checkout-product-price">
                    ${formatPrice(itemTotal)}
                </span>
            </div>
        `;
    });

    container.innerHTML = html;

    document.getElementById("checkout-subtotal").textContent =
        formatPrice(currentSubtotal);

    updateCheckoutTotal();
}

// ===================== Shipping Calculation =====================

function updateCheckoutTotal() {
    const country = document.getElementById("country").value;

    if (country && shippingFees[country] !== undefined) {
        currentShipping = shippingFees[country];

        document.getElementById("checkout-shipping").textContent =
            formatPrice(currentShipping);
    } else {
        currentShipping = 0;

        document.getElementById("checkout-shipping").textContent =
            "Choose country";
    }

    const total = currentSubtotal + currentShipping;

    document.getElementById("checkout-total").textContent =
        formatPrice(total);
}

document.getElementById("country").addEventListener("change", updateCheckoutTotal);

// ===================== Place Order =====================

document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const cart = getCart();

    if (cart.length === 0) {
        alert("Your shopping cart is empty!");
        window.location.href = "cart.html";
        return;
    }

    const country = document.getElementById("country").value;

    if (!country) {
        alert("Please choose your delivery country.");
        document.getElementById("country").focus();
        return;
    }

    const paymentMethod = document.querySelector(
        'input[name="payment"]:checked'
    ).value;

    const customerName =
        document.getElementById("firstName").value.trim() + " " +
        document.getElementById("lastName").value.trim();

    const total = currentSubtotal + currentShipping;

    alert(
        "Thank you for your order, " + customerName + "!\n\n" +
        "Country: " + country + "\n" +
        "Payment: " + paymentMethod + "\n" +
        "Subtotal: " + formatPrice(currentSubtotal) + "\n" +
        "Shipping: " + formatPrice(currentShipping) + "\n" +
        "Total: " + formatPrice(total) + "\n\n" +
        "Your order has been placed successfully!"
    );

    // Clear cart after placing the order
    localStorage.removeItem(CART_KEY);

    window.location.href = "index.html";
});

// ===================== Page Load =====================

renderCheckout();
