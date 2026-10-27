/* Wigachu front-end: product discovery, affiliate links, saving, sharing and wholesale requests. */
const SUPABASE_URL = "https://qzwpyvpprgpqzibzgzcz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_MpVET6kJ_-a7HrfBl5t2Iw_V_83g-wV";
const supabaseClient = window.supabase?.createClient
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;
const FALLBACK_IMAGE = "assets/product-placeholder.svg";
const FAVORITES_KEY = "wigachu_saved_products_v1";

const fallbackProducts = [
  {
    id: 1,
    title: "Solar Fan Hat (Breathable)",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S12993c177d104a9eb738a3d27258e16dF.jpg_960x960q75.jpg_.avif",
    description:
      "USB rechargeable solar fan hat with breathable fabric and sun protection for outdoor work, fishing, or hiking.",
    badge: "Beat the heat",
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
      "A rechargeable handheld fan with a cooling plate and a portable design for commutes, travel, and warm days.",
    badge: "Cooling pick",
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
    title: "HY300 Portable Projector",
    category: "Tech & Gadgets",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sc0eef3ea56974199bbf6f0c9690e86d7o.jpg_960x960q75.jpg_.avif",
    description:
      "A compact projector idea for movie nights, gaming, or presentations. Check the seller listing for the exact resolution and supported features.",
    badge: "Movie night",
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
      "A compact neck and shoulder massager to explore for at-home relaxation or travel. Check the seller's instructions and suitability before use.",
    badge: "Relaxation pick",
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

let products = [];
let activeCategory = "All";
let searchQuery = "";
let sortMode = "featured";
let favoritesOnly = false;
let favorites = readFavorites();
let currentProduct = null;
let heroSwiper = null;
let toastTimer = null;
let lastFocusedElement = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const productGrid = $("#product-grid");
const filterContainer = $("#filter-buttons");
const searchInput = $("#search-input");
const sortSelect = $("#sort-select");
const productCount = $("#product-count");
const favoritesCount = $("#favorites-count");
const favoritesFilter = $("#favorites-filter");
const emptyState = $("#empty-state");
const buyModal = $("#buy-modal");
const modalTitle = $("#modal-title");
const modalDesc = $("#modal-desc");
const modalPrice = $("#modal-price");
const modalLinks = $("#modal-links");
const modalImage = $("#modal-image");
const modalBadge = $("#modal-badge");
const bulkOrderBtn = $("#bulk-order-btn");
const toast = $("#site-toast");

function trackPixel(eventName, payload = {}, custom = false) {
  try {
    if (typeof window.fbq === "function")
      window.fbq(custom ? "trackCustom" : "track", eventName, payload);
  } catch (_) {
    /* Analytics should never block the shopping flow. */
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
}

function safeHttpUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(String(value), window.location.origin);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    return url.href;
  } catch (_) {
    return "";
  }
}

function readFavorites() {
  try {
    const parsed = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.map(String) : []);
  } catch (_) {
    return new Set();
  }
}

function writeFavorites() {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
  } catch (_) {
    /* Local storage may be disabled. */
  }
  updateFavoritesCount();
}

function updateFavoritesCount() {
  if (favoritesCount) favoritesCount.textContent = String(favorites.size);
  if (favoritesFilter)
    favoritesFilter.setAttribute("aria-pressed", String(favoritesOnly));
  const icon = favoritesFilter?.querySelector("i");
  if (icon)
    icon.className = favoritesOnly
      ? "fa-solid fa-heart"
      : "fa-regular fa-heart";
}

function showToast(message) {
  const messageEl = $("#toast-message");
  if (!toast || !messageEl) return;
  messageEl.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2800);
}

async function copyText(text, successMessage = "Link copied to clipboard.") {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) throw new Error("Copy was not available");
    }
    showToast(successMessage);
    return true;
  } catch (_) {
    showToast(
      "Copy was blocked by your browser. Please copy the link manually.",
    );
    return false;
  }
}

function getProductShareUrl(product) {
  const url = new URL(window.location.href);
  url.hash = "";
  url.searchParams.set("product", String(product.id));
  return url.href;
}

