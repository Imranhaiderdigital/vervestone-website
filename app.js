/* ==========================================================================
   Asma Stone LLC & Airgoods Wholesale Store - Logic & Product Catalog
   ========================================================================== */

const PRODUCTS = [
  // AIRGOODS WHOLESALE ARTISANAL PRODUCTS (New Additions)
  {
    id: 'airgoods-1',
    title: 'Airgoods Ethiopia Yirgacheffe Specialty Coffee',
    category: 'airgoods',
    finish: 'Single-Origin Medium Roast',
    thickness: '12 oz (340g) Whole Bean Bag',
    pricePerSqFt: 18.50,
    unitLabel: '/ bag',
    rating: 5.0,
    image: 'images/airgoods_coffee.jpg',
    badge: 'AIRGOODS BESTSELLER',
    isAirgoods: true,
    origin: 'Direct Trade, Ethiopia',
    sizes: '12 oz Bag, 5 lb Wholesale Pack',
    waterAbsorption: '100% Organic Specialty',
    recommendedUse: 'Specialty Coffee Shops, Boutique Grocers, Daily Brew',
    description: 'Artisanal single-origin Ethiopian whole bean coffee featuring delicate floral notes of bergamot, jasmine, and sweet wild berries.'
  },
  {
    id: 'airgoods-2',
    title: 'Airgoods Botanical Eucalyptus & Sage Soy Candle',
    category: 'airgoods',
    finish: 'Hand-Poured Soy Wax',
    thickness: '8 oz Amber Glass Jar',
    pricePerSqFt: 22.00,
    unitLabel: '/ candle',
    rating: 4.9,
    image: 'images/airgoods_candle.jpg',
    badge: 'AIRGOODS BOTANICAL',
    isAirgoods: true,
    origin: 'Handcrafted in USA',
    sizes: '8 oz Jar (50 hr Burn Time)',
    waterAbsorption: 'Pure Essential Oils',
    recommendedUse: 'Aromatherapy, Luxury Home Decor, Boutique Retail',
    description: 'Hand-poured 100% natural soy wax candle infused with calming eucalyptus, white sage, and warm botanical essential oils.'
  },
  {
    id: 'airgoods-3',
    title: 'Airgoods Raw Wildflower Organic Honey',
    category: 'airgoods',
    finish: 'Unfiltered Raw Amber',
    thickness: '16 oz Glass Jar',
    pricePerSqFt: 14.50,
    unitLabel: '/ jar',
    rating: 4.9,
    image: 'images/airgoods_honey.jpg',
    badge: 'AIRGOODS PANTRY',
    isAirgoods: true,
    origin: 'Artisanal Apiary, USA',
    sizes: '16 oz Jar',
    waterAbsorption: '100% Pure Raw Honey',
    recommendedUse: 'Gourmet Pantry, Tea Sweetener, Cheese Board Accent',
    description: 'Pure, unfiltered raw wildflower honey harvested directly from independent sustainable apiaries.'
  },
  {
    id: 'airgoods-4',
    title: 'Airgoods Handcrafted Speckled Ceramic Mug Set',
    category: 'airgoods',
    finish: 'Artisanal Matte Glaze',
    thickness: '14 oz Ceramic Stoneware',
    pricePerSqFt: 24.00,
    unitLabel: '/ 2-pack',
    rating: 4.8,
    image: 'images/airgoods_mug.jpg',
    badge: 'AIRGOODS HOME',
    isAirgoods: true,
    origin: 'Stoneware Studio',
    sizes: '14 oz Capacity',
    waterAbsorption: 'Dishwasher & Microwave Safe',
    recommendedUse: 'Specialty Coffee, Espresso Bars, Gift Shops',
    description: 'Hand-thrown ceramic stoneware mugs with subtle speckled glaze, perfect for specialty coffee and botanical tea.'
  },
  {
    id: 'airgoods-5',
    title: 'Airgoods Ceremonial Organic Japanese Matcha',
    category: 'airgoods',
    finish: 'First Harvest Powder',
    thickness: '100g Steel Tin',
    pricePerSqFt: 29.00,
    unitLabel: '/ tin',
    rating: 5.0,
    image: 'images/airgoods_tea.jpg',
    badge: 'AIRGOODS TEA',
    isAirgoods: true,
    origin: 'Uji, Kyoto, Japan',
    sizes: '100g Airtight Tin',
    waterAbsorption: '100% Organic Ceremonial Grade',
    recommendedUse: 'Traditional Tea Ceremony, Matcha Lattes, Wellness Cafes',
    description: 'Vibrant shade-grown ceremonial grade organic Japanese matcha powder with rich umami flavor and velvety smoothness.'
  },

  // DAP PRODUCTS (Official Caulks & Sealants)
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
    badge: 'DAP ORIGINAL',
    isDap: true,
    origin: 'DAP Products Inc, USA',
    sizes: '10.1 fl oz Tube',
    waterAbsorption: '100% Waterproof',
    recommendedUse: 'Window & Door Frames, Crown Molding, Baseboards, Tile Gaps',
    description: 'America’s #1 selling caulk. Superior flexibility, paintable in 30 minutes, mildew resistant sealant for stone & tile.'
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
    badge: 'DAP HEAVY DUTY',
    isDap: true,
    origin: 'DAP Products Inc, USA',
    sizes: '10.8 fl oz Tube',
    waterAbsorption: 'Submersible Waterproof',
    recommendedUse: 'Exterior Travertine Joints, Pool Coping Grout, Masonry',
    description: 'Delivers silicone performance with latex ease of use. Outstanding flexibility and adhesion to natural stone and marble.'
  },
  {
    id: 'dap-3',
    title: 'DAP KWIK SEAL Kitchen & Bath Adhesive Caulk',
    category: 'dap-sealants',
    finish: 'Gloss White',
    thickness: '5.5 oz Squeeze Tube',
    pricePerSqFt: 5.79,
    unitLabel: '/ tube',
    rating: 4.9,
    image: 'images/dap_alex_plus.jpg',
    badge: 'DAP BATH & TILE',
    isDap: true,
    origin: 'DAP Products Inc, USA',
    sizes: '5.5 fl oz Tube',
    waterAbsorption: '100% Mold & Mildew Proof',
    recommendedUse: 'Marble Tub Surrounds, Granite Vanities, Tile Backsplashes',
    description: 'Specially formulated for kitchen and bath applications. Cures to a durable watertight seal that prevents mold growth.'
  },

  // CURATED LUXURY MARBLE SURFACES
  {
    id: 'prod-1',
    title: 'Calacatta Gold Sovereign Marble Slabs',
    category: 'marble',
    finish: 'Honed',
    thickness: '3/4" (20mm)',
    pricePerSqFt: 24.50,
    unitLabel: '/ sq. ft.',
    rating: 4.9,
    image: 'images/marble_calacatta.jpg',
    badge: 'ASMA MARBLE',
    origin: 'Carrara, Italy',
    sizes: '24"x24", 12"x24", Slabs',
    waterAbsorption: '0.12%',
    recommendedUse: 'Interior Floors, Accent Walls, Bathroom Vanities',
    description: 'Ultra-luxurious Italian marble with luminous warm white base and golden-grey veining.'
  },
  {
    id: 'prod-3',
    title: 'Nero Marquina Black Marble Slabs',
    category: 'marble',
    finish: 'Polished High Gloss',
    thickness: '3/4" (20mm)',
    pricePerSqFt: 22.00,
    unitLabel: '/ sq. ft.',
    rating: 5.0,
    image: 'images/nero_marquina.jpg',
    badge: 'LUXURY MARBLE',
    origin: 'Markina, Spain',
    sizes: '24"x24", 18"x18", Slabs',
    waterAbsorption: '0.18%',
    recommendedUse: 'Fireplace Surround, Foyer Flooring, Kitchen Countertops',
    description: 'Dramatic velvet black Spanish marble punctuated with stark white calcite veins.'
  }
];

