// База данных товара
const products = {
    jackets: [
        { id: 1, name: 'Клубничное поле', price: 8900, img: 'images/klyb.jpg', desc: 'Состав: 70% свежей клубники, собранной ночью у трассы, 20% листвы собранной после уборки листопада. Свежьий араматьний куртка.', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 2, name: 'Райское счастье', price: 7500, img: 'images/pivo.jpg', desc: 'Состав: 85% крепкой Охоты, 15% китайского дяди, который точно знает, как жить. НЕ РЕКОМЕНДУЕТСЯ НАДЕВАТЬ НА ПУСТОЙ ЖЕЛУДОК И НА ВАЖНЫЕ ВСТРЕЧИ!!!', sizes: ['M', 'L', 'XL', 'XXL'] },
        { id: 3, name: 'Сырная корочка', price: 12400, img: 'images/piza.jpg', desc: 'Состав: 75% расплавленного сыра, 20% пепперони, 5% теста и жизненных ошибок. Скажи диете идти в отпуск.', sizes: ['S', 'M', 'L'] },
        { id: 4, name: 'Малиновая луга', price: 9900, img: 'images/malin.jpg', desc: 'Состав: 80% спелой малины, украденной с дачи у соседей, 15% листвы, сорванной с крапивы, 5% безумия. Не советуется надеваь в лес, если нет желания быть ужином медведей.', sizes: ['S', 'M', 'L'] }
    ],
    hoodies: [
        { id: 5, name: 'Леоновый рай', price: 4500, img: 'images/bravl.jpg', desc: 'Состав: 70% космос и галактика, 25% чудика в хамелеоне, 5% кринжа и кайфа. Сделано из того самого персонажа, который все хотели выбить.', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 6, name: 'Мир крипера', price: 4900, img: 'images/main.jpg', desc: 'Состав: 95% выживания, 5% динамита сзади. Не рекомендуется надевать на праздники - все могут взорваться от зависти!', sizes: ['M', 'L', 'XL'] },
        { id: 7, name: 'Отдай пэта', price: 5200, img: 'images/roblox.jpg', desc: 'Состав: 85% мольбы, 10% Roblox, 5% плачущего тебя в 3 часа ночи. Сделано из скинов и пэтов, которые тебе никогда не светят.', sizes: ['S', 'M', 'XL'] },
        { id: 8, name: 'Импостер', price: 4700, img: 'images/amon.jpg', desc: 'Состав: 85% предательства, 10% аварийного собрания, 5% <<это не я, это коричневый>>. Пахнет предательством и убитым экипажем.', sizes: ['S', 'M', 'L'] }
    ],
    tshirts: [
        { id: 9, name: 'Капуциновое пузи', price: 1900, img: 'images/obz.jpg', desc: 'Состав: 90% обезьянки, 5% запаха зоопарка. Осторожнее в ней вы можете захотеть бананы и кричать <<УУУ>>.', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 10, name: 'Болотное удовольствие', price: 2200, img: 'images/shrek.jpg', desc: 'Состав: 90%  болотной жижи, 8% крика души, 2% зубов шкрека. Не рекомендуется надевать в библиотеку, театр и на похороны. Может закричать.', sizes: ['M', 'L'] },
        { id: 11, name: 'Внутренее я', price: 2100, img: 'images/baby.jpg', desc: 'Состав: 90% внутренний ребенок,  8% комплексов, 2% ложной надежды, что ты крутой. Не рекомендуется надевать на первое свидание - может понять, что ты так не умеешь.', sizes: ['S', 'M', 'L'] },
        { id: 12, name: 'Свежий лес', price: 2500, img: 'images/tee.jpg', desc: 'Состав: 95% шерсти горили, 4% незбытой мечты, 1% комплексов. Не рекомендуется надевать на пляж: люди могут начать искать в тебе потерянного йети.', sizes: ['S', 'M'] }
    ],
    pants: [
        { id: 13, name: 'Веселый слоник', price: 4200, img: 'images/clon.jpg', desc: 'Состав: 95% цвета твоей ориентации, 5% грустного хобота. Не рекомендуется надеваь в общественном месте - люди могут начать предлагать арахис и бананы.', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 14, name: 'Сквидрад сигма', price: 4800, img: 'images/sigma.jpg', desc: 'Состав: 90% сигма энергия, 20% скул анорексички. Гарантированно заставляет всех вокруг чувствовать себя чрезмерно счастливыми и чувствовать себя не посебе..', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 15, name: 'Конфетка', price: 3500, img: 'images/radyga.jpg', desc: 'Состав: 70% акулы-ковбоя, 30% радужного поноса. Идеально, если хочешь выглядеть ходячей галлюцинации после трех дней без сна.', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 16, name: 'Гипноз', price: 2100, img: 'images/nlo.jpg', desc: 'Состав: 95% инопланетянина, 4% твоей фотки без волос, 1% свободы хоть где-то. Не рекомендуется надевать на экзамен - преподаватель может поставить <<отлично>> и отдать свой кошелёк.', sizes: ['S', 'M', 'L', 'XL'] }
    ],
    shoes: [
        { id: 17, name: 'Подкрадули', price: 8900, img: 'images/rar.jpg', desc: 'Состав: 90% куриных лап, 8%  обгоревшей кожи, 2% ноготочки твоей мечты. Не рекомендуется надевать в зоопарк - орлы могут принять вас за свою и начать брачные танцы.', sizes: ['36', '37', '38', '39', '40', '41', '42'] },
        { id: 18, name: 'Отвал барби', price: 6500, img: 'images/barbi.jpg', desc: 'Состав: 80% голов его бывших, 15% разбитых детских мечт, 5% пластика. Не рекомендуется надевать на детские праздники - дети могут не правильно понять.', sizes: ['36', '37', '38', '39', '40'] },
        { id: 19, name: 'Банановое блаженство', price: 11200, img: 'images/banana.jpg', desc: 'Состав: 85% банановой кожуры украденой в магазине, 10% тропического вайба, 5% чего-то. При длительной носки возможен эфект скольжения.', sizes: ['38', '39', '40', '41', '42', '43', '44', '45', '46'] },
        { id: 20, name: 'Бархатные тяги', price: 2900, img: 'images/pup.jpg', desc: 'Состав: 90% бархатной грусти, 8% лучших пинков, 2% розовой депрессии. Не рекомендуеться надевать на встречи где можно случано прописать пинок. Иначе кому то будет приятно.', sizes: ['37', '38', '39', '40'] }
    ]
};

