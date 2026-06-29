// Product catalogue with new categories (Wheels & Motors, Luxury Vault)
const products = [
  // ---- Shop Essentials ----
  {
    id: 1,
    title: "100pcs Clear Nylon Sachet Bags",
    category: "Shop Essentials",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sachet+Bags",
    description: "Perfect for repackaging sugar, groundnuts, or tea. Strong and resealable.",
    badge: "Best seller",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" },
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_yourlink", type: "standard" },
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_bulklink", type: "bulk", note: "500pcs lot" }
    ]
  },
  {
    id: 2,
    title: "50pcs Universal USB Cables",
    category: "Shop Essentials",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=USB+Cables",
    description: "Micro USB & Type‑C, essential for phone repair kiosks.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" },
      { platform: "eBay", url: "https://ebay.us/yourlink", type: "standard" }
    ]
  },
  // ---- Viral Vault ----
  {
    id: 3,
    title: "Mini LED Night Projector",
    category: "Viral Vault",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=LED+Projector",
    description: "TikTok famous galaxy projector – turns any room into a starry sky. So satisfying.",
    badge: "Trending",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" },
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_virallink", type: "standard" }
    ]
  },
  {
    id: 4,
    title: "Magic Cleaning Paste (KYD Gold Pick)",
    category: "Viral Vault",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Cleaning+Paste",
    description: "Removes stains instantly. From the KYD Gold list – tested and proven.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" },
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_cleanlink", type: "standard", note: "Single jar" },
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_cleanbulk", type: "bulk", note: "12 jars" }
    ]
  },
  // ---- Bulk Deals ----
  {
    id: 5,
    title: "100 Rolls POS Thermal Paper",
    category: "Bulk Deals",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=POS+Paper",
    description: "Case of 100 rolls, fits most printers. Perfect for busy shops.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" },
      { platform: "eBay", url: "https://ebay.us/yourlink", type: "standard" }
    ]
  },
  // ---- Work & Hustle ----
  {
    id: 6,
    title: "Kiosk Daily Sales Tracker (PDF)",
    category: "Work & Hustle",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sales+Tracker",
    description: "Printable ledger. Manage sales & stock without an app.",
    links: [
      { platform: "Payhip", url: "https://payhip.com/yourproduct", type: "standard" }
    ]
  },
  // ---- Fun & Home ----
  {
    id: 7,
    title: "Satisfying Kinetic Desk Toy",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Kinetic+Toy",
    description: "Flip, spin, relax. A viral TikTok desk accessory.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  // ---- Gear & Gadgets ----
  {
    id: 8,
    title: "Wireless Earbuds (Bulk 10pcs)",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Earbuds",
    description: "Decent quality, perfect for resale or giveaway.",
    links: [
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_earbuds", type: "standard", note: "1pc" },
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_earbudsbulk", type: "bulk", note: "10pcs lot" }
    ]
  },
  // ---- Wheels & Motors ----
  {
    id: 9,
    title: "Affordable Delivery Van (Toyota Probox)",
    category: "Wheels & Motors",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Toyota+Probox",
    description: "Popular for small business deliveries. Check local listings & import options.",
    links: [
      { platform: "Jiji Kenya", url: "https://jiji.co.ke/affiliate-link", type: "standard" },
      { platform: "Cheki Kenya", url: "https://cheki.co.ke/affiliate", type: "standard" },
      { platform: "CarMax (import)", url: "https://www.carmax.com/affiliate", type: "standard" }
    ]
  },
  {
    id: 10,
    title: "Electric Scooter (Bulk for Delivery)",
    category: "Wheels & Motors",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=E-Scooter",
    description: "Fast, cheap urban delivery. Supplier offers wholesale pricing.",
    links: [
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_scooter", type: "standard" },
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_scooterbulk", type: "bulk", note: "5 units" }
    ]
  },
  // ---- Luxury Vault ----
  {
    id: 11,
    title: "1 Carat Diamond Engagement Ring",
    category: "Luxury Vault",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Diamond+Ring",
    description: "Ethically sourced, GIA certified. From trusted online jewelers.",
    links: [
      { platform: "Blue Nile", url: "https://www.bluenile.com/affiliate-link", type: "standard" },
      { platform: "James Allen", url: "https://www.jamesallen.com/affiliate", type: "standard" },
      { platform: "Brilliant Earth", url: "https://www.brilliantearth.com/aff", type: "standard" }
    ]
  },
  {
    id: 12,
    title: "1 oz Gold Bar (Investment Grade)",
    category: "Luxury Vault",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Gold+Bar",
    description: "Pure 24K gold bar from APMEX. Secure delivery, insured.",
    links: [
      { platform: "APMEX", url: "https://www.apmex.com/affiliate-link", type: "standard" },
      { platform: "JM Bullion", url: "https://www.jmbullion.com/aff", type: "standard" }
    ]
  }
];