async function shareProduct(product) {
  if (!product) return;
  const url = getProductShareUrl(product);
  const shareData = {
    title: `${product.title} | Wigachu`,
    text: `Found this on Wigachu: ${product.title}`,
    url,
  };
  trackPixel(
    "ProductShared",
    { content_name: product.title, content_ids: [String(product.id)] },
    true,
  );
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  await copyText(url, "Product link copied. Send it to a friend!");
}

async function shareSite() {
  const shareData = {
    title: "Wigachu — Good finds. Less scrolling.",
    text: "Discover interesting gadgets and useful everyday finds on Wigachu.",
    url: "https://wigachu.github.io/",
  };
  trackPixel("SiteShared", {}, true);
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  await copyText(shareData.url, "Wigachu link copied. Share it with someone!");
}

function getLowestPrice(product) {
  const prices = (product.links || [])
    .map((link) => Number.parseFloat(link.price))
    .filter((price) => Number.isFinite(price) && price > 0);
  if (prices.length) return Math.min(...prices);
  const fallbackPrice = Number.parseFloat(product.price);
  return Number.isFinite(fallbackPrice) && fallbackPrice > 0
    ? fallbackPrice
    : null;
}
function getHighestPrice(product) {
  const prices = (product.links || [])
    .map((link) => Number.parseFloat(link.price))
    .filter((price) => Number.isFinite(price) && price > 0);
  return prices.length > 1 ? Math.max(...prices) : null;
}
function getMaxSavings(product) {
  const low = getLowestPrice(product),
    high = getHighestPrice(product);
  return low !== null && high !== null && high > low ? high - low : null;
}
function formatPrice(price, currency = "USD") {
  const value = Number.parseFloat(price);
  if (!Number.isFinite(value)) return "";
  try {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: /^[A-Z]{3}$/.test(currency || "") ? currency : "USD",
      maximumFractionDigits: 2,
    }).format(value);
  } catch (_) {
    return `$${value.toFixed(2)}`;
  }
}
function displayPrice(product) {
  const low = getLowestPrice(product);
  if (low === null) return "Price on seller site";
  return `From ${formatPrice(low, product.currency || "USD")}`;
}
function getProductImage(product) {
  return safeHttpUrl(product.image) || FALLBACK_IMAGE;
}

async function loadProducts() {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from("wigachu_products")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (error) throw error;
      if (Array.isArray(data) && data.length) {
        return data.map((p) => ({
          id: p.id,
          title: p.title || "Untitled find",
          category: p.category || "Other finds",
          image: p.image_url || "",
          description:
            p.description || "Open this find to review the seller details.",
          badge: p.badge || "",
          price: p.price,
          currency: p.currency || "USD",
          links: Array.isArray(p.links) ? p.links : [],
          bulkLinks: Array.isArray(p.bulk_links) ? p.bulk_links : [],
        }));
      }
    } catch (error) {
      console.error(
        "Could not load the Wigachu catalogue from Supabase; using fallback finds.",
        error,
      );
    }
  }
  return fallbackProducts;
}

function productPriceMarkup(product) {
  const low = getLowestPrice(product);
  if (low === null)
    return `<p class="product-price">Check seller price<small>Price may vary by seller</small></p>`;
  const savings = getMaxSavings(product);
  return `<p class="product-price">${escapeHtml(displayPrice(product))}<small>${savings ? `Listed options differ by up to ${escapeHtml(formatPrice(savings, product.currency || "USD"))}` : "Check final price with the seller"}</small></p>`;
}

