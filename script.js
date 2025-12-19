// Sample product data
// const productsData = {
//     "products": [
//         {
//             "id": 1,
//             "name": "MacBook Pro 16\"",
//             "price": 2399,
//             "category": "laptops",
//             "brand": "apple",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=MacBook+Pro+16",
//             "description": "Powerful laptop for professionals with M2 Pro chip, 16GB RAM, and 512GB SSD. Perfect for video editing, software development, and demanding creative work.",
//             "stock": 15,
//             "features": ["M2 Pro Chip", "16GB RAM", "512GB SSD", "16-inch Display", "Touch Bar"],
//             "specifications": {
//                 "processor": "Apple M2 Pro",
//                 "memory": "16GB Unified Memory",
//                 "storage": "512GB SSD",
//                 "display": "16-inch Liquid Retina XDR",
//                 "battery": "Up to 22 hours",
//                 "weight": "4.7 lbs"
//             }
//         },
//         {
//             "id": 2,
//             "name": "iPhone 13 Pro",
//             "price": 999,
//             "category": "smartphones",
//             "brand": "apple",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=iPhone+13+Pro",
//             "description": "Latest iPhone with advanced camera system, A15 Bionic chip, and 5G connectivity. Features ProRAW photography and Cinematic mode.",
//             "stock": 20,
//             "features": ["A15 Bionic Chip", "Pro Camera System", "5G Connectivity", "ProRAW", "Cinematic Mode"],
//             "specifications": {
//                 "processor": "A15 Bionic",
//                 "storage": "128GB",
//                 "display": "6.1-inch Super Retina XDR",
//                 "camera": "Triple 12MP system",
//                 "battery": "Up to 22 hours video",
//                 "weight": "7.19 oz"
//             }
//         },
//         {
//             "id": 3,
//             "name": "Samsung Galaxy S21",
//             "price": 799,
//             "category": "smartphones",
//             "brand": "samsung",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=Galaxy+S21",
//             "description": "Powerful Android smartphone with advanced camera system, 5G connectivity, and premium design. Features 120Hz display and all-day battery.",
//             "stock": 18,
//             "features": ["Snapdragon 888", "120Hz Display", "Triple Camera", "5G Ready", "Wireless Charging"],
//             "specifications": {
//                 "processor": "Snapdragon 888",
//                 "memory": "8GB RAM",
//                 "storage": "128GB",
//                 "display": "6.2-inch Dynamic AMOLED",
//                 "camera": "Triple 12MP + 64MP + 12MP",
//                 "battery": "4000mAh"
//             }
//         },
//         {
//             "id": 4,
//             "name": "iPad Air",
//             "price": 599,
//             "category": "tablets",
//             "brand": "apple",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=iPad+Air",
//             "description": "Versatile tablet for work and play with M1 chip, 10.9-inch display, and Apple Pencil support. Perfect for creative professionals and students.",
//             "stock": 12,
//             "features": ["M1 Chip", "10.9-inch Display", "Apple Pencil Support", "Magic Keyboard Compatible", "All-day Battery"],
//             "specifications": {
//                 "processor": "Apple M1",
//                 "memory": "8GB RAM",
//                 "storage": "64GB",
//                 "display": "10.9-inch Liquid Retina",
//                 "camera": "12MP Wide + 12MP Ultra Wide",
//                 "weight": "1.02 lbs"
//             }
//         },
//         {
//             "id": 5,
//             "name": "Dell XPS 13",
//             "price": 1299,
//             "category": "laptops",
//             "brand": "dell",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=Dell+XPS+13",
//             "description": "Sleek and powerful ultrabook with Intel Core i7, 16GB RAM, and stunning InfinityEdge display. Ideal for business and productivity.",
//             "stock": 8,
//             "features": ["Intel Core i7", "16GB RAM", "512GB SSD", "InfinityEdge Display", "Premium Build"],
//             "specifications": {
//                 "processor": "Intel Core i7-1185G7",
//                 "memory": "16GB LPDDR4x",
//                 "storage": "512GB SSD",
//                 "display": "13.4-inch FHD+",
//                 "battery": "Up to 14 hours",
//                 "weight": "2.64 lbs"
//             }
//         },
//         {
//             "id": 6,
//             "name": "Samsung Galaxy Tab S7",
//             "price": 649,
//             "category": "tablets",
//             "brand": "samsung",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=Galaxy+Tab+S7",
//             "description": "Premium Android tablet with S Pen included, 120Hz display, and powerful performance for creativity and productivity.",
//             "stock": 10,
//             "features": ["Snapdragon 865+", "120Hz Display", "S Pen Included", "DeX Mode", "Quad Speakers"],
//             "specifications": {
//                 "processor": "Snapdragon 865+",
//                 "memory": "6GB RAM",
//                 "storage": "128GB",
//                 "display": "11-inch LTPS TFT",
//                 "camera": "13MP + 5MP",
//                 "battery": "8000mAh"
//             }
//         },
//         {
//             "id": 7,
//             "name": "HP Spectre x360",
//             "price": 1399,
//             "category": "laptops",
//             "brand": "hp",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=HP+Spectre+x360",
//             "description": "Convertible laptop with premium design, Intel Evo platform, and versatile 2-in-1 functionality. Perfect for creative professionals.",
//             "stock": 7,
//             "features": ["Intel Evo Platform", "2-in-1 Design", "OLED Display", "Bang & Olufsen Audio", "Premium Materials"],
//             "specifications": {
//                 "processor": "Intel Core i7-1165G7",
//                 "memory": "16GB RAM",
//                 "storage": "512GB SSD",
//                 "display": "13.5-inch OLED Touch",
//                 "battery": "Up to 17 hours",
//                 "weight": "3.01 lbs"
//             }
//         },
//         {
//             "id": 8,
//             "name": "AirPods Pro",
//             "price": 249,
//             "category": "accessories",
//             "brand": "apple",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=AirPods+Pro",
//             "description": "Wireless noise cancelling earbuds with spatial audio, adaptive transparency, and personalized listening experience.",
//             "stock": 25,
//             "features": ["Active Noise Cancellation", "Spatial Audio", "Adaptive Transparency", "Personalized Listening", "MagSafe Charging"],
//             "specifications": {
//                 "chip": "H2 Chip",
//                 "battery": "Up to 6 hours + 24 hours with case",
//                 "connectivity": "Bluetooth 5.3",
//                 "features": "IPX4 Water Resistant",
//                 "charging": "Lightning + MagSafe",
//                 "weight": "0.19 oz each"
//             }
//         },
//         {
//             "id": 9,
//             "name": "Lenovo ThinkPad X1",
//             "price": 1499,
//             "category": "laptops",
//             "brand": "lenovo",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=ThinkPad+X1",
//             "description": "Business laptop with excellent keyboard, military-grade durability, and enterprise security features. Built for professionals.",
//             "stock": 9,
//             "features": ["Intel vPro", "Military-Grade Durability", "ThinkShield Security", "Excellent Keyboard", "Lightweight Design"],
//             "specifications": {
//                 "processor": "Intel Core i7-1185G7",
//                 "memory": "16GB RAM",
//                 "storage": "512GB SSD",
//                 "display": "14-inch FHD",
//                 "battery": "Up to 15 hours",
//                 "weight": "2.8 lbs"
//             }
//         },
//         {
//             "id": 10,
//             "name": "Samsung Galaxy Watch",
//             "price": 299,
//             "category": "accessories",
//             "brand": "samsung",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=Galaxy+Watch",
//             "description": "Smartwatch with health tracking, fitness monitoring, and seamless connectivity with Android devices.",
//             "stock": 14,
//             "features": ["Health Monitoring", "GPS Tracking", "Water Resistant", "Long Battery", "Samsung Pay"],
//             "specifications": {
//                 "display": "1.4-inch Super AMOLED",
//                 "battery": "Up to 4 days",
//                 "connectivity": "Bluetooth 5.0, WiFi, LTE",
//                 "sensors": "Heart Rate, SpO2, Sleep",
//                 "compatibility": "Android 6.0+",
//                 "water_resistance": "5ATM + IP68"
//             }
//         },
//         {
//             "id": 11,
//             "name": "Apple Watch Series 7",
//             "price": 399,
//             "category": "accessories",
//             "brand": "apple",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=Apple+Watch+7",
//             "description": "Advanced smartwatch with always-on display, health monitoring, and seamless iPhone integration.",
//             "stock": 16,
//             "features": ["Always-On Display", "ECG App", "Blood Oxygen", "Fitness Tracking", "Siri Integration"],
//             "specifications": {
//                 "display": "45mm Always-On Retina",
//                 "battery": "Up to 18 hours",
//                 "connectivity": "WiFi, Bluetooth, Cellular",
//                 "sensors": "ECG, Blood Oxygen, Heart Rate",
//                 "compatibility": "iPhone 6s or later",
//                 "water_resistance": "50 meters"
//             }
//         },
//         {
//             "id": 12,
//             "name": "Sony WH-1000XM4 Headphones",
//             "price": 349,
//             "category": "accessories",
//             "brand": "sony",
//             "image": "https://via.placeholder.com/300x200/4a6fa5/ffffff?text=Sony+WH-1000XM4",
//             "description": "Industry-leading noise canceling headphones with premium sound quality and long battery life.",
//             "stock": 11,
//             "features": ["Industry-Leading NC", "30-Hour Battery", "Quick Charge", "Touch Controls", "Hi-Res Audio"],
//             "specifications": {
//                 "driver": "40mm Dome Type",
//                 "battery": "Up to 30 hours",
//                 "charging": "USB-C Quick Charge",
//                 "connectivity": "Bluetooth 5.0, NFC",
//                 "weight": "8.96 oz",
//                 "features": "Speak-to-Chat, Wearing Detection"
//             }
//         }
//     ]
// };

