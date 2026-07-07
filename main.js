// Product catalogue – curated from the KYD's Choice gold list + new additions
const products = [
  // ---- Beat the Heat (featured first) ----
  {
    id: 1,
    title: "Solar Fan Hat (Breathable)",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S12993c177d104a9eb738a3d27258e16dF.jpg_960x960q75.jpg_.avif",
    description:
      "USB rechargeable solar fan hat with breathable fabric and sun protection – stays cool during outdoor work, fishing, or hiking.",
    badge: "Beat the Heat",
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
    title: "Wide-Brim Dual-Fan Hat",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S0e1dd06a6b5b4495a31b031138b5c4b9i.jpg?has_lang=1&ver=1_960x960q75.jpg_.avif",
    description:
      "Anti-UV, dual solar fans, wide brim – keeps you cool during mountain climbing, fishing, and camping. Powered by sunlight.",
    badge: "Beat the Heat",
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
    title: "Semiconductor Cooling Fan",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sfba35ba7ba75419ca26192c5b19d6515j.jpg_960x960q75.jpg_.avif",
    description:
      "High-speed handheld fan with semiconductor cooling plate – blows genuinely cold air, not just a breeze. 3000mAh, rechargeable, portable.",
    badge: "Beat the Heat",
    price: 18.58,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EIk5COe",
        type: "standard",
      },
    ],
  },

  // ---- Tech & Gadgets ----
  {
    id: 4,
    title: "Bone Conduction Swim Earphones",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sc62170aa368e434ab72f3958cc46833b6.png_960x960.png_.avif",
    description:
      "IPX8 waterproof, 32GB storage, open-ear design. Perfect for swimming, running, cycling – stay aware of your surroundings.",
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
    id: 5,
    title: "Smart Heating Jacket (8-Zone)",
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
      "800W camera, color-changing lenses, real-time translation, photo/video recording, waterproof, and Bluetooth calling – futuristic eyewear.",
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
    price: 0.99,
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
      "1300 lumens, rechargeable 18350 battery, keychain size, emergency mini torch with multiple modes – a must-have EDC tool.",
    price: 17.69,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EyzUQmA",
        type: "standard",
      },
    ],
  },
  {
    id: 10,
    title: "Solar Power Bank with Camping Light",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S6d4734469f664ff29acc8ca02009856c4.jpg?has_lang=1&ver=2_960x960q75.jpg_.avif",
    description:
      "Waterproof outdoor solar charger with built-in camping light. Perfect for hiking, travel, and emergency power when off-grid.",
    price: 21.39,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EJLqu2W",
        type: "standard",
      },
    ],
  },

  // ---- Home & Life ----
  {
    id: 11,
    title: "Volcanic Crack Humidifier",
    category: "Home & Life",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S357910d548a34868862667105d98260eA.jpg_960x960q75.jpg_.avif",
    description:
      "Aroma humidifier with smoke-ring cannon mode. Creates a volcanic mist effect – stylish and calming for any room.",
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
    id: 12,
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
    id: 13,
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

  // ---- Health & Wellness ----
  {
    id: 14,
    title: "Neck & Shoulder Massager",
    category: "Health & Wellness",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sf8dd7b8e95be434eb87a8864c1fc119bH.png?has_lang=1&ver=2_960x960.png_.avif",
    description:
      "Portable cervical spine massager for neck and shoulder pain relief. Compact, mini design – use at home, work, or while travelling.",
    badge: "Best seller",
    price: 13.1,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_Exod9IS",
        type: "standard",
      },
    ],
  },
  {
    id: 15,
    title: "Inflatable Neck Stretcher",
    category: "Health & Wellness",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sffc52a25543041c5897da1f4eb4ec0b5T.jpg_960x960q75.jpg_.avif",
    description:
      "Cervical traction device for neck pain relief. Inflatable, portable, drug-free – gently decompresses the spine. No electricity needed.",
    price: 6.23,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EHHusPo",
        type: "standard",
      },
    ],
  },
  {
    id: 16,
    title: "Portable Fabric Shaver",
    category: "Home & Life",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sb834267b918149baa4f571b68e24b17c0.jpg?has_lang=1&ver=2_960x960q75.jpg_.avif",
    description:
      "Rechargeable lint remover with LED display. Removes fuzz and pills from clothes – extends the life of your favourite garments.",
    price: 9.68,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_EQCpxNs",
        type: "standard",
      },
    ],
  },

  // ---- Car & Travel ----
  {
    id: 17,
    title: "Portable Car Tire Inflator",
    category: "Car & Travel",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S6051cf7e243243fd8e548536a68d5d26j.png_960x960.png_.avif",
    description:
      "Wireless, quick charging, digital pressure gauge, auto-stop. Inflates car, motorcycle, bike tires – emergency essential.",
    price: 39.96,
    links: [
      {
        platform: "AliExpress",
        url: "https://s.click.aliexpress.com/e/_ExJgOzG",
        type: "standard",
      },
    ],
  },

  // ---- Entertainment ----
  {
    id: 18,
    title: "Astronaut Galaxy Projector",
    category: "Entertainment",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S85ba8ad1296942329faee6addf0fe7323.jpg?has_lang=1&ver=2_960x960q75.jpg_.avif",
    description:
      "LED star projector with Bluetooth speaker, creates a mesmerizing starry sky. Perfect for bedrooms, kids' rooms, or relaxation.",
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
    id: 19,
    title: "4K Underwater Camera (33FT)",
    category: "Entertainment",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S5226ff45675f4951a1cea114e4a7c2bfb.jpg_960x960q75.jpg_.avif",
    description:
      "64MP, dual-screen, waterproof to 33ft, dustproof, floatable. Captures stunning snorkeling and underwater photos.",
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
    id: 20,
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
    id: 21,
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
  "Health & Wellness",
];