function renderHeroSlides() {
  const wrapper = $("#hero-slides");
  if (!wrapper) return;
  const shortlist = [...products]
    .sort((a, b) => {
      const aFeatured = a.badge ? 1 : 0,
        bFeatured = b.badge ? 1 : 0;
      return bFeatured - aFeatured;
    })
    .slice(0, Math.min(6, products.length));
  wrapper.innerHTML = shortlist
    .map((product) => {
      const badge = product.badge || "Wigachu pick";
      return `<article class="swiper-slide spotlight-slide">
      <div class="spotlight-copy"><span class="spotlight-label"><i class="fa-solid fa-sparkles" aria-hidden="true"></i> ${escapeHtml(badge)}</span>
      <h3>${escapeHtml(product.title)}</h3><p>${escapeHtml(product.description || "An interesting find to explore.")}</p>
      <div class="spotlight-price">${escapeHtml(displayPrice(product))}</div>
      <button class="spotlight-cta" type="button" data-open-product="${escapeHtml(product.id)}">Explore this find <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></div>
      <div class="spotlight-image-wrap"><img src="${escapeHtml(getProductImage(product))}" alt="${escapeHtml(product.title)}" loading="lazy" decoding="async" /></div>
    </article>`;
    })
    .join("");
  wrapper.querySelectorAll("img").forEach((image) =>
    image.addEventListener("error", () => {
      image.src = FALLBACK_IMAGE;
      image.onerror = null;
    }),
  );
  if (heroSwiper) {
    heroSwiper.destroy(true, true);
    heroSwiper = null;
  }
  if (window.Swiper && shortlist.length > 1) {
    heroSwiper = new Swiper(".spotlight-swiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: shortlist.length > 2,
      speed: 500,
      navigation: {
        nextEl: ".spotlight-swiper .swiper-button-next",
        prevEl: ".spotlight-swiper .swiper-button-prev",
      },
      pagination: {
        el: ".spotlight-swiper .swiper-pagination",
        clickable: true,
      },
      breakpoints: { 900: { slidesPerView: 1, spaceBetween: 20 } },
      a11y: { enabled: true },
    });
  }
}

