/* ==========================================================================
   VerveStone Surfaces - Application Logic & Product Catalog Data
   ==========================================================================
   HOW TO ADD OR MODIFY PRODUCTS:
   Simply add a new object to the `PRODUCTS` array below!
   ========================================================================== */

const PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Calacatta Gold Sovereign Marble',
    category: 'marble',
    finish: 'Honed',
    thickness: '3/4" (20mm)',
    pricePerSqFt: 24.50,
    rating: 4.9,
    image: 'images/marble_calacatta.jpg',
    badge: 'Best Seller',
    origin: 'Carrara, Italy',
    sizes: '24"x24", 12"x24", Custom Slabs',
    waterAbsorption: '0.12%',
    recommendedUse: 'Interior Floors, Accent Walls, Bathroom Vanities',
    description: 'Ultra-luxurious Italian marble with luminous warm ivory white base and dramatic golden-grey veining.'
  },
  {
    id: 'prod-2',
    title: 'Silver Vein-Cut Travertine',
    category: 'travertine',
    finish: 'Brushed & Filled',
    thickness: '1/2" (12mm)',
    pricePerSqFt: 14.80,
    rating: 4.8,
    image: 'images/travertine_silver.jpg',
    badge: 'Popular',
    origin: 'Denizli, Turkey',
    sizes: '12"x24", 16"x24", French Pattern',
    waterAbsorption: '0.45%',
    recommendedUse: 'Indoor Flooring, Pool Decks, Feature Walls',
    description: 'Sleek contemporary natural travertine featuring linear slate grey, graphite, and taupe strata.'
  },
  {
    id: 'prod-3',
    title: 'Nero Marquina Black Marble',
    category: 'marble',
    finish: 'Polished High Gloss',
    thickness: '3/4" (20mm)',
    pricePerSqFt: 22.00,
    rating: 5.0,
    image: 'images/nero_marquina.jpg',
    badge: 'Luxury Select',
    origin: 'Markina, Spain',
    sizes: '24"x24", 18"x18", Slabs',
    waterAbsorption: '0.18%',
    recommendedUse: 'Fireplace Surround, Foyer Flooring, Kitchen Countertops',
    description: 'Dramatic velvet black Spanish marble punctuated with stark, electrifying white calcite veins.'
  },
  {
    id: 'prod-4',
    title: 'Statuario Imperial Porcelain Slab',
    category: 'porcelain',
    finish: 'Matte Soft Velvet',
    thickness: '1/4" (6mm)',
    pricePerSqFt: 11.90,
    rating: 4.7,
    image: 'images/porcelain_statuario.jpg',
    badge: 'Low Maintenance',
    origin: 'Modena, Italy',
    sizes: '48"x96", 32"x64"',
    waterAbsorption: '0.05%',
    recommendedUse: 'Showers, Wall Cladding, High Traffic Commercial',
    description: 'Ultra-durable large format porcelain slab replicating rare Statuario marble with zero maintenance.'
  },
  {
    id: 'prod-5',
    title: 'Carrara & Brass Herringbone Mosaic',
    category: 'mosaics',
    finish: 'Polished',
    thickness: '3/8" (10mm)',
    pricePerSqFt: 18.50,
    rating: 4.9,
    image: 'images/mosaic_herringbone.jpg',
    badge: 'Artisan Tile',
    origin: 'Waterjet Crafted',
    sizes: '12"x12" Mesh Sheet',
    waterAbsorption: '0.15%',
    recommendedUse: 'Kitchen Backsplash, Shower Niche, Accent Border',
    description: 'Precision waterjet herringbone mosaic featuring white Carrara marble intertwined with brushed brass inlay.'
  },
  {
    id: 'prod-6',
    title: 'Walnut Antique French Pattern Pavers',
    category: 'travertine',
    finish: 'Chiseled Edge Tumbled',
    thickness: '1-1/4" (30mm)',
    pricePerSqFt: 9.75,
    rating: 4.8,
    image: 'images/french_pattern_paver.jpg',
    badge: 'Outdoor Deck',
    origin: 'Denizli, Turkey',
    sizes: 'French Pattern (8"x8", 8"x16", 16"x16", 16"x24")',
    waterAbsorption: '0.50%',
    recommendedUse: 'Patio, Pool Deck, Courtyard Pavers',
    description: 'Timeless Mediterranean outdoor travertine pavers with rich honey, chestnut, and walnut tones.'
  },
  {
    id: 'prod-7',
    title: 'Ivory Smooth Bullnose Pool Coping',
    category: 'travertine',
    finish: 'Honed Smooth Rim',
    thickness: '2" (50mm)',
    pricePerSqFt: 16.50,
    rating: 4.9,
    image: 'images/pool_coping_bullnose.jpg',
    badge: 'Pool Essential',
    origin: 'Denizli, Turkey',
    sizes: '12"x24" Bullnose Coping',
    waterAbsorption: '0.40%',
    recommendedUse: 'Swimming Pool Edge, Step Treads, Retaining Wall Cap',
    description: 'Silky smooth non-slip temperature-resistant natural travertine coping with elegant safety bullnose edge.'
  }
];

// App State
let currentCategory = 'all';
let currentFinish = 'all';
let searchQuery = '';
let sortBy = 'popular';
let sampleCart = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  setupEventListeners();
  setupVisualizer();
});