// ---------- APP LOGIC ----------
let activeCategory = "All";
let searchQuery = "";
let currentBulkProduct = null;

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
const bulkOrderBtn = document.getElementById("bulk-order-btn");

// Toast elements
const bookmarkToast = document.getElementById("bookmark-toast");
const dismissBtn = document.getElementById("dismiss-bookmark");

// ---------- BOOKMARK TOAST ----------
if (localStorage.getItem("wigachu_bookmark_dismissed") !== "true") {
  setTimeout(() => {
    bookmarkToast.classList.add("visible");
  }, 5000);
}

if (dismissBtn) {
  dismissBtn.addEventListener("click", () => {
    bookmarkToast.classList.remove("visible");
    localStorage.setItem("wigachu_bookmark_dismissed", "true");
  });
}

// ---------- SUPPORT MODAL ----------
window.openSupportModal = function () {
  console.log("openSupportModal called");
  const modal = document.getElementById("supportModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    console.log("Modal opened");
  } else {
    console.error("supportModal element not found!");
  }
};

window.closeSupportModal = function () {
  console.log("closeSupportModal called");
  const modal = document.getElementById("supportModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") window.closeSupportModal();
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("supportModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) window.closeSupportModal();
    });
  }
});

// ---------- COPY TO CLIPBOARD ----------
window.copyToClipboard = function (elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;
  const text = element.innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Address copied to clipboard!");
    })
    .catch(() => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        alert("Address copied to clipboard!");
      } catch (err) {
        alert("Could not copy. Please select and copy manually.");
      }
      document.body.removeChild(textArea);
    });
};