//Глобальные переменные
let cart = JSON.parse(localStorage.getItem('swagaCart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentCategory = 'jackets';
let selectedSize = null;

// Элементы DOM
// получаем элементы только после загрузки DOM
let productsContainer, categoryBtns, cartBtn, accountBtn, contactsBtn, 
    cartCountSpan, cartModal, accountModal, contactsModal, productModal;

// Загрузка при старте
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен');
    
    // Инициализируем элементы DOM
    productsContainer = document.getElementById('products-container');
    categoryBtns = document.querySelectorAll('.category-btn');
    cartBtn = document.getElementById('cart-btn');
    accountBtn = document.getElementById('account-btn');
    contactsBtn = document.getElementById('contacts-btn');
    cartCountSpan = document.getElementById('cart-count');
    cartModal = document.getElementById('cart-modal');
    accountModal = document.getElementById('account-modal');
    contactsModal = document.getElementById('contacts-modal');
    productModal = document.getElementById('product-modal');
    
    // Загружаем пользователя
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            console.log('Пользователь загружен:', currentUser.email);
        } catch (e) {
            console.error('Ошибка загрузки пользователя:', e);
            currentUser = null;
        }
    }
    
    // Загружаем список пользователей
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
        try {
            users = JSON.parse(savedUsers);
        } catch (e) {
            console.error('Ошибка загрузки users:', e);
            users = [];
        }
    }
    
    // Загружаем корзину
    const savedCart = localStorage.getItem('swagaCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Ошибка загрузки корзины:', e);
            cart = [];
        }
    }
    
    // Инициализируем всё
    if (productsContainer) {
        renderProducts(currentCategory);
    }
    
    updateCart();
    initAuth();
    setupEventListeners();
    
    // Запускаем галерею, если мы на странице галереи
    if (window.location.pathname.includes('gallery.html')) {
        initGallery();
    }
});