// Fetch product data from JSON file
let productsData = { products: [] };

async function loadProductsData() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        productsData = await response.json();
        return productsData;
    } catch (error) {
        console.error('Error loading products data:', error);
        // can we use default data as acopy backup
        return {
            "products": [
                //default data if it must 
            ]
        };
    }
}

//to download waitinng and download data initialize and edit
document.addEventListener('DOMContentLoaded', async function() {
    // first load data product 
    await loadProductsData();
    
    // then follow to ready
    initializeCookies();
    loadCartFromStorage();
    updateCartCount();
    applyUserPreferences();
    
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    
    if (currentPage === 'home.html' || currentPage === '' || currentPage === 'index.html') {
        initializeHomePage();
    } else if (currentPage === 'product-details.html') {
        initializeProductDetailsPage();
    } else if (currentPage === 'contact.html') {
        initializeContactPage();
    }
    
    addCommonEventListeners();
    showCookieConsent();
    
    if (currentPage === 'home.html' || currentPage === '' || currentPage === 'index.html') {
        displayRecentlyViewed();
    }
});

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const categoryFilters = document.querySelectorAll('.categories li');
const priceRange = document.getElementById('priceRange');
const priceRangeValue = document.getElementById('priceRangeValue');
const applyFiltersBtn = document.getElementById('applyFilters');
const clearFiltersBtn = document.getElementById('clearFilters');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const brandFilters = document.getElementById('brandFilters');

