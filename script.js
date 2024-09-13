let zoomLevel = 1; // Начальный уровень увеличения

// Функция для открытия модального окна
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = 'flex'; // Устанавливаем flex для центрирования
    modalImage.src = imageSrc;
    modalImage.style.transform = `scale(${zoomLevel})`; // Устанавливаем начальный масштаб
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    zoomLevel = 1; // Сбрасываем уровень увеличения при закрытии модального окна
}

// Функция для показа вкладки
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

// Функция для добавления товара в корзину
function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    // Создаем новый элемент списка для товара
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - ${price}$`;
    
    // Добавляем элемент в список корзины
    cartItems.appendChild(listItem);
    
    // Обновляем итоговую сумму
    let currentTotal = parseFloat(totalPrice.textContent.replace('Итоговая сумма: ', '').replace('$', ''));
    currentTotal += price;
    totalPrice.textContent = `Итоговая сумма: ${currentTotal}$`;
}

// Функция для очистки корзины
function clearCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    // Очищаем список товаров
    cartItems.innerHTML = '';
    
    // Сбрасываем итоговую сумму
    totalPrice.textContent = 'Итоговая сумма: 0$';
}

// Функция для увеличения и уменьшения фотографии при помощи колёсика мыши
function handleZoom(event) {
    const modalImage = document.getElementById('modal-image');
    const delta = Math.sign(event.deltaY); // Определяем направление прокрутки колёсика мыши

    if (delta > 0) {
        zoomLevel = Math.max(1, zoomLevel - 0.1); // Уменьшаем масштаб, но не меньше 1
    } else {
        zoomLevel += 0.1; // Увеличиваем масштаб
    }

    modalImage.style.transform = `scale(${zoomLevel})`; // Применяем новый масштаб
}

// Добавляем обработчик событий для увеличения фотографии
document.getElementById('modal-image').addEventListener('wheel', handleZoom);

// Показ первой вкладки по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    showTab('products');
});

// Добавляем обработчик события клика на фон модального окна для его закрытия
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Функция для открытия модального окна покупки
function openPurchaseModal() {
    const purchaseModal = document.getElementById('purchase-modal');
    purchaseModal.style.display = 'flex'; // Показываем модальное окно
}

// Функция для закрытия модального окна покупки
function closePurchaseModal() {
    const purchaseModal = document.getElementById('purchase-modal');
    purchaseModal.style.display = 'none'; // Закрываем модальное окно
}
    