// Настройка обработчиков
function setupEventListeners() {
    // Переключение категорий
    if (categoryBtns) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.category;
                renderProducts(currentCategory);
            });
        });
    }
    
    // Открытие модалок
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (cartModal) {
                renderCartItems();
                cartModal.style.display = 'block';
            }
        });
    }
    
    if (accountBtn) {
        accountBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (accountModal) {
                accountModal.style.display = 'block';
            }
        });
    }
    
    if (contactsBtn) {
        contactsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (contactsModal) {
                contactsModal.style.display = 'block';
            }
        });
    }
    
    // Закрытие модалок
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            if (productModal) productModal.style.display = 'none';
            if (cartModal) cartModal.style.display = 'none';
            if (accountModal) accountModal.style.display = 'none';
            if (contactsModal) contactsModal.style.display = 'none';
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === productModal) productModal.style.display = 'none';
        if (e.target === cartModal) cartModal.style.display = 'none';
        if (e.target === accountModal) accountModal.style.display = 'none';
        if (e.target === contactsModal) contactsModal.style.display = 'none';
    });
    
    // Обработка формы контактов
    document.querySelectorAll('#contacts-feedback-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
            form.reset();
        });
    });
    
    // Обработка оформления заказа
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Корзина пуста');
                return;
            }

            if (!currentUser) {
                showNotification('Необходимо войти в аккаунт');
                if (accountModal) accountModal.style.display = 'block';
                return;
            }

            const order = {
                id: Date.now(),
                items: [...cart],
                total: cart.reduce((sum, item) => sum + item.price, 0),
                date: new Date().toLocaleString()
            };

            currentUser.orders = currentUser.orders || [];
            currentUser.orders.push(order);
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem('users', JSON.stringify(users));
            }

            cart = [];
            updateCart();
            if (cartModal) cartModal.style.display = 'none';
            
            showNotification('Заказ оформлен! Спасибо за покупку!');
        });
    }
}

// Отображение товаров
function renderProducts(category) {
    if (!productsContainer) {
        productsContainer = document.getElementById('products-container');
        if (!productsContainer) return;
    }
    
    const productList = products[category] || [];
    productsContainer.innerHTML = '';
    
    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">${product.price.toLocaleString()} ₽</p>
            </div>
            <div class="card-actions">
                <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i> В корзину</button>
                <button class="view-details" data-id="${product.id}"><i class="fas fa-eye"></i> Подробнее</button>
            </div>
        `;
        productsContainer.appendChild(card);
    });

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(e.currentTarget.dataset.id);
            addToCart(id);
        });
    });

    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(e.currentTarget.dataset.id);
            openProductModal(id);
        });
    });
}

// Корзина
function addToCart(productId) {
    let product = null;
    for (let cat in products) {
        const found = products[cat].find(p => p.id === productId);
        if (found) { 
            product = { ...found }; 
            break; 
        }
    }
    
    if (product) {
        cart.push(product);
        updateCart();
        showNotification(`${product.name} добавлен в корзину!`);
    }
}

function removeFromCart(index) {
    const removed = cart[index];
    cart.splice(index, 1);
    updateCart();
    showNotification(`${removed.name} удален из корзины`);
}

function updateCart() {
    localStorage.setItem('swagaCart', JSON.stringify(cart));
    if (cartCountSpan) {
        cartCountSpan.textContent = cart.length;
    }

    if (cartModal && cartModal.style.display === 'block') {
        renderCartItems();
    }
}

function renderCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total-price');
    
    if (!cartItemsDiv || !cartTotalSpan) return;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">Корзина пуста</p>';
        cartTotalSpan.textContent = '0';
        return;
    }

    let html = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">${item.price.toLocaleString()} ₽</span>
                </div>
                <button class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></button>
            </div>
        `;
    });
    
    cartItemsDiv.innerHTML = html;
    cartTotalSpan.textContent = total.toLocaleString();

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            removeFromCart(index);
        });
    });
}