// Cookie management utilities
const CookieManager = {
    // Set a cookie
    set: function(name, value, days = 30) {
        // calculate expiration
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        // save cookie
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },

    // Get a cookie
    get: function(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    // Delete a cookie
    delete: function(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },

    // Check if cookies are enabled
    isEnabled: function() {
        try {
            document.cookie = "cookietest=1";
            const ret = document.cookie.indexOf("cookietest=") !== -1;
            document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
            return ret;
        } catch (e) {
            return false;
        }
    }
};

// User preferences management
const UserPreferences = {
    // Save user preferences
    save: function(preferences) {
        CookieManager.set('userPreferences', JSON.stringify(preferences), 365);
    },

    // Load user preferences
    load: function() {
        const prefs = CookieManager.get('userPreferences');
        if (prefs) {
            try {
                return JSON.parse(prefs);
            } catch (e) {
                console.error('Error parsing user preferences:', e);
                return this.getDefaults();
            }
        }
        return this.getDefaults();
    },

    // Get default preferences
    getDefaults: function() {
        return {
            theme: 'light',
            currency: 'USD',
            itemsPerPage: 12,
            defaultSort: 'default',
            showOutOfStock: true,
            newsletter: false,
            rememberCart: true,
            lastCategory: 'all',
            searchHistory: []
        };
    }
};

// Shopping session management
const SessionManager = {
    // Track user session
    startSession: function() {
        const sessionId = this.generateSessionId();
        const sessionStart = new Date().toISOString();
        
        CookieManager.set('sessionId', sessionId, 1); // 1 day session
        CookieManager.set('sessionStart', sessionStart, 1);
        
        this.updateLastVisit();
        this.trackPageViews();
    },

    // Generate unique session ID
    generateSessionId: function() {
        return 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    },

    // Update last visit timestamp
    updateLastVisit: function() {
        const now = new Date().toISOString();
        CookieManager.set('lastVisit', now, 365);
    },

    // Track page views
    trackPageViews: function() {
        const currentPage = window.location.pathname.split('/').pop() || 'home.html';
        let pageViews = CookieManager.get('pageViews');
        
        try {
            pageViews = pageViews ? JSON.parse(pageViews) : {};
        } catch (e) {
            pageViews = {};
        }
        
        pageViews[currentPage] = (pageViews[currentPage] || 0) + 1;
        pageViews.total = (pageViews.total || 0) + 1;
        pageViews.lastPage = currentPage;
        pageViews.lastVisit = new Date().toISOString();
        
        CookieManager.set('pageViews', JSON.stringify(pageViews), 365);
    },

    // Get session info
    getSessionInfo: function() {
        return {
            sessionId: CookieManager.get('sessionId'),
            sessionStart: CookieManager.get('sessionStart'),
            lastVisit: CookieManager.get('lastVisit'),
            pageViews: CookieManager.get('pageViews') ? JSON.parse(CookieManager.get('pageViews')) : {}
        };
    }
};

// Recently viewed products
const RecentlyViewed = {
    // Add product to recently viewed
    add: function(productId) {
        let recent = this.get();
        
        // Remove if already exists
        recent = recent.filter(id => id !== productId);
        
        // Add to beginning
        recent.unshift(productId);
        
        // Keep only last 10
        recent = recent.slice(0, 10);
        
        CookieManager.set('recentlyViewed', JSON.stringify(recent), 30);
    },

    // Get recently viewed products
    get: function() {
        const recent = CookieManager.get('recentlyViewed');
        if (recent) {
            try {
                return JSON.parse(recent);
            } catch (e) {
                return [];
            }
        }
        return [];
    },

    // Clear recently viewed
    clear: function() {
        CookieManager.delete('recentlyViewed');
    }
};

// Shopping cart with cookie backup
const CartManager = {
    // Save cart to cookies as backup
    saveToCache: function(cartData) {
        if (UserPreferences.load().rememberCart) {
            // Compress cart data for cookie storage
            const compressedCart = cartData.map(item => ({
                id: item.id,
                q: item.quantity // shortened property name
            }));
            CookieManager.set('cartBackup', JSON.stringify(compressedCart), 7); // 7 days
        }
    },

    // Load cart from cookies
    loadFromCache: function() {
        const cartBackup = CookieManager.get('cartBackup');
        if (cartBackup) {
            try {
                const compressedCart = JSON.parse(cartBackup);
                return compressedCart.map(item => {
                    const product = productsData.products.find(p => p.id === item.id);
                    if (product) {
                        return {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            quantity: item.q
                        };
                    }
                    return null;
                }).filter(item => item !== null);
            } catch (e) {
                console.error('Error loading cart from cache:', e);
                return [];
            }
        }
        return [];
    },

    // Clear cart cache
    clearCache: function() {
        CookieManager.delete('cartBackup');
    }
};

// Search history management
const SearchHistory = {
    // Add search term
    add: function(searchTerm) {
        if (!searchTerm || searchTerm.length < 2) return;
        
        let history = this.get();
        
        // Remove if already exists
        history = history.filter(term => term.toLowerCase() !== searchTerm.toLowerCase());
        
        // Add to beginning
        history.unshift(searchTerm);
        
        // Keep only last 10 searches
        history = history.slice(0, 10);
        
        // Update preferences
        const prefs = UserPreferences.load();
        prefs.searchHistory = history;
        UserPreferences.save(prefs);
    },

    // Get search history
    get: function() {
        const prefs = UserPreferences.load();
        return prefs.searchHistory || [];
    },

    // Clear search history
    clear: function() {
        const prefs = UserPreferences.load();
        prefs.searchHistory = [];
        UserPreferences.save(prefs);
    }
};

// Initialize cart from storage or cookies
let cart = [];
let currentCategory = 'all';
let currentFilters = {
    price: 2000,
    brands: [],
    inStock: false
};

// User preferences
let userPreferences = UserPreferences.load();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cookies and session
    initializeCookies();
    
    loadCartFromStorage();
    updateCartCount();
    
    // Load user preferences and apply them
    applyUserPreferences();
    
    // Check which page we're on and initialize accordingly
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    
    if (currentPage === 'home.html' || currentPage === '' || currentPage === 'index.html') {
        initializeHomePage();
    } else if (currentPage === 'product-details.html') {
        initializeProductDetailsPage();
    } else if (currentPage === 'contact.html') {
        initializeContactPage();
    }
    
    // Add common event listeners
    addCommonEventListeners();
    
    // Show cookie consent if needed
    showCookieConsent();
    
    // Display recently viewed products if on home page
    if (currentPage === 'home.html' || currentPage === '' || currentPage === 'index.html') {
        displayRecentlyViewed();
    }
});

// Initialize cookies and session management
function initializeCookies() {
    // Check if cookies are enabled
    if (!CookieManager.isEnabled()) {
        console.warn('Cookies are disabled. Some features may not work properly.');
        showCookieWarning();
        return;
    }
    
    // Start session tracking
    SessionManager.startSession();
    
    // Load user preferences
    userPreferences = UserPreferences.load();
    
    // Track returning visitor
    trackReturningVisitor();
}

// Show cookie consent banner
function showCookieConsent() {
    const cookieConsent = CookieManager.get('cookieConsent');
    
    if (!cookieConsent) {
        createCookieConsentBanner();
    }
}

