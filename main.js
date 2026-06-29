// main.js
// Wigachu product data & interactivity

// Sample product catalogue (replace with real affiliate links)
const products = [
  {
    id: 1,
    category: "Restock Suppliers",
    title: "100pcs Clear Nylon Sachet Bags",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sachet+Bags",
    price: "$12.99",
    link: "https://s.click.aliexpress.com/e/_yourlink1", // replace
    badge: "Best seller"
  },
  {
    id: 2,
    category: "Restock Suppliers",
    title: "50pcs Universal USB Cables",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=USB+Cables",
    price: "$18.50",
    link: "https://s.click.aliexpress.com/e/_yourlink2",
    badge: null
  },
  {
    id: 3,
    category: "Shop Equipment",
    title: "Digital Price Computing Scale",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Scale",
    price: "$24.99",
    link: "https://s.click.aliexpress.com/e/_yourlink3",
    badge: "Popular"
  },
  {
    id: 4,
    category: "Shop Equipment",
    title: "10pcs Phone Display Stand",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Phone+Stand",
    price: "$9.99",
    link: "https://s.click.aliexpress.com/e/_yourlink4",
    badge: null
  },
  {
    id: 5,
    category: "Marketing Help",
    title: "Editable Shop Signage Template",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sign+Template",
    price: "$5.00",
    link: "#", // digital product link
    badge: "Instant download"
  },
  {
    id: 6,
    category: "Payment Services",
    title: "100 Rolls POS Thermal Paper",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=POS+Paper",
    price: "$45.00",
    link: "https://www.jumia.co.ke/your-affiliate-link",
    badge: null
  },
  {
    id: 7,
    category: "Business Software",
    title: "Kiosk Daily Sales Tracker (PDF)",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sales+Tracker",
    price: "$7.99",
    link: "https://payhip.com/yourproduct",
    badge: "Digital"
  },
  {
    id: 8,
    category: "Restock Suppliers",
    title: "24-pack Sachet Milk Powder",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Sachet+Milk",
    price: "$15.00",
    link: "https://www.jumia.co.ke/your-affiliate-link",
    badge: null
  }
];

// Extract unique categories
const categories = [...new Set(products.map(p => p.category))];

// State
let activeCategory = "All";

// DOM elements
const filterContainer = document.getElementById('filter-buttons');
const productGrid = document.getElementById('product-grid');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const yearSpan = document.getElementById('current-year');

// Render filter buttons
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

// Render product cards
function renderProducts() {
  const filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);
  
  productGrid.innerHTML = '';
  filtered.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = "product-card bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col";
    card.style.animationDelay = `${index * 0.05}s`;
    
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
        <div class="mt-2 flex items-baseline justify-between">
          <span class="text-lg font-bold text-brand-700">${product.price}</span>
        </div>
        <div class="mt-auto pt-4">
          <a href="${product.link}" target="_blank" rel="noopener" 
             class="w-full block text-center py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition">
            Check Price & Buy
          </a>
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

// Set current year in footer
yearSpan.textContent = new Date().getFullYear();

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderProducts();
});