// Модалка товаров
function openProductModal(id) {
    let product = null;
    for (let cat in products) {
        const found = products[cat].find(p => p.id === id);
        if (found) { 
            product = { ...found }; 
            break; 
        }
    }
    if (!product) return;

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');
    const sizesContainer = document.getElementById('modal-sizes-container');
    
    if (modalImg) modalImg.src = product.img;
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalPrice) modalPrice.textContent = `${product.price.toLocaleString()} ₽`;
    if (modalDesc) modalDesc.textContent = product.desc;
    
    if (sizesContainer) {
        sizesContainer.innerHTML = '';
        product.sizes.forEach(size => {
            const sizeBtn = document.createElement('button');
            sizeBtn.className = 'size-btn';
            sizeBtn.textContent = size;
            sizeBtn.onclick = () => {
                document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
                sizeBtn.classList.add('selected');
                selectedSize = size;
            };
            sizesContainer.appendChild(sizeBtn);
        });
    }

    const addBtn = productModal?.querySelector('.add-to-cart-modal');
    if (addBtn) {
        addBtn.onclick = () => {
            if (!selectedSize) {
                showNotification('Пожалуйста, выберите размер');
                return;
            }
            addToCart(product.id);
            if (productModal) productModal.style.display = 'none';
            selectedSize = null;
        };
    }

    if (productModal) productModal.style.display = 'block';
}

// Уведомления
function showNotification(message) {
    // Удаляем предыдущее уведомление
    const oldNotification = document.querySelector('.notification');
    if (oldNotification) {
        oldNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Авторизация
function initAuth() {
    console.log('initAuth вызван');
    
    // Получаем элементы
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const logoutBtn = document.getElementById('logout-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Обновляем отображение профиля
    updateProfileView();
    
    // Обработка входа
    if (loginForm) {
        // Удаляем старые обработчики
        const newLoginForm = loginForm.cloneNode(true);
        loginForm.parentNode.replaceChild(newLoginForm, loginForm);
        
        newLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            
            if (!emailInput || !passwordInput) return;
            
            const email = emailInput.value;
            const password = passwordInput.value;
            
            if (!email || !password) {
                showNotification('Заполните все поля');
                return;
            }
            
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                showNotification(`Добро пожаловать, ${user.name}!`);
                updateProfileView();
                
                if (accountModal) accountModal.style.display = 'none';
            } else {
                showNotification('Неверный email или пароль');
            }
        });
    }
    
    // Обработка регистрации
    if (registerForm) {
        const newRegisterForm = registerForm.cloneNode(true);
        registerForm.parentNode.replaceChild(newRegisterForm, registerForm);
        
        newRegisterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('register-name');
            const emailInput = document.getElementById('register-email');
            const passwordInput = document.getElementById('register-password');
            const confirmInput = document.getElementById('register-confirm');
            
            if (!nameInput || !emailInput || !passwordInput || !confirmInput) return;
            
            const name = nameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;
            const confirm = confirmInput.value;
            
            if (!name || !email || !password || !confirm) {
                showNotification('Заполните все поля');
                return;
            }
            
            if (password !== confirm) {
                showNotification('Пароли не совпадают');
                return;
            }
            
            if (password.length < 6) {
                showNotification('Пароль должен быть минимум 6 символов');
                return;
            }
            
            if (users.some(u => u.email === email)) {
                showNotification('Пользователь с таким email уже существует');
                return;
            }
            
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                password: password,
                orders: []
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            showNotification('Регистрация успешна!');
            updateProfileView();
            
            if (accountModal) accountModal.style.display = 'none';
            newRegisterForm.reset();
        });
    }
    
    // Обработка выхода
    if (logoutBtn) {
        const newLogoutBtn = logoutBtn.cloneNode(true);
        logoutBtn.parentNode.replaceChild(newLogoutBtn, logoutBtn);
        
        newLogoutBtn.addEventListener('click', () => {
            currentUser = null;
            localStorage.removeItem('currentUser');
            updateProfileView();
            showNotification('Вы вышли из аккаунта');
            
            // Переключаем на вкладку входа
            const loginTab = document.getElementById('login-tab');
            const registerTab = document.getElementById('register-tab');
            const profileTab = document.getElementById('profile-tab');
            
            if (loginTab) loginTab.classList.add('active');
            if (registerTab) registerTab.classList.remove('active');
            if (profileTab) profileTab.classList.remove('active');
            
            tabBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.tab === 'login') {
                    btn.classList.add('active');
                }
            });
        });
    }
    
    // Переключение вкладок
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            newBtn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => {
                    b.classList.remove('active');
                });
                newBtn.classList.add('active');
                
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                const tabId = newBtn.dataset.tab + '-tab';
                const targetTab = document.getElementById(tabId);
                if (targetTab) targetTab.classList.add('active');
            });
        });
    }
}