// Create cookie consent banner
function createCookieConsentBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookieConsentBanner';
    banner.innerHTML = `
        <div style="
            position: fixed; 
            bottom: 0; 
            left: 0; 
            right: 0; 
            background: var(--dark); 
            color: white; 
            padding: 20px; 
            z-index: 10000;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        ">
            <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                <div style="flex: 1; min-width: 300px;">
                    <p style="margin: 0; font-size: 14px;">
                        🍪 We use cookies to enhance your shopping experience, remember your preferences, and provide personalized recommendations. 
                        <a href="#" style="color: var(--accent); text-decoration: underline;" onclick="showCookieDetails()">Learn more</a>
                    </p>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button onclick="acceptCookies()" style="
                        background: var(--accent); 
                        color: white; 
                        border: none; 
                        padding: 8px 16px; 
                        border-radius: 4px; 
                        cursor: pointer;
                        font-size: 14px;
                    ">Accept All</button>
                    <button onclick="acceptEssentialCookies()" style="
                        background: var(--gray); 
                        color: white; 
                        border: none; 
                        padding: 8px 16px; 
                        border-radius: 4px; 
                        cursor: pointer;
                        font-size: 14px;
                    ">Essential Only</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
}

// Accept all cookies
function acceptCookies() {
    CookieManager.set('cookieConsent', 'all', 365);
    CookieManager.set('cookiePreferences', JSON.stringify({
        essential: true,
        analytics: true,
        marketing: true,
        preferences: true
    }), 365);
    
    removeCookieConsentBanner();
    
    // Show thank you message
    showNotification('Cookie preferences saved! Thank you for helping us improve your experience.', 'success');
}

// Accept only essential cookies
function acceptEssentialCookies() {
    CookieManager.set('cookieConsent', 'essential', 365);
    CookieManager.set('cookiePreferences', JSON.stringify({
        essential: true,
        analytics: false,
        marketing: false,
        preferences: false
    }), 365);
    
    removeCookieConsentBanner();
    showNotification('Essential cookies only. You can change this anytime in settings.', 'info');
}

// Remove cookie consent banner
function removeCookieConsentBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.remove();
    }
}

// Show cookie details (expandable)
function showCookieDetails() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px; max-height: 80vh; overflow-y: auto;">
            <div class="modal-header">
                <h2>Cookie Information</h2>
                <button class="close-modal" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div style="padding: 20px 0;">
                <h3>What are cookies?</h3>
                <p>Cookies are small text files stored on your device that help us provide you with a better shopping experience.</p>
                
                <h3>Types of cookies we use:</h3>
                <div style="margin: 15px 0;">
                    <h4>🔒 Essential Cookies (Required)</h4>
                    <p>These cookies are necessary for the website to function properly. They enable basic features like shopping cart, security, and accessibility.</p>
                    
                    <h4>📊 Analytics Cookies</h4>
                    <p>Help us understand how you use our website so we can improve your experience. These are anonymous and don't identify you personally.</p>
                    
                    <h4>🎯 Marketing Cookies</h4>
                    <p>Used to show you relevant products and offers based on your interests and browsing history.</p>
                    
                    <h4>⚙️ Preference Cookies</h4>
                    <p>Remember your settings and preferences like language, currency, and display options.</p>
                </div>
                
                <h3>Your choices:</h3>
                <p>You can accept all cookies or choose only essential cookies. You can also manage your preferences anytime through your browser settings.</p>
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button onclick="acceptEssentialCookies(); this.closest('.modal').remove();" class="filter-btn" style="background: var(--gray);">Essential Only</button>
                <button onclick="acceptCookies(); this.closest('.modal').remove();" class="filter-btn">Accept All</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Show cookie warning if disabled
function showCookieWarning() {
    showNotification('Cookies are disabled. Some features like shopping cart persistence and preferences may not work properly.', 'warning');
}

// Apply user preferences from cookies
function applyUserPreferences() {
    // Apply category preference
    if (userPreferences.lastCategory && userPreferences.lastCategory !== 'all') {
        currentCategory = userPreferences.lastCategory;
        
        // Update active category in UI
        const categoryElements = document.querySelectorAll('.categories li');
        categoryElements.forEach(cat => {
            cat.classList.remove('active');
            if (cat.getAttribute('data-category') === currentCategory) {
                cat.classList.add('active');
            }
        });
    }
    
    // Apply sort preference
    if (sortSelect && userPreferences.defaultSort) {
        sortSelect.value = userPreferences.defaultSort;
    }
    
    // Apply other preferences as needed
    console.log('User preferences applied:', userPreferences);
}

// Track returning visitor
function trackReturningVisitor() {
    const lastVisit = CookieManager.get('lastVisit');
    const visitCount = parseInt(CookieManager.get('visitCount') || '0') + 1;
    
    CookieManager.set('visitCount', visitCount.toString(), 365);
    
    if (lastVisit && visitCount > 1) {
        // Welcome back returning visitor
        setTimeout(() => {
            showNotification(`Welcome back! This is visit #${visitCount}`, 'info');
        }, 2000);
        
        // Show recently viewed products for returning visitors
        if (visitCount > 2) {
            showRecentlyViewedNotification();
        }
    } else {
        // First time visitor
        setTimeout(() => {
            showNotification('Welcome to TechStore! 🎉 Explore our amazing products.', 'success');
        }, 3000);
    }
}

// Show recently viewed notification
function showRecentlyViewedNotification() {
    const recentlyViewed = RecentlyViewed.get();
    if (recentlyViewed.length > 0) {
        setTimeout(() => {
            showNotification(`You viewed ${recentlyViewed.length} products on your last visit. Check them out below!`, 'info');
        }, 4000);
    }
}

