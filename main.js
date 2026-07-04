// Product catalogue – curated from the KYD's Choice gold list + fresh finds
// Order: Cooling/heatwave products first, then the rest
const products = [
  // ---- 🔥 Beat the Heat (featured first) ----
  {
    id: 1,
    title: "Solar‑Powered Fan Hat (Breathable)",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S12993c177d104a9eb738a3d27258e16dF.jpg_960x960q75.jpg_.avif",
    description:
      "USB rechargeable solar fan hat, breathable fabric, sun protection – keeps you cool during outdoor work, fishing, or hiking.",
    badge: "🔥 Beat the Heat",
    price: 8.05,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EIxEgmI",
        type: "standard",
      },
    ],
  },
  {
    id: 2,
    title: "Wide‑Brim Solar Dual‑Fan Hat",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S0e1dd06a6b5b4495a31b031138b5c4b9i.jpg?has_lang=1&ver=1_960x960q75.jpg_.avif",
    description:
      "Anti‑UV, dual fans, wide brim – perfect for mountain climbing, fishing, and camping. Powered by sunlight, keeps you cool all day.",
    badge: "🔥 Beat the Heat",
    price: 10.78,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EuPphCO",
        type: "standard",
      },
    ],
  },
  {
    id: 3,
    title: "Bone Conduction Swim Earphones",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sc62170aa368e434ab72f3958cc46833b6.png_960x960.png_.avif",
    description:
      "IPX8 waterproof, 32GB storage, open‑ear design. Perfect for swimming, running, cycling – stay aware of your surroundings.",
    badge: "Best seller",
    price: 23.6,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EIf7wx0",
        type: "standard",
      },
    ],
  },
  {
    id: 4,
    title: "Portable Car Tire Inflator",
    category: "Car & Travel",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sab0e68c7911947bbac04b3b173e07f17h.jpg_960x960q75.jpg_.avif",
    description:
      "Wireless, quick charging, digital pressure gauge, auto‑stop. Inflates car, motorcycle, bike tires – emergency essential.",
    price: 39.96,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_ExJgOzG",
        type: "standard",
      },
    ],
  },
  // ---- Tech & Gadgets (rest) ----
  {
    id: 5,
    title: "8‑Zone Smart Heating Jacket",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S41fef1b34f064ce7b567e199943b6dd9B.jpg?has_lang=1&ver=2_960x960q75.jpg_.avif",
    description:
      "Intelligent electric heating coat with 8 heating zones. Fleece lining, unisex design – keeps you warm in winter without bulk.",
    price: 49.58,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EuMIdCW",
        type: "standard",
      },
    ],
  },
  {
    id: 6,
    title: "HY300 Portable 4K Projector",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sc0eef3ea56974199bbf6f0c9690e86d7o.jpg_960x960q75.jpg_.avif",
    description:
      "4K ready, Android 11, WiFi6, 290 ANSI lumens, 1080P native. Portable cinema for movie nights, gaming, or presentations.",
    badge: "Trending",
    price: 62.78,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EHlor5Y",
        type: "standard",
      },
    ],
  },
  {
    id: 7,
    title: "AI Smart Translation Glasses",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S2383936699964d2594108c0d7fc42291J.jpg_960x960q75.jpg_.avif",
    description:
      "800W camera, color‑changing lenses, real‑time translation, photo/video recording, waterproof, and Bluetooth calling – futuristic eyewear.",
    price: 52.46,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EI8lubY",
        type: "standard",
      },
    ],
  },
  {
    id: 8,
    title: "Mini Bluetooth Thermal Printer",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sf3789a144725432fb6c83644f3db82d9b.jpg?has_lang=1&ver=2_960x960q75.jpg_.avif",
    description:
      "Wireless pocket printer, 58mm paper, prints photos, stickers, labels. Compatible with iOS and Android – fun for journaling and organising.",
    price: 0.99, // suspicious, but we keep as is – you can update later
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_Ex0oXX8",
        type: "standard",
      },
    ],
  },
  {
    id: 9,
    title: "SOFIRN SC13 Tactical Flashlight",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S42b8dbecd5f44addaa602a5e255d8ef15.png_960x960.png_.avif",
    description:
      "1300 lumens, rechargeable 18350 battery, keychain size, emergency mini torch with multiple modes – a must‑have EDC tool.",
    price: 17.69,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EyzUQmA",
        type: "standard",
      },
    ],
  },
  // ---- Home & Life ----
  {
    id: 10,
    title: "Volcanic Crack Humidifier",
    category: "Home & Life",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S357910d548a34868862667105d98260eA.jpg_960x960q75.jpg_.avif",
    description:
      "Aroma humidifier with smoke‑ring cannon mode. Creates a volcanic mist effect – stylish and calming for any room.",
    price: 21.12,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EHxtecS",
        type: "standard",
      },
    ],
  },
  {
    id: 11,
    title: "Floating Candles with Magic Wand",
    category: "Home & Life",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S3bf0304efb554217a86635205b28765dh.png?has_lang=1&ver=2_960x960.png_.avif",
    description:
      "Halloween themed, remote controlled floating candles. Battery operated, warm light, perfect for parties and spooky décor.",
    price: 13.4,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EQUXkly",
        type: "standard",
      },
    ],
  },
  {
    id: 12,
    title: "Arcade Basketball Game Set",
    category: "Home & Life",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S201267d3c3184155a754ff51a07292c0k.jpg_960x960q75.jpg_.avif",
    description:
      "Indoor/outdoor basketball game, easy setup with pump and balls. Ideal gift for kids and adults – fun for family gatherings.",
    price: 64.75,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EuNpUjC",
        type: "standard",
      },
    ],
  },
  // ---- Entertainment ----
  {
    id: 13,
    title: "Astronaut Galaxy Projector",
    category: "Entertainment",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S85ba8ad1296942329faee6addf0fe7323.jpg?has_lang=1&ver=2_960x960q75.jpg_.avif",
    description:
      "LED star projector with Bluetooth speaker, creates a mesmerizing starry sky. Perfect for bedrooms, kids’ rooms, or relaxation.",
    badge: "Trending",
    price: 12.39,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EvHgTfU",
        type: "standard",
      },
    ],
  },
  {
    id: 14,
    title: "4K Underwater Camera (33FT)",
    category: "Entertainment",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S5226ff45675f4951a1cea114e4a7c2bfb.jpg_960x960q75.jpg_.avif",
    description:
      "64MP, dual‑screen, waterproof to 33ft, dustproof, floatable. Captures stunning snorkeling and underwater photos.",
    price: 64.26,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_Ev0gJaa",
        type: "standard",
      },
    ],
  },
  {
    id: 15,
    title: "Mini Keychain Camera (8MP)",
    category: "Entertainment",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sd97d3368c60d405899b5ea3298eb428aG.jpg_960x960q75.jpg_.avif",
    description:
      "Tiny body cam, 8MP, SD card support, with screen. Great for vlogging, kids, or capturing spontaneous moments.",
    price: 9.45,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EwGCeow",
        type: "standard",
      },
    ],
  },
  {
    id: 16,
    title: "Karaoke Bluetooth Speaker (K12)",
    category: "Entertainment",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Se0f366a5e7ce4cc89caa1116ba39872c1.jpg_960x960q75.jpg_.avif",
    description:
      "Portable wireless speaker with microphone, cute design, perfect for family karaoke nights, parties, and outdoor fun.",
    price: 12.92,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EQtETxc",
        type: "standard",
      },
    ],
  },
];