// Categories array (order of display, "All" first)
const categories = [
  "All",
  "Viral Vault",
  "Shop Essentials",
  "Bulk Deals",
  "Work & Hustle",
  "Fun & Home",
  "Gear & Gadgets",
  "Wheels & Motors",
  "Luxury Vault"
];

let activeCategory = "All";
let searchQuery = "";

// DOM elements
const filterContainer = document.getElementById('filter-buttons');
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const yearSpan = document.getElementById('current-year');
const buyModal = document.getElementById('buy-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLinks = document.getElementById('modal-links');

// Render filter buttons
function renderFilters() {
  filterContainer.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `px-4 py-2 rounded-full text-sm font-medium transition ${
      activeCategory === cat ? 'bg-brand-600 text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
    }`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      renderFilters();
      renderProducts();
    });
    filterContainer.appendChild(btn);
  });
}

// Render product cards
function renderProducts() {
  const filtered = products.filter(p => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory;
    const searchMatch = !searchQuery || p.title.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery);
    return catMatch && searchMatch;
  });

  productGrid.innerHTML = '';
  filtered.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col';
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <div class="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover" loading="lazy" />
        ${product.badge ? `<span class="absolute top-2 left-2 px-2 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full">${product.badge}</span>` : ''}
      </div>
      <div class="p-4 flex flex-col flex-1">
        <span class="text-xs text-gray-500 uppercase tracking-wide">${product.category}</span>
        <h3 class="mt-1 text-sm font-semibold text-navy-900 line-clamp-2">${product.title}</h3>
        <p class="mt-1 text-xs text-gray-600 line-clamp-2">${product.description}</p>
        <div class="mt-auto pt-4">
          <button class="w-full buy-options-btn py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition" data-product-id="${product.id}">
            Buy Options
          </button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  // Attach modal openers
  document.querySelectorAll('.buy-options-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = parseInt(btn.getAttribute('data-product-id'));
      openBuyModal(productId);
    });
  });
}

// Modal functions
function openBuyModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  modalTitle.textContent = product.title;
  modalDesc.textContent = product.description;
  modalLinks.innerHTML = '';

  // Group links by platform
  const platformMap = new Map();
  product.links.forEach(link => {
    if (!platformMap.has(link.platform)) platformMap.set(link.platform, []);
    platformMap.get(link.platform).push(link);
  });

  for (const [platform, links] of platformMap) {
    const platformDiv = document.createElement('div');
    platformDiv.className = 'flex items-center justify-between border-b pb-2';
    platformDiv.innerHTML = `<span class="font-medium text-sm">${platform}</span>`;
    const btnsDiv = document.createElement('div');
    btnsDiv.className = 'flex gap-2';

    links.forEach(link => {
      const a = document.createElement('a');
      const isBulk = link.type === 'bulk';
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = `px-3 py-1 text-xs font-medium rounded-full transition ${
        isBulk ? 'bg-brand-100 text-brand-700 hover:bg-brand-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`;
      a.textContent = isBulk ? `Buy Bulk${link.note ? ' ('+link.note+')' : ''}` : 'Buy';
      btnsDiv.appendChild(a);
    });

    platformDiv.appendChild(btnsDiv);
    modalLinks.appendChild(platformDiv);
  }

  buyModal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => buyModal.classList.add('hidden'));
window.addEventListener('click', (e) => {
  if (e.target === buyModal) buyModal.classList.add('hidden');
});

// Search
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderProducts();
});

// Mobile menu
mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
document.querySelectorAll('#mobile-menu a').forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));

// Footer year
yearSpan.textContent = new Date().getFullYear();

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderProducts();
});