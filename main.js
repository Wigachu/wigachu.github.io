// Product catalogue – 40 products from the Gold list
const products = [
  // ---- Gear & Gadgets ----
  {
    id: 1,
    title: "PulsePro 30 – Deep Tissue Massage Gun",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=PulsePro+30",
    description: "High-torque 60W motor with deep penetration, quiet operation, and rapid vibration speed for muscle recovery.",
    badge: "Best seller",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 2,
    title: "NeoFlow Dynamic RGB Interior Light Kit",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=NeoFlow+RGB",
    description: "Dynamic RGB lighting for cars, gaming setups, or home – app‑controlled with music sync.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 3,
    title: "SonicDrop Dock – No-Pair Magic Speaker & Charging Stand",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=SonicDrop+Dock",
    description: "Speaker and charging stand in one – auto‑connects without pairing. Great for desk or bedside.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 4,
    title: "AirCore S1 – Smart Portable Tire Inflator",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=AirCore+S1",
    description: "Wireless + wired tire inflator with built‑in power bank. Digital pressure gauge and auto‑stop.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 5,
    title: "GlowSync™ HD – Smart LED TV Backlight Strip",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=GlowSync+HD",
    description: "Real‑time screen‑sync LED backlight for immersive TV and gaming experiences.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 6,
    title: "Loona Petbot",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Loona+Petbot",
    description: "Interactive robot pet with AI, facial recognition, and playful movements – perfect companion.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 7,
    title: "DriveSync 7 – Wireless CarPlay & Android Auto Screen",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=DriveSync+7",
    description: "7‑inch HD touchscreen with wireless Apple CarPlay & Android Auto – plug into cigarette lighter.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 8,
    title: "SnapPro 3-in-1 Creator Stick – Tripod, Selfie, Grip",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=SnapPro+3-in-1",
    description: "Versatile vlogging tool: handheld grip, selfie stick, and tripod – lightweight and portable.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 9,
    title: "MagGrip 360 Stand – Snap-On Grip, Stand & Mirror",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=MagGrip+360",
    description: "Magnetic phone grip, stand, and mirror all in one – sleek and functional.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 10,
    title: "Gen.2 Mini Retro Keychain Camera",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Retro+Keychain+Cam",
    description: "Ultra‑mini 28g camera with 1080p video, 8MP photos, and vintage filter – clips to keys.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 11,
    title: "Snanlen 360° Magnetic Suction Phone Mount",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Snanlen+Mount",
    description: "Strong magnetic suction mount for car dashboards – 360° rotation for perfect viewing angle.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 12,
    title: "PixelCharge 3-in-1 Bluetooth Speaker & Charging Station",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=PixelCharge",
    description: "Combines Bluetooth speaker, wireless charger, and power bank – all in one.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 13,
    title: "WavePro 230° Ultra-Light Motion-Sensing Headlamp",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=WavePro+Headlamp",
    description: "230° wide beam headlamp with motion sensor – ultra‑light for running, camping, or repairs.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 14,
    title: "RetroSnap 44 Digital Camera for Kids and Adults",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=RetroSnap+44",
    description: "Compact retro camera with vintage filters, 0.35 lb – perfect for creative vlogging.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 15,
    title: "DualView Dash Cam 1080P",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=DualView+Dash+Cam",
    description: "Front and interior 1080P recording – affordable peace of mind for every driver.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 16,
    title: "Mini Bluetooth Thermal Printer – Fun & Easy Wireless Printing",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Thermal+Printer",
    description: "Wireless thermal printer for stickers, to‑do lists, and pet photos – connects via Bluetooth.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 17,
    title: "PocketBeam Smart 180° Projector",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=PocketBeam",
    description: "Portable smart projector with 180° rotation – big screen entertainment anywhere.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 18,
    title: "LumiLink Mini Torch",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=LumiLink+Torch",
    description: "Pocket‑sized 1200‑lumen flashlight with dual carabiner – weighs just 70g.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 19,
    title: "MagVibe™ SoundPillar",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=MagVibe",
    description: "Compact magnetic Hi‑Fi speaker with powerful bass – 40mm driver and passive radiator.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 20,
    title: "TorchMaster X9 Multi-Mode Tactical Flashlight",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=TorchMaster+X9",
    description: "White laser LED with zoom – long‑distance and wide‑area illumination, multi‑mode.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 21,
    title: "SwiftVox Smart Glasses",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=SwiftVox+Glasses",
    description: "Audio‑enabled smart glasses for calls, music, and camera control – tap to interact.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 22,
    title: "Tiny Nostalgia Cam",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Tiny+Nostalgia+Cam",
    description: "World’s smallest keychain camera with 8 retro filters – capture vintage moments.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 23,
    title: "AquaVibe Swim-Proof Bone Conduction Headphones",
    category: "Gear & Gadgets",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=AquaVibe",
    description: "IPX8 waterproof bone conduction headphones – keep ears open for underwater music.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },

  // ---- Fun & Home ----
  {
    id: 24,
    title: "GlowCanvas Tee – Light-Activated Drawing T-Shirt",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=GlowCanvas+Tee",
    description: "Light‑activated drawing T‑shirt – glow in the dark and customizable with light pens.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 25,
    title: "Drift Dash Mini – Dynamic Drifting Car Model",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Drift+Dash+Mini",
    description: "Mini drifting car model with realistic action – fun desk toy or collectible.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 26,
    title: "Gen.2 BottleGlow™ RGB Touch Lamp",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=BottleGlow",
    description: "Touch‑sensitive RGB lamp in a bottle shape – creates ambient lighting for any room.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 27,
    title: "SheetSecure Lock - Keep Your Bed Tidy & Comfortable",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=SheetSecure+Lock",
    description: "Bed sheet fasteners that keep sheets snug and wrinkle‑free – easy to install.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 28,
    title: "BlinkBuddy 1:18 Pro Drift RC Car",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=BlinkBuddy+RC",
    description: "1:18 scale RC drift car with blinking headlights – high‑speed fun for all ages.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 29,
    title: "GlowBoard - LED Light-Up Writing & Drawing Board",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=GlowBoard",
    description: "LED writing board with vibrant colors – great for kids’ doodles, notes, or displays.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 30,
    title: "KaraParty Mini",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=KaraParty+Mini",
    description: "Palm‑sized karaoke speaker with dual speakers – portable party fun.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 31,
    title: "FlashSpin Mini Racer",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=FlashSpin+Racer",
    description: "Tiny car that spins inside a transparent ball – defies gravity with high speed.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 32,
    title: "Retro Drift Master RC",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Retro+Drift+Master",
    description: "Retro‑styled RC drift car with liquid metal finish – nostalgic and affordable.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 33,
    title: "CannonMist™ Aromatherapy Humidifier",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=CannonMist",
    description: "Mini cannon‑shaped humidifier with smoke ring mode – stylish and calming.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 34,
    title: "IllusioLight 3D Ambient Lamp",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=IllusioLight",
    description: "3D optical illusion lamp with triangular design – wall‑mountable or tabletop.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 35,
    title: "SpellGlow Floating Candles",
    category: "Fun & Home",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=SpellGlow+Candles",
    description: "Magic floating candles with wand remote – cast a spell to light them up.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },

  // ---- Shop Essentials ----
  {
    id: 36,
    title: "Heated Neck, Shoulder, and Back Massager",
    category: "Shop Essentials",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Heated+Massager",
    description: "Versatile heated massager for neck, shoulders, back – lightweight and portable.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 37,
    title: "ClearView Pro Ear Cleaner Kit",
    category: "Shop Essentials",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=Ear+Cleaner",
    description: "Smart ear cleaner with 8MP HD camera and illumination – safe, real‑time view.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 38,
    title: "JuicePro Max",
    category: "Shop Essentials",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=JuicePro+Max",
    description: "Portable juicer with 18,000 RPM motor and 12 blades – blends tough fruits easily.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },
  {
    id: 39,
    title: "StirMate Magnetic Auto Stirring Cup",
    category: "Shop Essentials",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=StirMate+Cup",
    description: "Magnetic self‑stirring cup – press button for high‑speed mixing, perfect for drinks.",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  },

  // ---- Trending (formerly Viral Vault) ----
  {
    id: 40,
    title: "CosmoGlow Astronaut Galaxy Projector",
    category: "Trending",
    image: "https://placehold.co/400x300/e2e8f0/64748b?text=CosmoGlow",
    description: "Astronaut‑shaped projector that beams vibrant nebula clouds and twinkling stars.",
    badge: "Trending",
    links: [
      { platform: "Amazon", url: "https://www.amazon.com/dp/EXAMPLE?tag=wigachu-20", type: "standard" }
    ]
  }
];

// Categories – only those with products, "All" first
const categories = [
  "All",
  "Gear & Gadgets",
  "Fun & Home",
  "Shop Essentials",
  "Trending"
];

// ---------- DO NOT EDIT BELOW (app logic) ----------
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
  buyModal.classList.add('flex');
}

closeModal.addEventListener('click', () => {
  buyModal.classList.add('hidden');
  buyModal.classList.remove('flex');
});   
window.addEventListener('click', (e) => {
  if (e.target === buyModal) buyModal.classList.add('hidden');
});

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderProducts();
});

mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
document.querySelectorAll('#mobile-menu a').forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));

yearSpan.textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderProducts();
});