// Display recently viewed products section
function displayRecentlyViewed() {
    const recentlyViewed = RecentlyViewed.get();
    
    if (recentlyViewed.length === 0) return;
    
    const recentProducts = recentlyViewed
        .map(id => productsData.products.find(p => p.id === id))
        .filter(product => product !== undefined)
        .slice(0, 4);
    
    if (recentProducts.length === 0) return;
    
    // Create recently viewed section
    const recentSection = document.createElement('section');
    recentSection.className = 'recently-viewed';
    recentSection.innerHTML = `
        <div class="container">
            <h2 style="margin: 30px 0 20px 0; color: var(--primary); border-bottom: 2px solid var(--accent); padding-bottom: 10px;">
                🕒 Recently Viewed Products
            </h2>
            <div class="recently-viewed-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
                ${recentProducts.map(product => `
                    <div class="product-card" onclick="window.location.href='product-details.html?id=${product.id}'">
                        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                        <div class="product-info">
                            <h3 class="product-title">${product.name}</h3>
                            <div class="product-price">${product.price.toLocaleString()}</div>
                            <button class="add-to-cart" data-id="${product.id}" onclick="event.stopPropagation(); addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                                ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div style="text-align: center; margin: 20px 0;">
                <button onclick="clearRecentlyViewed()" class="filter-btn" style="background: var(--gray);">Clear History</button>
            </div>
        </div>
    `;
    
    // Insert before the main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.parentNode.insertBefore(recentSection, mainContent);
    }
}

// Clear recently viewed products
function clearRecentlyViewed() {
    RecentlyViewed.clear();
    const recentSection = document.querySelector('.recently-viewed');
    if (recentSection) {
        recentSection.remove();
    }
    showNotification('Recently viewed history cleared!', 'success');
}




// Initialize home page
function initializeHomePage() {
    if (productsGrid) {
        displayProducts(productsData.products);
        addHomePageEventListeners();
        
        // Display special offers
        displaySpecialOffers();
    }
}

// Display special offers with discounted prices
function displaySpecialOffers() {
    const specialOffersContainer = document.getElementById('specialOffersGrid');
    if (!specialOffersContainer) return;
    
    // Get 3 random products for special offers
    const specialProducts = [...productsData.products]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(product => ({
            ...product,
            // Add 20% discount for special offers
            originalPrice: product.price,
            price: Math.round(product.price * 0.8),
            discount: 20
        }));
    
    if (specialProducts.length === 0) return;
    

    specialOffersContainer.innerHTML = specialProducts.map(product => `
        <div class="product-card special-offer-card">
            <div class="discount-badge">-${product.discount}%</div>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="price-container">
                    <span class="original-price">$${product.originalPrice.toLocaleString()}</span>
                    <span class="special-price">$${product.price.toLocaleString()}</span>
                </div>
                <div class="product-category">${product.category} • ${product.brand}</div>
                <button class="add-to-cart" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Initialize product details page
function initializeProductDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (productId) {
        displayProductDetails(productId);
        displayRelatedProducts(productId);
    } else {
        // Redirect to home if no product ID
        window.location.href = 'home.html';
    }
}

// Initialize contact page
function initializeContactPage() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

// Add common event listeners
function addCommonEventListeners() {
    // Cart modal events
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            displayCartItems();
            cartModal.style.display = 'flex';
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    if (cartModal) {
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
    }
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
}

// Add home page specific event listeners
function addHomePageEventListeners() {
    // Category filters
    if (categoryFilters) {
        categoryFilters.forEach(category => {
            category.addEventListener('click', () => {
                categoryFilters.forEach(c => c.classList.remove('active'));
                category.classList.add('active');
                currentCategory = category.getAttribute('data-category');
                filterProducts();
            });
        });
    }
    
    // Price range display
    if (priceRange) {
        priceRange.addEventListener('input', () => {
            if (priceRangeValue) {
                priceRangeValue.textContent = priceRange.value;
            }
        });
    }
    
    // Filter buttons
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', filterProducts);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
    
    // Sort select
    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }
}

// Load cart from storage and cookies
function loadCartFromStorage() {
    // First try localStorage
    try {
        const savedCart = localStorage.getItem('TechStore_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            return;
        }
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
    }
    
    // Fallback to cookies
    try {
        cart = CartManager.loadFromCache();
    } catch (error) {
        console.error('Error loading cart from cookies:', error);
        cart = [];
    }
}