function renderFilters() {
  if (!filterContainer) return;
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ];
  filterContainer.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${activeCategory === category ? " active" : ""}`;
    button.textContent = category;
    button.setAttribute("aria-pressed", String(activeCategory === category));
    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderProducts();
    });
    filterContainer.appendChild(button);
  });
}

function renderProducts() {
  if (!productGrid) return;
  const query = searchQuery.toLowerCase();
  let filtered = products.filter((product) => {
    const categoryMatch =
      activeCategory === "All" || product.category === activeCategory;
    const queryMatch =
      !query ||
      [
        product.title,
        product.description,
        product.category,
        product.badge,
      ].some((field) =>
        String(field || "")
          .toLowerCase()
          .includes(query),
      );
    const favoriteMatch = !favoritesOnly || favorites.has(String(product.id));
    return categoryMatch && queryMatch && favoriteMatch;
  });
  if (sortMode === "price-low")
    filtered.sort(
      (a, b) =>
        (getLowestPrice(a) ?? Infinity) - (getLowestPrice(b) ?? Infinity),
    );
  else if (sortMode === "price-high")
    filtered.sort(
      (a, b) =>
        (getLowestPrice(b) ?? -Infinity) - (getLowestPrice(a) ?? -Infinity),
    );
  else if (sortMode === "name")
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  else filtered.sort((a, b) => products.indexOf(a) - products.indexOf(b));

  if (productCount)
    productCount.textContent = `${filtered.length} ${filtered.length === 1 ? "find" : "finds"}`;
  updateFavoritesCount();
  productGrid.innerHTML = filtered
    .map((product, index) => {
      const isSaved = favorites.has(String(product.id));
      return `<article class="product-card" style="animation-delay:${Math.min(index * 35, 280)}ms">
      <div class="product-image-wrap">
        <img class="product-image" src="${escapeHtml(getProductImage(product))}" alt="${escapeHtml(product.title)}" loading="lazy" decoding="async" />
        ${product.badge ? `<span class="product-badge">${escapeHtml(product.badge)}</span>` : ""}
        <div class="product-icon-actions">
          <button class="icon-action${isSaved ? " is-saved" : ""}" type="button" data-favorite-product="${escapeHtml(product.id)}" aria-label="${isSaved ? "Remove from saved finds" : "Save this find"}" aria-pressed="${isSaved}" title="${isSaved ? "Remove saved find" : "Save find"}"><i class="${isSaved ? "fa-solid" : "fa-regular"} fa-heart" aria-hidden="true"></i></button>
        </div>
      </div>
      <div class="product-card-content">
        <span class="product-category">${escapeHtml(product.category)}</span>
        <h3>${escapeHtml(product.title)}</h3>
        <p class="product-card-description">${escapeHtml(product.description || "Open to explore seller information and available options.")}</p>
        ${productPriceMarkup(product)}
        <div class="product-card-actions"><button class="compare-btn" type="button" data-open-product="${escapeHtml(product.id)}">Compare options <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button><button class="share-card-btn" type="button" data-share-product="${escapeHtml(product.id)}" aria-label="Share ${escapeHtml(product.title)}" title="Share this find"><i class="fa-solid fa-share-nodes" aria-hidden="true"></i></button></div>
      </div>
    </article>`;
    })
    .join("");
  productGrid.querySelectorAll(".product-image").forEach((image) =>
    image.addEventListener("error", () => {
      image.src = FALLBACK_IMAGE;
      image.onerror = null;
    }),
  );
  if (emptyState) emptyState.hidden = filtered.length > 0;
  productGrid.hidden = filtered.length === 0;
}

function renderRetailerRows(product) {
  const retailLinks = Array.isArray(product.links) ? product.links : [];
  const bulkLinks = Array.isArray(product.bulkLinks) ? product.bulkLinks : [];
  const safeRetailLinks = retailLinks
    .map((link) => ({ ...link, safeUrl: safeHttpUrl(link.url) }))
    .filter((link) => link.safeUrl);
  const safeBulkLinks = bulkLinks
    .map((link) => ({ ...link, safeUrl: safeHttpUrl(link.url) }))
    .filter((link) => link.safeUrl);
  let html = "";
  if (safeRetailLinks.length) {
    html += `<h3 class="modal-links-heading">Available seller options</h3>`;
    html += safeRetailLinks
      .map((link) => {
        const price = link.price
          ? formatPrice(link.price, link.currency || product.currency || "USD")
          : product.price
            ? formatPrice(product.price, product.currency || "USD")
            : "Check price";
        return `<div class="retailer-row">
        <div class="retailer-main"><strong>${escapeHtml(link.platform || "Retailer")}</strong><small>Opens the seller's product page · <button class="retailer-copy" type="button" data-copy-url="${escapeHtml(link.safeUrl)}"><i class="fa-regular fa-copy" aria-hidden="true"></i> Copy seller link</button></small></div>
        <span class="retailer-price">${escapeHtml(price)}</span>
        <a class="retailer-visit" href="${escapeHtml(link.safeUrl)}" target="_blank" rel="sponsored nofollow noopener noreferrer" data-retailer-click="${escapeHtml(link.platform || "Retailer")}">Visit seller <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
      </div>`;
      })
      .join("");
  }
  if (safeBulkLinks.length) {
    html += `<h3 class="modal-links-heading" style="margin-top:22px">Bulk and wholesale options</h3>`;
    html += safeBulkLinks
      .map(
        (link) =>
          `<div class="retailer-row"><div class="retailer-main"><strong>${escapeHtml(link.platform || "Wholesale seller")}</strong><small>${link.min_order ? `Minimum order: ${escapeHtml(link.min_order)} units` : "Ask the seller about minimum order quantity"}</small><small><button class="retailer-copy" type="button" data-copy-url="${escapeHtml(link.safeUrl)}"><i class="fa-regular fa-copy" aria-hidden="true"></i> Copy seller link</button></small></div><span class="retailer-price">${link.price ? `${escapeHtml(formatPrice(link.price, link.currency || product.currency || "USD"))}/unit` : "Request price"}</span><a class="retailer-visit" href="${escapeHtml(link.safeUrl)}" target="_blank" rel="sponsored nofollow noopener noreferrer" data-retailer-click="${escapeHtml(link.platform || "Wholesale seller")}">View option <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></div>`,
      )
      .join("");
  }
  if (!safeRetailLinks.length && !safeBulkLinks.length) {
    html = `<div class="modal-empty-links">There are no seller links saved for this find yet. You can still share it, or check back later as the catalogue is updated.</div>`;
  } else {
    html += `<p class="modal-note">Prices shown here are listings we have on file, not live price quotes. The retailer's checkout is the final source for the current price, delivery, taxes, and stock.</p>`;
  }
  html += `<button class="modal-report-link" type="button" data-report-product="${escapeHtml(product.id)}"><i class="fa-regular fa-flag" aria-hidden="true"></i> Report a broken seller link</button>`;
  return html;
}

