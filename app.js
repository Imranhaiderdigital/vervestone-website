/* ==========================================================================
   VerveStone Surfaces & DAP Products - Application Logic & Quote Cart
   ========================================================================== */

const PRODUCTS = [
  // Natural Stone & Marble Products
  {
    id: 'prod-1',
    title: 'Calacatta Gold Sovereign Marble',
    category: 'marble',
    finish: 'Honed',
    thickness: '3/4" (20mm)',
    pricePerSqFt: 24.50,
    unitLabel: '/ sq. ft.',
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
    title: 'Silver Vein-Cut Travertine Pavers',
    category: 'travertine',
    finish: 'Brushed & Filled',
    thickness: '1/2" (12mm)',
    pricePerSqFt: 14.80,
    unitLabel: '/ sq. ft.',
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
    unitLabel: '/ sq. ft.',
    rating: 5.0,
    image: 'images/nero_marquina.jpg',
    badge: 'Luxury Select',
    origin: 'Markina, Spain',
    sizes: '24"x24", 18"x18", Slabs',
    waterAbsorption: '0.18%',
    recommendedUse: 'Fireplace Surround, Foyer Flooring, Kitchen Countertops',
    description: 'Dramatic velvet black Spanish marble punctuated with stark white calcite veins.'
  },
  {
    id: 'prod-4',
    title: 'Statuario Imperial Porcelain Slab',
    category: 'porcelain',
    finish: 'Matte Soft Velvet',
    thickness: '1/4" (6mm)',
    pricePerSqFt: 11.90,
    unitLabel: '/ sq. ft.',
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
    unitLabel: '/ sq. ft.',
    rating: 4.9,
    image: 'images/mosaic_herringbone.jpg',
    badge: 'Artisan Tile',
    origin: 'Waterjet Crafted',
    sizes: '12"x12" Mesh Sheet',
    waterAbsorption: '0.15%',
    recommendedUse: 'Kitchen Backsplash, Shower Niche, Accent Border',
    description: 'Precision waterjet herringbone mosaic featuring white Carrara marble intertwined with brushed brass inlay.'
  },

  // NEW DAP PRODUCTS (Adhesives, Caulks & Sealants)
  {
    id: 'dap-1',
    title: 'DAP ALEX PLUS Acrylic Latex Caulk w/ Silicone',
    category: 'dap-sealants',
    finish: 'Waterproof Seal',
    thickness: '10.1 oz Cartridge',
    pricePerSqFt: 6.99,
    unitLabel: '/ tube',
    rating: 4.9,
    image: 'images/dap_alex_plus.jpg',
    badge: 'DAP Original',
    isDap: true,
    origin: 'DAP Products Inc, USA',
    sizes: '10.1 fl oz Tube',
    waterAbsorption: '100% Waterproof',
    recommendedUse: 'Window & Door Frames, Crown Molding, Baseboards, Tile Gaps',
    description: 'America’s #1 selling caulk. Superior flexibility, paintable in 30 minutes, mildew resistant sealant for stone & tile installations.'
  },
  {
    id: 'dap-2',
    title: 'DAP DYNAFLEX 230 Premium Waterproof Sealant',
    category: 'dap-sealants',
    finish: 'Elastomeric Flex',
    thickness: '10.8 oz Tube',
    pricePerSqFt: 9.49,
    unitLabel: '/ tube',
    rating: 4.8,
    image: 'images/dap_sealant.jpg',
    badge: 'DAP Heavy Duty',
    isDap: true,
    origin: 'DAP Products Inc, USA',
    sizes: '10.8 fl oz Tube',
    waterAbsorption: 'Submersible Waterproof',
    recommendedUse: 'Exterior Travertine Joints, Pool Coping Grout, Masonry',
    description: 'Delivers silicone performance with latex ease of use. Outstanding flexibility and adhesion to natural stone, marble, and concrete.'
  },
  {
    id: 'dap-3',
    title: 'DAP KWIK SEAL Kitchen & Bath Adhesive Caulk',
    category: 'dap-sealants',
    finish: 'Gloss White / Clear',
    thickness: '5.5 oz Squeeze Tube',
    pricePerSqFt: 5.79,
    unitLabel: '/ tube',
    rating: 4.9,
    image: 'images/dap_alex_plus.jpg',
    badge: 'Bath & Tile',
    isDap: true,
    origin: 'DAP Products Inc, USA',
    sizes: '5.5 fl oz Tube',
    waterAbsorption: '100% Mold & Mildew Proof',
    recommendedUse: 'Marble Tub Surrounds, Granite Vanities, Tile Backsplashes',
    description: 'Specially formulated for kitchen and bath applications. Cures to a durable watertight seal that prevents mold & bacterial growth.'
  },
  {
    id: 'dap-4',
    title: 'DAP Beats The Nails Heavy Duty Construction Adhesive',
    category: 'dap-sealants',
    finish: 'High Tack Bond',
    thickness: '10.3 oz Cartridge',
    pricePerSqFt: 8.29,
    unitLabel: '/ tube',
    rating: 5.0,
    image: 'images/dap_sealant.jpg',
    badge: 'Stone Bond',
    isDap: true,
    origin: 'DAP Products Inc, USA',
    sizes: '10.3 fl oz Cartridge',
    waterAbsorption: 'Weatherproof Instant Grab',
    recommendedUse: 'Heavy Marble Wall Cladding, Travertine Paver Bonding',
    description: 'Professional grade high-strength construction adhesive specifically formulated to bond heavy natural stone slabs and tiles without sagging.'
  }
];

