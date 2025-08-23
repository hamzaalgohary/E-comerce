
        // Sample product data (in a real application, this would come from an API)
        const productsData = {
            "products": [
                {
                    "id": 1,
                    "name": "MacBook Pro 16\"",
                    "price": 2399,
                    "category": "laptops",
                    "brand": "apple",
                    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Powerful laptop for professionals",
                    "stock": 15
                },
                {
                    "id": 2,
                    "name": "iPhone 13 Pro",
                    "price": 999,
                    "category": "smartphones",
                    "brand": "apple",
                    "image": "https://images.unsplash.com/photo-1632661674596-618e45e56c53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Latest iPhone with advanced camera",
                    "stock": 20
                },
                {
                    "id": 3,
                    "name": "Samsung Galaxy S21",
                    "price": 799,
                    "category": "smartphones",
                    "brand": "samsung",
                    "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Powerful Android smartphone",
                    "stock": 18
                },
                {
                    "id": 4,
                    "name": "iPad Air",
                    "price": 599,
                    "category": "tablets",
                    "brand": "apple",
                    "image": "https://images.unsplash.com/photo-1592588355539-42da1f6f37ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Versatile tablet for work and play",
                    "stock": 12
                },
                {
                    "id": 5,
                    "name": "Dell XPS 13",
                    "price": 1299,
                    "category": "laptops",
                    "brand": "dell",
                    "image": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Sleek and powerful ultrabook",
                    "stock": 8
                },
                {
                    "id": 6,
                    "name": "Samsung Galaxy Tab S7",
                    "price": 649,
                    "category": "tablets",
                    "brand": "samsung",
                    "image": "https://images.unsplash.com/photo-162179148a5b8e7e15c7c671b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Premium Android tablet",
                    "stock": 10
                },
                {
                    "id": 7,
                    "name": "HP Spectre x360",
                    "price": 1399,
                    "category": "laptops",
                    "brand": "hp",
                    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Convertible laptop with premium design",
                    "stock": 7
                },
                {
                    "id": 8,
                    "name": "AirPods Pro",
                    "price": 249,
                    "category": "accessories",
                    "brand": "apple",
                    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Wireless noise cancelling earbuds",
                    "stock": 25
                },
                {
                    "id": 9,
                    "name": "Lenovo ThinkPad X1",
                    "price": 1499,
                    "category": "laptops",
                    "brand": "lenovo",
                    "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Business laptop with excellent keyboard",
                    "stock": 9
                },
                {
                    "id": 10,
                    "name": "Samsung Galaxy Watch",
                    "price": 299,
                    "category": "accessories",
                    "brand": "samsung",
                    "image": "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Smartwatch with health tracking",
                    "stock": 14
                },
                {
                    "id": 11,
                    "name": "Apple Watch Series 7",
                    "price": 399,
                    "category": "accessories",
                    "brand": "apple",
                    "image": "https://images.unsplash.com/photo-1633464899906-15f2f4fb3f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Advanced smartwatch with always-on display",
                    "stock": 16
                },
                {
                    "id": 12,
                    "name": "Sony WH-1000XM4 Headphones",
                    "price": 349,
                    "category": "accessories",
                    "brand": "sony",
                    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    "description": "Industry-leading noise canceling headphones",
                    "stock": 11
                }
            ]
        };

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

        // Initialize cart from localStorage or empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let currentCategory = 'all';
        let currentFilters = {
            price: 2000,
            brands: [],
            inStock: false
        };

        // Display products
        function displayProducts(products) {
            productsGrid.innerHTML = '';
            
            if (products.length === 0) {
                productsGrid.innerHTML = '<p class="empty-cart">No products found matching your criteria.</p>';
                return;
            }
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">$${product.price}</div>
                        <div class="product-category">${product.category} • ${product.brand}</div>
                        <div class="product-stock" style="color: ${product.stock > 0 ? 'var(--success)' : 'var(--danger)'}; margin-bottom: 10px;">
                            ${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                        </div>
                        <button class="add-to-cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled style="opacity: 0.5;"' : ''}>
                            ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </div>
                `;
                
                productsGrid.appendChild(productCard);
            });
            
            // Add event listeners to Add to Cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Add product to cart
        function addToCart(productId) {
            const product = productsData.products.find(p => p.id === productId);
            
            if (product) {
                // Check if product is already in cart
                const existingItem = cart.find(item => item.id === productId);
                
                if (existingItem) {
                    if (existingItem.quantity >= product.stock) {
                        alert(`Cannot add more. Only ${product.stock} available in stock.`);
                        return;
                    }
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity: 1
                    });
                }
                
                // Save to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Update cart count
                updateCartCount();
                
                // Show confirmation
                alert(`${product.name} added to cart!`);
            }
        }

        // Update cart count badge
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Display cart items
        function displayCartItems() {
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
                        <div class="item-price">$${item.price}</div>
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
            
            cartTotal.textContent = total.toFixed(2);
            
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
                item.quantity += change;
                
                if (item.quantity <= 0) {
                    cart = cart.filter(item => item.id !== productId);
                } else if (product && item.quantity > product.stock) {
                    item.quantity = product.stock;
                    alert(`Only ${product.stock} available in stock.`);
                }
                
                // Save to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Update display
                displayCartItems();
                updateCartCount();
            }
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update display
            displayCartItems();
            updateCartCount();
        }

        // Filter products
        function filterProducts() {
            const maxPrice = parseInt(priceRange.value);
            const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);
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
            
            displayProducts(filteredProducts);
        }

        // Search products
        function searchProducts() {
            const searchTerm = searchInput.value.toLowerCase();
            
            if (searchTerm) {
                const filteredProducts = productsData.products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) || 
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.category.toLowerCase().includes(searchTerm) ||
                    product.brand.toLowerCase().includes(searchTerm)
                );
                
                displayProducts(filteredProducts);
            } else {
                filterProducts();
            }
        }

        // Clear all filters
        function clearFilters() {
            priceRange.value = 2000;
            priceRangeValue.textContent = '2000';
            
            document.querySelectorAll('input[name="brand"]').forEach(checkbox => {
                checkbox.checked = false;
            });
            
            document.querySelector('input[name="stock"]').checked = false;
            
            sortSelect.value = 'default';
            
            currentFilters = {
                price: 2000,
                brands: [],
                inStock: false
            };
            
            filterProducts();
        }

        // Event Listeners
        cartIcon.addEventListener('click', () => {
            displayCartItems();
            cartModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });

        // Category filters
        categoryFilters.forEach(category => {
            category.addEventListener('click', () => {
                categoryFilters.forEach(c => c.classList.remove('active'));
                category.classList.add('active');
                currentCategory = category.getAttribute('data-category');
                filterProducts();
            });
        });

        // Price range display
        priceRange.addEventListener('input', () => {
            priceRangeValue.textContent = priceRange.value;
        });

        // Apply filters button
        applyFiltersBtn.addEventListener('click', filterProducts);

        // Clear filters button
        clearFiltersBtn.addEventListener('click', clearFilters);

        // Sort select
        sortSelect.addEventListener('change', filterProducts);

        // Search functionality
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });

        // Initialize
        displayProducts(productsData.products);
        updateCartCount();
  