function openBuyModal(productId) {
  const product = products.find(
    (item) => String(item.id) === String(productId),
  );
  if (!product || !buyModal) return;
  currentProduct = product;
  lastFocusedElement = document.activeElement;
  modalTitle.textContent = product.title;
  modalDesc.textContent =
    product.description || "Open the seller options below to review details.";
  modalImage.src = getProductImage(product);
  modalImage.alt = product.title;
  modalImage.onerror = () => {
    modalImage.src = FALLBACK_IMAGE;
    modalImage.onerror = null;
  };
  modalBadge.textContent = product.badge || "";
  modalBadge.hidden = !product.badge;
  const low = getLowestPrice(product),
    savings = getMaxSavings(product);
  modalPrice.innerHTML =
    low === null
      ? ""
      : `${escapeHtml(displayPrice(product))}${savings ? `<span class="modal-savings">Options differ by ${escapeHtml(formatPrice(savings, product.currency || "USD"))}</span>` : ""}`;
  modalLinks.innerHTML = renderRetailerRows(product);
  bulkOrderBtn.hidden = Boolean(product.bulkLinks?.length);
  bulkOrderBtn.disabled = false;
  bulkOrderBtn.innerHTML =
    '<i class="fa-solid fa-boxes-stacked" aria-hidden="true"></i> Ask about wholesale';
  buyModal.classList.add("open");
  buyModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("#close-modal")?.focus();
  trackPixel("ViewContent", {
    content_name: product.title,
    content_category: product.category,
    content_ids: [String(product.id)],
    content_type: "product",
  });
}

function closeBuyModal() {
  if (!buyModal) return;
  buyModal.classList.remove("open");
  buyModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function")
    lastFocusedElement.focus();
}

async function requestBulkOrder(product) {
  if (!product) return;
  if (!supabaseClient) {
    showToast("Wholesale requests are temporarily unavailable.");
    return;
  }
  bulkOrderBtn.disabled = true;
  bulkOrderBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Sending request…';
  try {
    const { error } = await supabaseClient.from("bulk_orders").insert([
      {
        product_title: product.title,
        product_image: product.image,
        product_description: product.description,
        product_price: product.price,
      },
    ]);
    if (error) throw error;
    trackPixel(
      "WholesaleRequest",
      { content_name: product.title, content_ids: [String(product.id)] },
      true,
    );
    showToast("Request received. Thanks for your interest!");
    closeBuyModal();
  } catch (error) {
    console.error("Wholesale request failed:", error);
    showToast("Could not send the request. Please try again later.");
  } finally {
    bulkOrderBtn.disabled = false;
    bulkOrderBtn.innerHTML =
      '<i class="fa-solid fa-boxes-stacked" aria-hidden="true"></i> Ask about wholesale';
  }
}

async function reportBrokenLink(product) {
  if (!supabaseClient) {
    showToast("Link reporting is temporarily unavailable.");
    return;
  }
  const firstLink = (product.links || []).find((link) => safeHttpUrl(link.url));
  try {
    const { error } = await supabaseClient.from("broken_link_reports").insert([
      {
        product_id: product.id,
        link_url: firstLink?.url || "",
        platform: firstLink?.platform || "Unknown",
      },
    ]);
    if (error) throw error;
    showToast("Thanks. We'll check that seller link.");
  } catch (error) {
    console.error("Could not report seller link:", error);
    showToast("Could not send the report. Please try again later.");
  }
}

function toggleFavorite(productId) {
  const id = String(productId);
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast("Removed from your saved finds.");
  } else {
    favorites.add(id);
    showToast("Saved for your next visit on this device.");
  }
  writeFavorites();
  renderProducts();
}