// ---------- BULK ORDER (One‑click log to Google Form) ----------
function requestBulkOrder(product) {
  // Replace with your deployed Apps Script URL (see step 2)
  const webAppURL =
    "https://script.google.com/macros/s/AKfycbxWM3S9xIsOityBaE1z-oRF7xCCfBo4FRaoYLbdfrvVgzYbKW5FiWEWhR2uzRi9TFw8/exec";

  // Send product details – no user prompts
  fetch(webAppURL, {
    method: "POST",
    mode: "no-cors", // Prevents CORS errors; we don't need a response body
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: product.title,
      image: product.image,
      description: product.description,
      price: product.price,
    }),
  })
    .then(() => {
      alert(
        "Bulk order logged! We'll check it and find the best deal for you.",
      );
    })
    .catch(() => {
      alert(
        "Something happened. Please try again later or contact us directly.",
      );
    });
}

// ---------- RENDER FILTERS ----------
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

// ---------- RENDER PRODUCTS ----------
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
        <div class="mt-auto pt-4 flex gap-2">
          <button class="flex-1 buy-options-btn py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition" data-product-id="${product.id}">
            Buy Options
          </button>
          <button class="bulk-request-btn py-2 px-3 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium rounded-lg transition" data-product-id="${product.id}" title="Request Bulk Order">
            <i class="fas fa-boxes"></i>
          </button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  // Buy Options buttons
  document.querySelectorAll(".buy-options-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(btn.getAttribute("data-product-id"));
      openBuyModal(productId);
    });
  });

  // Bulk Request buttons
  document.querySelectorAll(".bulk-request-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(btn.getAttribute("data-product-id"));
      const product = products.find((p) => p.id === productId);
      if (product) requestBulkOrder(product);
    });
  });
}

// ---------- MODAL ----------
function openBuyModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  currentBulkProduct = product;
  modalTitle.textContent = product.title;
  modalDesc.textContent = product.description;
  modalPrice.textContent = product.price
    ? `Reference price: $${product.price.toFixed(2)}`
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

  // Update bulk order button with product data
  if (bulkOrderBtn) {
    bulkOrderBtn.onclick = () => {
      if (currentBulkProduct) requestBulkOrder(currentBulkProduct);
    };
  }

  buyModal.classList.remove("hidden");
  buyModal.classList.add("flex");
}

// ---------- CLOSE MODAL ----------
if (closeModal) {
  closeModal.addEventListener("click", () => {
    buyModal.classList.add("hidden");
    buyModal.classList.remove("flex");
  });
}

window.addEventListener("click", (e) => {
  if (e.target === buyModal) {
    buyModal.classList.add("hidden");
    buyModal.classList.remove("flex");
  }
});

// ---------- SEARCH ----------
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  });
}

// ---------- MOBILE MENU ----------
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

document
  .querySelectorAll("#mobile-menu a, #mobile-menu button")
  .forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  });

// ---------- YEAR ----------
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProducts();
});

// ---------- HERO CAROUSEL (Swiper) ----------
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 5000, // 5 seconds between slides
      disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
});

// ---------- NEW: Typewriter effect ----------
document.addEventListener("DOMContentLoaded", function () {
  const phrases = [
    // Beat the Heat
    "Beat the heat with solar fans & ice-cold tech.",
    "Stay cool with our summer survival kit.",

    // Viral & Trust
    "Viral Tiktok hit products, handpicked for quality.",
    "We dig through reviews so you get the best ones.",
    "Discover the gear that actually delivers.",

    // Specific Product Hooks (Explore the catalogue)
    "Turn any room into a cinema with our mini projector.",
    "Relax with neck massagers and galaxy star lights.",
    "Inflate tires & film underwater with our travel gear.",

    // Pesapad
    "Track debts & trust with Pesapad – it's 100% free.",

    // Brand Promise
    "Just the stuff that makes life easier.",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterEl = document.getElementById("typewriter-text");

  if (!typewriterEl) return;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (!isDeleting) {
      // typing
      typewriterEl.textContent = currentPhrase.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2800);
        return;
      }
      setTimeout(typeEffect, 40);
    } else {
      // deleting
      typewriterEl.textContent = currentPhrase.slice(0, charIndex);
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 300);
        return;
      }
      setTimeout(typeEffect, 20);
    }
  }

  // start after a small delay
  setTimeout(typeEffect, 600);
});