// Save cart to storage and cookies
function saveCartToStorage() {
    // Save to localStorage
    try {
        localStorage.setItem('TechStore_cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
    }
    
    // Backup to cookies
    try {
        CartManager.saveToCache(cart);
    } catch (error) {
        console.error('Error saving cart to cookies:', error);
    }
}

// Display products
function displayProducts(products) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    // if (products.length === 0) {
    //     productsGrid.innerHTML = '<p class="empty-cart">No products found matching your criteria.</p>';
    //     return;
    // }
    if (productsData.products.length === 0) {
        productsGrid.innerHTML = '<p class="empty-cart">Loading products...</p>';
        return;
    }
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price.toLocaleString()}</div>
                <div class="product-category">${product.category} • ${product.brand}</div>
                <div class="product-stock" style="color: ${product.stock > 0 ? 'var(--success)' : 'var(--danger)'};">
                    ${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </div>
                <button class="add-to-cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                    ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        `;
        
        // Add click event to product card for navigation
        productCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart')) {
                window.location.href = `product-details.html?id=${product.id}`;
            }
        });
        
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Display product details with cookie tracking
function displayProductDetails(productId) {
    const product = productsData.products.find(p => p.id === productId);
    const contentContainer = document.getElementById('productDetailsContent');
    const breadcrumb = document.getElementById('productBreadcrumb');
    
    if (!product) {
        if (contentContainer) {
            contentContainer.innerHTML = '<p class="empty-cart">Product not found.</p>';
        }
        return;
    }
    
    // Track product view
    RecentlyViewed.add(productId);
    
    // Track product page views for analytics
    trackProductView(productId);
    
    // Update breadcrumb
    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }
    
    // Update page title
    document.title = `${product.name} - TechStore`;
    
    if (contentContainer) {
        contentContainer.innerHTML = `
            <div class="product-details-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-details-image">
            </div>
            <div class="product-details-info">
                <h1>${product.name}</h1>
                <div class="product-details-price">${product.price.toLocaleString()}</div>
                <div class="product-details-category">${product.category} • ${product.brand}</div>
                <div class="product-details-description">${product.description}</div>
                
                ${product.features ? `
                <div class="product-features">
                    <h3>Key Features:</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                ${product.specifications ? `
                <div class="product-specifications">
                    <h3>Specifications:</h3>
                    <div class="specs-grid">
                        ${Object.entries(product.specifications).map(([key, value]) => `
                            <div class="spec-item">
                                <strong>${key.replace('_', ' ').toUpperCase()}:</strong> ${value}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div class="product-details-stock" style="color: ${product.stock > 0 ? 'var(--success)' : 'var(--danger)'};">
                    ${product.stock > 0 ? `✅ ${product.stock} in stock` : '❌ Out of stock'}
                </div>
                
                <div class="quantity-selector">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" min="1" max="${product.stock}" value="1" ${product.stock === 0 ? 'disabled' : ''}>
                </div>
                
                <div class="product-actions">
                    <button class="add-to-cart-details" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                        ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <a href="home.html" class="back-to-products">← Back to Products</a>
                </div>
                
                <div class="product-meta" style="margin-top: 20px; padding: 15px; background: var(--light); border-radius: 6px; font-size: 14px; color: var(--gray);">
                    📈 <span id="viewCount">Loading...</span> people viewed this product recently
                </div>
            </div>
        `;
        
        // Add event listener to the add to cart button
        const addToCartBtn = contentContainer.querySelector('.add-to-cart-details');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                const quantity = parseInt(document.getElementById('quantity').value) || 1;
                addToCart(productId, quantity);
            });
        }
        
        // Update view count
        updateProductViewCount(productId);
    }
}

// Track product views
function trackProductView(productId) {
    if (getCookieConsent().analytics) {
        let productViews = CookieManager.get('productViews');
        
        try {
            productViews = productViews ? JSON.parse(productViews) : {};
        } catch (e) {
            productViews = {};
        }
        
        productViews[productId] = (productViews[productId] || 0) + 1;
        productViews.lastViewed = new Date().toISOString();
        
        CookieManager.set('productViews', JSON.stringify(productViews), 30);
    }
}

// Update product view count display
function updateProductViewCount(productId) {
    const viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
        // Simulate view count (in real app, this would come from server)
        const baseViews = productId * 7 + 15; // Simple simulation
        const sessionViews = getSessionProductViews(productId);
        const totalViews = baseViews + sessionViews;
        
        viewCountElement.textContent = totalViews;
    }
}

// Get session product views
function getSessionProductViews(productId) {
    try {
        const productViews = CookieManager.get('productViews');
        if (productViews) {
            const views = JSON.parse(productViews);
            return views[productId] || 0;
        }
    } catch (e) {
        // Handle error silently
    }
    return Math.floor(Math.random() * 10) + 5; // Fallback random number
}

// Get cookie consent preferences
function getCookieConsent() {
    const consent = CookieManager.get('cookiePreferences');
    if (consent) {
        try {
            return JSON.parse(consent);
        } catch (e) {
            // Handle error
        }
    }
    
    return {
        essential: true,
        analytics: false,
        marketing: false,
        preferences: false
    };
}
        contentContainer.innerHTML = '<p class="empty-cart">Product not found.</p>';
        
        // return;
    
    
    // Update breadcrumb
    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }
    
    // Update page title
    document.title = `${product.name} - TechStore`;
    
    if (contentContainer) {
        contentContainer.innerHTML = `
            <div class="product-details-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-details-image">
            </div>
            <div class="product-details-info">
                <h1>${product.name}</h1>
                <div class="product-details-price">${product.price.toLocaleString()}</div>
                <div class="product-details-category">${product.category} • ${product.brand}</div>
                <div class="product-details-description">${product.description}</div>
                
                ${product.features ? `
                <div class="product-features">
                    <h3>Key Features:</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                ${product.specifications ? `
                <div class="product-specifications">
                    <h3>Specifications:</h3>
                    <div class="specs-grid">
                        ${Object.entries(product.specifications).map(([key, value]) => `
                            <div class="spec-item">
                                <strong>${key.replace('_', ' ').toUpperCase()}:</strong> ${value}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div class="product-details-stock" style="color: ${product.stock > 0 ? 'var(--success)' : 'var(--danger)'};">
                    ${product.stock > 0 ? `✅ ${product.stock} in stock` : '❌ Out of stock'}
                </div>
                
                <div class="quantity-selector">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" min="1" max="${product.stock}" value="1" ${product.stock === 0 ? 'disabled' : ''}>
                </div>
                
                <div class="product-actions">
                    <button class="add-to-cart-details" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                        ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <a href="home.html" class="back-to-products">← Back to Products</a>
                </div>
            </div>
        `;
        
        // Add event listener to the add to cart button
        const addToCartBtn = contentContainer.querySelector('.add-to-cart-details');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                const quantity = parseInt(document.getElementById('quantity').value) || 1;
                addToCart(productId, quantity);
            });
        }
    }

// Display related products
function displayRelatedProducts(currentProductId) {
    const currentProduct = productsData.products.find(p => p.id === currentProductId);
    const relatedContainer = document.getElementById('relatedProductsGrid');
    
    if (!currentProduct || !relatedContainer) return;
    
    // Get products from same category, excluding current product
    const relatedProducts = productsData.products
        .filter(p => p.category === currentProduct.category && p.id !== currentProductId)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) {
        relatedContainer.innerHTML = '<p class="empty-cart">No related products found.</p>';
        return;
    }
    
    relatedContainer.innerHTML = '';
    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price.toLocaleString()}</div>
                <div class="product-category">${product.category} • ${product.brand}</div>
                <button class="add-to-cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                    ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        `;
        
        // Add click event for navigation
        productCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart')) {
                window.location.href = `product-details.html?id=${product.id}`;
            }
        });
        
        relatedContainer.appendChild(productCard);
    });
    
    // Add event listeners to Add to Cart buttons
    relatedContainer.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Add product to cart
function addToCart(productId, quantity = 1) {
    const product = productsData.products.find(p => p.id === productId);
    
    if (!product) {
        alert('Product not found!');
        return;
    }
    
    if (product.stock === 0) {
        alert('Sorry, this product is out of stock.');
        return;
    }
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stock) {
            alert(`Cannot add more. Only ${product.stock} available in stock.`);
            return;
        }
        existingItem.quantity = newQuantity;
    } else {
        if (quantity > product.stock) {
            alert(`Cannot add ${quantity} items. Only ${product.stock} available in stock.`);
            return;
        }
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // Save to storage
    saveCartToStorage();
    
    // Update cart count
    updateCartCount();
    
    // Show confirmation
    alert(`${product.name} added to cart!`);
}

