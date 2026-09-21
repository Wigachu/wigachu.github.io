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
        price: 8.05,
        currency: "USD",
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
        price: 18.58,
        currency: "USD",
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
        price: 62.78,
        currency: "USD",
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
        price: 13.1,
        currency: "USD",
      },
    ],
  },
];

// ======================== PRICE HELPERS ========================

function getLowestPrice(product) {
  if (!product.links || product.links.length === 0) {
    return product.price || null;
  }
  const prices = product.links
    .map((l) => parseFloat(l.price))
    .filter((p) => !isNaN(p) && p > 0);
  if (prices.length > 0) return Math.min(...prices);
  return product.price || null;
}

function getHighestPrice(product) {
  if (!product.links || product.links.length === 0) return null;
  const prices = product.links
    .map((l) => parseFloat(l.price))
    .filter((p) => !isNaN(p) && p > 0);
  return prices.length > 0 ? Math.max(...prices) : null;
}

function getMaxSavings(product) {
  const low = getLowestPrice(product);
  const high = getHighestPrice(product);
  if (low === null || high === null || low === high) return null;
  return high - low;
}

function formatPrice(price) {
  if (price === null || price === undefined || isNaN(price)) return "";
  return `$${parseFloat(price).toFixed(2)}`;
}

function getFullUrl(url) {
  if (!url) return "";
  return url.replace(/^https?:\/\//, "");
}

// ======================== PRODUCT CATALOGUE ========================
let products = [];

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
      links: p.links || [],
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

  const featured = products.filter((p) => p.badge && p.badge.length > 0);
  let slides = featured.length > 0 ? featured : products.slice(0, 10);

  let html = "";
  slides.forEach((product) => {
    const badge = product.badge || "Featured";
    const title = product.title;
    const desc = product.description || "";
    const image = product.image;

    const lowest = getLowestPrice(product);
    const priceDisplay = lowest ? `From ${formatPrice(lowest)}` : "";

    html += `
      <div class="swiper-slide">
        <div class="slide-grid">
          <div class="order-2 order-md-1">
            <div class="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-brand-100 text-brand-700 uppercase tracking-wide">
              ${badge}
            </div>
            <h3 class="slide-title mt-2">${title}</h3>
            <p class="slide-desc">${desc}</p>
            ${priceDisplay ? `<p class="text-sm font-semibold text-brand-600 mt-1">${priceDisplay}</p>` : ""}
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

  if (window.heroSwiper) {
    window.heroSwiper.destroy(true, true);
    window.heroSwiper = null;
  }

  const enableLoop = slides.length > 1;

  setTimeout(() => {
    if (typeof Swiper !== "undefined") {
      window.heroSwiper = new Swiper(".mySwiper", {
        loop: enableLoop,
        autoplay: { delay: 5000, disableOnInteraction: false },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1, spaceBetween: 30 },
        },
      });
    }
  }, 100);
}

// ======================== APP STATE ========================
let activeCategory = "All";
let searchQuery = "";
let currentBulkProduct = null;

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
    .then(() => alert("Address copied to clipboard!"))
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

// ---------- WHOLESALE REQUEST ----------
async function requestBulkOrder(product) {
  if (isBulkLoading) return;
  isBulkLoading = true;

  const gridBtns = document.querySelectorAll(".bulk-request-btn");
  let gridBtn = null;
  for (const btn of gridBtns) {
    if (parseInt(btn.getAttribute("data-product-id")) === product.id) {
      gridBtn = btn;
      break;
    }
  }
  const modalBtn = document.getElementById("bulk-order-btn");
  const originalGridHtml = gridBtn ? gridBtn.innerHTML : null;
  const originalModalHtml = modalBtn ? modalBtn.innerHTML : null;

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
    alert("Awesome! We'll find the best deal for you.");
  } catch (err) {
    console.error("Wholesale failed:", err);
    alert("Something went wrong. Please try again later.");
  } finally {
    isBulkLoading = false;
    if (gridBtn) {
      gridBtn.innerHTML = originalGridHtml || '<i class="fas fa-boxes"></i>';
      gridBtn.disabled = false;
    }
    if (modalBtn) {
      modalBtn.innerHTML = originalModalHtml || "Request Wholesale";
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
    const lowest = getLowestPrice(product);
    const savings = getMaxSavings(product);

    let priceHtml = "";
    if (lowest !== null) {
      priceHtml = `<p class="mt-2 text-base font-bold text-brand-600">From ${formatPrice(lowest)}`;
      if (savings) {
        priceHtml += `<span class="ml-2 text-xs font-normal text-gray-400">Save ${formatPrice(savings)}</span>`;
      }
      priceHtml += `</p>`;
    }

    const card = document.createElement("div");
    card.className =
      "product-card bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col";
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <div class="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover" loading="lazy" referrerpolicy="no-referrer" />
        ${product.badge ? `<span class="absolute top-2 left-2 px-2 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full">${product.badge}</span>` : ""}
      </div>
      <div class="p-4 flex flex-col flex-1">
        <span class="text-xs text-gray-500 uppercase tracking-wide">${product.category}</span>
        <h3 class="mt-1 text-sm font-semibold text-navy-900 line-clamp-2">${product.title}</h3>
        <p class="mt-1 text-xs text-gray-600 line-clamp-2">${product.description}</p>
        ${priceHtml}
        <div class="mt-auto pt-4 flex gap-2">
          <button class="flex-1 buy-options-btn py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition" data-product-id="${product.id}">
            Buy Options
          </button>
          <button class="bulk-request-btn py-2 px-3 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium rounded-lg transition" data-product-id="${product.id}" title="Request Wholesale">
            <i class="fas fa-boxes"></i>
          </button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  document.querySelectorAll(".buy-options-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.getAttribute("data-product-id"));
      openBuyModal(productId);
    });
  });

  document.querySelectorAll(".bulk-request-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.getAttribute("data-product-id"));
      const product = products.find((p) => p.id === productId);
      if (product) requestBulkOrder(product);
    });
  });
}

// ---------- BUY MODAL ----------
function openBuyModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  currentBulkProduct = product;

  modalTitle.textContent = product.title;
  modalDesc.textContent = product.description;

  const lowest = getLowestPrice(product);
  const highest = getHighestPrice(product);
  const savings = getMaxSavings(product);

  if (lowest !== null && highest !== null && savings !== null) {
    modalPrice.innerHTML = `
      <span class="text-2xl font-bold text-brand-600">From ${formatPrice(lowest)}</span>
      <span class="ml-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Save up to ${formatPrice(savings)}</span>
    `;
  } else if (lowest !== null) {
    modalPrice.innerHTML = `<span class="text-2xl font-bold text-brand-600">From ${formatPrice(lowest)}</span>`;
  } else {
    modalPrice.innerHTML = "";
  }

  modalLinks.innerHTML = "";

  // ---- RETAIL LINKS ----
  if (product.links && product.links.length > 0) {
    const retailHeading = document.createElement("div");
    retailHeading.className = "text-sm font-bold text-navy-800 mb-2";
    retailHeading.textContent = "Buy Now — Compare Prices";
    modalLinks.appendChild(retailHeading);

    product.links.forEach((link) => {
      const row = document.createElement("div");
      row.className =
        "mb-3 border border-gray-200 rounded-xl p-3 hover:border-brand-500 transition-colors";

      const priceDisplay = link.price
        ? formatPrice(link.price)
        : product.price
          ? formatPrice(product.price)
          : "Check price";

      row.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2 min-w-0">
            <span class="font-semibold text-navy-800 text-sm truncate">${link.platform}</span>
            <span class="text-[10px] text-gray-400 flex-shrink-0">· Verified retailer</span>
          </div>
          <span class="text-base font-bold text-brand-600 flex-shrink-0">${priceDisplay}</span>
        </div>
        <a href="${link.url}" target="_blank" rel="noopener"
           class="block w-full py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition text-center mb-2">
          Buy Now on ${link.platform}
        </a>
        <div class="flex items-center gap-2">
          <code class="flex-1 text-[10px] text-gray-500 bg-gray-50 rounded px-2 py-1.5 truncate" title="${link.url}">${getFullUrl(link.url)}</code>
          <button class="copy-link-btn flex-shrink-0 text-xs text-brand-600 hover:text-brand-800 font-semibold px-2 py-1" data-url="${link.url}">Copy</button>
        </div>
      `;
      modalLinks.appendChild(row);
    });

    const trustNote = document.createElement("p");
    trustNote.className = "text-[11px] text-gray-400 italic mb-2";
    trustNote.textContent =
      "Full links shown above for transparency. No URL shorteners.";
    modalLinks.appendChild(trustNote);
  }

  // ---- BULK / WHOLESALE LINKS ----
  if (product.bulkLinks && product.bulkLinks.length > 0) {
    const bulkHeading = document.createElement("div");
    bulkHeading.className =
      "text-sm font-bold text-orange-600 mt-4 mb-2 pt-3 border-t border-gray-100";
    bulkHeading.textContent = "Bulk / Wholesale";
    modalLinks.appendChild(bulkHeading);

    product.bulkLinks.forEach((link) => {
      const row = document.createElement("div");
      row.className =
        "mb-3 border border-orange-200 rounded-xl p-3 hover:border-orange-500 transition-colors bg-orange-50/30";

      const priceDisplay = link.price
        ? `${formatPrice(link.price)}/unit`
        : "Request price";
      const minOrderDisplay = link.min_order
        ? `<div class="text-xs text-gray-500 mb-2">Min order: ${link.min_order} units</div>`
        : "";

      row.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="font-semibold text-orange-800 text-sm">${link.platform}</span>
          <span class="text-base font-bold text-orange-600">${priceDisplay}</span>
        </div>
        ${minOrderDisplay}
        <a href="${link.url}" target="_blank" rel="noopener"
           class="block w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition text-center mb-2">
          Request Quote on ${link.platform}
        </a>
        <div class="flex items-center gap-2">
          <code class="flex-1 text-[10px] text-gray-500 bg-white rounded px-2 py-1.5 truncate" title="${link.url}">${getFullUrl(link.url)}</code>
          <button class="copy-link-btn flex-shrink-0 text-xs text-orange-600 hover:text-orange-800 font-semibold px-2 py-1" data-url="${link.url}">Copy</button>
        </div>
      `;
      modalLinks.appendChild(row);
    });
  }

  // ---- CONDITIONAL WHOLESALE REQUEST BUTTON ----
  if (product.bulkLinks && product.bulkLinks.length > 0) {
    bulkOrderBtn.style.display = "none";
  } else {
    bulkOrderBtn.style.display = "block";
    bulkOrderBtn.onclick = () => requestBulkOrder(product);
  }

  // ---- REPORT BROKEN LINK ----
  const reportBtn = document.createElement("button");
  reportBtn.className = "mt-2 text-xs text-red-500 hover:underline block";
  reportBtn.textContent = "Report broken link";
  reportBtn.onclick = () => reportBrokenLink(product);
  modalLinks.appendChild(reportBtn);

  // ---- TIKTOK LINK ----
  const tiktokBtn = document.createElement("button");
  tiktokBtn.className =
    "mt-2 text-sm text-[#000000] hover:text-[#FE2C55] flex items-center gap-2";
  tiktokBtn.innerHTML = '<i class="fab fa-tiktok"></i> Find this on TikTok';
  tiktokBtn.onclick = function (e) {
    e.stopPropagation();
    const searchTerm = product.title;
    const url = `https://www.tiktok.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(url, "_blank");
  };
  modalLinks.appendChild(tiktokBtn);

  // ---- COPY LINK HANDLERS ----
  modalLinks.querySelectorAll(".copy-link-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const url = this.getAttribute("data-url");
      navigator.clipboard
        .writeText(url)
        .then(() => {
          const original = this.textContent;
          this.textContent = "✓ Copied";
          this.classList.add("text-green-600");
          setTimeout(() => {
            this.textContent = original;
            this.classList.remove("text-green-600");
          }, 2000);
        })
        .catch(() => {
          alert("Could not copy. Please copy manually:\n" + url);
        });
    });
  });

  buyModal.classList.remove("hidden");
  buyModal.classList.add("flex");
}