// Categories – only those with products, "All" first
const categories = [
  "All",
  "Tech & Gadgets",
  "Home & Life",
  "Car & Travel",
  "Entertainment",
];

// ---------- DO NOT EDIT BELOW (app logic) ----------
let activeCategory = "All";
let searchQuery = "";

// DOM elements
const filterContainer = document.getElementById("filter-buttons");
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const yearSpan = document.getElementById("current-year");
const buyModal = document.getElementById("buy-modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const modalLinks = document.getElementById("modal-links");

// Toast elements
const bookmarkToast = document.getElementById("bookmark-toast");
const dismissBtn = document.getElementById("dismiss-bookmark");

// Check if user already dismissed bookmark
if (localStorage.getItem("wigachu_bookmark_dismissed") !== "true") {
  setTimeout(() => {
    bookmarkToast.classList.remove(
      "opacity-0",
      "translate-y-10",
      "pointer-events-none",
    );
    bookmarkToast.classList.add(
      "opacity-100",
      "translate-y-0",
      "pointer-events-auto",
    );
  }, 5000);
}

dismissBtn.addEventListener("click", () => {
  bookmarkToast.classList.add(
    "opacity-0",
    "translate-y-10",
    "pointer-events-none",
  );
  localStorage.setItem("wigachu_bookmark_dismissed", "true");
});

// Render filter buttons
function renderFilters() {
  filterContainer.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = `px-4 py-2 rounded-full text-sm font-medium transition ${
      activeCategory === cat
        ? "bg-brand-600 text-white shadow-sm"
        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
    }`;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderFilters();
      renderProducts();
    });
    filterContainer.appendChild(btn);
  });
}

