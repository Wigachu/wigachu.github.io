// ======================== SUPABASE SETUP ========================
const SUPABASE_URL = "https://qzwpyvpprgpqzibzgzcz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_MpVET6kJ_-a7HrfBl5t2Iw_V_83g-wV";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
);

let isBulkLoading = false;

// ======================== FALLBACK PRODUCTS ========================
// Used only if Supabase is unreachable or returns an error
const fallbackProducts = [
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
      },
    ],
  },
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
      },
    ],
  },
];

// ======================== PRODUCT CATALOGUE ========================
let products = []; // will be filled from Supabase

async function loadProducts() {
  try {
    const { data, error } = await supabaseClient
      .from("wigachu_products")
      .select("*")
      .eq("is_active", true)
      .order("display_order", { ascending: true });

    if (error) throw error;

    // Map Supabase columns to the structure used by the frontend
    return data.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      image: p.image_url,
      description: p.description,
      badge: p.badge,
      price: p.price,
      links: p.links,
    }));
  } catch (e) {
    console.error("Failed to load products from Supabase:", e);
    return fallbackProducts;
  }
}

// ======================== EXISTING APP LOGIC ========================

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
  const modal = document.getElementById("supportModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
};

window.closeSupportModal = function () {
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

// ---------- BULK ORDER ----------
async function requestBulkOrder(product) {
  if (isBulkLoading) return;
  isBulkLoading = true;

  // Find the small product grid button (the box icon)
  const gridBtns = document.querySelectorAll(".bulk-request-btn");
  let gridBtn = null;
  for (const btn of gridBtns) {
    if (parseInt(btn.getAttribute("data-product-id")) === product.id) {
      gridBtn = btn;
      break;
    }
  }

  // Find the modal button (the one in the buy modal)
  const modalBtn = document.getElementById("bulk-order-btn");

  // Save original HTML to restore later
  const originalGridHtml = gridBtn ? gridBtn.innerHTML : null;
  const originalModalHtml = modalBtn ? modalBtn.innerHTML : null;

  // Show spinner on both buttons
  if (gridBtn) {
    gridBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    gridBtn.disabled = true;
  }
  if (modalBtn) {
    modalBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Requesting...';
    modalBtn.disabled = true;
  }

  try {
    const { data, error } = await supabaseClient.from("bulk_orders").insert([
      {
        product_title: product.title,
        product_image: product.image,
        product_description: product.description,
        product_price: product.price,
      },
    ]);

    if (error) throw error;
    alert("Bulk order logged! We'll find the best deal for you.");
  } catch (err) {
    console.error("Bulk order failed:", err);
    alert("Something went wrong. Please try again later.");
  } finally {
    isBulkLoading = false;

    // Restore both buttons
    if (gridBtn) {
      gridBtn.innerHTML = originalGridHtml || '<i class="fas fa-boxes"></i>';
      gridBtn.disabled = false;
    }
    if (modalBtn) {
      modalBtn.innerHTML = originalModalHtml || "Request Bulk Order";
      modalBtn.disabled = false;
    }
  }
}

// ---------- RENDER FILTERS ----------
function renderFilters() {
  if (!filterContainer) return;
  filterContainer.innerHTML = "";
  const categories = ["All", ...new Set(products.map((p) => p.category))];
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
  if (!productGrid) return;
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

function copyPayPalEmail() {
  const email = "pesapad.app@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("PayPal email copied to clipboard!");
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        alert("PayPal email copied to clipboard!");
      } catch (err) {
        alert("Could not copy. Please copy manually: " + email);
      }
      document.body.removeChild(textArea);
    });
}

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

// ---------- HERO CAROUSEL (Swiper) ----------
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 1, spaceBetween: 30 },
      },
    });
  }
});

// ---------- TYPEWRITER ----------
document.addEventListener("DOMContentLoaded", function () {
  const phrases = [
    "Beat the heat with solar fans & ice-cold tech.",
    "Stay cool with our summer survival kit.",
    "Viral Tiktok hit products, handpicked for quality.",
    "We dig through reviews so you get the best ones.",
    "Discover the gear that actually works.",
    "Turn any room into a cinema with our mini projector.",
    "Relax with neck massagers and galaxy star lights.",
    "Inflate tires & film underwater with our travel gear.",
    "Track debts & trust with Pesapad – it's 100% free.",
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
      typewriterEl.textContent = currentPhrase.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2800);
        return;
      }
      setTimeout(typeEffect, 40);
    } else {
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

  setTimeout(typeEffect, 600);
});

// ======================== INITIALISE ========================
document.addEventListener("DOMContentLoaded", async () => {
  // Load products from Supabase (fallback if fails)
  products = await loadProducts();
  renderFilters();
  renderProducts();
});