// App State
let currentCategory = 'all';
let currentFinish = 'all';
let searchQuery = '';
let sortBy = 'popular';
let cartItems = [];

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  setupEventListeners();
  updateCartUI();
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

  if (countEl) countEl.innerText = `${filtered.length} Airgoods & Asma Products Available`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-dim);">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin: 0 auto 16px; color: var(--bema-blue);"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3>No matching items found</h3>
        <p style="margin-top: 8px;">Try searching for "Airgoods", "Coffee", "DAP" or "Marble".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <span class="product-tag ${product.isAirgoods ? 'airgoods-tag' : product.isDap ? 'dap-tag' : ''}">${product.badge || 'ASMA SELECT'}</span>
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
            🛒 + Order Tray
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
      showToast('✨ Thank you! Your Asma Stone & Airgoods order inquiry has been submitted. Our team will contact you shortly.');
      quoteForm.reset();
    });
  }
}

// Mobile Menu Navigation Toggle
function toggleMobileNav() {
  const menu = document.getElementById('mobileNavMenu');
  const overlay = document.getElementById('mobileNavOverlay');
  if (menu && overlay) {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  }
}

// ASMA STONE STYLE CART & QUOTE TRAY LOGIC
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
  showToast(`🛒 Added "${product.title}" to Order Tray!`);
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
  const bottomBadge = document.getElementById('bottomCartBadge');
  const drawerItems = document.getElementById('drawerItems');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartEstTotalEl = document.getElementById('cartEstTotal');
  const bottomTotalEl = document.getElementById('bottomTotal');

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) badge.innerText = totalCount;
  if (bottomBadge) bottomBadge.innerText = totalCount;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.pricePerSqFt * item.quantity), 0);

  if (cartSubtotalEl) cartSubtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  if (cartEstTotalEl) cartEstTotalEl.innerText = `$${(subtotal * 1.05).toFixed(2)}`;
  if (bottomTotalEl) bottomTotalEl.innerText = `$${subtotal.toFixed(2)}`;

  if (drawerItems) {
    if (cartItems.length === 0) {
      drawerItems.innerHTML = `
        <div style="text-align: center; padding: 50px 10px; color: var(--text-dim);">
          <svg width="50" height="50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin: 0 auto 12px; color: var(--bema-blue);"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <h4 style="color: var(--navy-dark);">Your Order Tray is Empty</h4>
          <p style="font-size: 0.85rem; margin-top: 6px;">Add Airgoods wholesale items, DAP sealants, or Italian marble to request a quote.</p>
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
              <span style="margin-left: auto; font-weight:800; color:var(--bema-blue); font-size:0.92rem;">
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
    showToast('⚠️ Please add at least 1 product to your order tray.');
    return;
  }
  const name = document.getElementById('drawerCustName')?.value || 'Valued Customer';
  const email = document.getElementById('drawerCustEmail')?.value || 'asmabatoolllc@gmail.com';
  
  showToast(`🚀 Official Order Request Submitted for ${name}! Confirmation sent to ${email}.`);
  cartItems = [];
  updateCartUI();
  toggleDrawer();
}

// Product Spec Detail Modal Popup
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
      
      <h4 style="color: var(--navy-dark); font-size: 0.95rem; margin-bottom: 8px;">Technical Specification Sheet</h4>
      <table class="specs-table">
        <tr><td>Origin / Brand:</td><td>${product.origin}</td></tr>
        <tr><td>Type / Form:</td><td>${product.finish}</td></tr>
        <tr><td>Container / Spec:</td><td>${product.thickness}</td></tr>
        <tr><td>Packaging Formats:</td><td>${product.sizes}</td></tr>
        <tr><td>Purity / Rating:</td><td>${product.waterAbsorption}</td></tr>
        <tr><td>Recommended Usage:</td><td>${product.recommendedUse}</td></tr>
      </table>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn-primary" style="flex: 1;" onclick="addToQuoteCart('${product.id}'); closeModal();">
          🛒 Add to Order Tray
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