// Render Catalog Grid
function renderCatalog() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('catalogCount');
  if (!grid) return;

  let filtered = PRODUCTS.filter(product => {
    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchesFinish = currentFinish === 'all' || product.finish.toLowerCase().includes(currentFinish.toLowerCase());
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesFinish && matchesSearch;
  });

  // Sorting
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.pricePerSqFt - b.pricePerSqFt);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.pricePerSqFt - a.pricePerSqFt);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (countEl) countEl.innerText = `${filtered.length} Surfaces Available`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-dim);">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin: 0 auto 16px; color: var(--accent-gold);"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3>No matching natural stone surfaces found</h3>
        <p style="margin-top: 8px;">Try clearing filters or searching for another material like "Marble" or "Travertine".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <span class="product-tag">${product.badge || 'Premium'}</span>
        <div class="product-quick-view">
          <button onclick="openProductModal('${product.id}')">🔍 Quick View & Full Specs</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span>${product.category.toUpperCase()}</span>
          <span>★ ${product.rating}</span>
        </div>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-specs-mini">
          <span>${product.finish}</span>
          <span>${product.thickness}</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            $${product.pricePerSqFt.toFixed(2)} <small>/ sq ft</small>
          </div>
          <button class="btn-sample" onclick="addToSampleCart('${product.id}')">
            + Sample Kit
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Event Listeners setup
function setupEventListeners() {
  // Category Pill Filters
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      pills.forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderCatalog();
    });
  });

  // Finish Selector
  const finishSelect = document.getElementById('finishFilter');
  if (finishSelect) {
    finishSelect.addEventListener('change', (e) => {
      currentFinish = e.target.value;
      renderCatalog();
    });
  }

  // Sort Selector
  const sortSelect = document.getElementById('sortFilter');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Search Input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Quote Form Submission
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('✨ Thank you! Your custom project quote request has been submitted. Our stone specialist will reach out shortly.');
      quoteForm.reset();
    });
  }
}

// Product Modal Specs Popup
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalDetails');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-img-container">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="modal-info">
      <span class="badge-gold">${product.category.toUpperCase()} • ${product.origin}</span>
      <h2 class="modal-title" style="margin-top: 10px;">${product.title}</h2>
      <div class="modal-price">$${product.pricePerSqFt.toFixed(2)} <small>/ sq. ft.</small></div>
      <p style="color: var(--text-dim); font-size: 0.9rem; margin-bottom: 20px;">${product.description}</p>
      
      <h4 style="color: var(--accent-gold-light); font-size: 0.95rem; margin-bottom: 8px;">Technical Specifications</h4>
      <table class="specs-table">
        <tr><td>Origin Quarry:</td><td>${product.origin}</td></tr>
        <tr><td>Finish Type:</td><td>${product.finish}</td></tr>
        <tr><td>Standard Thickness:</td><td>${product.thickness}</td></tr>
        <tr><td>Available Formats:</td><td>${product.sizes}</td></tr>
        <tr><td>Water Absorption:</td><td>${product.waterAbsorption}</td></tr>
        <tr><td>Recommended Use:</td><td>${product.recommendedUse}</td></tr>
      </table>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn-primary" style="flex: 1;" onclick="addToSampleCart('${product.id}'); closeModal();">
          🎁 Request Physical Sample Box
        </button>
        <button class="btn-outline" onclick="closeModal(); scrollToQuote('${product.title}')">
          💬 Inquiry Direct Quote
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.remove('active');
}

// Sample Cart Drawer Management
function addToSampleCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (sampleCart.some(item => item.id === productId)) {
    showToast('💡 Product sample is already in your request box!');
  } else {
    sampleCart.push(product);
    updateCartUI();
    showToast(`📦 Added "${product.title}" sample to your box!`);
  }
}

function removeFromSampleCart(productId) {
  sampleCart = sampleCart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const drawerItems = document.getElementById('drawerItems');
  if (badge) badge.innerText = sampleCart.length;

  if (drawerItems) {
    if (sampleCart.length === 0) {
      drawerItems.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-dim);">
          <p>Your sample box is currently empty.</p>
          <p style="font-size: 0.8rem; margin-top: 6px;">Select up to 4 complimentary stone samples with free nationwide express courier!</p>
        </div>
      `;
    } else {
      drawerItems.innerHTML = sampleCart.map(item => `
        <div class="drawer-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="drawer-item-info" style="flex: 1;">
            <h4>${item.title}</h4>
            <p>${item.finish} • ${item.category}</p>
          </div>
          <button style="background:none; border:none; color:#ff6b6b; cursor:pointer;" onclick="removeFromSampleCart('${item.id}')">✕</button>
        </div>
      `).join('');
    }
  }
}

function toggleDrawer() {
  const drawer = document.getElementById('sampleDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer && overlay) {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
  }
}

function submitSampleRequest() {
  if (sampleCart.length === 0) {
    showToast('⚠️ Please select at least 1 stone sample before submitting.');
    return;
  }
  showToast('🚀 Sample Request Submitted! Your physical stone sample box will ship within 24 hours.');
  sampleCart = [];
  updateCartUI();
  toggleDrawer();
}

// Surface Visualizer Switcher
function setupVisualizer() {
  const swatches = document.querySelectorAll('.swatch-item');
  const previewImg = document.getElementById('visualizerImg');
  const titleEl = document.getElementById('visualizerTitle');

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      const bg = swatch.getAttribute('data-img');
      const name = swatch.getAttribute('data-name');

      if (previewImg) previewImg.src = bg;
      if (titleEl) titleEl.innerText = name;
    });
  });
}

// Scroll Helper
function scrollToQuote(stoneName = '') {
  const quoteSection = document.getElementById('quote-section');
  const selectEl = document.getElementById('stoneSelect');
  if (selectEl && stoneName) {
    selectEl.value = stoneName;
  }
  if (quoteSection) {
    quoteSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