// App State
let currentCategory = 'all';
let currentFinish = 'all';
let searchQuery = '';
let sortBy = 'popular';
let cartItems = []; // Bema Stone style Cart / Quote Tray state

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  setupEventListeners();
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

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.pricePerSqFt - b.pricePerSqFt);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.pricePerSqFt - a.pricePerSqFt);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (countEl) countEl.innerText = `${filtered.length} Products & Sealants Available`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-dim);">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin: 0 auto 16px; color: var(--primary-blue);"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3>No matching products found</h3>
        <p style="margin-top: 8px;">Try clearing filters or searching for "DAP", "Marble" or "Travertine".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <span class="product-tag ${product.isDap ? 'dap-tag' : ''}">${product.badge || 'Premium'}</span>
        <div class="product-quick-view">
          <button onclick="openProductModal('${product.id}')">🔍 Quick View & Technical Specs</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span>${product.category.toUpperCase().replace('-', ' ')}</span>
          <span>★ ${product.rating}</span>
        </div>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-specs-mini">
          <span>${product.finish}</span>
          <span>${product.thickness}</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            $${product.pricePerSqFt.toFixed(2)} <small>${product.unitLabel || '/ sq ft'}</small>
          </div>
          <button class="btn-add-quote" onclick="addToQuoteCart('${product.id}')">
            🛒 + Add to Quote Tray
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Event Listeners setup
function setupEventListeners() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      pills.forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderCatalog();
    });
  });

  const finishSelect = document.getElementById('finishFilter');
  if (finishSelect) {
    finishSelect.addEventListener('change', (e) => {
      currentFinish = e.target.value;
      renderCatalog();
    });
  }

  const sortSelect = document.getElementById('sortFilter');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderCatalog();
    });
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('✨ Thank you! Your custom project quote request has been submitted. Our team will contact you within 2 hours.');
      quoteForm.reset();
    });
  }
}

// BEMA STONE STYLE CART & QUOTE TRAY LOGIC
function addToQuoteCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cartItems.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({
      ...product,
      quantity: 1
    });
  }
  updateCartUI();
  toggleDrawer(true);
  showToast(`🛒 Added "${product.title}" to your Bema Stone Quote Tray!`);
}

function updateCartQuantity(productId, delta) {
  const item = cartItems.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cartItems = cartItems.filter(i => i.id !== productId);
  }
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const drawerItems = document.getElementById('drawerItems');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartEstTotalEl = document.getElementById('cartEstTotal');

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) badge.innerText = totalCount;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.pricePerSqFt * item.quantity), 0);

  if (cartSubtotalEl) cartSubtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  if (cartEstTotalEl) cartEstTotalEl.innerText = `$${(subtotal * 1.05).toFixed(2)}`;

  if (drawerItems) {
    if (cartItems.length === 0) {
      drawerItems.innerHTML = `
        <div style="text-align: center; padding: 50px 10px; color: var(--text-dim);">
          <svg width="50" height="50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin: 0 auto 12px; color: var(--primary-blue);"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <h4 style="color: var(--dark-blue);">Your Quote Tray is Empty</h4>
          <p style="font-size: 0.85rem; margin-top: 6px;">Browse natural stone or DAP products and click "+ Add to Quote Tray" to build your custom order.</p>
        </div>
      `;
    } else {
      drawerItems.innerHTML = cartItems.map(item => `
        <div class="drawer-cart-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="drawer-cart-info">
            <h4>${item.title}</h4>
            <p>${item.finish} • $${item.pricePerSqFt.toFixed(2)} ${item.unitLabel || '/ sq. ft.'}</p>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
              <span style="margin-left: auto; font-weight:700; color:var(--primary-blue); font-size:0.9rem;">
                $${(item.pricePerSqFt * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

function toggleDrawer(forceOpen = false) {
  const drawer = document.getElementById('sampleDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer && overlay) {
    if (forceOpen) {
      drawer.classList.add('active');
      overlay.classList.add('active');
    } else {
      drawer.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  }
}

function submitQuoteTrayRequest() {
  if (cartItems.length === 0) {
    showToast('⚠️ Please add at least 1 product to your quote tray.');
    return;
  }
  const name = document.getElementById('drawerCustName')?.value || 'Valued Customer';
  const email = document.getElementById('drawerCustEmail')?.value || 'customer@example.com';
  
  showToast(`🚀 Official Quote Submitted for ${name}! Our team sent a breakdown to ${email}.`);
  cartItems = [];
  updateCartUI();
  toggleDrawer();
}

// Product Spec Modal Popup
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
      <span class="badge-blue">${product.category.toUpperCase().replace('-', ' ')} • ${product.origin}</span>
      <h2 class="modal-title" style="margin-top: 10px;">${product.title}</h2>
      <div class="modal-price">$${product.pricePerSqFt.toFixed(2)} <small>${product.unitLabel || '/ sq. ft.'}</small></div>
      <p style="color: var(--text-dim); font-size: 0.9rem; margin-bottom: 20px;">${product.description}</p>
      
      <h4 style="color: var(--dark-blue); font-size: 0.95rem; margin-bottom: 8px;">Product Specifications Sheet</h4>
      <table class="specs-table">
        <tr><td>Brand / Origin:</td><td>${product.origin}</td></tr>
        <tr><td>Finish / Form:</td><td>${product.finish}</td></tr>
        <tr><td>Container / Spec:</td><td>${product.thickness}</td></tr>
        <tr><td>Packaging Formats:</td><td>${product.sizes}</td></tr>
        <tr><td>Water & Chemical Resistance:</td><td>${product.waterAbsorption}</td></tr>
        <tr><td>Recommended Use:</td><td>${product.recommendedUse}</td></tr>
      </table>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn-primary" style="flex: 1;" onclick="addToQuoteCart('${product.id}'); closeModal();">
          🛒 Add to Bema Stone Quote Tray
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