// ---------- REPORT BROKEN LINK ----------
async function reportBrokenLink(product) {
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
    .then(() => alert("PayPal email copied to clipboard!"))
    .catch(() => {
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

// ---------- TYPEWRITER ----------
document.addEventListener("DOMContentLoaded", function () {
  const rawPhrases = [
    "4K Projector: Turn any wall into a cinema.",
    "Best seller: Neck massager for instant relief.",
    "Inflatable Sofa: Fits in a backpack – inflates in 10 seconds.",
    "3D Hologram Fan: Upload your own 3D content.",
    "Swim Earphones: Underwater audio – 32GB storage.",
    "Tire Inflator: Never get stranded with a flat tire.",
    "First Aid Kit: 379 pieces – be prepared for anything.",
    "Handheld Steamer: Wrinkle-free clothes anywhere.",
    "Galaxy Projector: Transform any room into a galaxy.",
    "Solar Fan Hat: Stay cool and protected under the sun.",
    "Discover the gear that actually works.",
    "We dig through reviews so you get the best ones.",
    "Just the stuff that makes life easier.",
    "Track debts & get trust scores with Pesapad – it's 100% free.",
  ];

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  shuffleArray(rawPhrases);

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterEl = document.getElementById("typewriter-text");
  if (!typewriterEl) return;

  function splitPhrase(phrase) {
    const colonIndex = phrase.indexOf(":");
    if (colonIndex === -1) return { label: "", rest: phrase };
    return {
      label: phrase.substring(0, colonIndex + 1),
      rest: phrase.substring(colonIndex + 1).trimStart(),
    };
  }

  function getCurrentText() {
    const phrase = rawPhrases[phraseIndex];
    const { label, rest } = splitPhrase(phrase);
    const typedRest = rest.slice(0, Math.max(0, charIndex));
    return label ? `<b>${label}</b> ${typedRest}` : typedRest;
  }

  function typeEffect() {
    const phrase = rawPhrases[phraseIndex];
    const { label, rest } = splitPhrase(phrase);

    if (!isDeleting) {
      if (charIndex <= rest.length) {
        typewriterEl.innerHTML = getCurrentText();
        charIndex++;
        if (charIndex > rest.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2800);
          return;
        }
        setTimeout(typeEffect, 40);
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % rawPhrases.length;
        charIndex = 0;
        typewriterEl.innerHTML = getCurrentText();
        setTimeout(typeEffect, 300);
        return;
      }
      typewriterEl.innerHTML = getCurrentText();
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

// ======== WELCOME POPUP ========
(function initWelcomePopup() {
  const popup = document.getElementById("welcome-popup");
  const slides = document.querySelectorAll(".welcome-slide");
  const dots = document.querySelectorAll(".welcome-dot");
  const progress = document.getElementById("welcome-progress");
  const closeBtn = document.getElementById("close-welcome-popup");

  let currentSlide = 0;
  let autoPlayInterval = null;
  const totalSlides = slides.length;
  const slideDuration = 5000;

  if (localStorage.getItem("wigachu_welcome_seen") === "true") return;

  setTimeout(() => {
    popup.classList.remove("hidden");
    popup.classList.add("flex");
    startAutoPlay();
  }, 1000);

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
    const progressPercent = ((currentSlide + 1) / totalSlides) * 100;
    progress.style.width = progressPercent + "%";
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }
  function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, slideDuration);
  }
  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }
  function closePopup() {
    stopAutoPlay();
    popup.classList.add("hidden");
    popup.classList.remove("flex");
    localStorage.setItem("wigachu_welcome_seen", "true");
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      stopAutoPlay();
      goToSlide(parseInt(this.dataset.index));
      startAutoPlay();
    });
  });

  closeBtn.addEventListener("click", closePopup);
  popup.addEventListener("click", function (e) {
    if (e.target === popup) closePopup();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !popup.classList.contains("hidden")) {
      closePopup();
    }
  });

  goToSlide(0);
})();