// Render product cards
function renderProducts() {
  const filtered = products.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const searchMatch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery);
    return catMatch && searchMatch;
  });

  productGrid.innerHTML = "";
  filtered.forEach((product, index) => {
    const card = document.createElement("div");
    card.className =
      "product-card bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col";
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <div class="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover" loading="lazy" />
        ${product.badge ? `<span class="absolute top-2 left-2 px-2 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full">${product.badge}</span>` : ""}
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

  document.querySelectorAll(".buy-options-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(btn.getAttribute("data-product-id"));
      openBuyModal(productId);
    });
  });
}

// Modal functions
function openBuyModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  modalTitle.textContent = product.title;
  modalDesc.textContent = product.description;
  modalPrice.textContent = product.price
    ? `💰 Reference price: $${product.price.toFixed(2)}`
    : "";
  modalLinks.innerHTML = "";

  const platformMap = new Map();
  product.links.forEach((link) => {
    if (!platformMap.has(link.platform)) platformMap.set(link.platform, []);
    platformMap.get(link.platform).push(link);
  });

  for (const [platform, links] of platformMap) {
    const platformDiv = document.createElement("div");
    platformDiv.className = "flex items-center justify-between border-b pb-2";
    platformDiv.innerHTML = `<span class="font-medium text-sm">${platform}</span>`;
    const btnsDiv = document.createElement("div");
    btnsDiv.className = "flex gap-2";

    links.forEach((link) => {
      const a = document.createElement("a");
      const isBulk = link.type === "bulk";
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.className = `px-3 py-1 text-xs font-medium rounded-full transition ${
        isBulk
          ? "bg-brand-100 text-brand-700 hover:bg-brand-200"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`;
      a.textContent = isBulk
        ? `Buy Bulk${link.note ? " (" + link.note + ")" : ""}`
        : "Buy";
      btnsDiv.appendChild(a);
    });

    platformDiv.appendChild(btnsDiv);
    modalLinks.appendChild(platformDiv);
  }

  buyModal.classList.remove("hidden");
  buyModal.classList.add("flex");
}

closeModal.addEventListener("click", () => {
  buyModal.classList.add("hidden");
  buyModal.classList.remove("flex");
});
window.addEventListener("click", (e) => {
  if (e.target === buyModal) buyModal.classList.add("hidden");
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderProducts();
});

mobileMenuBtn.addEventListener("click", () =>
  mobileMenu.classList.toggle("hidden"),
);
document
  .querySelectorAll("#mobile-menu a")
  .forEach((link) =>
    link.addEventListener("click", () => mobileMenu.classList.add("hidden")),
  );

yearSpan.textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProducts();
});
