
// ===================== GlowMatch Offers =====================

// Offer settings
const discountPercentage = 15;

// Products included in each bundle
const offerDefinitions = [
    {
        id: "offer-skincare",
        name: "Skincare Routine",
        description: "Your complete routine for fresh, hydrated and glowing skin.",
        productIds: ["skincare-2", "skincare-3", "skincare-4"]
    },
    {
        id: "offer-haircare",
        name: "Haircare Routine",
        description: "Give your hair the care, nourishment and softness it deserves.",
        productIds: ["haircare-1", "haircare-3", "haircare-6"]
    },
    {
        id: "offer-bodycare",
        name: "Bodycare Routine",
        description: "Pamper your body with a complete care routine.",
        productIds: ["bodycare-2", "bodycare-10", "bodycare-12"]
    },
    {
        id: "offer-makeup",
        name: "Makeup Bundle",
        description: "Your makeup essentials for a beautiful everyday look.",
        productIds: ["makeup-1", "makeup-3", "makeup-8"]
    },
    {
        id: "offer-fragrance",
        name: "Perfume & Body Splash",
        description: "Complete your look with your favorite beautiful scents.",
        productIds: ["perfumes-1", "perfumes-7", "bodysplash-3"]
    }
];


// ===================== Get Products =====================

function getOfferProducts(productIds) {

    let allProducts = Object.values(products).flat();

    return productIds.map(id => {
        return allProducts.find(product => product.id === id);
    }).filter(product => product && !product.soldOut);
}


// ===================== Price Formatting =====================

function formatOfferPrice(price) {
    return price.toLocaleString("en-EG") + " EGP";
}


// ===================== Render Offers =====================

function renderOffers() {

    const container = document.getElementById("offers-container");

    if (!container) return;

    let offersHTML = "";

    offerDefinitions.forEach(offer => {

        const offerProducts = getOfferProducts(offer.productIds);

        if (offerProducts.length === 0) return;

        const originalPrice = offerProducts.reduce((total, product) => {
            return total + product.price;
        }, 0);

        const discountedPrice = Math.round(
            originalPrice - (originalPrice * discountPercentage / 100)
        );

        const productsHTML = offerProducts.map(product => `
            <div class="offer-product">
                <img src="${product.img}" alt="${product.name}">
                <span>${product.name}</span>
            </div>
        `).join("");

        offersHTML += `
            <div class="col-12 col-md-6 col-lg-4">

                <div class="offer-card">

                    <div class="offer-img-wrap">
                        <img
                            src="${offerProducts[0].img}"
                            class="offer-img"
                            alt="${offer.name}"
                        >

                        <span class="discount-badge">
                            ${discountPercentage}% OFF
                        </span>
                    </div>

                    <div class="offer-card-body">

                        <h3 class="offer-title">
                            ${offer.name}
                        </h3>

                        <p class="offer-desc">
                            ${offer.description}
                        </p>

                        <div class="offer-products">
                            ${productsHTML}
                        </div>

                        <div class="offer-prices">
                            <span class="offer-old-price">
                                ${formatOfferPrice(originalPrice)}
                            </span>

                            <span class="offer-new-price">
                                ${formatOfferPrice(discountedPrice)}
                            </span>
                        </div>

                        <button
                            class="add-offer-btn"
                            data-offer-id="${offer.id}"
                        >
                            <i class="bi bi-bag-plus"></i>
                            Add Offer to Cart
                        </button>

                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = offersHTML;
}


// ===================== Add Offer to Cart =====================

document.addEventListener("click", function(event) {

    const button = event.target.closest(".add-offer-btn");

    if (!button) return;

    const offerId = button.dataset.offerId;

    const selectedOffer = offerDefinitions.find(
        offer => offer.id === offerId
    );

    if (!selectedOffer) return;

    const offerProducts = getOfferProducts(selectedOffer.productIds);

    if (offerProducts.length !== selectedOffer.productIds.length) {
        alert("Some products in this offer are unavailable.");
        return;
    }

    const originalPrice = offerProducts.reduce((total, product) => {
        return total + product.price;
    }, 0);

    const discountedPrice = Math.round(
        originalPrice - (originalPrice * discountPercentage / 100)
    );

    let cart = JSON.parse(localStorage.getItem("glowCart")) || [];

    // Check if this offer already exists in cart
    const existingOffer = cart.find(item => {
        return item.id === offerId && item.type === "offer";
    });

    if (existingOffer) {

        existingOffer.quantity++;

    } else {

        cart.push({
            type: "offer",
            id: offerId,
            name: selectedOffer.name,
            price: discountedPrice,
            quantity: 1,

            products: offerProducts.map(product => ({
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price
            }))
        });

    }

    localStorage.setItem("glowCart", JSON.stringify(cart));

    // Update navbar cart counter
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    alert(selectedOffer.name + " added to your cart!");

});


// ===================== Initialize Offers Page =====================

renderOffers();