// Update cart count badge
function updateCartCount() {
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Display cart items
function displayCartItems() {
    if (!cartItems || !cartTotal) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price.toLocaleString()} each</div>
                <div class="item-total">Total: ${itemTotal.toLocaleString()}</div>
            </div>
            <div class="item-actions">
                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.id}">+</button>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toLocaleString();
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            updateItemQuantity(id, 1);
        });
    });
    
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            updateItemQuantity(id, -1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

// Update item quantity in cart
function updateItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    const product = productsData.products.find(p => p.id === productId);
    
    if (item) {
        const newQuantity = item.quantity + change;
        
        if (newQuantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        } else if (product && newQuantity > product.stock) {
            alert(`Only ${product.stock} available in stock.`);
            return;
        } else {
            item.quantity = newQuantity;
        }
        
        // Save to storage
        saveCartToStorage();
        
        // Update display
        displayCartItems();
        updateCartCount();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    // Save to storage
    saveCartToStorage();
    
    // Update display
    displayCartItems();
    updateCartCount();
}

// Filter products (for home page)
function filterProducts() {
    if (!productsGrid) return;
    
    const maxPrice = priceRange ? parseInt(priceRange.value) : 2000;
    const selectedBrands = brandFilters ? 
        Array.from(brandFilters.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value) : [];
    const inStockOnly = document.querySelector('input[name="stock"]:checked') !== null;
    
    // Update current filters
    currentFilters.price = maxPrice;
    currentFilters.brands = selectedBrands;
    currentFilters.inStock = inStockOnly;
    
    let filteredProducts = productsData.products;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    // Filter by price
    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
    
    // Filter by brand
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Filter by stock
    if (inStockOnly) {
        filteredProducts = filteredProducts.filter(product => product.stock > 0);
    }
    
    // Sort products
    if (sortSelect) {
        const sortOption = sortSelect.value;
        switch(sortOption) {
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }
    }
    
    displayProducts(filteredProducts);
}

// Search products with history tracking
function searchProducts() {
    if (!searchInput || !productsGrid) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm) {
        // Add to search history
        SearchHistory.add(searchTerm);
        
        // Track search for analytics
        trackSearch(searchTerm);
        
        const filteredProducts = productsData.products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            (product.features && product.features.some(feature => 
                feature.toLowerCase().includes(searchTerm)
            ))
        );
        
        displayProducts(filteredProducts);
        
        // Show search results message
        showSearchResults(searchTerm, filteredProducts.length);
    } else {
        if (typeof filterProducts === 'function') {
            filterProducts();
        } else {
            displayProducts(productsData.products);
        }
    }
}

// Track search queries
function trackSearch(searchTerm) {
    if (getCookieConsent().analytics) {
        let searchData = CookieManager.get('searchAnalytics');
        
        try {
            searchData = searchData ? JSON.parse(searchData) : { queries: {}, total: 0 };
        } catch (e) {
            searchData = { queries: {}, total: 0 };
        }
        
        searchData.queries[searchTerm] = (searchData.queries[searchTerm] || 0) + 1;
        searchData.total += 1;
        searchData.lastSearch = new Date().toISOString();
        
        CookieManager.set('searchAnalytics', JSON.stringify(searchData), 30);
    }
}

// Show search results notification
function showSearchResults(searchTerm, resultCount) {
    const message = resultCount > 0 
        ? `Found ${resultCount} products for "${searchTerm}"`
        : `No products found for "${searchTerm}". Try a different search term.`;
    
    showNotification(message, resultCount > 0 ? 'success' : 'warning');
}

// Enhanced filter products with preference saving
function filterProducts() {
    if (!productsGrid) return;
    
    const maxPrice = priceRange ? parseInt(priceRange.value) : 2000;
    const selectedBrands = brandFilters ? 
        Array.from(brandFilters.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value) : [];
    const inStockOnly = document.querySelector('input[name="stock"]:checked') !== null;
    
    // Update current filters
    currentFilters.price = maxPrice;
    currentFilters.brands = selectedBrands;
    currentFilters.inStock = inStockOnly;
    
    // Save user preferences
    if (getCookieConsent().preferences) {
        userPreferences.lastCategory = currentCategory;
        userPreferences.defaultSort = sortSelect ? sortSelect.value : 'default';
        UserPreferences.save(userPreferences);
    }
    
    let filteredProducts = productsData.products;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    // Filter by price
    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
    
    // Filter by brand
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Filter by stock
    if (inStockOnly) {
        filteredProducts = filteredProducts.filter(product => product.stock > 0);
    }
    
    // Sort products
    if (sortSelect) {
        const sortOption = sortSelect.value;
        switch(sortOption) {
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }
    }
    
    displayProducts(filteredProducts);
}

// Enhanced contact form with cookie preferences
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        newsletter: formData.get('newsletter') === 'on'
    };
    
    // Simple form validation
    if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Save contact preferences
    if (getCookieConsent().preferences) {
        const contactPrefs = {
            name: contactData.name,
            email: contactData.email,
            phone: contactData.phone,
            newsletter: contactData.newsletter,
            lastContact: new Date().toISOString()
        };
        
        CookieManager.set('contactPreferences', JSON.stringify(contactPrefs), 365);
        
        // Update user preferences for newsletter
        userPreferences.newsletter = contactData.newsletter;
        UserPreferences.save(userPreferences);
    }
    
    // Track form submission
    trackFormSubmission('contact');
    
    // Simulate form submission
    showNotification('Thank you for your message! We will get back to you within 24 hours.', 'success');
    
    // Reset form
    e.target.reset();
}

// Track form submissions
function trackFormSubmission(formType) {
    if (getCookieConsent().analytics) {
        let formData = CookieManager.get('formSubmissions');
        
        try {
            formData = formData ? JSON.parse(formData) : {};
        } catch (e) {
            formData = {};
        }
        
        formData[formType] = (formData[formType] || 0) + 1;
        formData.lastSubmission = new Date().toISOString();
        
        CookieManager.set('formSubmissions', JSON.stringify(formData), 90);
    }
}

