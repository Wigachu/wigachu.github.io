// Product catalogue with affiliate links from multiple platforms
const products = [
  {
    id: 1,
    category: "Restock Suppliers",
    title: "100pcs Clear Nylon Sachet Bags",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sachet+Bags",
    description: "Perfect for repackaging sugar, groundnuts, or tea. Strong and resealable.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20" },
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_yourlink1" },
      { platform: "Jumia", url: "https://www.jumia.co.ke/your-link" },
      { platform: "Kilimall", url: "https://www.kilimall.co.ke/your-link" }
    ],
    badge: "Best seller"
  },
  {
    id: 2,
    category: "Restock Suppliers",
    title: "50pcs Universal USB Cables",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=USB+Cables",
    description: "Micro USB and Type‑C cables, bulk pack for phone repair shops and kiosks.",
    links: [
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_yourlink2" },
      { platform: "eBay", url: "https://ebay.us/yourlink" },
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20" }
    ],
    badge: null
  },
  {
    id: 3,
    category: "Shop Equipment",
    title: "Digital Price Computing Scale",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Scale",
    description: "10kg capacity, dual LCD display. Perfect for grocery and vegetable stalls.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20" },
      { platform: "Jumia", url: "https://www.jumia.co.ke/your-link" }
    ],
    badge: "Popular"
  },
  {
    id: 4,
    category: "Shop Equipment",
    title: "10pcs Phone Display Stand",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Phone+Stand",
    description: "Clear acrylic stands for showcasing phones and accessories in your shop.",
    links: [
      { platform: "AliExpress", url: "https://s.click.aliexpress.com/e/_yourlink4" },
      { platform: "Kilimall", url: "https://www.kilimall.co.ke/your-link" }
    ],
    badge: null
  },
  {
    id: 5,
    category: "Marketing Help",
    title: "Editable Shop Signage Template",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sign+Template",
    description: "Canva template – just add your shop name and print. Instant download.",
    links: [
      { platform: "Gumroad", url: "#" } // your own digital product
    ],
    badge: "Digital"
  },
  {
    id: 6,
    category: "Payment Services",
    title: "100 Rolls POS Thermal Paper",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=POS+Paper",
    description: "Standard 57x50mm thermal rolls. Fits most POS machines. Bulk case.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20" },
      { platform: "eBay", url: "https://ebay.us/yourlink" }
    ],
    badge: null
  },
  {
    id: 7,
    category: "Business Software",
    title: "Kiosk Daily Sales Tracker (PDF)",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sales+Tracker",
    description: "Printable daily ledger. Track sales, expenses, and stock – no app needed.",
    links: [
      { platform: "Payhip", url: "https://payhip.com/yourproduct" }
    ],
    badge: "Digital"
  }
];

// Extract categories
const categories = [...new Set(products.map(p => p.category))];

let activeCategory = "All";

const filterContainer = document.getElementById('filter-buttons');
const productGrid = document.getElementById('product-grid');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const yearSpan = document.getElementById('current-year');

// Filter buttons
function renderFilters() {
  const allButton = document.createElement('button');
  allButton.className = `px-4 py-2 rounded-full text-sm font-medium transition ${
    activeCategory === "All"
      ? "bg-brand-600 text-white shadow-sm"
      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
  }`;
  allButton.textContent = "All";
  allButton.addEventListener('click', () => {
    activeCategory = "All";
    updateActiveFilter();
    renderProducts();
  });
  filterContainer.appendChild(allButton);

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `px-4 py-2 rounded-full text-sm font-medium transition ${
      activeCategory === cat
        ? "bg-brand-600 text-white shadow-sm"
        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
    }`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      updateActiveFilter();
      renderProducts();
    });
    filterContainer.appendChild(btn);
  });
}

function updateActiveFilter() {
  const buttons = filterContainer.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.textContent === activeCategory) {
      btn.className = "px-4 py-2 rounded-full text-sm font-medium transition bg-brand-600 text-white shadow-sm";
    } else {
      btn.className = "px-4 py-2 rounded-full text-sm font-medium transition bg-white text-gray-700 border border-gray-300 hover:bg-gray-50";
    }
  });
}

// Render product cards with multiple store links
function renderProducts() {
  const filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  productGrid.innerHTML = '';
  filtered.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = "product-card bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col";
    card.style.animationDelay = `${index * 0.05}s`;

    // Build store links HTML
    const linksHTML = product.links.map(link =>
      `<a href="${link.url}" target="_blank" rel="noopener" class="inline-flex items-center px-2 py-1 text-xs font-medium rounded bg-gray-100 hover:bg-gray-200 transition">
        ${link.platform}
      </a>`
    ).join('');

    card.innerHTML = `
      <div class="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover" loading="lazy" />
        ${product.badge ? `
          <span class="absolute top-2 left-2 inline-block px-2 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full">
            ${product.badge}
          </span>
        ` : ''}
      </div>
      <div class="p-4 flex flex-col flex-1">
        <span class="text-xs text-gray-500 uppercase tracking-wide">${product.category}</span>
        <h3 class="mt-1 text-sm font-semibold text-navy-900 line-clamp-2">${product.title}</h3>
        <p class="mt-1 text-xs text-gray-600 line-clamp-2">${product.description}</p>
        <div class="mt-auto pt-4 space-y-2">
          <div class="flex flex-wrap gap-2">
            ${linksHTML}
          </div>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Set footer year
yearSpan.textContent = new Date().getFullYear();

// Start
document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderProducts();
});