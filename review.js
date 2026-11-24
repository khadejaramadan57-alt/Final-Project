const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️ Light';
} else {
  themeToggle.textContent = '🌙 Dark';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️ Light';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙 Dark';
  }
});

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

let foundProduct = null;
let foundCategory = "";

for (const category in products) {
  const item = products[category].find(p => p.id === productId);
  if (item) {
    foundProduct = item;
    foundCategory = category;
    break;
  }
}

const detailsContainer = document.getElementById('product-details');
const reviewsList = document.getElementById('reviews-list');

if (foundProduct) {
  detailsContainer.innerHTML = `
    <div class="product-image">
      <img src="${foundProduct.img}" alt="${foundProduct.name}">
    </div>
    <div class="product-info">
      <span class="category-badge">${foundCategory}</span>
      <h1>${foundProduct.name}</h1>
      <div class="product-price">${foundProduct.price} EGP</div>
      <p class="product-desc">${foundProduct.desc}</p>
      <button class="add-to-cart-btn" ${foundProduct.soldOut ? 'disabled' : ''}>
        ${foundProduct.soldOut ? 'Sold Out' : 'Add to cart'}
      </button>
    </div>
  `;
const initialReviews = {
  "skincare-1": [
    { user: "نور هشام", rating: "⭐⭐⭐⭐⭐", comment: "قوامه ناعم جداً على البشرة وبيخليها منورة." }
  ],
  "skincare-4": [
    { user: "سارة أحمد", rating: "⭐⭐⭐⭐⭐", comment: "السيراميك تحفة بجد ونتيجته ممتازة في الترطيب!" },
    { user: "منة طارق", rating: "⭐⭐⭐⭐", comment: "ملمسه خفيف ومش بيلزق خالص." }
  ],
  "makeup-1": [
    { user: "ياسمين علي", rating: "⭐⭐⭐⭐⭐", comment: "اللون ثابت ومش بينشف الشفايف أبداً." }
  ]
};

const defaultReview = [
  { user: "عميلة مميزة", rating: "⭐⭐⭐⭐⭐", comment: "المنتج ممتاز وجودته عالية جداً!" }
];

const storageKey = `reviews_${productId}`;
let productReviews = JSON.parse(localStorage.getItem(storageKey)) || initialReviews[productId] || defaultReview;

  function renderReviews() {
    reviewsList.innerHTML = '';
    if (productReviews.length === 0) {
      reviewsList.innerHTML = '<p style="color: var(--text-muted);">No reviews yet. Be the first to review!</p>';
      return;
    }
    productReviews.forEach(rev => {
      reviewsList.innerHTML += `
        <div class="review-card">
          <div class="review-header">
            <strong>${rev.user}</strong>
            <span>${rev.rating}</span>
          </div>
          <p>${rev.comment}</p>
        </div>
      `;
    });
  }

  renderReviews();

  document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reviewer-name').value;
    const rating = document.getElementById('reviewer-rating').value;
    const comment = document.getElementById('reviewer-comment').value;

    productReviews.push({ user: name, rating: rating, comment: comment });
    localStorage.setItem(storageKey, JSON.stringify(productReviews));
    renderReviews();
    this.reset();
  });
} else {
  detailsContainer.innerHTML = '<h2>Product not found! Please select a product from the store.</h2>';
}