// Show notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const bgColors = {
        success: 'var(--success)',
        error: 'var(--danger)',
        warning: 'var(--warning)',
        info: 'var(--accent)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColors[type] || bgColors.info};
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        max-width: 350px;
        font-size: 14px;
        line-height: 1.4;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: none; 
                border: none; 
                color: white; 
                font-size: 16px; 
                cursor: pointer; 
                margin-left: 10px;
                opacity: 0.7;
            ">&times;</button>
        </div>
    `;
    
    // Add animation styles if not already added
    if (!document.querySelector('#notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Enhanced add to cart with analytics
function addToCart(productId, quantity = 1) {
    const product = productsData.products.find(p => p.id === productId);
    
    // if (!product) {
    //     showNotification('Product not found!', 'error');
    //     return;
    // }

    if (!product) {
        console.error('Product not found! ID:', productId);
        showNotification('Product not found!', 'error');
        return;
    }
    
    if (product.stock === 0) {
        showNotification('Sorry, this product is out of stock.', 'warning');
        return;
    }
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stock) {
            showNotification(`Cannot add more. Only ${product.stock} available in stock.`, 'warning');
            return;
        }
        existingItem.quantity = newQuantity;
    } else {
        if (quantity > product.stock) {
            showNotification(`Cannot add ${quantity} items. Only ${product.stock} available in stock.`, 'warning');
            return;
        }
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // Save to storage and cookies
    saveCartToStorage();
    
    // Update cart count
    updateCartCount();
    
    // Track add to cart event
    trackAddToCart(productId, quantity, product.price);
    
    // Show success notification
    showNotification(`${product.name} added to cart! 🛒`, 'success');
}

// Track add to cart events
function trackAddToCart(productId, quantity, price) {
    if (getCookieConsent().analytics) {
        let cartData = CookieManager.get('cartAnalytics');
        
        try {
            cartData = cartData ? JSON.parse(cartData) : { 
                items: {}, 
                totalValue: 0, 
                totalItems: 0 
            };
        } catch (e) {
            cartData = { items: {}, totalValue: 0, totalItems: 0 };
        }
        
        cartData.items[productId] = (cartData.items[productId] || 0) + quantity;
        cartData.totalValue += (price * quantity);
        cartData.totalItems += quantity;
        cartData.lastAddedItem = { productId, quantity, price, timestamp: new Date().toISOString() };
        
        CookieManager.set('cartAnalytics', JSON.stringify(cartData), 30);
    }
}

// Get user analytics data (for admin purposes)
function getUserAnalytics() {
    if (!getCookieConsent().analytics) {
        return { message: 'Analytics not consented' };
    }
    
    return {
        session: SessionManager.getSessionInfo(),
        pageViews: CookieManager.get('pageViews') ? JSON.parse(CookieManager.get('pageViews')) : {},
        searchAnalytics: CookieManager.get('searchAnalytics') ? JSON.parse(CookieManager.get('searchAnalytics')) : {},
        cartAnalytics: CookieManager.get('cartAnalytics') ? JSON.parse(CookieManager.get('cartAnalytics')) : {},
        productViews: CookieManager.get('productViews') ? JSON.parse(CookieManager.get('productViews')) : {},
        visitCount: CookieManager.get('visitCount') || '0',
        preferences: userPreferences
    };
}

// Admin function to clear all cookies (for testing)
function clearAllCookies() {
    const cookies = ['cookieConsent', 'cookiePreferences', 'userPreferences', 'cartBackup', 
                'recentlyViewed', 'sessionId', 'sessionStart', 'lastVisit', 'pageViews',
                'visitCount', 'searchAnalytics', 'cartAnalytics', 'productViews', 
                'contactPreferences', 'formSubmissions'];
    
    cookies.forEach(cookie => CookieManager.delete(cookie));
    
    // Clear localStorage as well
    try {
        localStorage.clear();
    } catch (e) {
        console.error('Error clearing localStorage:', e);
    }
    
    showNotification('All cookies and data cleared! Refresh the page to see changes.', 'success');
}

// Export analytics data (for admin/development)
function exportAnalytics() {
    const analytics = getUserAnalytics();
    const dataStr = JSON.stringify(analytics, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `TechStore-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    showNotification('Analytics data exported successfully!', 'success');
}

// Clear all filters
function clearFilters() {
    if (priceRange && priceRangeValue) {
        priceRange.value = 2000;
        priceRangeValue.textContent = '2000';
    }
    
    if (brandFilters) {
        brandFilters.querySelectorAll('input[name="brand"]').forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    
    const stockFilter = document.querySelector('input[name="stock"]');
    if (stockFilter) {
        stockFilter.checked = false;
    }
    
    if (sortSelect) {
        sortSelect.value = 'default';
    }
    
    if (searchInput) {
        searchInput.value = '';
    }
    
    currentFilters = {
        price: 2000,
        brands: [],
        inStock: false
    };
    
    // Reset category to all
    if (categoryFilters) {
        categoryFilters.forEach(c => c.classList.remove('active'));
        const allCategory = document.querySelector('[data-category="all"]');
        if (allCategory) {
            allCategory.classList.add('active');
        }
    }
    currentCategory = 'all';
    
    filterProducts();
}


// Handle contact form submission
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        newsletter: formData.get('newsletter') === 'on'
    };
    
    // Simple form validation
    if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We will get back to you within 24 hours.');
    
    // Reset form
    e.target.reset();

}



// Countdown Timer Implementation
function startCountdownTimer() {
    console.log('Countdown starts...');

    
    // element
    const daysElement = document.getElementById('countdown-days');
    const hoursElement = document.getElementById('countdown-hours');
    const minutesElement = document.getElementById('countdown-minutes');
    const secondsElement = document.getElementById('countdown-seconds');
    
    // Check if items exist
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        console.error('No countdown items found');
        return;
    }
    
console.log('All countdown items found');

    // End time (3 days from now)
    let endTime;
    const savedTime = localStorage.getItem('countdownEndTime');
    
    if (savedTime) {
        endTime = parseInt(savedTime);
        //If time runs out, we reset it.
        if (endTime < Date.now()) {
            endTime = Date.now() + (3 * 24 * 60 * 60 * 1000); // 3 days
            localStorage.setItem('countdownEndTime', endTime.toString());
        }
    } else {
        endTime = Date.now() + (3 * 24 * 60 * 60 * 1000); // 3 days
        localStorage.setItem('countdownEndTime', endTime.toString());
    }
    
    console.log('End time:', new Date(endTime).toLocaleString());
    
    function updateCountdown() {
        const now = Date.now();
        const timeLeft = endTime - now;
        
        if (timeLeft <= 0) {
            //Time is up
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            
// Show the expiration message            
const offersSection = document.getElementById('specialOffers');
            if (offersSection) {
                offersSection.innerHTML = `
                    <div class="container">
                    <h2>⏰ Offers Ended!</h2>
                        <p>Stay tuned for our upcoming offers coming soon!</p>
                    </div>
                `;
            }
            return;
        }
        
        // calculate days - hours - minutes - seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // update offer
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        console.log('Countdown:', `${days} ${hours} ${minutes} ${seconds}`);
    }
    
// Start immediately and update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    console.log('The countdown has started successfully.');
}

// Modify the initializeHomePage function to call the countdown
function initializeHomePage() {
    if (productsGrid) {
        displayProducts(productsData.products);
        addHomePageEventListeners();
        
// Start countdown after page load
        console.log('Home page initialization - countdown begins');
        startCountdownTimer();
    }
}

// call countdown when load page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
// Start the countdown after a slight delay to ensure all items are loaded    setTimeout(() => {
        console.log('..Starting countdown after delay ');
        startCountdownTimer();
    }, 1000);

// else can we call it live to test
window.addEventListener('load', function() {
    console.log('done loading full page');
    startCountdownTimer();
});