async function init() {
  const year = $("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
  products = await loadProducts();
  renderFilters();
  renderProducts();
  renderHeroSlides();
  updateFavoritesCount();

  // Product-card interactions are delegated so they remain active after filters/sorts.
  productGrid?.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-product]");
    const saveButton = event.target.closest("[data-favorite-product]");
    const shareButton = event.target.closest("[data-share-product]");
    if (openButton) openBuyModal(openButton.dataset.openProduct);
    if (saveButton) toggleFavorite(saveButton.dataset.favoriteProduct);
    if (shareButton) {
      const product = products.find(
        (item) => String(item.id) === String(shareButton.dataset.shareProduct),
      );
      shareProduct(product);
    }
  });

  $("#hero-slides")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-product]");
    if (button) openBuyModal(button.dataset.openProduct);
  });

  filterContainer?.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput?.focus();
    }
  });
  searchInput?.addEventListener("input", (event) => {
    searchQuery = event.target.value.trim();
    renderProducts();
  });
  sortSelect?.addEventListener("change", (event) => {
    sortMode = event.target.value;
    renderProducts();
  });
  favoritesFilter?.addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    updateFavoritesCount();
    renderProducts();
  });
  $("#clear-filters")?.addEventListener("click", () => {
    activeCategory = "All";
    searchQuery = "";
    sortMode = "featured";
    favoritesOnly = false;
    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "featured";
    renderFilters();
    updateFavoritesCount();
    renderProducts();
  });

  const menuButton = $("#mobile-menu-btn"),
    navigation = $("#site-navigation");
  menuButton?.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  });
  navigation?.querySelectorAll("a, button").forEach((link) =>
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "Open navigation");
    }),
  );

  $("#share-site-btn")?.addEventListener("click", shareSite);
  $("#share-about-btn")?.addEventListener("click", shareSite);
  $("#footer-share-btn")?.addEventListener("click", shareSite);
  const supportSection = $("#support-wigachu");
  supportSection?.addEventListener("click", async (event) => {
    const supportLink = event.target.closest("a[data-support-method]");
    if (supportLink) {
      trackPixel(
        "SupportOutboundClick",
        { support_method: supportLink.dataset.supportMethod },
        true,
      );
    }
    const copyButton = event.target.closest("[data-copy-text]");
    if (copyButton) {
      event.preventDefault();
      trackPixel(
        "SupportDetailCopied",
        { support_method: copyButton.dataset.supportCopy || "payment-detail" },
        true,
      );
      await copyText(
        copyButton.dataset.copyText || "",
        copyButton.dataset.copyMessage || "Copied.",
      );
    }
  });
  $("#close-modal")?.addEventListener("click", closeBuyModal);
  buyModal?.addEventListener("click", (event) => {
    if (event.target === buyModal) closeBuyModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && buyModal?.classList.contains("open"))
      closeBuyModal();
    if (
      event.key === "/" &&
      !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)
    ) {
      event.preventDefault();
      searchInput?.focus();
    }
  });

  modalLinks?.addEventListener("click", async (event) => {
    const copyButton = event.target.closest("[data-copy-url]");
    const reportButton = event.target.closest("[data-report-product]");
    const retailerLink = event.target.closest("[data-retailer-click]");
    if (copyButton)
      await copyText(copyButton.dataset.copyUrl, "Seller link copied.");
    if (reportButton && currentProduct) await reportBrokenLink(currentProduct);
    if (retailerLink && currentProduct) {
      trackPixel(
        "RetailerOutboundClick",
        {
          content_name: currentProduct.title,
          content_category: currentProduct.category,
          content_ids: [String(currentProduct.id)],
          retailer: retailerLink.dataset.retailerClick,
        },
        true,
      );
    }
  });
  bulkOrderBtn?.addEventListener("click", () =>
    requestBulkOrder(currentProduct),
  );
  $("#modal-share-btn")?.addEventListener("click", () =>
    shareProduct(currentProduct),
  );

  // A shared product link opens the same item for the recipient, rather than dumping them at the homepage.
  const productFromUrl = new URL(window.location.href).searchParams.get(
    "product",
  );
  if (productFromUrl) {
    const sharedProduct = products.find(
      (product) => String(product.id) === String(productFromUrl),
    );
    if (sharedProduct)
      window.setTimeout(() => openBuyModal(sharedProduct.id), 250);
  }
}

document.addEventListener("DOMContentLoaded", init);