// Обновление профиля
function updateProfileView() {
    console.log('updateProfileView вызван, currentUser:', currentUser);
    
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const profileTab = document.getElementById('profile-tab');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    if (!loginTab || !registerTab || !profileTab) {
        console.log('Элементы профиля не найдены на этой странице');
        return;
    }
    
    if (currentUser) {
        // Показываем профиль
        loginTab.classList.remove('active');
        registerTab.classList.remove('active');
        profileTab.classList.add('active');
        
        const profileName = document.getElementById('profile-name');
        const profileEmail = document.getElementById('profile-email');
        const orderHistory = document.getElementById('order-history');
        
        if (profileName) profileName.textContent = currentUser.name;
        if (profileEmail) profileEmail.textContent = currentUser.email;
        
        if (orderHistory) {
            if (currentUser.orders && currentUser.orders.length > 0) {
                orderHistory.innerHTML = currentUser.orders.map(order => `
                    <div class="order-item">
                        <strong>Заказ #${order.id}</strong><br>
                        Сумма: ${order.total} ₽<br>
                        Дата: ${order.date || new Date().toLocaleString()}
                    </div>
                `).join('');
            } else {
                orderHistory.innerHTML = '<p>У вас пока нет заказов</p>';
            }
        }
        
        tabBtns.forEach(btn => {
            btn.style.display = 'none';
        });
    } else {
        // Показываем вход
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        profileTab.classList.remove('active');
        
        tabBtns.forEach(btn => {
            btn.style.display = 'block';
        });
    }
}

