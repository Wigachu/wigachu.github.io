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

    return data.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      image: p.image_url,
      description: p.description,
      badge: p.badge,
      price: p.price,
      links: p.links,
      bulkLinks: p.bulk_links || [],
    }));
  } catch (e) {
    console.error("Failed to load products from Supabase:", e);
    return fallbackProducts;
  }
}

// ======================== HERO CAROUSEL ========================
function renderHeroSlides(products) {
  const wrapper = document.getElementById("hero-slides");
  if (!wrapper) return;

  // Filter products that have a badge (featured)
  const featured = products.filter((p) => p.badge && p.badge.length > 0);

  // If no featured products, use the first 10 as fallback
  let slides = featured.length > 0 ? featured : products.slice(0, 10);

  // Build HTML
  let html = "";
  slides.forEach((product) => {
    const badge = product.badge || "Featured";
    const title = product.title;
    const desc = product.description || "";
    const price = product.price ? `$${product.price.toFixed(2)}` : "";
    const image = product.image;

    html += `
      <div class="swiper-slide">
        <div class="slide-grid">
          <div class="order-2 order-md-1">
            <div class="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-brand-100 text-brand-700 uppercase tracking-wide">
              ${badge}
            </div>
            <h3 class="slide-title mt-2">${title}</h3>
            <p class="slide-desc">${desc}</p>
            ${price ? `<p class="text-sm font-semibold text-brand-600 mt-1">${price}</p>` : ""}
            <button onclick="openBuyModal(${product.id})" class="slide-cta" type="button">
              Shop Now <i class="fas fa-arrow-right"></i>
            </button>
          </div>
          <div class="order-1 order-md-2 flex justify-center">
            <div class="slide-img-wrap">
              <img src="${image}" alt="${title}" class="slide-img" />
            </div>
          </div>
        </div>
      </div>
    `;
  });

  wrapper.innerHTML = html;

  // Reinitialize Swiper (destroy existing first)
  if (window.heroSwiper) {
    window.heroSwiper.destroy(true, true);
    window.heroSwiper = null;
  }

  // Enable loop only if there are at least 2 slides
  const enableLoop = slides.length > 1;

  setTimeout(() => {
    if (typeof Swiper !== "undefined") {
      window.heroSwiper = new Swiper(".mySwiper", {
        loop: enableLoop, // now conditional
        autoplay: { delay: 5000, disableOnInteraction: false },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1, spaceBetween: 30 },
        },
      });
    }
  }, 100);
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

  // Retail links
  if (product.links && product.links.length > 0) {
    const retailHeading = document.createElement("div");
    retailHeading.className = "text-sm font-bold text-navy-800 mt-2 mb-1";
    retailHeading.textContent = "Buy Now";
    modalLinks.appendChild(retailHeading);

    product.links.forEach((link) => {
      const btn = document.createElement("a");
      btn.href = link.url;
      btn.target = "_blank";
      btn.rel = "noopener";
      btn.className =
        "block w-full py-2 px-4 mb-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition text-center";
      btn.textContent = link.platform;
      modalLinks.appendChild(btn);
    });
  }

  // Bulk links
  if (product.bulkLinks && product.bulkLinks.length > 0) {
    const bulkHeading = document.createElement("div");
    bulkHeading.className = "text-sm font-bold text-orange-600 mt-4 mb-1";
    bulkHeading.textContent = "Bulk / Wholesale";
    modalLinks.appendChild(bulkHeading);

    product.bulkLinks.forEach((link) => {
      const btn = document.createElement("a");
      btn.href = link.url;
      btn.target = "_blank";
      btn.rel = "noopener";
      btn.className =
        "block w-full py-2 px-4 mb-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition text-center";
      btn.textContent = link.platform + " (Wholesale)";
      modalLinks.appendChild(btn);
    });
  }

  // Conditionally hide "Request Bulk Order" button if bulk links exist
  const bulkOrderBtn = document.getElementById("bulk-order-btn");
  if (product.bulkLinks && product.bulkLinks.length > 0) {
    bulkOrderBtn.style.display = "none";
  } else {
    bulkOrderBtn.style.display = "block";
    // Re-attach click handler
    bulkOrderBtn.onclick = () => requestBulkOrder(product);
  }

  // Add "Report broken link" button
  const reportBtn = document.createElement("button");
  reportBtn.className = "mt-4 text-sm text-red-500 hover:underline";
  reportBtn.textContent = "Report broken link";
  reportBtn.onclick = () => reportBrokenLink(product);
  modalLinks.appendChild(reportBtn);

  buyModal.classList.remove("hidden");
  buyModal.classList.add("flex");
}

// New function: report broken link
async function reportBrokenLink(product) {
  // For simplicity, report the first retail link
  const link =
    product.links && product.links.length > 0 ? product.links[0].url : "";
  const platform =
    product.links && product.links.length > 0
      ? product.links[0].platform
      : "Unknown";
  try {
    const { error } = await supabaseClient
      .from("broken_link_reports")
      .insert([{ product_id: product.id, link_url: link, platform }]);
    if (error) throw error;
    alert("Thank you! We'll check the link.");
  } catch (e) {
    alert("Could not report. Please try again later.");
  }
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
    "Best seller: Inflatable sofa – your new camping BFF.",
    "Best seller: Neck massager for instant relief.",
    "Beat the Heat: Solar fan hats and cooling gadgets.",
    "Beat the Heat: Portable cooling fan that actually works.",
    "Trending: 3D hologram fan for epic displays.",
    "Trending: Galaxy night light – a magical gift.",
    "Gardening: Seed starter kit with LED grow lights.",
    "Upgrade your pets: Cooling mats and LED collars.",
    "Grip strengthener: Build hand strength anywhere.",
    "Cozy cave: Cat bed that pets love to burrow.",
    "LED dog collar: Safe night walks for your pup.",
    "Discover the gear that actually works.",
    "Handpicked so you don't have to scroll.",
    "We dig through reviews so you get the best ones.",
    "Just the stuff that makes life easier.",
    "Track debts & trust with Pesapad – it's 100% free.",
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
  products = await loadProducts();
  renderFilters();
  renderProducts();
  renderHeroSlides(products);
});