// Галерея
function initGallery() {
    console.log('initGallery вызван');
    
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const allPhotosGrid = document.getElementById('all-photos');
    const popularPhotosGrid = document.getElementById('popular-photos');
    
    if (!galleryTabs.length || !allPhotosGrid || !popularPhotosGrid) {
        console.log('Элементы галереи не найдены');
        return;
    }
    
    // Данные о лайках из localStorage
    let likes = JSON.parse(localStorage.getItem('photoLikes')) || {};
    
    // Инициализация лайков
    document.querySelectorAll('.photo-item').forEach(item => {
        const likeBtn = item.querySelector('.like-btn');
        const likesSpan = item.querySelector('.photo-likes');
        if (!likeBtn || !likesSpan) return;
        
        const photoId = likeBtn.dataset.id;
        if (photoId && likes[photoId]) {
            likeBtn.classList.add('liked');
            likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
            const baseLikes = parseInt(item.dataset.likes) || 0;
            const totalLikes = baseLikes + likes[photoId];
            likesSpan.innerHTML = `<i class="fas fa-heart"></i> ${totalLikes}`;
        }
    });
    
    // Переключение между разделами
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            galleryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            document.querySelectorAll('.photo-grid').forEach(grid => {
                grid.classList.remove('active');
            });
            
            if (tab.dataset.tab === 'all') {
                allPhotosGrid.classList.add('active');
            } else if (tab.dataset.tab === 'popular') {
                showPopularPhotos();
            }
        });
    });
    
    // Обработка лайков
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const photoId = btn.dataset.id;
            const photoItem = btn.closest('.photo-item');
            const likesSpan = photoItem.querySelector('.photo-likes');
             
            if (!photoId || !likesSpan) return;
            
            const baseLikes = parseInt(photoItem.dataset.likes) || 0;
            
            if (btn.classList.contains('liked')) {
                // Убираем лайк
                btn.classList.remove('liked');
                btn.innerHTML = '<i class="far fa-heart"></i>';
                likes[photoId] = (likes[photoId] || 0) - 1;
                if (likes[photoId] <= 0) delete likes[photoId];
                
                const totalLikes = baseLikes + (likes[photoId] || 0);
                likesSpan.innerHTML = `<i class="fas fa-heart"></i> ${totalLikes}`;
            } else {
                // Ставим лайк
                btn.classList.add('liked');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
                likes[photoId] = (likes[photoId] || 0) + 1;
                
                const totalLikes = baseLikes + likes[photoId];
                likesSpan.innerHTML = `<i class="fas fa-heart"></i> ${totalLikes}`;
            }
            
            // Сохраняем в localStorage
            localStorage.setItem('photoLikes', JSON.stringify(likes));
            
            // Анимация
            btn.style.transform = 'scale(1.3)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // показ популярных фото
    function showPopularPhotos() {
        // Получаем все фото
        const allPhotos = Array.from(document.querySelectorAll('#all-photos .photo-item'));
        
        // Сортируем по популярности
        const photosWithLikes = allPhotos.map(photo => {
            const photoId = photo.querySelector('.like-btn')?.dataset.id;
            const baseLikes = parseInt(photo.dataset.likes) || 0;
            const userLikes = photoId ? (likes[photoId] || 0) : 0;
            const totalLikes = baseLikes + userLikes;
            
            return {
                element: photo.cloneNode(true),
                totalLikes: totalLikes,
                id: photoId
                

            };
        });
        
        // Сортируем по убыванию лайков
        photosWithLikes.sort((a, b) => b.totalLikes - a.totalLikes);
        
        // топ 4 популярных фото
        const popularPhotos = photosWithLikes.slice(0, 4);
        
        // Очищаем и заполняем сетку популярных
        popularPhotosGrid.innerHTML = '';
        
        if (popularPhotos.length === 0) {
            popularPhotosGrid.innerHTML = `
                <div class="no-photos">
                    <i class="fas fa-heart-broken"></i>
                    <p>Пока нет популярных фото</p>
                    <p>Поставьте лайки, чтобы они появились здесь!</p>
                </div>
            `;
        } else {
            popularPhotos.forEach(photo => {
                const photoElement = photo.element;
                const likeBtn = photoElement.querySelector('.like-btn');
                
                if (likeBtn) {
                    likeBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const photoId = likeBtn.dataset.id;
                        const likesSpan = photoElement.querySelector('.photo-likes');
                        
                        if (likeBtn.classList.contains('liked')) {
                            likeBtn.classList.remove('liked');
                            likeBtn.innerHTML = '<i class="far fa-heart"></i>';
                            likes[photoId] = (likes[photoId] || 0) - 1;
                            if (likes[photoId] <= 0) delete likes[photoId];
                            
                            const baseLikes = parseInt(photoElement.dataset.likes);
                            const totalLikes = baseLikes + (likes[photoId] || 0);
                            likesSpan.innerHTML = `<i class="fas fa-heart"></i> ${totalLikes}`;
                        } else {
                            likeBtn.classList.add('liked');
                            likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
                            likes[photoId] = (likes[photoId] || 0) + 1;
                            
                            const baseLikes = parseInt(photoElement.dataset.likes);
                            const totalLikes = baseLikes + likes[photoId];
                            likesSpan.innerHTML = `<i class="fas fa-heart"></i> ${totalLikes}`;
                        }
                        
                        localStorage.setItem('photoLikes', JSON.stringify(likes));
                    });
                }
                
                popularPhotosGrid.appendChild(photoElement);
            });
        }
        
        popularPhotosGrid.classList.add('active');
    }
}
document.head.appendChild(style);